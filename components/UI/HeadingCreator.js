import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function HeadingCreator({ IconComp, headerText, bodyText, customStyles = {} }) {
  return (
    <View
      style={StyleSheet.flatten([styles.container, customStyles.container])}
    >
      <View
        style={StyleSheet.flatten([
          styles.iconContainer,
          customStyles.iconContainer,
        ])}
      >
        {IconComp}
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.headerText}>{headerText}</Text>
        <Text style={styles.bodyText}>{bodyText}</Text>
      </View>
    </View>
  )
}
export default HeadingCreator

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#E9F7FF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textsContainer: {
    marginVertical: 5,

    // alignItems: 'flex-start',
  },

  headerText: {
    marginTop: 5,
    fontSize: 30,
    fontFamily: 'Mulish-Bold',
  },
  // bodyTextContainer: {
  //   marginVertical: 5,
  //   textAlign: 'left',
  // },
  bodyText: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Mulish-Regular',
  },
})
