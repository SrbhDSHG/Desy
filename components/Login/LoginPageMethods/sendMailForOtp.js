import React from 'react'
import { validateEmail } from '../../Utility/validEmail'
import { resetPassOtp } from '../../store/context/DataService'

const sendMailForOtp = async (statusHandle, setStatusHandle, credentials) => {
  if (!credentials.email) {
    setStatusHandle((prevStatusHandle) => ({
      ...prevStatusHandle,
      message: 'Please enter your email',
      showSnackbar: true,
    }))
    return
  }

  if (!validateEmail(credentials.email)) {
    setStatusHandle((prevStatusHandle) => ({
      ...prevStatusHandle,
      message: 'Invalid email address',
      showSnackbar: true,
    }))
    return
  }

  setStatusHandle({ ...statusHandle, loading: true })

  try {
    const response = await resetPassOtp(credentials.email)
    console.log('response from sendEmailHandler', response)

    if (response.message === 'OTP sent successfully') {
      setStatusHandle((prevStatusHandle) => ({
        ...prevStatusHandle,
        message: 'OTP sent to your email',
        loading: false,
        showSnackbar: true,
        otpSent: true,
      }))
    }
  } catch (error) {
    console.log('Error in sending email', error)
    setStatusHandle((prevStatusHandle) => ({
      ...prevStatusHandle,
      message: error.message || 'Failed to send OTP',
      loading: false,
      showSnackbar: true,
    }))
  }
}

export default sendMailForOtp
