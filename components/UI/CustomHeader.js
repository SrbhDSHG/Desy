import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'
import Icon from './Icon'

const CustomHeader = ({
  navigation,
  iconFamily = [],
  icons = [],
  size = 24,
  color = 'black',
}) => {
  // console.log('Navigation', navigation)
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={size} color={color} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Restaurant Menu</Text>
      <View style={styles.iconContainer}>
        {iconFamily.map((family, index) => (
          <Icon
            key={index}
            iconFamily={family}
            icon={icons[index]}
            size={size}
            color={color}
            onPress={() => {
              // Add your navigation logic here if needed
            }}
          />
        ))}
      </View>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'transparent',
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
