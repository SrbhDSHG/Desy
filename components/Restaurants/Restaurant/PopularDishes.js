import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'

function PopularDishes({ imagelink, dishName, recommended = '123' }) {
  const [loading, setLoading] = useState(true)

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {loading && (
            <ActivityIndicator
              size="large"
              color="#03A4FF"
              style={styles.activityIndicator}
            />
          )}
          <Image
            style={styles.image}
            source={{ uri: imagelink }}
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.dishName} numberOfLines={1}>
            {dishName}
          </Text>
          <Text style={styles.recommended}>{`${recommended} recommended`}</Text>
        </View>
      </View>
    </View>
  )
}

export default PopularDishes

const styles = StyleSheet.create({
  container: {
    width: 135,
    height: 140,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    marginRight: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  activityIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -18,
    marginLeft: -18,
  },
  image: {
    width: 135,
    height: 80,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  textContainer: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    height: 60,
    justifyContent: 'center',
  },
  dishName: {
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
    marginVertical: 2,
    flexShrink: 1,
  },
  recommended: {
    fontFamily: 'Mulish-Regular',
    fontSize: 13,
    color: '#6E6E6E',
  },
})
