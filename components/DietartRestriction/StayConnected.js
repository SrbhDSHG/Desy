import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import CircleWithGradient from '../Utility/CircleWithGradient'
import CardContainer from '../UI/CardContainer'
import { useData } from '../store/context/DataContext'

const bodyTextLines =
  'We’ll send you notifications when your friends interact with you, when new friends join, and when we have exclusive restaurant info to share!'

function StayConnected({ navigation }) {
  const { createUser, setCurrentUser } = useData()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const onPressHandler = async () => {
    console.log('Notifications allowed')
    navigation.navigate('Top10 Restaurants')
  }
  const notNowPressHandler = () => {
    navigation.navigate('Top10 Restaurants')
  }

  return (
    <View style={styles.container}>
      <CardContainer>
        <CircleWithGradient
          IconComponent={
            <Ionicons name="notifications-outline" size={100} color="#5BE0EB" />
          }
        />
        <View style={styles.textsContainer}>
          <Text style={styles.headerText}>Stay connected</Text>
          <Text style={styles.bodyText}>{bodyTextLines}</Text>
        </View>
      </CardContainer>
      <View style={styles.buttonContainer}>
        <ButtonDesyV2
          buttonText={'Allow Notifications'}
          isEnabled={true}
          onPress={onPressHandler}
        />
      </View>
      <Text style={styles.notNowText} onPress={notNowPressHandler}>
        Not Now
      </Text>

      <Modal
        transparent={true}
        animationType="none"
        visible={loading}
        onRequestClose={() => setLoading(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator size="large" color="#03A4FF" />
            <Text style={styles.modalText}>Creating user...</Text>
          </View>
        </View>
      </Modal>

      {message && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      )}
    </View>
  )
}

export default StayConnected

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textsContainer: {
    marginVertical: 30,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    marginVertical: 5,
    fontSize: 26,
    fontWeight: '700',
  },
  bodyText: {
    textAlign: 'center',
    paddingHorizontal: 10,
    fontSize: 16,
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
  modalText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
  },
  messageContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
  },
  messageText: {
    fontSize: 16,
    color: '#00796b',
  },
})
