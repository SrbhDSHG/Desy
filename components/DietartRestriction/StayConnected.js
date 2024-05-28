import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import CircleWithGradient from '../Utility/CircleWithGradient'
import CardContainer from '../UI/CardContainer'

// const bodyTextLines = [
//   'We’ll send you notifications when',
//   'your friends interact with you,',
//   'when new friends join, and',
//   'when we have exclusive restaurant info',
//   'to share!',
// ]
const bodyTextLines =
  'We’ll send you notifications when your friends interact with you, when new friends join, and when we have exclusive restaurant info to share!'

function StayConnected({ navigation }) {
  const onPressHandler = () => {
    setTimeout(() => {
      navigation.navigate('Top10 Restaurants')
    }, 300)
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

      <Text style={styles.notNowText} onPress={onPressHandler}>
        Not Now
      </Text>
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
  cardWrapper: {
    borderRadius: 10,
    overflow: 'hidden', // Clip child views to the bounds of this View
    elevation: 0.3,
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
