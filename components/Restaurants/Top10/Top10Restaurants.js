import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import TopDish from '../../Utility/StaticData/DishesPics/TopPic.jpeg'
import ListAndMapTab from './ListAndMapTab'
import Top10ListCreator from './Top10ListCreator'
import { LinearGradient } from 'expo-linear-gradient'

import InfoText from './InfoText'
import { fetchRestaurantsByParams } from '../../store/context/DataService'
import { useEffect, useState } from 'react'
import { useData } from '../../store/context/DataContext'

function Top10Restaurants({ navigation }) {
  const [top10RestList, setTop10RestList] = useState([])
  const [errorMessage, setErrorMessage] = useState(null) // New state for error message
  const { setDefaultCityForDish, setDishType } = useData()
  const params = {
    city: 'NYC',
    dishType: 'Italian',
    // borough: 'West Village',
    // neighbourhood: 'manhattan',
  }

  useEffect(() => {
    const RestaurantByCity = async (params) => {
      try {
        // Fetch data from API based on city
        const response = await fetchRestaurantsByParams(params)
        console.log(
          `Response after fetching restaurant by city: ${params.city}`,
          'and restaurants:',
          response
        )
        if (response.restaurants && response.restaurants.length > 0) {
          setTop10RestList(response.restaurants)
          setErrorMessage(null) // Clear error message if restaurants are found
        } else {
          setErrorMessage('No restaurants found with given parameters')
        }
      } catch (error) {
        console.error('Error fetching restaurants:', error.message)
        setErrorMessage('No restaurants found with given parameters')
      }
    }
    RestaurantByCity(params)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.TopDishPicContainer}>
        <ImageBackground source={TopDish} style={styles.TopDishPic} />
        <View style={styles.desyListMapContainer}>
          <Text style={styles.desyText}>Desy</Text>
          <ListAndMapTab
            navigation={navigation}
            backgroundColor={'#FFFFFFBF'}
            top10RestList={top10RestList}
            dishType={params.dishType}
          />
        </View>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.03)', 'rgba(0, 0, 0, 0.6)']}
          style={styles.infoTextOverlay}
        >
          <InfoText location={params.city} dishType={params.dishType} />
        </LinearGradient>
      </View>
      <View style={styles.ListItem}>
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : (
          <Top10ListCreator
            navigation={navigation}
            top10RestList={top10RestList}
            dishType={params.dishType}
          />
        )}
      </View>
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
  infoTextOverlay: {
    position: 'absolute',
    bottom: -60,
    left: 90,
    width: '110%',
    padding: 10,
  },
  TopDishPicContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  TopDishPic: {
    width: 550,
    height: 380,
    left: -10,
    transform: [{ rotate: '-90deg' }],
  },
  desyListMapContainer: {
    position: 'absolute',
    top: 40,
  },
  desyText: {
    fontFamily: 'Philosopher-Bold',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  ListItem: {
    flex: 0.5,
    width: '100%',
    marginTop: 50,
    backgroundColor: 'white',
  },
  errorText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
    marginTop: 20,
    paddingHorizontal: 20,
  },
})
