import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import OnMapListed from './OnMapListed'
import { Top10DishList } from '../../Utility/StaticData/Top10ResData'
import Top10Listed from './Top10ListCreator'
import Top10ListCreator from './Top10ListCreator'
import { useData } from '../../store/context/DataContext'

function ListAndMapTab({ handlePress }) {
  const { tabs, activeTab, setActiveTab, setTabSelected } = useData()
  const handlePrss = (tab) => {
    setActiveTab(tab)
    setTabSelected(true)
    console.log(`${tab} pressed`)
    handlePress(tab)
  }

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <Pressable key={index} onPress={() => handlePrss(tab.text)}>
          <View
            style={[
              styles.tab,
              activeTab === tab.text && styles.pressedBackground,
            ]}
          >
            <Feather
              name={tab.iconName}
              size={18}
              style={[
                styles.iconColor,
                activeTab === tab.text && styles.iconPressedColor,
              ]}
            />
            <Text
              style={[
                styles.tabText,
                activeTab == tab.text && styles.pressedColor,
              ]}
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
