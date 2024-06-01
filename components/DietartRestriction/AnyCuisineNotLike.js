import React, { useState } from 'react'
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { cuisineTypes } from '../Utility/StaticData/CusineType'
import SnackbarCreator from '../Utility/SnackbarCreator'
import HeadingCreator from '../UI/HeadingCreator'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import Container from '../UI/Container'

function CuisineNotLike({ navigation }) {
  const [restrictionArray, setRestrictionArray] = useState(
    cuisineTypes.slice(0, 6)
  )
  const [showMore, setShowMore] = useState(false)
  const [selectedRestrictions, setSelectedRestrictions] = useState('')

  const toggleItemSelect = (item) => {}

  const pressHandler = (id) => {
    if (selectedRestrictions.includes(id)) {
      setSelectedRestrictions((prevIds) =>
        prevIds.filter((itemId) => itemId !== id)
      )
    } else {
      setSelectedRestrictions((prevIds) => [...prevIds, id])
    }
  }
  const toggleShowMore = () => {
    setRestrictionArray(cuisineTypes.slice(6, -1))
  }
  const buttonPressHandler = () => {
    setTimeout(() => {
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
            selectedRestrictions.length > 0
              ? 'Continue'
              : 'Nope, I like everything'
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
