import React, { useEffect } from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { contains } from 'validator'
import { LinearGradient } from 'expo-linear-gradient'
import LinearGradientCompnt from '../../UI/LinearGradient'
import { useData } from '../../store/context/DataContext'
import { fetchUser } from '../../store/context/DataService'
import cookiemonster from '../../Utility/StaticData/DishesPics/cookie_monster.jpg'

const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  return date.toISOString().split('T')[0] // Output in "YYYY-MM-DD" format
}

// const name = 'Judy T'
const date = new Date()
function MemberProfile({ navigation }) {
  const { currentUser, setCurrentUser } = useData()
  const route = useRoute()
  const { user } = route.params

  // const dishPhotoSource =
  //   user.dishPhotos &&
  //   user.dishPhotos.length > 0 &&
  //   user.dishPhotos[0].imagelink
  //     ? { uri: user.dishPhotos[0].imagelink }
  //     : cookiemonster

  return (
    <View style={styles.superContainer}>
      <View style={styles.container}>
        <View style={styles.picAndTextContainer}>
          <Image style={styles.profilePic} source={{ uri: user.userPhoto }} />
          <View style={styles.textContainer}>
            <Text
              style={styles.name}
            >{`${user.firstName} ${user.lastName}`}</Text>
            <Text style={styles.date}>{`Member since ${formatDate(
              user.createdAt
            )}`}</Text>
          </View>
        </View>
        <View style={styles.headerImageContainer}>
          <Image
            source={{
              uri: user.dishPhotos[0]
                ? user.dishPhotos[0].imagelink
                : cookiemonster,
            }}
            // source={dishPhotoSource}
            style={styles.image}
          />
          <View style={styles.rectangle}>
            {/* <LinearGradientCompnt photoName={photo.dishType} /> */}
          </View>
        </View>
        <View style={styles.other}>
          <Text style={styles.otherText}>Other Photos from Judy T</Text>
        </View>
      </View>
    </View>
  )
}

export default MemberProfile

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  container: {
    marginTop: 90,
    // position: 'relative',
  },
  picAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginVertical: 20,
  },
  headerImageContainer: {
    alignItems: 'center',
    borderRadius: 20,
  },
  picContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 20,
  },
  other: {
    marginVertical: 20,
    color: '#6E6E6E',
  },
  otherText: {
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
  },
  textContainer: {
    marginHorizontal: 20,
    // marginVertical: 10,
  },
  name: {
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
  },
  date: {
    fontFamily: 'Mulish-Regular',
    fontSize: 13,
    color: '#6E6E6E',
  },
  image: {
    alignItems: 'center',
    width: '100%',
    height: 360,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    resizeMode: 'cover',
  },
  rectangle: {
    width: '100%',
    height: 60,
    marginTop: -80,
  },
})
