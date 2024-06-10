import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function ScoreCreator({
  score = '8.8',
  scoredBy = '2k',
  headerText = 'Rec Score',
  bodyText = 'How much we think, you would like to it',
}) {
  return (
    <View key={headerText} style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.circleContainer}>
          <View style={styles.bcircle}>
            <Text style={styles.bcircleText}>{score}</Text>
          </View>
          <View style={styles.scircle}>
            <Text style={styles.scircleText}>{scoredBy}</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>{headerText}</Text>
          <Text style={styles.bodyText}>{bodyText}</Text>
        </View>
      </View>
    </View>
  )
}

export default ScoreCreator

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start', // Align contents to the left
    borderColor: '#03A4FF',
    borderWidth: 1,
    borderRadius: 10,
    width: 165,
    height: 69,
    marginHorizontal: 2,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleContainer: {
    position: 'relative',
    marginLeft: 5,
  },
  bcircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: '#5BE0EB',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9F7FF',
    position: 'relative',
  },
  bcircleText: {
    fontSize: 16,
    fontFamily: 'Mulish-Bold',
  },
  scircle: {
    width: 19,
    height: 19,
    borderRadius: 9.5,
    backgroundColor: '#03A4FF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -3,
    right: -3,
  },
  scircleText: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Mulish-SemiBold',
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
    paddingRight: 5, // Add right padding to move text a bit to the right
  },
  headerText: {
    fontSize: 16,
    fontFamily: 'Mulish-Bold',
  },
  bodyText: {
    fontSize: 10,
    fontFamily: 'Mulish-Regular',
  },
})
