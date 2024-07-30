import React, { useState } from 'react'
import { Pressable, StyleSheet, View, Text, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import {
  MediaTypeOptions,
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import YouAreIn from './YouAreIn'
import { useData } from '../store/context/DataContext'

function AddProfilePhoto({ navigation }) {
  const { photoAdded, setPhotoAdded, userPhoto, setUserPhoto } = useData()

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions()

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission() // open a dialog and wait for user's permission
      return permissionResponse.granted // retruned promise is resolved to true of false.
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Permission Denied! , You need to grant camera permission to add photo'
      )
      return false
    }
    return true
  }

  const pressToAddPhoto = async () => {
    const hasPermission = await verifyPermissions()
    if (!hasPermission) {
      verifyPermissions()
    }
    const img = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    })

    if (!img.canceled) {
      setUserPhoto(img.assets[0].uri)

      setPhotoAdded(true)
    } else {
      console.log('Image capture canceled')
    }
  }

  const onPressHandler = () => {
    setTimeout(() => {
      navigation.navigate('Eating Most At')
    }, 300)
  }
  const askMeLater = () => {
    console.log('Ask me later')
    onPressHandler()
  }

  const pressHandler = () => {
    Alert.alert(
      'You skipped it !',
      'No photo added this time, comeback whenever you change your mind.',
      [
        { text: 'Ask me later', onPress: () => askMeLater() },
        { text: 'Ok', onPress: () => onPressHandler() },
      ]
    )
  }
  return (
    <View style={styles.container}>
      {photoAdded ? (
        <YouAreIn photoSource={userPhoto} navigation={navigation} />
      ) : (
        <>
          <View style={styles.cardWrapper}>
            <View style={styles.cardContainer}>
              <View style={styles.iconContainer}>
                <MaterialIcons
                  name="add-a-photo"
                  size={80}
                  color="rgba(3, 164, 255, 1)"
                />
              </View>
              <View style={styles.textsContainer}>
                <Text style={styles.headerText}>Add your profile photo</Text>
                <Text style={styles.bodyText}>
                  Show off the face behind the Desy.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <ButtonDesyV2
              onPress={pressToAddPhoto}
              buttonText="Add a photo"
              isEnabled={true}
            />
          </View>
          <Pressable onPress={pressHandler}>
            <Text style={styles.notNowText}>Not now</Text>
          </Pressable>
        </>
      )}
    </View>
  )
}

export default AddProfilePhoto

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#EFF9FF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: '700',
  },
  textsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardWrapper: {
    borderRadius: 10,
    overflow: 'hidden', // Clip child views to the bounds of this View
    elevation: 0.3,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 350,
    width: 300,
    // borderRadius: 10, // Same as the wrapper for consistency
    backgroundColor: '#EFF9FF',
    // paddingHorizontal: ,
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 80,
    // marginBottom: 20,
  },
  notNowText: {
    color: '#6E6E6E',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
})
