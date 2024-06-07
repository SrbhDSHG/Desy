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
    <Pressable
      onPress={onPressHandler}
      style={({ pressed }) => [
        styles.superContainer,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.iconContainer}>{info.icon}</View>
          <Text key={info.text} style={styles.text}>
            {info.text}
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

export default InfoBoxCreator

const styles = StyleSheet.create({
  superContainer: {
    margin: 5,
  },
  container: {
    width: 'auto',
    height: 26,
    borderRadius: 40,
    borderColor: 'rgba(3, 164, 255, 1)',
    borderWidth: 1,
    backgroundColor: 'rgba(233, 247, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // marginHorizontal: 5,
    // width: '100%',
  },
  box: {
    // width: 45,
    height: 15,
    width: 'auto',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    // marginHorizontal: 5,
  },
  iconContainer: {
    marginLeft: 5,
  },
  text: {
    color: '#03A4FF',
    fontSize: 12,
    fontFamily: 'Mulish-Medium',
    marginHorizontal: 7,
  },
  pressed: {
    opacity: 0.3,
  },
})
