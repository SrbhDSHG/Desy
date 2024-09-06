import React, { useState } from 'react'
import {
  StyleSheet,
  TextInput,
  Modal,
  View,
  ActivityIndicator,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
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

  //function send email for otp
  const sendEmailHandler = async () => {
    console.log('Sending mainl, Previous status', statusHandle)
    setStatusHandle({ ...statusHandle, loading: true })
    try {
      const response = await resetPassOtp(credentials.email)
      console.log('response from sendEmailHandler', response)
      if (response.message === 'OTP sent successfully') {
        setStatusHandle((prevStatusHandle) => ({
          ...prevStatusHandle,
          message: 'OTP sent to your email',
          loading: false, // Hide loading
          showSnackbar: true,
          otpSent: true,
        }))
        // Reset password form
      }
    } catch (error) {
      console.log('Error in sending email', error)
      setStatusHandle((prevStatusHandle) => ({
        ...prevStatusHandle,
        message: 'Failed to send OTP',
        loading: false, // Hide loading on failure
        showSnackbar: true,
      }))
    }
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

  //verify sent otp
  const verifyOtpHandler = async () => {
    console.log('Verifying opt, Previous status', statusHandle)
    setStatusHandle({ ...statusHandle, loading: true })
    try {
      const response = await fetchOtpVerify(credentials.email, credentials.otp)
      console.log('response from verifyOtpHandler', response.data)
      if (response.data.message === 'OTP Verified') {
        setStatusHandle((prevStatusHandle) => ({
          ...prevStatusHandle,
          message: 'OTP verified successfully',
          loading: false,
          showSnackbar: true,
          otpVerified: true,
        }))
      }
    } catch (e) {
      console.log('Error in verifying otp', e)
    }
  }

  // Password reset
  const passwordResetHandler = () => {
    setPasswordReset(true)
  }

  const loginHandler = async () => {
    setStatusHandle({
      ...statusHandle,
      loading: true,
    })
    try {
      // Pass email and password to userLogin function
      const response = await userLogin(credentials.email, credentials.password)
      if (response.status === 'success') {
        setCredentials({ email: '', password: '' })
        setCurrentUser(response.user) // Assuming the response has a user object
        setStatusHandle({
          ...statusHandle,
          message: 'Logged in successfully',
          loading: false,
          showSnackbar: true,
        })
        //navigate to find freinds
        setTimeout(() => {
          setStatusHandle({
            ...statusHandle,
            message: 'Lets find your friends',
            loading: true,
            showSnackbar: true,
          })
          navigation.navigate('Find Your Friends')
        }, 2000)
      }
    } catch (e) {
      console.log('Error during login:', e)
      setStatusHandle({
        message: 'Login failed. Please try again.',
        loading: false,
        showSnackbar: true,
      })
    }
  }

  const resetToNewPassword = async () => {
    setStatusHandle({
      ...statusHandle,
      loading: true,
    })
    try {
      const response = await fetchResetToNewPassword(
        credentials.email,
        credentials.password
      )
      console.log('response from resetToNewPassword', response)
      if (response.message === 'Password reset successfully') {
        setStatusHandle((prevStatusHandle) => ({
          ...prevStatusHandle,
          message: 'Password reset successfully',
          loading: false,
          showSnackbar: true,
        }))
        console.log('Password reset successfully, user info', response.user)
        setCurrentUser(response.user)
        // setPasswordReset(false)
        setTimeout(() => {
          setStatusHandle({
            ...statusHandle,
            message: 'Lets find your friends',
            loading: true,
            showSnackbar: true,
          })
          navigation.navigate('Find Your Friends')
        }, 2000)
      }
    } catch (e) {
      console.log('Error in resetting password', e)
      setStatusHandle((prevStatusHandle) => ({
        ...prevStatusHandle,
        message: 'Failed to reset password',
        loading: false, // Hide loading on failure
        showSnackbar: true,
      }))
    }
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
        <TextInput
          style={styles.input}
          value={credentials.password}
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) => handleInputChange('password', text)}
          placeholder="Password"
          placeholderTextColor="#B2B2B2"
          onFocus={() => handleFocus('password')}
        />
      )}
      {statusHandle.otpVerified && (
        <TextInput
          style={styles.input}
          value={credentials.passwordConfirm}
          secureTextEntry={true} // Secure text entry for password
          autoCapitalize="none"
          onChangeText={(text) => handleInputChange('passwordConfirm', text)}
          placeholder="Password confirmation"
          placeholderTextColor="#B2B2B2"
          onFocus={() => handleFocus('passwordConfirm')} // Validate when focus is on password input
        />
      )}

      {!passwordReset ? (
        <>
          <ButtonDesyV2
            buttonText={'Log in'}
            isEnabled={Boolean(credentials.email && credentials.password)}
            onPress={loginHandler}
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
              onPress={sendEmailHandler}
            />
          ) : !statusHandle.otpVerified ? (
            <ButtonDesyV2
              buttonText={'Verify OTP '}
              isEnabled={
                Boolean(credentials.otp) && credentials.otp.length === 6
              }
              onPress={verifyOtpHandler}
            />
          ) : (
            <ButtonDesyV2
              buttonText={'Reset Password'}
              isEnabled={Boolean(credentials.email)}
              onPress={resetToNewPassword}
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
        duration={1000} // Adjust the duration as needed
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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay background
  },
})
