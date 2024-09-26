import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Container from '../../../../UI/Container'
import {
  Entypo,
  SimpleLineIcons,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import OptionsLists from '../OptionsLists'
import { useData } from '../../../../store/context/DataContext'
import PopularDishes from '../../../Restaurant/PopularDishes'

const optionList = [
  {
    id: 0,
    icon: <SimpleLineIcons name="cup" size={24} color="#03A4FF" />,
    headerText: 'Afternoon Tea',
    subText: '0 Restaurants',
    color: '#E3F2FD',
    action: 'afternoonTea',
  },
  {
    id: 1,
    icon: (
      <MaterialCommunityIcons
        name="room-service-outline"
        size={24}
        color="#FFA726"
      />
    ),
    headerText: 'After Work',
    subText: '2 Restaurants',
    color: '#FFECB3',
    action: 'afterWork',
  },
  {
    id: 2,
    icon: <Ionicons name="restaurant-outline" size={24} color="#26C6DA" />,
    headerText: 'Atmosphere',
    subText: '1 Restaurant',
    color: '#E0F7FA',
    action: 'atmosphere',
  },
  {
    id: 3,
    icon: <Ionicons name="beer-outline" size={24} color="#AB47BC" />,
    headerText: 'Beer',
    subText: '2 Restaurants',
    color: '#E1BEE7',
    action: 'beer',
  },
  {
    id: 4,
    icon: (
      <MaterialCommunityIcons
        name="cake-variant-outline"
        size={24}
        color="#66BB6A"
      />
    ),
    headerText: 'Birthdays',
    subText: '1 Restaurant',
    color: '#C8E6C9',
    action: 'birthdays',
  },
  {
    id: 5,
    icon: (
      <MaterialCommunityIcons name="food-outline" size={24} color="#FFA726" />
    ),
    headerText: 'Breakfast',
    subText: '1 Restaurant',
    color: '#FFE0B2',
    action: 'breakfast',
  },
  {
    id: 6,
    icon: <Ionicons name="briefcase-outline" size={24} color="#03A4FF" />,
    headerText: 'Business Lunch',
    subText: '1 Restaurant',
    color: '#E3F2FD',
    action: 'businessLunch',
  },
]

const shortList = [
  {
    id: 0,
    icon: <AntDesign name="star" size={24} color="#03A4FF" />,
    headerText: 'Short List',
    subText: '7 Restaurants',
    color: '#E3F2FD',
    action: 'shortList',
  },
]

function AddLabels() {
  const [searchValue, setSearchValue] = useState('')
  const [isOptionsVisible, setIsOptionsVisible] = useState(true)
  const [visitedRestaurant, setVisitedRestaurant] = useState([])
  const [currentUser] = useData()

  useEffect(() => {
    const fetchVisitedRestaurants = async () => {
      try {
        const result = await fetchRestVisitedByUser(currentUser._id)
        setVisitedRestaurant(result)
      } catch (error) {
        console.error('Error fetching visited restaurants:', error)
      }
    }
    console.log('visite restaurants', visitedRestaurant)

    fetchVisitedRestaurants()
  }, [currentUser._id])

  const onValueChange = (text) => {
    console.log('search value', text)
    setSearchValue(text)
  }
  const toggleOptionsVisibility = () => {
    setIsOptionsVisible(!isOptionsVisible)
  }

  return (
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
            placeholder="Search labels"
            keyboardType="default"
            value={searchValue}
            onChangeText={onValueChange}
            style={styles.textInput}
            placeholderTextColor={'#545454'}
          />
        </View>
      </View>
      <View>
        {shortList.map((item, index) => (
          <OptionsLists
            key={item.id}
            headerText={item.headerText}
            icon={item.icon}
            subText={item.subText}
            color={item.color}
            rightArrowEnabled={false}
            borderBottomWidth={0}
            touchOff={true}
          />
        ))}
      </View>
      {/* <View style={styles.listRestaurants}>
        {visitedRestaurant.map(visited, (index) => (
          <PopularDishes
            imagelink={visitedRestaurant.restaurant.imagelink}
            recommended={false}
          />
        ))}
      </View> */}

      <TouchableOpacity
        onPress={toggleOptionsVisibility}
        style={styles.arrowIconAndText}
      >
        <Text style={styles.goodForText}>Good for:</Text>
        <AntDesign
          name={isOptionsVisible ? 'down' : 'up'}
          size={18}
          color="black"
          style={styles.upArrow}
        />
      </TouchableOpacity>
      <View>
        {isOptionsVisible && (
          <View>
            {optionList.map((item) => (
              <OptionsLists
                key={item.id}
                headerText={item.headerText}
                icon={item.icon}
                subText={item.subText}
                color={item.color}
                // restaurant={list}
                // action={item.action} // Pass the action identifier
                // onPress={() => handleOptionPress(item.action, list)}
              />
            ))}
          </View>
        )}
      </View>
    </View>
  )
}

export default AddLabels

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take full height
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    // / Add margin to separate from the list below
  },
  iconAndText: {
    width: '100%', // Take full width
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    marginBottom: 10, // Add margin to separate from the list below
  },
  maginfyIconAndText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    flex: 1, // Take full width
  },
  textInput: {
    flex: 1, // Take full width
  },
  goodForText: {
    fontFamily: 'Mulish-Bold',
    fontSize: 17,
  },
  arrowIconAndText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  listRestaurants: {
    display: 'flex',
    flexDirection: 'row',
  },
})
