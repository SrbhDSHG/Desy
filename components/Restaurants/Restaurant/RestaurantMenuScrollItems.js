import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ScoreCreator from './ScoreCreator'
import DishHorztScrollabe from './DishHorztScrollabe'
import RestaurantOptionOne from '../Member/RestaurantOptions/RestaurantOptionOne'
import FriendThinks from '../Member/RestaurantOptions/FriendThinks'
import FriendDishes from '../Members/FriendDishes'
import FindFriends from '../Members/FindFreinds'

const scoreData = [
  {
    score: '8.8',
    scoredBy: '2k',
    headerText: 'Rec Score',
    bodyText: 'How much we think, you would like to it',
  },
  {
    score: '9.8',
    scoredBy: '1',
    headerText: 'Friend Score',
    bodyText: 'What your friends think',
  },
]

export const renderItem = ({
  item,
  list,
  pressToViewAllPhotos,
  navigation,
}) => {
  switch (item.type) {
    case 'scores':
      return (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Scores</Text>
          <View style={styles.scoreBox}>
            {scoreData.map((score, index) => (
              <ScoreCreator
                key={index}
                score={score.score}
                scoredBy={score.scoredBy}
                headerText={score.headerText}
                bodyText={score.bodyText}
              />
            ))}
          </View>
        </View>
      )
    case 'popularDishes':
      return (
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
      )
    case 'restaurantOption':
      return <RestaurantOptionOne list={list} navigation={navigation} />
    // return <RestaurantOptionOne list={list} />

    case 'whatfriendThinks':
      return <FriendThinks />

    case 'FriendsDishes':
      return <FriendDishes restaurantId={list._id} />
    case 'FindFriends':
      return <FindFriends />
    default:
      return null
  }
}

const styles = StyleSheet.create({
  scoreContainer: {
    // marginHorizontal: 5,
  },
  scoreText: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    marginVertical: 10,
    paddingHorizontal: 3,
  },
  scoreBox: {
    flexDirection: 'row',
  },
  popularDishesContainer: {
    // marginHorizontal: 5,
    marginVertical: 10,
    // paddingHorizontal: 10,
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
})
