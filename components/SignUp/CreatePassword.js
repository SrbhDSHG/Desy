import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
// import Desy from '../HomeScreen/Desy'
import ButtonDesy from '../Utility/ButtonDesy'
import { Feather } from '@expo/vector-icons'
import Container from '../UI/Container'
import { useData } from '../store/context/DataContext'

function CreatePassword({ navigation }) {
  const { password, setPassword } = useData()
  // const [password, setPassword] = useState('')
  const [hidepassword, setChangeHidePassword] = useState(true)
  const [validPasswordLength, setValidPasswordLength] = useState(false)
  const [validPasswordCharacter, setValidPasswordCharacter] = useState(false)
  console.log('hidepassword', hidepassword)
  const handlePasswordChange = (text) => {
    setPassword(text)
    const { isValidLength, isValidCharacter } = validatePassword(text)
    setValidPasswordLength(isValidLength)
    setValidPasswordCharacter(isValidCharacter)
  }
  const validatePassword = (password) => {
    const isValidLength = password.length >= 7 && password.length <= 19
    const containsSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    const containsNumbers = /\d/.test(password)
    const containsLetters = /[a-zA-Z]/.test(password)
    const isValidCharacter =
      containsSpecialChars && containsNumbers && containsLetters
    return { isValidLength, isValidCharacter }
  }
  const onPressHandler = () => {
    setTimeout(() => {
      navigation.navigate('Addpic')
    }, 300)
  }

  return (
    <Container>
      <View style={styles.iconContainer}>
        <FontAwesome5
          style={styles.icon}
          name="key"
          size={40}
          color="rgba(3, 164, 255, 1)"
        />
      </View>
      <View>
        <Text style={styles.headerText}>Create Password</Text>
        <Text style={styles.passInfo}>Your Password must have:</Text>
        <Text
          style={validPasswordLength ? styles.bodyTextValid : styles.bodyText}
        >
          ✓ 8 to 20 characters
        </Text>
        <Text
          style={
            validPasswordCharacter ? styles.bodyTextValid : styles.bodyText
          }
        >
          ✓ Letters, numbers and special characters
        </Text>
      </View>
      <View style={styles.passInputContainer}>
        <TextInput
          style={styles.passInput}
          value={password}
          textContentType="password"
          maxLength={20}
          onChangeText={handlePasswordChange}
          placeholder="Enter strong password"
          secureTextEntry={hidepassword}
          placeholderTextColor="#B2B2B2"
        />
        <View style={styles.eyeContainer}>
          <TouchableOpacity
            onPress={() => setChangeHidePassword((prevState) => !prevState)}
          >
            <Feather
              name={hidepassword ? 'eye-off' : 'eye'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonDesy
          onPress={onPressHandler}
          buttonText="Submit"
          isEnabled={validPasswordLength && validPasswordCharacter}
        />
      </View>
    </Container>
  )
}

export default CreatePassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#E9F7FF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  headerTextContainer: {
    marginVertical: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
  },
  passInfo: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6E6E6E',
    marginTop: 10,
  },
  bodyTextContainer: {
    marginVertical: 10,
  },
  bodyText: {
    fontSize: 14,
    fontWeight: '400',
  },
  bodyTextValid: {
    color: '#1C8AC8',
  },
  passInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#B2B2B2',
  },
  passInput: {
    height: 40,
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 5,
    width: '90%',
  },
  eyeContainer: {},
  buttonContainer: {
    marginTop: 80,
  },
})
