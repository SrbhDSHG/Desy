import React, { useState } from 'react'
import {
  Text,
  View,
  Alert,
  StyleSheet,
  ActivityIndicator,
  Modal,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Contacts from 'expo-contacts'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import CircleWithGradient from '../Utility/CircleWithGradient'
import CardContainer from '../UI/CardContainer'
import axios from 'axios'
import { useData } from '../store/context/DataContext'
import { fetchfindFriends, findFriends } from '../store/context/DataService'

const bodyTextLines = [
  'Allow access to contacts to see which',
  'of your friends are on Desy!',
]

function FindYourFriends({ navigation }) {
  const [contactsAllowed, setContactsAllowed] = useState(false)
  const [loading, setLoading] = useState(false) // State for modal visibility
  const { setFriends } = useData()

  const fetchContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync()
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
      })

      if (data.length > 0) {
        // Extract phone numbers and emails
        const formattedContacts = data.map((contact) => ({
          name: contact.name,
          emails: contact.emails
            ? contact.emails.map((email) => email.email)
            : [],
          phoneNumbers: contact.phoneNumbers
            ? contact.phoneNumbers.map((phone) => phone.number)
            : [],
        }))

        // console.log(
        //   'Formatted contacts for finding friends:',
        //   formattedContacts
        // )

        // Send contacts to the backend for matching
        findFriends(formattedContacts)
      } else {
        Alert.alert('No contacts found')
      }
    } else {
      Alert.alert('Permission to access contacts was denied')
    }
  }

  const findFriends = async (contacts) => {
    setLoading(true) // Show modal
    try {
      const response = await fetchfindFriends(contacts)
      // console.log('response after friend search request', response)
      if (response.data.results > 0) {
        // Navigate to another screen with matched friends
        setFriends(response.data.data)

        navigation.navigate('FriendsList', {
          friends: response.data.data,
        })
      } else {
        Alert.alert('No friends found on Desy')
      }
    } catch (error) {
      Alert.alert('Error finding friends', error.message)
    } finally {
      setLoading(false) // Hide modal
    }
  }

  const pressToAllowContacts = () => {
    fetchContacts()
  }

  const onPressHandler = () => {
    setTimeout(() => {
      navigation.navigate('Stay Connected')
    }, 300)
  }

  return (
    <View style={styles.container}>
      <CardContainer>
        <CircleWithGradient
          IconComponent={
            <MaterialCommunityIcons
              name="account-group-outline"
              size={100}
              color="#5BE0EB"
            />
          }
        />
        <View style={styles.textsContainer}>
          <Text style={styles.headerText}>Find Your Friends</Text>
          {bodyTextLines.map((text, index) => (
            <Text
              key={index}
              style={[styles.bodyText, { paddingHorizontal: index * 20 }]}
            >
              {text}
            </Text>
          ))}
        </View>
      </CardContainer>
      <View style={styles.logoGroupContainer}>
        <View style={styles.TextAndLogo}>
          <MaterialCommunityIcons
            name="account-group-outline"
            size={24}
            color="#03A4FF"
          />
          <Text style={styles.textLogo}>See what friends are eating</Text>
        </View>
        <View style={styles.TextAndLogo}>
          <MaterialCommunityIcons
            name="room-service-outline"
            size={24}
            color="#03A4FF"
          />
          <Text style={styles.textLogo}>Plan group dinners</Text>
        </View>
        <View style={styles.TextAndLogo}>
          <MaterialCommunityIcons
            name="hand-heart-outline"
            size={24}
            color="#03A4FF"
          />
          <Text style={styles.textLogo}>Share recommendations</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonDesyV2
          buttonText={'Allow Contacts'}
          isEnabled={!loading} // Disable button when loading
          onPress={pressToAllowContacts}
        />
      </View>

      <Modal
        transparent={true}
        animationType="fade"
        visible={loading}
        onRequestClose={() => setLoading(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <ActivityIndicator size="large" color="#03A4FF" />
            <Text style={styles.loadingText}>Finding Friends...</Text>
          </View>
        </View>
      </Modal>

      <Text onPress={onPressHandler} style={styles.notNowText}>
        Not Now
      </Text>
    </View>
  )
}

export default FindYourFriends

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textsContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoGroupContainer: {
    marginTop: 30,
    left: -30,
  },
  TextAndLogo: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  textLogo: {
    marginLeft: 20,
    fontSize: 16,
    color: '#03A4FF',
  },
  headerText: {
    marginVertical: 5,
    fontSize: 26,
    fontWeight: '700',
  },
  bodyText: {
    textAlign: 'justify',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 40,
  },
  notNowText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6E6E6E',
    marginVertical: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark transparent background
  },
  modalContainer: {
    width: 200,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#03A4FF',
  },
})
