import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

function ButtonDesyV2({ isEnabled, children, buttonText, onPress }) {
  const [pressed, setPressed] = useState(false)

  const pressHandler = () => {
    setPressed(true)
    onPress()
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={pressHandler}
        // onPressOut={releaseHandler}
        // android_ripple={{ color: 'transparent' }}
      >
        {isEnabled ? (
          <LinearGradient
            colors={['#03A4FF', '#1C8AC8']}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.buttonGradient}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>{buttonText}</Text>
              {children}
            </View>
          </LinearGradient>
        ) : (
          <View
            style={[
              styles.buttonGradient,
              styles.buttonPressed,
              styles.buttonContent,
            ]}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
            {children}
          </View>
        )}
      </Pressable>
    </View>
  )
}

export default ButtonDesyV2

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonGradient: {
    borderRadius: 28,
  },
  buttonPressed: {
    backgroundColor: '#B2B2B2',
  },
  buttonContent: {
    flexDirection: 'row',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
})
