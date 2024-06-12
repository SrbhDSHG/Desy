import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

function TopScrollingMenu({ restauOptionHeader }) {
  const [selectedOption, setSelectedOption] = useState(0)

  const handlePress = (index) => {
    setSelectedOption(index)
  }
  // console.log(`restauOptionHeader ${restauOptionHeader[0].text}`)
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {restauOptionHeader.map((option, index) => (
          <Pressable
            key={option.id || index}
            onPress={() => handlePress(index)}
            style={[
              styles.optionContainer,
              {
                borderBottomColor:
                  selectedOption === index ? '#03A4FF' : 'transparent',
                borderBottomWidth: selectedOption === index ? 1 : 0,
              },
            ]}
          >
            <Text
              style={[
                styles.optionText,
                { color: selectedOption === index ? '#03A4FF' : 'black' },
              ]}
            >
              {option.text}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default TopScrollingMenu

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  scrollContentContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  optionContainer: {
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'Mulish-SemiBold',
  },
})
