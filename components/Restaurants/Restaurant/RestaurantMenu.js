import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useData } from '../../store/context/DataContext'
import { useRoute } from '@react-navigation/native'
import IconContainer from '../Top10/IconContainer'
import MapScreen from '../../UI/MapScreen'
import RestaurantMap from './RestaurantMap'

function RestaurantMenu() {
  const route = useRoute()
  const { id, coordinates, name } = route.params

  console.log('id: ', id)
  //   console.log('top10ResList', top10RestList)
  console.log('selectedRestaurant: ', name)
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <RestaurantMap coordinates={coordinates} name={name} />
      </View>
      <View style={styles.menuContainerr}></View>
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
    // flex: 1,
    width: '100%',
    elevation: 5,
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
