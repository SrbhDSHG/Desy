import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import PriceAndLocatio from './PriceAndLocatio'
import { useData } from '../../store/context/DataContext'
import ImageWithLoadingIndicator from '../../Utility/ImageWithLoadingIndicator'

function Top10ListCreator() {
  const [loading, setLoading] = useState(true)
  const { top10RestList } = useData()
  // console.log('Top 10 list :', top10RestList)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {top10RestList
        .slice()
        .reverse()
        .map((list, index) => (
          <View key={index} style={styles.listContainer}>
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
