import React, { useState } from 'react'
import { AntDesign, Entypo, SimpleLineIcons } from '@expo/vector-icons'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Container from '../../../UI/Container'
import FooterIcons from '../../Restaurant/FooterIcons'

function RestaurantOptionOne({ navigation }) {
  const [searchValue, setSearchValue] = useState('')
  const onValueChange = (text) => {
    console.log('search value', text)
    setSearchValue(text)
  }
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.popularDish}></View>
        <View style={styles.notesAndPhotos}>
          <Text>Your notes nad photos</Text>
          <AntDesign name="up" size={18} color="black" />
        </View>
        <View>
          <Text>What your friends thins</Text>
          <View style={styles.iconAndText}>
            <View style={styles.maginfyIconAndText}>
              <Entypo
                name="magnifying-glass"
                size={24}
                color="#868686"
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Search all dishes.."
                keyboardType="default"
                value={searchValue}
                onChangeText={onValueChange}
                style={styles.textInput}
                placeholderTextColor={'#545454'}
              />
            </View>
            <View style={styles.sliderContainer}>
              <SimpleLineIcons
                name="user-follow"
                size={24}
                style={styles.sliderIcon}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <FooterIcons navigation={navigation} />
      </View>
    </View>
  )
}

export default RestaurantOptionOne

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  subContainer: {
    paddingHorizontal: 20,
  },
  notesAndPhotos: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upArrow: {
    fontSize: 18,
  },
  text: {},
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

    // paddingVertical: 10,
  },
  footerContainer: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
})
