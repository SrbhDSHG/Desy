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
    bodyText: 'What your frieds think',
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
  // console.log('RestauInfo ', RestauInfo)
  // console.log('selectedRestaurant: ', list.name)
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <RestaurantMap coordinates={list.coordinates} name={list.name} />
      </View>
      <View style={styles.menuContainer}>
        <TopScrollingMenu restauOptionHeader={restauOptionHeader} />
      </View>
      <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
        <PriceAndLocatio list={list} iconEnable={false} />
      </View>
      <View style={styles.infoBoxContainer}>
        {RestauInfo.map((info, index) => (
          <InfoBoxCreator info={info} />
        ))}
      </View>
      <View style={styles.scoreBoxContainer}>
        <Text style={styles.scoreText}>Scores</Text>
        <View style={styles.scoreBox}>
          {scoreData.map((score, index) => (
            <ScoreCreator
              score={score.score}
              scoredBy={score.scoredBy}
              headerText={score.headerText}
              bodyText={score.bodyText}
            />
          ))}
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}
        >
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
    justifyContent: 'center',
    // alignItems: 'center',
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
  photoText: {
    color: '#03A4FF',
    fontSize: 16,
  },
  menuContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: -30,
    // elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreBoxContainer: {
    marginHorizontal: 10,
  },
  infoBoxContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  scoreBox: {
    flexDirection: 'row',
  },
  scoreText: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    marginVertical: 10,
  },
  popularDishesHeader: {
    // textAlign: 'left',
    marginLeft: 10,
    fontFamily: 'Mulish-Bold',
    fontSize: 17,
    marginVertical: 10,
  },

  footerContainer: {
    // flex: 1,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  bottonMenu: {
    elevation: 5,
    backgroundColor: 'white',
  },
})
