import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import HeadingCreator from '../UI/HeadingCreator'
import { FontAwesome } from '@expo/vector-icons'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import { importantCitiesUSA } from '../Utility/StaticData/USCityList'
import { Entypo } from '@expo/vector-icons'
import SnackbarCreator from '../Utility/SnackbarCreator'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AddCityList } from '../Utility/AddCityList'
import { useData } from '../store/context/DataContext'

bodyText = (
  <>
    <Text>
      This will be your default city for recommendations, but don’t worry,
    </Text>
    <Text>Desy let’s you rank restaurants anywhere!</Text>
  </>
)
bodyTextLines = [
  'This will be your default city for recommendations,',
  'but don’t worry, Desy let’s you rank restaurants anywhere!',
]

function EatingMostAt({ navigation }) {
  const [restrictionArray, setRestrictionArray] = useState(
    importantCitiesUSA.slice(0, 6)
  )
  const { defaultCity, setDefaultCity } = useData()

  const pressHandler = (id) => {
    console.log(importantCitiesUSA[id - 1].name)
    const city = importantCitiesUSA[id - 1].name
    setDefaultCity((prev) => AddCityList(city, prev))
  }
  const buttonPressHandler = () => {
    setTimeout(() => {
      navigation.navigate('Desy Anywhere')
    }, 300)
  }
  const toggleShowMore = () => {
    setRestrictionArray(importantCitiesUSA.slice(6, -1))
  }

  return (
    <View style={styles.container}>
      <HeadingCreator
        headerText="Where are you eating most?"
        bodyText={bodyText}
        IconComp={
          <MaterialCommunityIcons
            name="room-service-outline"
            size={40}
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
          buttonText={'Continue'}
          isEnabled={defaultCity.length > 0 ? true : false}
          onPress={buttonPressHandler}
        />
      </View>
    </View>
  )
}

export default EatingMostAt

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 17,
  },
  FlatListContainer: {
    width: '100%',
  },
  moreOption: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1C8AC8',
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
    width: '100%',
  },
  arrowIcon: {
    position: 'absolute',
    marginLeft: 100,
  },
})
