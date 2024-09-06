import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View } from 'react-native'

function LinearGradientShadow({ children }) {
  return (
    <View>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.5 }}
        style={styles.gradient}
      >
        {children}
      </LinearGradient>
    </View>
  )
}

export default LinearGradientShadow

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    gradient: {
      //   justifyContent: 'flex-end',
      borderRadius: 8,
      //   paddingHorizontal: 10,
      //   paddingVertical: 10,
    },
  },
})
