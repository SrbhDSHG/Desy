import React from 'react'
import { View } from 'react-native-web'
import DishHorztScrollabe from '../Restaurant/DishHorztScrollabe'
import FooterIcons from '../Restaurant/FooterIcons'
import { StyleSheet, Text } from 'react-native'

function UserOptions({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.popularDishesContainer}>
        <View style={styles.popularDishesHeaderContainer}>
          <Text style={styles.popularDishesHeader}>Popular Dishes</Text>
          <Text
            onPress={() => pressToViewAllPhotos(list)}
            style={[styles.popularDishesHeader, styles.photoText]}
          >
            See All Photos
          </Text>
        </View>
        <DishHorztScrollabe popularDish={list.dishes} />
      </View>
      <View style={styles.footerContainer}>
        <FooterIcons navigation={navigation} list={list} />
      </View>
    </View>
  )
}

export default UserOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  popularDishesContainer: {
    marginHorizontal: 5,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  popularDishesHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularDishesHeader: {
    fontFamily: 'Mulish-Bold',
    fontSize: 17,
    marginVertical: 10,
  },
  photoText: {
    color: '#03A4FF',
    fontSize: 16,
  },
  popularDishes: {
    fontFamily: 'Mulish-Bold',
    fontSize: 17,
    marginTop: 20,
  },
  footerContainer: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
})
