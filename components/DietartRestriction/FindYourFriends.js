import React, { useState } from 'react'
import { Text, View, Alert, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Contacts from 'expo-contacts'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import CircleWithGradient from '../Utility/CircleWithGradient'
import CardContainer from '../UI/CardContainer'
import axios from 'axios'

const bodyTextLines = [
  'Allow access to contacts to see which',
  'of your friends are on Desy!',
]

function FindYourFriends({ navigation }) {
  const [contactsAllowed, setContactsAllowed] = useState(false)

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

        console.log(
          'Formatted contacts for finding friends:',
          formattedContacts
        )

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
    try {
      const response = await axios.post(
        'http://192.168.238.168:8080/api/v1/users/find-contacts',
        { contacts }
      )
      if (response.data.results.length > 0) {
        // Navigate to another screen with matched friends
        navigation.navigate('FriendsList', { friends: response.data.data })
      } else {
        Alert.alert('No friends found on Desy')
      }
    } catch (error) {
      Alert.alert('Error finding friends', error.message)
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
          isEnabled={true}
          onPress={pressToAllowContacts}
        />
      </View>

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
})
