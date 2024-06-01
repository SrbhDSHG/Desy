import React from 'react'
import { StyleSheet, View } from 'react-native'

function CardContainer({ children }) {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardContainer}>{children}</View>
    </View>
  )
}

export default CardContainer

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 10,
    overflow: 'hidden', // Clip child views to the bounds of this View
    elevation: 0.3,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 380,
    width: 300,
    // borderRadius: 10, // Same as the wrapper for consistency
    backgroundColor: '#EFF9FF',
  },
})
