import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useData } from '../../store/context/DataContext'

function RestaurantMenu({ id }) {
  const { top10RestList } = useData()
  const selectedRestaurant = top10RestList.find((rest) => rest._id === id)
  console.log('id: ', id)
  console.log('top10ResList', top10RestList)
  console.log('selectedRestaurant: ', selectedRestaurant)
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <View style={styles.headerTextAndIcon}>
          <Text style={styles.headerText}>{selectedRestaurant}</Text>
        </View>
      </View>
      <View style={styles.menuContainer}></View>
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
    // flex: 0.25,
  },
  headerTextAndIcon: {
    flexDirection: 'row',
    bottom: 0,
  },
  headerText: {
    fontSize: 30,
  },
  menuContainer: {
    // flex: 0.65,
  },
  bottonMenu: {},
})
