import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useData } from '../../store/context/DataContext'
import { useRoute } from '@react-navigation/native'
import IconContainer from '../Top10/IconContainer'
import MapScreen from '../../UI/MapScreen'
import RestaurantMap from './RestaurantMap'
import PriceAndLocatio from '../Top10/PriceAndLocatio'
import InfoBoxCreator from '../../UI/InfoBoxCreator'

function RestaurantMenu() {
  const {
    restauOptionHeader,
    RestauInfo,
    activeTab,
    setActiveTab,
    setTabSelected,
  } = useData()
  const route = useRoute()
  const { list } = route.params
  console.log('RestauInfo ', RestauInfo)
  // console.log('selectedRestaurant: ', list.name)
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <RestaurantMap coordinates={list.coordinates} name={list.name} />
      </View>
      <View style={styles.menuContainer}>
        {restauOptionHeader.map((option, index) => (
          <Text key={index}>{option.text}</Text>
        ))}
      </View>
      <View>
        <PriceAndLocatio list={list} iconEnable={false} />
      </View>
      <View>
        {RestauInfo.map((info, index) => (
          <InfoBoxCreator info={info} />
        ))}
      </View>
      <View style={styles.footerContainer}></View>
    </View>
  )
}

export default RestaurantMenu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mapContainer: {
    width: '100%',
    position: 'absolute',
    backgroundColor: 'yellow',
    height: '30%',
    top: 0,
    // opacity: 0.5,
  },
  headerTextAndIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 40,
  },

  headerText: {
    fontSize: 30,
    color: '#03A4FF',
    fontFamily: 'Mulish-Bold',
    paddingTop: 8,
    marginLeft: -10,
  },
  menuContainer: {
    flexDirection: 'row',
    width: '100%',
    // elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    // flex: 1,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottonMenu: {
    elevation: 5,
    backgroundColor: 'white',
  },
})
