import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from './Icon'

const CustomHeader = ({
  navigation,
  iconFamily = [],
  icons = [],
  size = 24,
  color = 'black',
  title = true,
  headerTitle = '',
  backgroundColor = 'transparent',
  elevation = 0,
}) => {
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor, elevation }]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <AntDesign name="arrowleft" size={size} color={color} />
        </TouchableOpacity>
        {title && (
          <View style={styles.titleContainer}>
            <Text style={[styles.headerTitle, { color }]}>{headerTitle}</Text>
          </View>
        )}
        <View style={styles.iconContainer}>
          {icons.map((icon, index) => (
            <Icon
              key={index}
              iconFamily={iconFamily[index]}
              icon={icon}
              size={size}
              color={color}
              onPress={() => {
                // Add your icon press logic here if needed
              }}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 0,
  },
  backButton: {
    paddingRight: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
