import React from 'react'
import * as Contacts from 'expo-contacts'

export const fetchContacts = async () => {
  const { status } = await Contacts.requestPermissionsAsync()
  if (status === 'granted') {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
    })

    if (data.length > 0) {
      // Send contacts to the backend for matching
      findFriends(data)
    } else {
      Alert.alert('No contacts found')
    }
  } else {
    Alert.alert('Permission to access contacts was denied')
  }
}
