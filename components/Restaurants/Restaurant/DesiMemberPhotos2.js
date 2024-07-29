import React from 'react'
import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { FontAwesome5, AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

function DesyMemberPhotos2({ dishPhotos, loading, setLoading }) {
  console.log('dishPhotos passed in desyMemberPhotos2', dishPhotos)
  const pressHandler = (photo) => {
    console.log('pressed photo', photo)
    navigation.navigate('MemberProfile', { photo })
  }
  return (
    <View style={styles.container}>
      {dishPhotos.map((photo, index) => (
        <Pressable
          onPress={() => pressHandler(photo)}
          key={index}
          style={({ pressed }) => [
            pressed && styles.pressedContainer,
            styles.photoContainer,
          ]}
          // style={[styles.photoContainer]}
        >
          {loading && (
            <ActivityIndicator
              size="large"
              color="#03A4FF"
              style={styles.activityIndicator}
            />
          )}
          <ImageBackground
            source={{ uri: photo.imagelink }}
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 8 }}
          >
            <View style={styles.textAndIconContainer}>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.03)', 'rgba(0, 0, 0, 0.6)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.5 }}
                style={styles.gradient}
              >
                <View style={styles.textAndIcon}>
                  <Text style={styles.text}>{photo.dishType}</Text>
                  <View style={styles.iconContainer}>
                    <View style={styles.iconBox}>
                      <FontAwesome5 name="fire" size={14} color="white" />
                    </View>
                    <View style={styles.iconBox}>
                      <AntDesign name="hearto" size={14} color="white" />
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </ImageBackground>
        </Pressable>
      ))}
    </View>
  )
}

export default DesyMemberPhotos2

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photoContainer: {
    width: '48%',
    height: 175,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textAndIconContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  textAndIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pressedContainer: {
    opacity: 0.5,
    backgroundColor: '#E9F7FF',
  },
  iconBox: {
    backgroundColor: '#959595B3',
    marginLeft: 8,
    borderRadius: 6,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
  },
  activityIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -18,
    marginLeft: -18,
  },
})
