import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconContainer from './IconContainer'

function PriceAndLocatio({ list, iconEnable = true }) {
  return (
    <View>
      <View style={styles.priceAndType}>
        <Text style={[styles.price, styles.fontTypeToSubLettr]}>
          {list.price}
        </Text>
        <Text style={styles.vertical}>|</Text>
        <Text style={[styles.type, styles.fontTypeToSubLettr]}>
          {`${list.dishType}`}
        </Text>
      </View>
      <Text style={[styles.location, styles.fontTypeToSubLettr]}>
        {`${list.address.borough}, ${list.address.neighbourhood}`}
      </Text>
      {iconEnable && <IconContainer />}
    </View>
  )
}

export default PriceAndLocatio
const styles = StyleSheet.create({
  priceAndType: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  vertical: {
    marginHorizontal: 5,
  },
  fontTypeToSubLettr: {
    fontFamily: 'Mulish-Medium',
    fontSize: 14,
    color: '#4E4E4E',
  },
})
