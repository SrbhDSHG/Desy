import React, { useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Container from '../UI/Container'
import HeadingCreator from '../UI/HeadingCreator'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import { useData } from '../store/context/DataContext'
import { userLogin } from '../store/context/DataService'
import { Snackbar } from 'react-native-paper'

function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const { logged, setCurrentUser } = useData()
  const [statusHandle, setStatusHandle] = useState({
    message: '',
    loading: false,
    showSnackbar: false,
  })

  // Function to update email and password
  const handleInputChange = (name, value) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }))
    console.log('Updated credentials:', name, value)
  }

  const loginHandler = async () => {
    setStatusHandle({
      ...statusHandle,
      loading: true,
    })

    try {
      // Pass email and password to userLogin function
      const response = await userLogin(credentials.email, credentials.password)
      if (response.status === 200) {
        setCredentials({ email: '', password: '' })
        logged(true)
        setCurrentUser(response.user) // Assuming the response has a user object
        setStatusHandle({
          message: 'Logged in successfully',
          loading: false,
          showSnackbar: true,
        })
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

  return (
    <Container>
      <HeadingCreator
        headerText={'Enter your credentials'}
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
      />
      <TextInput
        style={styles.input}
        value={credentials.password}
        secureTextEntry={true} // Secure text entry for password
        autoCapitalize="none"
        onChangeText={(text) => handleInputChange('password', text)}
        placeholder="Password"
        placeholderTextColor="#B2B2B2"
      />
      <ButtonDesyV2
        buttonText={'Log in'}
        isEnabled={Boolean(credentials.email && credentials.password)}
        onPress={loginHandler}
      />
      <Snackbar
        visible={statusHandle.showSnackbar}
        onDismiss={() =>
          setStatusHandle({
            ...statusHandle,
            showSnackbar: false,
          })
        }
        duration={3000} // Adjust the duration as needed
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
    width: '80%',
    height: 40,
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
})
