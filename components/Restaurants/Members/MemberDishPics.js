import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'
import DishVertScrollabe from '../Restaurant/DishHorztScrollabe'
import { useData } from '../../store/context/DataContext'
import DishHorztScrollabe from '../Restaurant/DishHorztScrollabe'

function MemberDishPics({ navigation }) {
  //obselete function
  const [searchValue, setSearchValue] = useState('')
  const { top10RestList } = useData()

  // console.log('In the  member dish pics')
  const route = useRoute()
  const { list } = route.params
  const popularDish = list.popularDish
  // console.log('list', list.popularDish)
  const onValueChange = (text) => {
    console.log('search value', text)
    setSearchValue(text)
  }
  return (
    <View style={styles.superContainer}>
      <View style={styles.container}>
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
        <View style={styles.disContainer}>
          <Text style={styles.popularDishes}>Popular Dishes</Text>
          <DishHorztScrollabe popularDish={popularDish} />
        </View>
        <View style={styles.textAndDishImages}>
          <Text style={styles.photosFromDesy}>Photos from Desy members</Text>
          <ScrollView
            vertical
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
          >
            <DesyMemberPhotos list={popularDish} navigation={navigation} />
          </ScrollView>
          {/* <DesyMemberPhotos /> */}
        </View>
      </View>
    </View>
  )
}

export default MemberDishPics

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    // position: 'absolute',
  },
  container: {
    marginTop: 100,
  },
  searchContainer: {
    height: 40,
    borderRadius: 10,
  },
  sliderContainer: {
    backgroundColor: '#03A4FF',
    width: 26,
    height: 26,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderIcon: {
    color: 'white',
    padding: '2 2 2 2 ',
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

    // paddingVertical: 10,
  },
  disContainer: {
    width: '100%',
  },
  popularDishes: {
    fontFamily: 'Mulish-Bold',
    fontSize: 17,
    marginTop: 20,
  },
  textAndDishImages: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 17,
    width: '100%',
    flex: 1,
  },
  textInput: {
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  photosFromDesy: {
    fontFamily: 'Mulish-Bold',
    fontSize: 17,
    marginVertical: 20,
  },
})
