import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import Entypo from '@expo/vector-icons/Entypo'

function FriendThinks() {
  const [searchValue, setSearchValue] = useState('')
  const onValueChange = (text) => {
    console.log('search value', text)
    setSearchValue(text)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.friendsThink}>What your friends think</Text>
      <View style={styles.iconAndText}>
        <View style={styles.maginfyIconAndText}>
          <Entypo
            name="magnifying-glass"
            size={24}
            color="#868686"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Search your freinds"
            keyboardType="default"
            value={searchValue}
            onChangeText={onValueChange}
            style={styles.textInput}
            placeholderTextColor={'#545454'}
          />
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.followIcon}>
            <SimpleLineIcons
              name="user-follow"
              size={24}
              style={styles.sliderIcon}
              color="#03A4FF"
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default FriendThinks
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    // marginVertical: 5,
  },
  subContainer: {},
  friendsThink: {
    fontFamily: 'Mulish-Bold',
    fontSize: 17,
    marginBottom: 10,

    paddingVertical: 5,
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
    paddingVertical: 5,
  },
  textInput: {
    color: '#000',
  },
  iconContainer: {
    paddingVertical: 3,
  },
  followIcon: {
    backgroundColor: '#03D2FF3B',
    width: 40,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
