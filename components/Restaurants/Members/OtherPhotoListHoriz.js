import React, { useState } from 'react'
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

function OtherPhotoListHoriz({ imagelink, dishName }) {
  const [loading, setLoading] = useState(true)

  return (
    <View style={styles.photoContainer}>
      {loading && (
        <ActivityIndicator
          size="large"
          color="#03A4FF"
          style={styles.activityIndicator}
        />
      )}
      <ImageBackground
        source={{ uri: imagelink }}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 8 }}
        onLoadEnd={() => setLoading(false)}
        onError={() => setLoading(false)}
      >
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.03)', 'rgba(0, 0, 0, 0.6)']}
          start={{ x: 0, y: 0.7 }}
          end={{ x: 0, y: 0.9 }}
          style={styles.gradient}
        >
          <View style={styles.textAndIconContainer}>
            <Text style={styles.text}>{dishName}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default OtherPhotoListHoriz

const styles = StyleSheet.create({
  photoContainer: {
    width: 140,
    height: 160,
    // marginHorizontal: 5,
    paddingRight: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  activityIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -18,
    marginLeft: -18,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 8,
    // paddingHorizontal: 10,
    // paddingVertical: 10,
  },
  textAndIconContainer: {
    position: 'absolute',
    bottom: 8,
    left: 10,
    width: '100%',
  },
  text: {
    color: 'white',
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
  },
})
