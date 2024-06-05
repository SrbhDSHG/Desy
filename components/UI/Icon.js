import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

function Icon({ iconFamily, icon, size, color, onPress }) {
  return (
    <>
      <Pressable
        style={({ pressed }) => [styles.shareIcon, pressed && styles.pressed]}
        onPress={onPress}
      >
        <Feather name={icon[0]} size={size} color={color} />
      </Pressable>
      {iconFamily === 'AntDesign' && (
        <Pressable>
          <AntDesign name={icon[1]} size={size} color={color} />
        </Pressable>
      )}
    </>
  )
}

export default Icon

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
