import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import HeadingCreator from '../UI/HeadingCreator'
import Container from '../UI/Container'
import { useData } from '../store/context/DataContext'

function NameInput({ navigation }) {
  const { firstName, setFirstName, lastName, setLastName } = useData()
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  const handleFirstNameChange = (text) => {
    setFirstName(text)
  }
  const handleLastNameChange = (text) => {
    setLastName(text)
  }

  const onPressHandler = () => {
    setTimeout(() => {
      navigation.navigate('Email Add')
    }, 300)
  }
  return (
    <Container>
      {/* <HeadingCreator
        IconComp={
          <AntDesign name="user" size={40} color="rgba(3, 164, 255, 1)" />
        }
        headerText={'What’s your name?'}
        bodyText={'This is how your friends will see you!'}
      /> */}

      <View style={styles.iconContainer}>
        <AntDesign name="user" size={40} color="rgba(3, 164, 255, 1)" />
      </View>
      <View>
        <Text style={styles.headerText}>What’s your name?</Text>
        <Text style={styles.bodyText}>
          This is how your friends will see you!
        </Text>
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={handleFirstNameChange}
            placeholder="First name"
            placeholderTextColor="#B2B2B2"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={handleLastNameChange}
            placeholder="Last name"
            placeholderTextColor="#B2B2B2"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonDesyV2
          buttonText="Continue"
          onPress={onPressHandler}
          isEnabled={firstName.length > 1 && lastName.length > 1}
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
  bodyText: {
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 80,
  },
})
