import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { useData } from '../../store/context/DataContext'
import { fetchUserDishPhotos } from '../../store/context/DataService'
import OthrPhotFrmDesyMem from './OthrPhotFrmDesyMem'

function FriendDishes({ restaurantId }) {
  const { friends } = useData()
  const firstFreind = friends[0]
  const [loading, setLoading] = useState(true) // Initial loading state
  const [userDishes, setUserDishes] = useState([])
  const [note, setNote] = useState(
    'Absolutely amazing! The hype is quite high, so I went in skeptical, but wow. We did their a la carte menu upstairs and everything was excellent. The ambiance was perfect and the service was top-notch. Definitely a must-visit!'
  )

  // Fetch friend's dishes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUserDishPhotos(firstFreind._id)
        setUserDishes(response)
      } catch (e) {
        console.log('Error fetching user dishes', e)
      }
    }

    fetchData()
  }, [firstFreind._id])

  return (
    <View style={styles.superContainer}>
      <View style={styles.container}>
        <View style={styles.imageAndName}>
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
                uri: firstFreind && firstFreind.userPhoto,
              }}
              style={styles.image}
              onLoad={() => setLoading(false)}
              onError={() => setLoading(false)}
            />
          </View>
          <View style={styles.nameAndUserName}>
            <Text style={styles.name}>
              {firstFreind.firstName} {firstFreind.lastName}
            </Text>
            <Text style={styles.userName}>@{firstFreind.userName}</Text>
          </View>
        </View>
        <View style={styles.score}>
          <Text style={styles.scoreText}>9.8</Text>
        </View>
      </View>
      <View style={{ marginTop: -20, paddingHorizontal: 5 }}>
        <OthrPhotFrmDesyMem userDishes={userDishes} />
      </View>
      <Text style={styles.note}>
        <Text style={styles.noteTitle}>Notes: </Text>
        {note}
        <Text style={styles.readMore}>... See more</Text>
      </Text>
    </View>
  )
}

export default FriendDishes

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Space out items evenly
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  imageAndName: {
    flexDirection: 'row', // Arrange image and name in a row
    alignItems: 'center', // Align items vertically
  },
  imageWrapper: {
    marginRight: 10, // Space between image and name
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  nameAndUserName: {
    flexDirection: 'column', // Arrange name and username in a column
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userName: {
    fontFamily: 'Mulish-Regular',
    color: '#6E6E6E',
    fontSize: 13,
  },
  score: {
    alignItems: 'flex-end', // Align score to the right
    borderWidth: 1,
    borderRadius: 50,
    padding: 10, //
    borderColor: '#5BE0EB',
  },
  scoreText: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    color: 'black', // Example color for the score
  },
  activityIndicator: {
    position: 'absolute', // Center ActivityIndicator over the image
    left: 15,
    top: 15,
  },
  note: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    color: '#333',
    marginTop: 10,
    lineHeight: 17,
  },
  noteTitle: {
    fontFamily: 'Mulish-Bold',
    fontSize: 14,
  },
  readMore: {
    color: 'grey',
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
  },
})
