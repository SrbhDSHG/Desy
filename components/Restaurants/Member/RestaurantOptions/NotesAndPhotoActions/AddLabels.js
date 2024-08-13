import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Container from '../../../../UI/Container'
import {
  Entypo,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import OptionsLists from '../OptionsLists'

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

function AddLabels() {
  const [searchValue, setSearchValue] = useState('')
  const [isOptionsVisible, setIsOptionsVisible] = useState(true)

  const onValueChange = (text) => {
    console.log('search value', text)
    setSearchValue(text)
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
        <Text style={styles.goodForText}>Good for:</Text>
      </View>
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
})
