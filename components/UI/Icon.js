import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

function Icon({ size, color, onPress }) {
  const onPrss = () => {
    onPress()
  }
  return (
    <>
      <Pressable
        style={({ pressed }) => [
          styles.iconContainer,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
      >
        <IconFamily name={icon} size={size} color={color} />
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.iconContainer,
          pressed && styles.pressed,
        ]}
        onPress={onPress}
      >
        <IconFamily name={icon} size={size} color={color} />
      </Pressable>
    </>
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
