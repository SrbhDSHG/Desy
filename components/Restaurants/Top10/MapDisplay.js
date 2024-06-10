import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'

const MapDisplay = ({ locations }) => {
  const [initialRegion, setInitialRegion] = useState(null)
  const [markers, setMarkers] = useState([])

  useEffect(() => {
    if (locations.length > 0) {
      const firstLocation = locations[0]
      setInitialRegion({
        latitude: parseFloat(firstLocation.coordinates[0]),
        longitude: parseFloat(firstLocation.coordinates[1]),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
      const markerData = locations
        .map((location, index) => {
          if (
            !location ||
            !location.coordinates ||
            location.coordinates.length !== 2
          ) {
            return null // Skip rendering if coordinates are invalid or missing
          }
          const latitude = parseFloat(location.coordinates[0])
          const longitude = parseFloat(location.coordinates[1])
          return {
            id: index,
            latitude,
            longitude,
            name: location.name,
          }
        })
        .filter((marker) => marker !== null)
      setMarkers(markerData)
    }
  }, [locations])

  if (!Array.isArray(locations) || locations.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Invalid or empty coordinates</Text>
      </View>
    )
  }

  if (!initialRegion) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading map...</Text>
      </View>
    )
  }

  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          >
            <Callout>
              <Text>{marker.name}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  )
}

export default MapDisplay

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
})
