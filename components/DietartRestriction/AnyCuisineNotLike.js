import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { cuisineTypes } from '../Utility/StaticData/CusineType'
import SnackbarCreator from '../Utility/SnackbarCreator'
import HeadingCreator from '../UI/HeadingCreator'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import Container from '../UI/Container'
import { addArrayList } from '../Utility/AddArrayList'
import { useData } from '../store/context/DataContext'

function CuisineNotLike({ navigation }) {
  const [restrictionArray, setRestrictionArray] = useState(
    cuisineTypes.slice(0, 6)
  )
  const { cuisineNotLike, setCuisineNotLike } = useData()
  // const [showMore, setShowMore] = useState(false)
  const [selectedRestrictions, setSelectedRestrictions] = useState('')

  // const toggleItemSelect = (item) => {}

  const pressHandler = (id) => {
    // console.log(cuisineTypes[id - 1].name)
    const cuisines = cuisineTypes[id - 1].name
    setCuisineNotLike((prev) => addArrayList(cuisines, prev))
  }
  const toggleShowMore = () => {
    setRestrictionArray(cuisineTypes.slice(6, -1))
  }
  const buttonPressHandler = () => {
    setTimeout(() => {
      if (cuisineNotLike.length == 0) {
        setCuisineNotLike('I like everthing')
      }
      navigation.navigate('Dietary Restriction')
    }, 300)
  }

  return (
    <Container>
      <HeadingCreator
        headerText={'Any cuisines you don’t like?'}
        IconComp={
          <MaterialCommunityIcons
            name="room-service-outline"
            size={24}
            color="#03A4FF"
          />
        }
      />
      <View style={styles.FlatListContainer}>
        <FlatList
          style={styles.listStyle}
          data={restrictionArray}
          renderItem={({ item }) => (
            <SnackbarCreator lists={item} onPressMethod={pressHandler} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.moreOptContainer}>
        <Pressable onPress={toggleShowMore}>
          <View style={styles.moreText}>
            <Text style={styles.moreOption}>More options</Text>
            <View style={styles.arrowIcon}>
              <Entypo name="chevron-down" size={24} color="#03A4FF" />
            </View>
          </View>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonDesyV2
          buttonText={
            cuisineNotLike.length > 0 ? 'Continue' : 'Nope, I like everything'
          }
          isEnabled={true}
          onPress={buttonPressHandler}
        />
      </View>
    </Container>
  )
}

export default CuisineNotLike

const styles = StyleSheet.create({
  moreOption: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1C8AC8',
  },
  FlatListContainer: {
    width: '100%',
  },
  buttonContainer: {
    marginVertical: 10,
  },
  moreOptContainer: {
    left: -120,
  },
  moreText: {
    flexDirection: 'row',
  },
  listStyle: {
    maxHeight: 400,
  },
  arrowIcon: {
    position: 'absolute',
    marginLeft: 100,
  },
})
