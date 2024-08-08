import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { ImageBackground, Text, TextInput } from 'react-native'
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'
import Entypo from '@expo/vector-icons/Entypo'

function AddFavDish() {
  const [searchValue, setSearchValue] = useState('')
  const route = useRoute()
  const { restaurant } = route.params
  const [loading, setLoading] = useState(true)

  const onValueChange = (text) => {
    console.log('search value', text)
    setSearchValue(text)
  }

  const pressHandler = (dish) => {
    console.log('Dish selected:', dish)
  }

  console.log('restaurant dishes ', restaurant.dishes)
  return (
    <View style={styles.container}>
      <View style={styles.iconAndText}>
        <View style={styles.maginfyIconAndText}>
          <Entypo
            name="magnifying-glass"
            size={24}
            color="#868686"
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Search your favorite dishes..."
            keyboardType="default"
            value={searchValue}
            onChangeText={onValueChange}
            style={styles.textInput}
            placeholderTextColor={'#545454'}
          />
        </View>
      </View>
      <View style={styles.dishesContainer}>
        {restaurant.dishes.map((dish, index) => (
          <Pressable
            onPress={() => pressHandler(dish)}
            key={index}
            style={({ pressed }) => [
              pressed && styles.pressedContainer,
              styles.photoContainer,
            ]}
          >
            {loading && (
              <ActivityIndicator
                size="large"
                color="#03A4FF"
                style={styles.activityIndicator}
              />
            )}
            <ImageBackground
              source={{ uri: dish.imagelink }}
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
                    <Text style={styles.text}>{dish.name}</Text>
                    <View style={styles.iconBox}>
                      <AntDesign name="pluscircleo" size={14} color="white" />
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </ImageBackground>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

export default AddFavDish

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  iconAndText: {
    width: '100%', // Take full width
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    marginBottom: 10, // Add margin to separate from the list below
  },
  maginfyIconAndText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    flex: 1, // Take full width
  },
  textInput: {
    flex: 1, // Take full width
  },
  dishesContainer: {
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
    alignItems: 'flex-end', // Align items to the end for better visual alignment
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
    flex: 1, // Allow text to take available space
    flexWrap: 'wrap', // Allow text to wrap to the next line
  },
  activityIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -18,
    marginLeft: -18,
  },
})
