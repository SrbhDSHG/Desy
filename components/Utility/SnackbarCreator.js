import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome6 } from '@expo/vector-icons'
import HeadingCreator from '../UI/HeadingCreator'

function SnackbarCreator({ lists, onPressMethod }) {
  const [snackbarPressed, setSnackbarPresssed] = useState(false)
  const [item, setItem] = useState('')

  const pressHandler = (id) => {
    onPressMethod(id)
    setSnackbarPresssed(!snackbarPressed)
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => pressHandler(lists.id)}
        style={styles.snackbarContainer}
      >
        <View
          style={
            snackbarPressed
              ? [styles.snackbar, snackbarPressed && styles.pressed]
              : styles.snackbar
          }
        >
          <Text style={styles.text}>{lists.name}</Text>
          <View style={styles.iconContainer}>
            {snackbarPressed ? (
              <FontAwesome6 name="check" size={24} color="white" />
            ) : (
              <AntDesign name="right" size={24} color="#1C8AC8" />
            )}
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default SnackbarCreator

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    // paddingHorizontal: 5,
    // width: '100%'
    // marginVertical: 1,
  },
  snackbarContainer: {
    overflow: 'hidden',
    borderRadius: 10,
    elevation: 2,
    width: '100%',
  },
  snackbar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    width: 300,
    paddingHorizontal: 20,
    backgroundColor: '#ECF4F9',
    width: '100%',
  },
  pressed: {
    backgroundColor: '#03A4FF',
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    paddingRight: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Mulish-Regular',
  },
})
