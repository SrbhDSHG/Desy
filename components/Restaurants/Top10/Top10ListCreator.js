import React from 'react'
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native'
import IconContainer from './IconContainer'
import PriceAndLocatio from './PriceAndLocatio'
import { useData } from '../../store/context/DataContext'

function Top10ListCreator() {
  const { TopTenReversed } = useData()
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {TopTenReversed.map((list, index) => (
        <View key={index} style={styles.listContainer}>
          <View style={styles.textContainer}>
            <View style={styles.resHeaderCont}>
              <Text style={[styles.resName, styles.number]}>{`${
                10 - index
              }.`}</Text>
              <Text style={styles.resName}>{list.resName}</Text>
            </View>
            <PriceAndLocatio list={list} />
          </View>
          <View style={[styles.imageContainer, styles.image]}>
            <Image source={list.image} style={styles.image} />
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default Top10ListCreator

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // paddingVertical: 20,
    paddingHorizontal: 10,
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
