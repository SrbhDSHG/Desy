import { useEffect, useState } from 'react'
import { displayText } from '../Utility/StaticData/DisplayTextArray'
import { StyleSheet, Text, View } from 'react-native'
import SwitchDots from '../Utility/SwitchDots'

function HomeScreen({ navigation }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % displayText.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  const currentTextDisplay = displayText[currentTextIndex]
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{currentTextDisplay.headerText}</Text>
        <Text style={styles.bodyText}>{currentTextDisplay.bodyText}</Text>
      </View>
      <SwitchDots index={currentTextIndex} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '700',
    marginVertical: 10,
    fontFamily: 'Mulish-Regular',
  },
  bodyText: {
    fontFamily: 'Mulish-Medium',
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
    paddingHorizontal: 25,
  },
})
