import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'

function OptionsLists({ icon, headerText, subText, color }) {
  return (
    <View style={styles.superContainer}>
      <View style={styles.container}>
        <View style={[styles.iconContainer, { backgroundColor: color }]}>
          {icon}
        </View>
        <View style={styles.textsContainer}>
          <Text style={styles.headerText}>{headerText}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>
      </View>
      <AntDesign
        name="right"
        size={16}
        color="black"
        style={styles.arrowIcon}
      />
    </View>
  )
}

export default OptionsLists

const styles = StyleSheet.create({
  superContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginVertical: 5,
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textsContainer: {
    flexDirection: 'column', // Stack text vertically
    paddingHorizontal: 10,
    flex: 1, // Allow the container to shrink and wrap text
  },
  headerText: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    color: '#212121',
  },
  subText: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    color: '#6E6E6E',
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
})
