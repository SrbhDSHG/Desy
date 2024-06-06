import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { FontAwesome5 } from '@expo/vector-icons'

const RestaurantMap = ({ coordinates, name }) => {
  if (!coordinates || coordinates.length !== 2) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Invalid coordinates</Text>
      </View>
    )
  }

  const latitude = parseFloat(coordinates[0])
  const longitude = parseFloat(coordinates[1])

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude, longitude }}>
          <View style={styles.markerAndTextContainer}>
            <FontAwesome5 name="map-marker-alt" size={30} color="red" />
            <Text style={styles.text}>{name}</Text>
          </View>
        </Marker>
      </MapView>
    </View>
  )
}

export default RestaurantMap

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    width: '100%',
  },
  map: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    padding: 5,
    fontSize: 15,
    color: 'red',
    fontFamily: 'Mulish-SemiBold',
  },
})
