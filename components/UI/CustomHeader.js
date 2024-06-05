import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from './Icon'

const CustomHeader = ({
  navigation,
  iconFamily,
  icon,
  size,
  color,
  onPress,
}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon iconFamily="AntDesign" icon="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Restaurant Menu</Text>
      <View style={styles.iconContainer}>
        <Icon
          iconFamily={iconFamily}
          icon={['share']}
          size={24}
          color="black"
          onPress={() => navigation.navigate('')}
        />
        {/* <Icon
          iconFamily="AntDesign"
          icon={['share']}
          size={24}
          color="black"
          onPress={() => navigation.navigate('')}
        />
        <Icon
          iconFamily="AntDesign"
          icon={[]}
          size={24}
          color="black"
          onPress={() => navigation.navigate('')}
        /> */}
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
    marginTop: 15,
    paddingTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    // opacity: 0.5,
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
