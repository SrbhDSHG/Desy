import React from 'react'
import { Text, View } from 'react-native'
import HeadingCreator from '../UI/HeadingCreator'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import CircleWithGradient from '../Utility/CircleWithGradient'
import CardContainer from '../UI/CardContainer'

const bodyTextLines = [
  'Allow access to contacts to see which',
  ' of your friends are on Desy!',
]

function FindYourFriends({ navigation }) {
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
          <Text style={styles.headerText}>Find Your Freinds</Text>
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
        <ButtonDesyV2 buttonText={'Allow Contacts'} isEnabled={true} />
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
    // justifyContent: 'center',
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
