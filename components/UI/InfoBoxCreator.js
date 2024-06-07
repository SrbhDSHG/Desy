import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import {
  Foundation,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

function InfoBoxCreator({ info }) {
  const onPressHandler = () => {
    onPress(action)
  }
  return (
    <Pressable onPress={onPressHandler}>
      <View style={styles.container}>
        <View style={styles.box}>
          {/* {info.icon} */}
          <Text style={styles.text}>{info.text}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default InfoBoxCreator

const styles = StyleSheet.create({
  container: {
    width: 66,
    height: 26,
    borderRadius: 40,
    borderColor: 'rgba(3, 164, 255, 1)',
    borderWidth: 1,
    backgroundColor: ' rgba(233, 247, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // width: '100%',
  },
  box: {
    width: 45,
    height: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#03A4FF',
    fontSize: 12,
    width: '100%',
    fontFamily: 'Mulish-Medium',
    textAlign: 'center',
    // padding: 10,
  },
})
