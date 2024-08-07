import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Ionicons,
  Feather,
} from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/MaterialIcons'
import OptionsLists from './OptionsLists'

const optionList = [
  {
    id: 0,
    icon: <Icon name="camera-alt" size={24} color="rgba(3, 163, 255, 0.52)" />,
    headerText: 'Add Photos',
    subText: 'Upload your photos',
    color: '#03A4FF26',
  },
  {
    id: 1,
    icon: (
      <Icon
        name="label-outline"
        size={24}
        color="#FFA100"
        style={{ transform: [{ rotate: '-45deg' }] }}
      />
    ),
    headerText: 'Add Labels',
    subText: 'Add labels to your profile',
    color: '#FFA90326',
  },
  {
    id: 2,
    icon: <SimpleLineIcons name="note" size={24} color="#00B2E8" />,
    headerText: 'Add Notes',
    subText: 'Add notes to your profile',
    color: '#03FFFF26',
  },
  {
    id: 3,
    icon: <Ionicons name="restaurant-outline" size={24} color="#7A46FF" />,
    headerText: 'Add Favorite Dishes',
    subText: 'Add your favorite dishes',
    color: '#AE6FFF26',
  },
  {
    id: 4,
    icon: <Feather name="eye-off" size={24} color="#19BA1E" />,
    headerText: 'Add Personal Notes',
    subText: 'Add your notes that are only accessible to you',
    color: '#10FA1A26',
  },
]

function RestaurantOptionOne({ list }) {
  const [searchValue, setSearchValue] = useState('')
  const [isOptionsVisible, setIsOptionsVisible] = useState(false)

  const onValueChange = (text) => {
    console.log('search value', text)
    setSearchValue(text)
  }

  const toggleOptionsVisibility = () => {
    setIsOptionsVisible(!isOptionsVisible)
  }

  return (
    <View style={styles.subContainer}>
      {/* Toggle Button for Notes and Photos */}
      <TouchableOpacity
        onPress={toggleOptionsVisibility}
        style={styles.notesAndPhotos}
      >
        <Text style={styles.notesAndPhotoText}>Your notes and photos</Text>
        <AntDesign
          name={isOptionsVisible ? 'down' : 'up'}
          size={18}
          color="black"
          style={styles.upArrow}
        />
      </TouchableOpacity>

      {/* Options List: Conditionally Rendered */}
      {isOptionsVisible && (
        <View>
          {optionList.map((item) => (
            <OptionsLists
              key={item.id}
              headerText={item.headerText}
              icon={item.icon}
              subText={item.subText}
              color={item.color}
            />
          ))}
        </View>
      )}
      <View style={{ marginBottom: isOptionsVisible ? 20 : 0 }}></View>
    </View>
  )
}

export default RestaurantOptionOne

const styles = StyleSheet.create({
  subContainer: {
    paddingHorizontal: 12,
    // marginBottom: 10,
  },
  notesAndPhotos: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notesAndPhotoText: {
    fontFamily: 'Mulish-Bold',
    fontSize: 17,
  },
  upArrow: {
    marginRight: 10,
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
  },
  textInput: {
    // Add textInput styling here
  },
})
