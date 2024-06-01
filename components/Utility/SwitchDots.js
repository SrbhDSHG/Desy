import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

function SwitchDots({ active, onPress, index }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <View style={[styles.dot, index === 0 && styles.activeDot]} />
          <View style={[styles.dot, index === 1 && styles.activeDot]} />
          <View style={[styles.dot, index === 2 && styles.activeDot]} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SwitchDots

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 5,
    marginVertical: 15,
    opacity: 0.5, // Initial opacity for inactive dots
  },
  activeDot: {
    opacity: 1, // Opacity for active dot
    backgroundColor: '#03A4FF',
  },
})
