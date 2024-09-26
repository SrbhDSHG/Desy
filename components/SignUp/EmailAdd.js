import React, { useState, useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Alert,
  Text,
} from 'react-native'
import validator from 'validator'
import HeadingCreator from '../UI/HeadingCreator'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import { useData } from '../store/context/DataContext'

function EmailAdd({ navigation }) {
  const { email, setEmail, emailverification, firstName, lastName } = useData()
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleEmailValueChange = (text) => {
    setEmail(text)
    setErrorMessage(null) // Clear error message when user types
  }

  const onPressHandler = async () => {
    if (!email) {
      setErrorMessage('Please enter your email!')
      return
    }
    if (!validator.isEmail(email)) {
      setErrorMessage('Please enter a valid email address')
      return
    }

    setLoading(true)
    try {
      const response = await emailverification(email, firstName, lastName)
      if (response.data.status === 'success') {
        // OTP sent, navigate to OTP verification screen
        navigation.navigate('EmailVerifyOtp')
      }
    } catch (error) {
      console.log('Error response:', error.response)
      if (error.response && error.response.data) {
        // Backend error messages
        setErrorMessage(error.response.data.message)
      } else {
        // Network or other errors
        setErrorMessage('Network error. Please try again later.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <HeadingCreator
        IconComp={
          <MaterialCommunityIcons
            name="email-plus-outline"
            size={40}
            color="rgba(3, 164, 255, 1)"
          />
        }
        headerText="Add your email address"
        bodyText="Email address will keep us connected"
      />

      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={handleEmailValueChange}
            placeholder="Email address"
            placeholderTextColor="#B2B2B2"
          />
        </View>
        {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <ButtonDesyV2
          buttonText="Continue"
          onPress={onPressHandler}
          isEnabled={validator.isEmail(email)}
        />
      </View>
      <Modal transparent={true} animationType="fade" visible={loading}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator size="large" color="#03A4FF" />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default EmailAdd

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
  },
  inputsContainer: {
    marginVertical: 20,
    width: '85%',
    paddingHorizontal: 15,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#B2B2B2',
    color: '#B2B2B2',
    paddingHorizontal: 5,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 14,
  },
  buttonContainer: {
    marginTop: 80,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
