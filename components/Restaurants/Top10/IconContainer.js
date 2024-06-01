import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

function IconContainer() {
  return (
    <View style={styles.iconContainer}>
      <Pressable>
        <Feather
          name="bookmark"
          size={30}
          color="#03A4FF"
          style={{ marginRight: 5 }}
        />
      </Pressable>
      <Pressable>
        <MaterialIcons name="add-circle-outline" size={30} color="#03A4FF" />
      </Pressable>
    </View>
  )
}

export default IconContainer

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: -5,
  },
})
