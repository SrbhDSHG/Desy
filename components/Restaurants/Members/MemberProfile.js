import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { useData } from '../../store/context/DataContext'
import cookiemonster from '../../Utility/StaticData/DishesPics/cookie_monster.jpg'
import DishHorztScrollabe from '../Restaurant/DishHorztScrollabe'
import { fetchUserDishPhotos } from '../../store/context/DataService'
import OthrPhotFrmDesyMem from './OthrPhotFrmDesyMem'

const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  return date.toISOString().split('T')[0] // Output in "YYYY-MM-DD" format
}

function MemberProfile({ navigation }) {
  const { currentUser, setCurrentUser } = useData()
  const route = useRoute()
  const { user } = route.params
  const [loading, setLoading] = useState(true)
  const [userDishes, setUserDishes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUserDishPhotos(user._id)
        setUserDishes(response)
      } catch (e) {
        console.log('Error fetching user dishes', e)
      }
    }

    fetchData()
  }, [user._id])
  return (
    <View style={styles.superContainer}>
      <View style={styles.container}>
        <View style={styles.picAndTextContainer}>
          <View style={styles.profilePicContainer}>
            {loading && (
              <ActivityIndicator
                size="large"
                color="#03A4FF"
                style={styles.activityIndicator}
              />
            )}
            <Image
              style={styles.profilePic}
              source={{ uri: user.userPhoto }}
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
            />
          </View>
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
          <View style={styles.imageWrapper}>
            {loading && (
              <ActivityIndicator
                size="large"
                color="#03A4FF"
                style={styles.activityIndicator}
              />
            )}
            <Image
              source={{
                uri: user.dishPhotos[0]
                  ? user.dishPhotos[0].imagelink
                  : cookiemonster,
              }}
              style={styles.image}
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
            />
          </View>
          <View style={styles.rectangle}>
            {/* <LinearGradientCompnt photoName={photo.dishType} /> */}
          </View>
        </View>
        <View style={styles.other}>
          <Text style={styles.otherText}>
            Other Photos from {user.firstName} {user.lastName}
          </Text>
        </View>
        <View>
          <OthrPhotFrmDesyMem userDishes={userDishes} />
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
  },
  picAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicContainer: {
    position: 'relative',
    width: 60,
    height: 60,
  },
  profilePic: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  headerImageContainer: {
    alignItems: 'center',
    borderRadius: 20,
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: 360,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  rectangle: {
    width: '100%',
    height: 60,
    marginTop: -80,
  },
  textContainer: {
    marginHorizontal: 20,
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
  other: {
    marginVertical: 20,
    color: '#6E6E6E',
  },
  otherText: {
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
    marginTop: 10,
    marginBottom: -8,
  },
  activityIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -12.5 }, { translateY: -12.5 }], // Centering indicator
  },
})
