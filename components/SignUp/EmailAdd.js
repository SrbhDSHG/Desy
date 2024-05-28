import React, { useState, useEffect } from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Alert,
} from 'react-native'
import validator from 'validator'
import HeadingCreator from '../UI/HeadingCreator'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import { useData } from '../store/context/DataContext'

function EmailAdd({ navigation }) {
  const { email, setEmail, emailVerified, emailverification } = useData()
  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const handleEmailValueChange = (text) => {
    setEmail(text)
    console.log('email value set', email)
  }
  const onPressHandler = async () => {
    if (!email) {
      setShowAlert(true)
      return
    }
    setLoading(true)
    try {
      const response = await emailverification(email)
      console.log('response from email verification', response)
      if (response.data.email === email) {
        navigation.navigate('email verify')
      }
    } catch (error) {
      console.log('Error during email verification:', error.message)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (showAlert) {
      Alert.alert('Please enter your email!', '', [
        { text: 'Ok', onPress: () => setShowAlert(false) },
      ])
    }
  }, [showAlert])

  return (
    <View style={styles.container}>
      <HeadingCreator
        IconComp={
          <MaterialCommunityIcons
            name="email-plus-outline"
            size={40}
            color="rgba(3, 164, 255, 1)"
          />
        }
        headerText="Add your email address"
        bodyText="Email address will keep us connected"
      />

      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={handleEmailValueChange}
            placeholder="Email address"
            placeholderTextColor="#B2B2B2"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonDesyV2
          buttonText="Continue"
          onPress={onPressHandler}
          isEnabled={validator.isEmail(email)}
        />
      </View>
      <Modal transparent={true} animationType="fade" visible={loading}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator size="large" color="#03A4FF" />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default EmailAdd

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
  },
  inputsContainer: {
    marginVertical: 20,
    width: '85%',
    paddingHorizontal: 15,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#B2B2B2',
    color: '#B2B2B2',
    paddingHorizontal: 5,
  },

  buttonContainer: {
    marginTop: 80,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
