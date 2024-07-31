import React, { useState, useRef } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import Container from '../UI/Container'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import { useData } from '../store/context/DataContext'
import HeadingCreator from '../UI/HeadingCreator'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import CircleWithGradient from '../Utility/CircleWithGradient'

const EmailVerify = ({ navigation }) => {
  const { email, otpverification, setEmailVerified } = useData()
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [message, setMessage] = useState('')
  const inputs = useRef([])

  const handleChangeText = (text, index) => {
    const newOtp = [...otp]
    newOtp[index] = text
    setOtp(newOtp)

    // Move focus to the next input field
    if (text && index < 5) {
      inputs.current[index + 1].focus()
    }
  }

  const handleKeyPress = (event, index) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      index > 0 &&
      otp[index] === ''
    ) {
      inputs.current[index - 1].focus()
    }
  }

  const resetOtpInputs = () => {
    setOtp(['', '', '', '', '', ''])
    inputs.current[0].focus()
  }

  const onPressHandle = async () => {
    setMessage('')
    try {
      const response = await otpverification(email, otp.join(''))
      console.log('response of otp verification', response)
      if (response.message === 'OTP Verified') {
        setEmailVerified(true)
        setMessage('OTP Verified successfully!')
        setTimeout(() => {
          navigation.navigate('UserName')
        }, 2000) // Navigate after 2 seconds
      } else {
        setMessage('Invalid OTP. Please try again.')
        resetOtpInputs()
      }
    } catch (error) {
      console.log('Error during otp verification:', error.response.data)
      setMessage(
        error.response.data.message || 'An error occurred. Please try again.'
      )
      resetOtpInputs()
    }
  }

  return (
    <Container>
      <CircleWithGradient
        IconComponent={
          <MaterialCommunityIcons
            name="robot-off-outline"
            size={60}
            color="#5BE0EB"
          />
        }
      />

      <HeadingCreator
        headerText={'Please Enter the OTP'}
        bodyText={
          "We've sent you an OTP to verify your email address. Please enter it below."
        }
        customStyles={{
          iconContainer: {
            backgroundColor: 'transparent',
            width: -80,
            height: -80,
          },
        }}
      />
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(event) => handleKeyPress(event, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(input) => (inputs.current[index] = input)}
          />
        ))}
      </View>
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <ButtonDesyV2
        buttonText={'Enter OTP to verify'}
        isEnabled={otp.length === 6 && otp.every((digit) => digit !== '')}
        onPress={onPressHandle}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#03A4FF',
    borderRadius: 5,
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
})

export default EmailVerify
