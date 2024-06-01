import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import ButtonDesyV2 from '../Utility/ButtonDesy'
// const photo = require('../../assets/useImage.png')
function YouAreIn({ photoSource, navigation }) {
  const onPressHandler = () => {
    setTimeout(() => {
      navigation.navigate('Eating Most At')
    }, 300)
  }
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.cardContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>You’re in!</Text>
          </View>
          <View style={styles.photoContainer}>
            <Image style={styles.photo} source={{ uri: photoSource }} />
          </View>
          <View style={styles.bodyTextContainer}>
            <Text style={styles.bodyText}>
              Judy thinks you have a great taste!
            </Text>
            <Text style={[styles.bodyText, styles.span]}>WTF is Judy?</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonDesyV2
          buttonText="Get started"
          isEnabled={true}
          onPress={onPressHandler}
        >
          <View style={styles.arrowIconContainer}>
            <AntDesign name="arrowright" size={24} color="white" />
          </View>
        </ButtonDesyV2>
      </View>
    </View>
  )
}

export default YouAreIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardWrapper: {
    borderRadius: 10,
    overflow: 'hidden', // Clip child views to the bounds of this View
    elevation: 9,
    marginTop: 40,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: 300,
    // borderRadius: 10, // Same as the wrapper for consistency
    backgroundColor: 'white',
  },
  photoContainer: {
    height: 200,
    width: 180,
    // borderRadius: 100,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    height: 180,
    width: 180,
    borderRadius: 100,
  },
  headerTextContainer: {
    marginVertical: 30,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
  },
  bodyTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '400',
  },
  span: {
    color: '#03A4FF',
  },
  buttonContainer: {
    marginTop: 80,
  },
  arrowIconContainer: {
    marginLeft: 5,
  },
})
