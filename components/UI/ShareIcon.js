import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

function ShareIcon({ icon, size, color, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.shareIcon, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Feather name={icon} size={size} color={color} />
    </Pressable>
  )
}

export default ShareIcon

const styles = StyleSheet.create({
  shareIcon: {
    padding: 8,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
})
