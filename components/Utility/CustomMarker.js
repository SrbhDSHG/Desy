import React from 'react'
import { View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
function CustomMarker(name) {
  return (
    <View style={Styles.markerContainer}>
      <View>
        <FontAwesome5 name="map-marker-alt" size={24} color="black" />
      </View>
      <Text>{name}</Text>
    </View>
  )
}

export default CustomMarker

const Styles = StyleSheet.create({
  markerContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    position: 'absolute',
    flexDirection: 'row',
  },
})
