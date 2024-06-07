import React from 'react'
import { useData } from '../../store/context/DataContext'
import { StyleSheet, Text, View } from 'react-native'

function FooterIcons() {
  const { restauFooterIcon } = useData()
  const firstTwo = restauFooterIcon.slice(0, 2)
  const lastTwo = restauFooterIcon.slice(-2)

  return (
    <View style={styles.container}>
      <View style={[styles.iconWithText]}>
        {firstTwo.map((item) => (
          <View key={item.id} style={styles.footerIcon}>
            {item.icon}
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.middleIconContainer}>
        <View style={styles.footerIcon}>
          <View style={styles.middleIcon}>{restauFooterIcon[2].icon}</View>
          <Text style={styles.text}>{restauFooterIcon[2].text}</Text>
        </View>
      </View>
      <View style={[styles.iconWithText]}>
        {lastTwo.map((item) => (
          <View key={item.id} style={styles.footerIcon}>
            {item.icon}
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default FooterIcons

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 2,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    paddingVertical: 0,
    paddingLeft: 0,
    paddingRight: 10,
  },
  iconWithText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    flexDirection: 'row',
  },

  middleIconContainer: {
    marginTop: 24,
    marginLeft: -15,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  middleIcon: {
    top: -45,
    position: 'absolute',
  },
  footerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    textAlign: 'center',
  },
})
