import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useData } from '../../store/context/DataContext'
import { useRoute } from '@react-navigation/native'
import RestaurantMap from './RestaurantMap'
import PriceAndLocatio from '../Top10/PriceAndLocatio'
import InfoBoxCreator from '../../UI/InfoBoxCreator'
import FooterIcons from './FooterIcons'
import TopScrollingMenu from './TopScrollingMenu'
import { renderItem } from './RestaurantMenuScrollItems' // Importing from external file

function RestaurantMenu({ navigation }) {
  const { restauOptionHeader, RestauInfo } = useData()
  const route = useRoute()
  const { list } = route.params

  const pressToViewAllPhotos = () => {
    console.log('In RestaurantMenu rest id:', list.id)
    navigation.navigate('Restaurant Dish', { list })
  }

  const scrollableData = [
    { type: 'scores' },
    { type: 'popularDishes' },
    { type: 'restaurantOption' },
    { type: 'whatfriendThinks' },
  ]

  return (
    <View style={styles.container}>
      {/* Non-scrollable top sections */}
      <View style={styles.mapContainer}>
        <RestaurantMap coordinates={list.coordinates} name={list.name} />
      </View>
      <View style={styles.menuContainer}>
        <TopScrollingMenu restauOptionHeader={restauOptionHeader} />
      </View>
      <View style={styles.priceAndLocationContainer}>
        <PriceAndLocatio list={list} iconEnable={false} />
      </View>
      <View style={styles.infoBoxContainer}>
        {RestauInfo.map((info, index) => (
          <InfoBoxCreator key={index} info={info} />
        ))}
      </View>

      {/* Scrollable section */}
      <FlatList
        data={scrollableData}
        renderItem={({ item }) =>
          renderItem({ item, list, pressToViewAllPhotos })
        }
        keyExtractor={(item) => item.type}
        contentContainerStyle={styles.scrollableContentContainer}
      />

      {/* Non-scrollable footer section */}
      <View style={styles.footerContainer}>
        <FooterIcons navigation={navigation} list={list} />
      </View>
    </View>
  )
}

export default RestaurantMenu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mapContainer: {
    width: '100%',
    height: 200, // Set a fixed height for the map section
  },
  menuContainer: {
    marginTop: -30,
    alignItems: 'center',
  },
  priceAndLocationContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  infoBoxContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  footerContainer: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 20,
  },
  scrollableContentContainer: {
    paddingBottom: 20, // Additional padding for scrollable content
    paddingHorizontal: 10,
    width: '100%',
    flexGrow: 1, // To make the content scrollable if needed
  },
})
