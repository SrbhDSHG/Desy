import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { FontAwesome5, Feather } from '@expo/vector-icons'
import LinearGradientShadow from '../../Utility/LinearGradientShadow'

const RestaurantMap = ({ coordinates, name, city }) => {
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
    <View style={styles.container}>
      {/* Semi-transparent overlay over the entire map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.005, // Smaller delta for closer zoom
          longitudeDelta: 0.005,
        }}
      >
        <Marker coordinate={{ latitude, longitude }}>
          <FontAwesome5 name="map-marker-alt" size={30} color="red" />
        </Marker>
      </MapView>

      {/* Semi-transparent overlay */}
      <View style={styles.transparentOverlay} />

      {/* Overlay with restaurant name, city, and icons */}
      <View style={styles.overlayContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Feather name="bookmark" size={24} color="#03A4FF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconSpacing}>
            <Feather name="plus-circle" size={24} color="#03A4FF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default RestaurantMap

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  map: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparentOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: 10,
  },
  name: {
    fontSize: 30,
    fontFamily: 'Mulish-Bold',
    color: '#03A4FF',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginLeft: 15, // Space between icons
  },
})
