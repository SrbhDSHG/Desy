import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useData } from '../../store/context/DataContext'
import { useRoute } from '@react-navigation/native'
import IconContainer from '../Top10/IconContainer'
import MapScreen from '../../UI/MapScreen'
import RestaurantMap from './RestaurantMap'
import PriceAndLocatio from '../Top10/PriceAndLocatio'
import InfoBoxCreator from '../../UI/InfoBoxCreator'
import ScoreCreator from './ScoreCreator'
import ImageWithLoadingIndicator from '../../Utility/ImageWithLoadingIndicator'
import FooterIcons from './FooterIcons'
import TopScrollingMenu from './TopScrollingMenu'

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

  return (
    <View style={styles.container}>
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
      <View style={styles.popularDishesContainer}>
        <View style={styles.popularDishesHeaderContainer}>
          <Text style={styles.popularDishesHeader}>Popular Dishes</Text>
          <Text style={[styles.popularDishesHeader, styles.photoText]}>
            See All Photos
          </Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <FooterIcons />
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
    height: '30%',
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
  scoreContainer: {
    marginHorizontal: 10,
  },
  scoreText: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  scoreBox: {
    flexDirection: 'row',
  },

  popularDishesContainer: {
    marginHorizontal: 5,
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
  footerContainer: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
})
