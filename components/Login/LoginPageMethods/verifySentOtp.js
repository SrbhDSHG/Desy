import { fetchOtpVerify } from '../../store/context/DataService'

const verifyOtpHandler = async (statusHandle, setStatusHandle, credentials) => {
  setStatusHandle({ ...statusHandle, loading: true })

  try {
    const response = await fetchOtpVerify(credentials.email, credentials.otp)
    console.log('response from verifyOtpHandler', response)

    if (response.message === 'OTP Verified') {
      setStatusHandle((prevStatusHandle) => ({
        ...prevStatusHandle,
        message: 'OTP verified successfully',
        loading: false,
        showSnackbar: true,
        otpVerified: true,
      }))
    }
  } catch (error) {
    console.log('Error in verifying OTP:', error)

    // Show error message to the user
    setStatusHandle((prevStatusHandle) => ({
      ...prevStatusHandle,
      message: error.message || 'Failed to verify OTP',
      loading: false,
      showSnackbar: true,
    }))
  }
}

export default verifyOtpHandler
