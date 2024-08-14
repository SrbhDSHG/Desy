import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

function AddPhotos() {
  const [images, setImages] = useState([])

  const handleSelectImages = async () => {
    // Request permission to access gallery
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!")
      return
    }

    // Open the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    })

    if (!result.canceled) {
      setImages(result.assets.map((asset) => asset.uri)) // Store selected images URIs
    }
  }

  const renderImage = ({ item }) => (
    <Image source={{ uri: item }} style={styles.imageThumbnail} />
  )

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectButton}
        onPress={handleSelectImages}
      >
        <FontAwesome6
          name="images"
          size={50}
          color="#03A4FF"
          style={{ marginBottom: 10 }}
        />
        <Text style={styles.text}>Select images from gallery</Text>
      </TouchableOpacity>

      <FlatList
        data={images}
        renderItem={renderImage}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        style={styles.imageGrid}
      />
    </View>
  )
}

export default AddPhotos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 120,
    paddingHorizontal: 15,
  },
  selectButton: {
    borderWidth: 2,
    borderColor: '#03A4FF',
    borderRadius: 10,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: '#6E6E6E',
    marginBottom: 15,
    fontFamily: 'Mulish-Medium',
  },
  imageGrid: {
    flex: 1,
  },
  imageThumbnail: {
    width: 75,
    height: 75,
    margin: 5,
    borderRadius: 10,
  },
})
