import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useData } from '../../store/context/DataContext'
import { useRoute } from '@react-navigation/native'
import IconContainer from '../Top10/IconContainer'
import MapScreen from '../../UI/MapScreen'

function RestaurantMenu() {
  const { top10RestList } = useData()
  const route = useRoute()
  const { id } = route.params
  const selectedRestaurant = top10RestList.find((rest) => rest._id === id)
  console.log('id: ', id)
  //   console.log('top10ResList', top10RestList)
  console.log('selectedRestaurant: ', selectedRestaurant)
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapScreen />
      </View>
      <View style={styles.headerTextAndIcon}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>{selectedRestaurant.name}</Text>
        </View>
        <IconContainer />
      </View>
      <View style={styles.menuContainer}></View>
      <View style={styles.RestInfoContainer}></View>
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
    flex: 0.25,
    opacity: 0.5,
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
    flex: 0.15,
    width: '100%',
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 0.65,
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
