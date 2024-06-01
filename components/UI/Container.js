import React from 'react'
import { StyleSheet, View } from 'react-native'
import HeadingCreator from './HeadingCreator'

function Container({ children }) {
  return <View style={styles.container}>{children}</View>
}

export default Container

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    fontFamily: 'Mulish-Regular',
  },
})
