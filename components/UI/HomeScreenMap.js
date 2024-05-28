import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Dimensions,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'

export default function StartScreenMap() {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [mapDimensions, setMapDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  })

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied')
          return
        }

        const loc = await Location.getCurrentPositionAsync({})
        setLocation(loc.coords)
      } catch (error) {
        setErrorMsg('Permission to access location was denied')
        console.error(error)
      }
    }

    getLocation()

    const updateDimensions = () => {
      setMapDimensions({
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      })
    }

    Dimensions.addEventListener('change', updateDimensions)

    return () => {
      Dimensions.removeEventListener('change', updateDimensions)
    }
  }, [])

  if (errorMsg) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{errorMsg}</Text>
      </View>
    )
  }

  if (location === null) {
    return (
      <ActivityIndicator
        size="large"
        color="#03A4FF"
        style={styles.loadingIndicator}
      />
    )
  }

  return (
    <View style={{ ...styles.mapContainer, ...mapDimensions }}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="Your Location"
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
})
