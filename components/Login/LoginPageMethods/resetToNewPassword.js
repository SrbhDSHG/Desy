import { useData } from '../../store/context/DataContext'
import { fetchResetToNewPassword } from '../../store/context/DataService'

const resetToNewPassword = async (
  credentials,
  setStatusHandle,
  statusHandle,
  setCurrentUser,
  navigation
) => {
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

export default resetToNewPassword
