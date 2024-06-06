import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const RestaurantMap = ({ coordinates, name }) => {
  if (!coordinates) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Invalid coordinates</Text>
      </View>
    )
  }

  const latitude = parseFloat(coordinates[0])
  const longitude = parseFloat(coordinates[1])
  console.log(latitude, longitude)

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922, //how much content besides center
          longitudeDelta: 0.0421, //how much content besides center
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          title={name}
        />
      </MapView>
    </View>
  )
}

export default RestaurantMap

const styles = StyleSheet.create({
  map: {
    flex: 1,
    // backgroundColor: 'green ',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
