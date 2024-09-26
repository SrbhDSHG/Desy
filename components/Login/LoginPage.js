import React, { useState } from 'react'
import {
  StyleSheet,
  TextInput,
  Modal,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'
import Container from '../UI/Container'
import HeadingCreator from '../UI/HeadingCreator'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import { useData } from '../store/context/DataContext'
import {
  fetchOtpVerify,
  fetchResetToNewPassword,
  resetPassOtp,
  userLogin,
} from '../store/context/DataService'
import { Snackbar } from 'react-native-paper'
import { validateEmail } from '../Utility/validEmail'
import sendMailForOtp from './LoginPageMethods/sendMailForOtp'
import verifyOtpHandler from './LoginPageMethods/verifySentOtp'
import resetToNewPassword from './LoginPageMethods/resetToNewPassword'
import loginHandler from './LoginPageMethods/loginHandler'

function LoginPage({ navigation }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    otp: '',
  })
  const { setCurrentUser } = useData()
  const [passwordReset, setPasswordReset] = useState(false)
  const [focusedField, setFocusedField] = useState('email')
  const [hidepassword, setChangeHidePassword] = useState(true)
  const [hideConfpassword, setChangeHideConfPassword] = useState(true)
  const [statusHandle, setStatusHandle] = useState({
    message: '',
    loading: false,
    showSnackbar: false,
    otpSent: false,
    otpVerified: false,
  })

  // Function to update email and password
  const handleInputChange = (name, value) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }))
    console.log('Updated credentials:', name, value)
  }

  // clear the  credentials selectively
  const clearCredentials = () => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      email: '',
      password: '',
      passwordConfirm: '',
      otp: '',
    }))
  }

  // Immediate validation when switching focus
  const handleFocus = (name) => {
    setFocusedField(name)

    if (name === 'password') {
      // Validate email when switching focus to password input
      if (!validateEmail(credentials.email)) {
        setStatusHandle((prevStatusHandle) => ({
          ...prevStatusHandle,
          message: 'Invalid email address',
          showSnackbar: true,
        }))
      } else {
        setStatusHandle((prevStatusHandle) => ({
          ...prevStatusHandle,
          message: '',
          showSnackbar: false,
        }))
      }
    }
  }

  // Password reset
  const passwordResetHandler = () => {
    //reset password state
    if (!credentials.email) {
      setStatusHandle({
        message: 'Please enter your email address',
        showSnackbar: true,
        loading: false, // Ensure loading is false in this case
      })
      return // Stop execution if email is empty
    }
    if (!validateEmail(credentials.email)) {
      setStatusHandle((prevStatusHandle) => ({
        ...prevStatusHandle,
        message: 'Invalid email address',
        showSnackbar: true,
      }))
      return
    }
    setPasswordReset(true)
    setCredentials({
      password: '',
      passwordConfirm: '',
    })
  }

  return (
    <Container>
      <HeadingCreator
        headerText={
          !passwordReset
            ? 'Enter your credentials'
            : !statusHandle.otpSent
            ? 'Send mail to receive OTP'
            : !statusHandle.otpVerified
            ? 'Verify OTP'
            : 'Enter new password '
        }
        IconComp={
          <AntDesign name="login" size={40} color="rgba(3, 164, 255, 1)" />
        }
      />
      <TextInput
        style={styles.input}
        value={credentials.email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => handleInputChange('email', text)}
        placeholder="Email address"
        placeholderTextColor="#B2B2B2"
        onBlur={() => handleFocus('email')} // Validate when losing focus
      />
      {statusHandle.otpSent && !statusHandle.otpVerified && (
        <TextInput
          style={styles.input}
          value={credentials.otp}
          keyboardType="number-pad"
          secureTextEntry={false} // Secure text entry for password
          autoCapitalize="none"
          onChangeText={(text) => handleInputChange('otp', text)}
          placeholder="Enter OTP sent to your email"
          placeholderTextColor="#B2B2B2"
          editable={statusHandle.otpSent} // Make input field editable based on otpSent
          // onFocus={() => handleFocus('otp')} // Validate when focus is on password input
        />
      )}
      {(!passwordReset || statusHandle.otpVerified) && (
        <View style={styles.passInputContainer}>
          <TextInput
            style={styles.input}
            value={credentials.password}
            secureTextEntry={hidepassword}
            autoCapitalize="none"
            onChangeText={(text) => handleInputChange('password', text)}
            placeholder="Password"
            placeholderTextColor="#B2B2B2"
            onFocus={() => handleFocus('password')}
          />
          {/* <View style={styles.eyeContainer}> */}
          <TouchableOpacity
            onPress={() => setChangeHidePassword((prevState) => !prevState)}
            style={styles.eyeContainer}
          >
            <Feather
              name={hidepassword ? 'eye-off' : 'eye'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
          {/* </View> */}
        </View>
      )}
      {statusHandle.otpVerified && (
        <View style={styles.passInputContainer}>
          <TextInput
            style={styles.input}
            value={credentials.passwordConfirm}
            secureTextEntry={hideConfpassword} // Secure text entry for password
            autoCapitalize="none"
            onChangeText={(text) => handleInputChange('passwordConfirm', text)}
            placeholder="Password confirmation"
            placeholderTextColor="#B2B2B2"
            onFocus={() => handleFocus('passwordConfirm')} // Validate when focus is on password input
          />
          <TouchableOpacity
            onPress={() => setChangeHideConfPassword((prevState) => !prevState)}
            style={styles.eyeContainer}
          >
            <Feather
              name={hidepassword ? 'eye-off' : 'eye'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      )}

      {!passwordReset ? (
        <>
          <ButtonDesyV2
            buttonText={'Log in'}
            isEnabled={Boolean(credentials.email && credentials.password)}
            // onPress={loginHandler}
            onPress={async () =>
              await loginHandler(
                credentials,
                setCredentials,
                statusHandle,
                setStatusHandle,
                setCurrentUser,
                navigation
              )
            }
          />

          <ButtonDesyV2
            buttonText={'Forgot Password'}
            isEnabled={Boolean(credentials.email)}
            onPress={passwordResetHandler}
          />
        </>
      ) : (
        <>
          {!statusHandle.otpSent ? (
            <ButtonDesyV2
              buttonText={'Send mail '}
              isEnabled={Boolean(credentials.email)}
              // onPress={sendEmailHandler}
              onPress={async () => {
                await sendMailForOtp(statusHandle, setStatusHandle, credentials)
              }}
            />
          ) : !statusHandle.otpVerified ? (
            <ButtonDesyV2
              buttonText={'Verify OTP '}
              isEnabled={
                Boolean(credentials.otp) && credentials.otp.length === 6
              }
              // onPress={verifyOtpHandler}
              onPress={async () => {
                await verifyOtpHandler(
                  statusHandle,
                  setStatusHandle,
                  credentials
                )
              }}
            />
          ) : (
            <ButtonDesyV2
              buttonText={'Reset Password'}
              isEnabled={Boolean(credentials.email)}
              // onPress={resetToNewPassword}
              onPress={async () => {
                await resetToNewPassword(
                  credentials,
                  setStatusHandle,
                  statusHandle,
                  setCurrentUser,
                  navigation
                )
              }}
            />
          )}
        </>
      )}

      {/* Modal for loading spinner */}
      <Modal visible={statusHandle.loading} transparent={true}>
        <View style={styles.modalBackground}>
          <ActivityIndicator size="large" color="#03A4FF" />
        </View>
      </Modal>
      <Snackbar
        visible={statusHandle.showSnackbar}
        onDismiss={() =>
          setStatusHandle({
            ...statusHandle,
            showSnackbar: false,
          })
        }
        duration={2000} // Adjust the duration as needed
        action={{
          label: 'OK',
          onPress: () => {
            // Do something if needed
          },
        }}
      >
        {statusHandle.message}
      </Snackbar>
    </Container>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  input: {
    width: '95%',
    height: 50,
    borderColor: '#B2B2B2',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#333', // Text color for better readability
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  passInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  eyeContainer: {
    position: 'absolute',
    right: 25,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay background
  },
})
