import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'

function OptionsLists({
  icon,
  headerText,
  subText,
  color,
  onPress,
  action, // Add this prop
  restaurant,
  rightArrowEnabled = true,
  borderBottomWidth = 1,
  touchOff = false,
}) {
  return (
    <TouchableOpacity
      style={[styles.superContainer, { borderBottomWidth: borderBottomWidth }]}
      onPress={() => onPress(action, restaurant)} // Pass action identifier
      disabled={touchOff}
    >
      <View style={styles.container}>
        <View style={[styles.iconContainer, { backgroundColor: color }]}>
          {icon}
        </View>
        <View style={styles.textsContainer}>
          <Text style={styles.headerText}>{headerText}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>
      </View>
      {rightArrowEnabled && (
        <AntDesign
          name="right"
          size={16}
          color="black"
          style={styles.arrowIcon}
        />
      )}
    </TouchableOpacity>
  )
}

export default OptionsLists

const styles = StyleSheet.create({
  superContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,

    borderBottomColor: '#E0E0E0',
    paddingVertical: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 3,
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
    flexDirection: 'column',
    paddingHorizontal: 10,
    flex: 1,
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
