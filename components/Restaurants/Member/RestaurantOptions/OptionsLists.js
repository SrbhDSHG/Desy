import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native-web'

function OptionsLists({ icon, headerText, subText }) {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { color: color }]}>
        {icon}
        <View style={styles.textsContainer}>
          <Text style={styles.headerText}>{headerText}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>
      </View>
    </View>
  )
}

export default OptionsLists

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconContainer: {
    width: 40,
    height: 40,
  },
  textsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  headerText: {
    fontFamily: 'Mulish',
    fontSize: 14,
  },
  subText: {
    fontFamily: 'Mulish',
    fontSize: 12,
    color: '#6E6E6E',
  },
})
