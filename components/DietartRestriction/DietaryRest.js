import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { dietaryRestrictionList } from '../Utility/StaticData/DietaryJson'
import SnackbarCreator from '../Utility/SnackbarCreator'
import HeadingCreator from '../UI/HeadingCreator'
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import Container from '../UI/Container'
import { useData } from '../store/context/DataContext'
import { addArrayList } from '../Utility/AddArrayList'

function DietaryRest({ navigation }) {
  const [restrictionArray, setRestrictionArray] = useState(
    dietaryRestrictionList.slice(0, 6)
  )
  const { dietaryRestriction, setDietaryRestriction } = useData()
  const [showMore, setShowMore] = useState(false)

  const toggleItemSelect = (item) => {}

  const pressHandler = (id) => {
    console.log(dietaryRestrictionList[id - 1].name)
    const restriction = dietaryRestrictionList[id - 1].name
    setDietaryRestriction((prev) => addArrayList(restriction, prev))
  }
  const toggleShowMore = () => {
    setRestrictionArray(dietaryRestrictionList.slice(6, -1))
  }
  const buttonPressHandler = () => {
    setTimeout(() => {
      navigation.navigate('Find Your Freinds ')
    }, 300)
  }

  return (
    <Container>
      <HeadingCreator
        headerText={'Any dietary restrictions?'}
        IconComp={<FontAwesome name="cutlery" size={24} color="#03A4FF" />}
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
          buttonText={dietaryRestriction.length > 0 ? 'Continue' : 'Nope'}
          isEnabled={true}
          onPress={buttonPressHandler}
        />
      </View>
    </Container>
  )
}

export default DietaryRest

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
    marginVertical: 20,
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
