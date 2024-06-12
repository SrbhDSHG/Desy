import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { FontAwesome5, AntDesign } from '@expo/vector-icons'

function LinearGradientCompnt({ photoName }) {
  return (
    <LinearGradient
      colors={['rgba(0, 0, 0, 0.03)', 'rgba(0, 0, 0, 0.6)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.5 }}
      style={styles.gradient}
    >
      <View style={styles.textAndIcon}>
        <Text style={styles.text}>{photoName}</Text>
        <View style={styles.iconContainer}>
          <View style={styles.iconBox}>
            <FontAwesome5 name="fire" size={14} color="white" />
          </View>
          <View style={styles.iconBox}>
            <AntDesign name="hearto" size={14} color="white" />
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default LinearGradientCompnt

const styles = StyleSheet.create({
  iconBox: {
    backgroundColor: '#959595B3',
    marginLeft: 8,
    borderRadius: 6,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
  },
  textAndIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
})
