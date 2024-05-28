import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View } from 'react-native'

function CircleWithGradient({ IconComponent }) {
  return (
    <LinearGradient colors={['#5BE0EB', '#03A4FF']} style={styles.outerCircle}>
      <View style={styles.innerCircle}>{IconComponent}</View>
    </LinearGradient>
  )
}

export default CircleWithGradient

const styles = StyleSheet.create({
  outerCircle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    // borderWidth: 2, // Thickness of the circle
    // borderColor: 'linear-gradient(180deg, #5BE0EB 0%, #03A4FF 100%)', // Linear gradient border
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  innerCircle: {
    width: 140,
    height: 140,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF9FF',
  },
})
