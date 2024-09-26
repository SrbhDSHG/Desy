import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { FontAwesome5, Feather } from '@expo/vector-icons'
// import Desy from '../HomeScreen/Desy'
import Container from '../UI/Container'
import { useData } from '../store/context/DataContext'

function validPassLength() {
  const { password, setPassword } = useData()
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
  return (
    <>
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
    </>
  )
}

export default validPassLength
