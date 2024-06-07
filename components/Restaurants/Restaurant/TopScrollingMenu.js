import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

function TopScrollingMenu({ restauOptionHeader }) {
  const [selectedOption, setSelectedOption] = useState(null)

  const handlePress = (index) => {
    setSelectedOption(index)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {restauOptionHeader.map((option, index) => (
          <Pressable
            key={index}
            onPress={() => handlePress(index)}
            style={[
              styles.optionContainer,
              {
                borderBottomColor:
                  selectedOption === index ? '#03A4FF' : 'transparent',
                borderBottomWidth: selectedOption === index ? 2 : 0,
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
