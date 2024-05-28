import { ImageBackground, StyleSheet, View } from 'react-native'

import React from 'react'

export default function StartScreenMap() {
  return (
    // <View style={styles.imageContainer}>
    <ImageBackground
      style={styles.image}
      source={require('../assets/images/map-desy-1.png')}
    />
    // </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '80%',
    resizeMode: 'cover',
    backgroundColor: 'green',
  },
  image: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
