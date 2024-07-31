import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, TextInput, Text } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import PopularDishes from './PopularDishes'
import DesyMemberPhotos2 from './DesiMemberPhotos2'
import { fetchUserDishPhotos } from '../../store/context/DataService'

function RestaurantAllDish2({ navigation, route }) {
  const { list } = route.params
  const [photos, setPhotos] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const userId = '66aa136e8e444562d8e82366'
  console.log('list value in Restaurant All dish', list)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const result = await fetchUserDishPhotos(userId)
        setPhotos(result)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchPhotos()
  }, [userId])

  const onValueChange = (text) => {
    console.log('search value', text)
    setSearchValue(text)
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.iconAndText}>
          <View style={styles.maginfyIconAndText}>
            <Entypo
              name="magnifying-glass"
              size={24}
              color="#868686"
              style={{ marginRight: 10 }}
            />
            <TextInput
              placeholder="Search all dishes.."
              keyboardType="default"
              value={searchValue}
              onChangeText={onValueChange}
              style={styles.textInput}
              placeholderTextColor={'#545454'}
            />
          </View>
          <View style={styles.sliderContainer}>
            <FontAwesome name="sliders" size={24} style={styles.sliderIcon} />
          </View>
        </View>
      </View>
      <Text style={styles.popularDishesText}>Popular Dishes </Text>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.popularDishes}
        >
          {list.dishes.map((lst, index) => (
            <PopularDishes
              key={index}
              imagelink={lst.imagelink}
              dishName={lst.name}
              recommended={lst.recommended}
            />
          ))}
        </ScrollView>
      </View>

      {/* <View style={styles.desiMemberPicCont}> */}
      <Text style={styles.headerDesiPhotoText}>Photos from Desy members</Text>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <DesyMemberPhotos2
          dishPhotos={photos}
          loading={loading}
          setLoading={setLoading}
          navigation={navigation}
        />
      </ScrollView>
      {/* </View> */}
    </View>
  )
}

export default RestaurantAllDish2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  searchContainer: {
    backgroundColor: 'white',
    marginBottom: 2,
    padding: 10,
  },
  iconAndText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
  },
  maginfyIconAndText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  popularDishesText: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    marginBottom: 5,
  },
  sliderContainer: {
    backgroundColor: '#03A4FF',
    width: 26,
    height: 26,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  sliderIcon: {
    color: 'white',
    padding: 2,
  },
  desiMemberPicCont: {
    // paddingHorizontal: 10,
    marginTop: 10,
  },
  headerDesiPhotoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Mulish-Bold',
  },
  popularDishes: {
    paddingBottom: 10,
    // paddingHorizontal: 10,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
})
