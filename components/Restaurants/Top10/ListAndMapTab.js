import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const tabs = [
  { text: 'List', iconName: 'list' },
  { text: 'Map', iconName: 'map-pin' },
]
function ListAndMapTab() {
  const [activeTab, setActiveTab] = useState(tabs[0])
  const handlePrss = (tab) => {
    setActiveTab(tab)
    console.log(`${tab.text} pressed`)
  }
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <Pressable key={index} onPress={() => handlePrss(tab)}>
          <View
            style={[styles.tab, activeTab === tab && styles.pressedBackground]}
          >
            <Feather
              name={tab.iconName}
              size={18}
              style={[
                styles.iconColor,
                activeTab === tab && styles.iconPressedColor,
              ]}
            />
            <Text
              style={[styles.tabText, activeTab == tab && styles.pressedColor]}
            >
              {tab.text}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  )
}

export default ListAndMapTab

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFFBF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 10,
  },
  tab: {
    width: 80,
    height: 40,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    flexDirection: 'row',
  },
  pressedBackground: {
    backgroundColor: '#1C8AC8',
    width: 80,
    height: 40,
  },
  pressedColor: {
    color: 'white',
  },
  tabText: {
    color: '#03A4FF',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
  },
  iconColor: {
    color: '#03A4FF',
  },
  iconPressedColor: {
    color: 'white',
  },
})
