import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import HeadingCreator from '../UI/HeadingCreator'
import Container from '../UI/Container'
import { useData } from '../store/context/DataContext'

function NameInput({ navigation }) {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [hidepassword, setChangeHidePassword] = useState(true)
  const [validPasswordLength, setValidPasswordLength] = useState(false)
  const [validPasswordCharacter, setValidPasswordCharacter] = useState(false)

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
      navigation.navigate('')
    }, 300)
  }
  return (
    <Container>
      <HeadingCreator
        IconComp={
          <MaterialIcons
            name="password"
            size={40}
            color="rgba(3, 164, 255, 1)"
          />
        }
        headerText={'Password Reset?'}
        bodyText={'Please enter a new passowrd and then confirm it!'}
      />

      <View style={styles.inputsContainer}>
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
      </View>
      <View style={styles.buttonContainer}>
        <ButtonDesyV2
          buttonText="Continue"
          onPress={onPressHandler}
          isEnabled={password.length > 1 && confirmPassword.length > 1}
        />
      </View>
    </Container>
  )
}

export default NameInput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#E9F7FF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  // headerTextContainer: {
  //   marginVertical: 10,
  // },
  headerText: {
    marginVertical: 5,
    fontSize: 30,
    fontWeight: '700',
  },
  inputsContainer: {
    marginVertical: 20,
    width: '80%',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#B2B2B2',
    color: '#B2B2B2',
  },
  input: {
    height: 40,
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
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
  eyeContainer: {},
  buttonContainer: {
    marginTop: 80,
  },
  bodyText: {
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 80,
  },
})
