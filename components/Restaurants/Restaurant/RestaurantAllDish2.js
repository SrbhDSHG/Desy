import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, TextInput, Text } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import PopularDishes from './PopularDishes'
import DesyMemberPhotos2 from './DesiMemberPhotos2'
import { fetchUserDishPhotos } from '../../store/context/DataService'

function RestaurantAllDish2({ route }) {
  const { list } = route.params
  const [photos, setPhotos] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const userId = '664bfc8361b9e66e20b99981'
  console.log('list value in Restaurant All dish', list)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const result = await fetchUserDishPhotos(userId)
        setPhotos(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
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

      <View style={styles.desiMemberPicCont}>
        <Text style={styles.headerDesiPhotoText}>Photos from desy members</Text>
        <ScrollView
          vertical
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          <DesyMemberPhotos2
            dishPhotos={photos}
            loading={loading}
            setLoading={setLoading}
          />
        </ScrollView>
      </View>
    </View>
  )
}

export default RestaurantAllDish2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  searchContainer: {
    backgroundColor: 'white',
    marginBottom: 5,
    padding: 10,
  },
  iconAndText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
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
    paddingHorizontal: 10,
    marginTop: 20,
  },
  headerDesiPhotoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  popularDishes: {
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
})
