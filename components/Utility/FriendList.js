import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native'
import ButtonDesyV2 from './ButtonDesy'

// Separate component for rendering each friend item
const FriendItem = ({ item, onImageLoad }) => {
  const [loading, setLoading] = useState(true) // Initialize loading state for each image

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.friendItem}>
        <View style={styles.imageContainer}>
          {loading && (
            <ActivityIndicator
              style={styles.activityIndicator}
              size="small"
              color="#03A4FF"
            />
          )}
          <Image
            source={{ uri: item.userPhoto }}
            style={styles.friendImage}
            resizeMode="cover"
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => {
              setLoading(false)
              onImageLoad(item._id) // Notify parent component when image has loaded
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.friendName}>
            {item.firstName} {item.lastName}
          </Text>
          <Text style={styles.friendEmail}>{item.email}</Text>
          {item.phoneNumber && (
            <Text style={styles.friendPhone}>{item.phoneNumber}</Text>
          )}
        </View>
      </View>
    </View>
  )
}

function FriendsList({ route, navigation }) {
  const { friends } = route.params
  const [loadedImages, setLoadedImages] = useState(new Set())

  // set friends

  // Function to handle image load completion
  const handleImageLoad = (id) => {
    setLoadedImages((prev) => new Set(prev).add(id))
  }

  // Check if all images are loaded
  const allImagesLoaded = loadedImages.size === friends.length

  const onPressHandler = () => {
    setTimeout(() => {
      navigation.navigate('Stay Connected')
    }, 300)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <FriendItem item={item} onImageLoad={handleImageLoad} />
        )}
      />
      <View style={styles.buttonContainer}>
        <ButtonDesyV2
          buttonText={'Next'}
          isEnabled={allImagesLoaded} // Enable button only when all images are loaded
          onPress={onPressHandler}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center', // Center items vertically
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#EFF9FF',
    shadowColor: '#000',
    elevation: 1,
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  friendImage: {
    width: 70,
    height: 70,
    borderRadius: 35, // Correctly make the image round
    position: 'absolute', // Position image absolutely in its container
  },
  activityIndicator: {
    position: 'absolute', // Position ActivityIndicator absolutely
  },
  textContainer: {
    flex: 1,
    marginTop: 0,
  },
  friendName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Align text to the center
  },
  friendEmail: {
    fontSize: 16,
    textAlign: 'center', // Align text to the center
  },
  friendPhone: {
    fontSize: 16,
    textAlign: 'center', // Align text to the center
  },
  buttonContainer: {
    // Adjust button container styles as needed
    marginTop: 20,
  },
})

export default FriendsList
