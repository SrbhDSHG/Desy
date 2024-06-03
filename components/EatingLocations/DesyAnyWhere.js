import React from 'react'
import { Text, View } from 'react-native'
import HeadingCreator from '../UI/HeadingCreator'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import CircleWithGradient from '../Utility/CircleWithGradient'
import CardContainer from '../UI/CardContainer'
import * as Location from 'expo-location'

const bodyTextLines = [
  'Desy needs location permission in',
  'order to provide maps and',
  ' recommendations',
]

function DesyAnyWhere({ navigation }) {
  const buttonPressHanlder = () => {
    console.log('Allow location')
    navigationPressHandler()
  }
  const navigationPressHandler = () => {
    setTimeout(() => {
      navigation.navigate('Cuisine Not Like')
    }, 300)
  }
  return (
    <View style={styles.container}>
      <CardContainer>
        <CircleWithGradient
          IconComponent={
            <Ionicons name="location-outline" size={100} color="#5BE0EB" />
          }
        />
        <View style={styles.textsContainer}>
          <Text style={styles.headerText}>Use Desy Anywhere</Text>
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

      <View style={styles.buttonContainer}>
        <ButtonDesyV2
          buttonText={'Allow location'}
          isEnabled={true}
          onPress={buttonPressHanlder}
        />
      </View>

      <Text onPress={navigationPressHandler} style={styles.notNowText}>
        Not Now
      </Text>
    </View>
  )
}

export default DesyAnyWhere
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  textsContainer: {
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    marginVertical: 5,
    fontSize: 30,
    fontWeight: '700',
  },
  bodyText: {
    textAlign: 'justify',
    paddingHorizontal: 20,
  },
  cardWrapper: {
    borderRadius: 10,
    overflow: 'hidden', // Clip child views to the bounds of this View
    elevation: 1,
    marginTop: 20,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: 300,
    // borderRadius: 10, // Same as the wrapper for consistency
    backgroundColor: '#EFF9FF',
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
