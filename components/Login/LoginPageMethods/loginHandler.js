import { validateEmail } from '../../Utility/validEmail'
import { userLogin } from '../../store/context/DataService'

const loginHandler = async (
  credentials,
  setCredentials,
  statusHandle,
  setStatusHandle,
  setCurrentUser,
  navigation
) => {
  if (credentials.email === '' || credentials.password === '') {
    setStatusHandle({
      message: 'Please fill in all the fields',
      showSnackbar: true,
      loading: false, // Ensure loading is false in this case
    })
    return // Stop execution if fields are empty
  } else if (!validateEmail(credentials.email)) {
    setStatusHandle({
      message: 'Invalid email address',
      showSnackbar: true,
      loading: false, // Ensure loading is false in this case
    })
    return // Stop execution if email is invalid
  }

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
        // loading: false,
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

export default loginHandler
