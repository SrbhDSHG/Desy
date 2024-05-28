import React, { useState } from 'react'

import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import TopDish from '../../Utility/StaticData/DishesPics/TopPic.jpeg'
import ListAndMapTab from './ListAndMapTab'
import { Top10DishList } from '../../Utility/StaticData/Top10ResData'
import Top10ListCreator from './Top10ListCreator'

import InfoText from './InfoText'
import OnMapListed from './OnMapListed'
import ListPressed from './ListPressed'

const tabs = [
  { text: 'List', iconName: 'list' },
  { text: 'Map', iconName: 'map-pin' },
]
function Top10Restaurants() {
  const [tabSelected, setTabSelected] = useState(false)
  const [activeTab, setActiveTab] = useState(tabs[0])
  const tabSelectHandler = () => {
    setTabSelected(true)
  }
  const handlePress = (tab) => {
    setActiveTab(tab)
    console.log(`${tab.text} pressed`)
    // tabSelected()
    setTabSelected(true)
  }
  return (
    <View style={styles.container}>
      {tabSelected ? (
        activeTab.text === 'Map' ? (
          <OnMapListed />
        ) : (
          <>
            <ListPressed
              activeTab={activeTab}
              handlePress={handlePress}
              tabs={tabs}
            />
          </>
        )
      ) : (
        <>
          <View style={styles.TopDishPicContainer}>
            <ImageBackground source={TopDish} style={styles.TopDishPic} />
            <View style={styles.desyAndMapContainer}>
              <Text style={styles.desyText}>Desy</Text>
              <ListAndMapTab
                activeTab={activeTab}
                handlePress={handlePress}
                tabs={tabs}
              />
            </View>
            <InfoText />
          </View>
          <View style={styles.ListItem}>
            <Top10ListCreator ListedRest={Top10DishList.reverse()} />
          </View>
        </>
      )}
    </View>
  )
}

export default Top10Restaurants

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  textColor: {
    color: '#FFFFFFFF',
  },

  TopDishPicContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    // paddingHorizontal: 30,
  },
  TopDishPic: {
    width: 550,
    height: 446,
    left: -10,
    transform: [{ rotate: '-90deg' }],
  },
  desyAndMapContainer: {
    position: 'absolute',
    top: 50,
  },
  desyText: {
    fontFamily: 'Philosopher-Bold',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  map: {
    marginVertical: 5,
  },

  ListItem: {
    flex: 1,
    // ?marginTop: 10,
    backgroundColor: 'white',
  },
})
