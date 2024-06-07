import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native'
import PriceAndLocatio from './PriceAndLocatio'
import { useData } from '../../store/context/DataContext'
import ImageWithLoadingIndicator from '../../Utility/ImageWithLoadingIndicator'
import RestaurantMenu from '../Restaurant/RestaurantMenu'

function Top10ListCreator({ navigation }) {
  const [loading, setLoading] = useState(true)
  const { top10RestList } = useData()
  // console.log('Top 10 list :', top10RestList)
  const pressHandler = (list) => {
    console.log('Pressed restuarant:', list._id)
    navigation.navigate('Restaurant Menu', { list })
  }
  console.log('restaurant length:', top10RestList.length > 0)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {top10RestList
        .slice()
        .reverse()
        .map((list, index) => (
          <Pressable
            key={list._id}
            onPress={() => pressHandler(list)}
            style={({ pressed }) => [pressed && styles.pressedContainer]}
          >
            <View key={index} style={[styles.listContainer]}>
              <View style={styles.textContainer}>
                <View style={styles.resHeaderCont}>
                  <Text style={[styles.resName, styles.number]}>{`${
                    10 - index
                  }.`}</Text>
                  <Text style={styles.resName}>{list.name}</Text>
                </View>
                <PriceAndLocatio list={list} />
              </View>
              <View style={[styles.imageContainer, styles.image]}>
                <ImageWithLoadingIndicator
                  source={{ uri: list.imagelink }}
                  style={styles.image}
                />
              </View>
            </View>
          </Pressable>
        ))}
    </ScrollView>
  )
}

export default Top10ListCreator

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  pressedContainer: {
    opacity: 0.5,
    backgroundColor: '#E9F7FF',
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D2EFFF',
    width: '100%',
  },
  textContainer: {
    justifyContent: 'center',
    paddingBottom: 20,
  },
  fontTypeToSubLettr: {
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
    color: '#4E4E4E',
  },
  resHeaderCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resName: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    // marginTop: -10,
  },
  number: {
    marginRight: 5,
  },

  priceAndType: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  vertical: {
    marginHorizontal: 5,
  },

  imageContainer: {
    borderRadius: 20,
    paddingBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
})
