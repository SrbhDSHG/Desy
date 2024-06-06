import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'

const Icon = ({ iconFamily, icon, size, color, onPress }) => {
  let IconComponent

  // Determine which icon set to use based on the iconFamily prop
  switch (iconFamily) {
    case 'Feather':
      IconComponent = Feather
      break
    case 'AntDesign':
      IconComponent = AntDesign
      break
    default:
      IconComponent = AntDesign // Default to AntDesign if not specified
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.iconContainer, pressed && styles.pressed]}
      onPress={onPress}
    >
      <IconComponent name={icon} size={size} color={color} />
    </Pressable>
  )
}

export default Icon

const styles = StyleSheet.create({
  iconContainer: {
    padding: 8,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
})
