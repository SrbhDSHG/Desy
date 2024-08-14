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
  iconColor = 'black',
  title = true,
  headerTitle = '',
  backgroundColor = 'transparent',
  style = {},
  backButtonEnabled = true,
  backButtonStyle = {},
  titleStyle = {},
  iconContainerStyle = {},
  onCancel,
  rightButton = {}, // Default to an empty object if not provided
}) => {
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }, style]}>
      <View style={[styles.headerContainer, { backgroundColor }]}>
        {backButtonEnabled && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.backButton, backButtonStyle]}
          >
            <AntDesign name="arrowleft" size={size} color={color} />
          </TouchableOpacity>
        )}
        {title && (
          <View style={[styles.titleContainer, titleStyle]}>
            <Text style={[styles.headerTitle, { color }]}>{headerTitle}</Text>
          </View>
        )}
        <View style={[styles.iconContainer, iconContainerStyle]}>
          {icons.map((icon, index) => (
            <Icon
              key={index}
              iconFamily={iconFamily[index]}
              icon={icon}
              size={size}
              color={iconColor}
              onPress={() => {
                // Add your icon press logic here if needed
              }}
            />
          ))}
          {rightButton?.enabled && (
            <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
              <Text
                style={{
                  color: rightButton.color,
                  fontFamily: rightButton.fontFamily,
                  fontSize: rightButton.fontSize,
                }}
              >
                {rightButton.text}
              </Text>
            </TouchableOpacity>
          )}
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
    marginBottom: 5,
  },
  backButton: {
    paddingRight: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center', // Center the title vertically
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelButton: {
    paddingLeft: 15, // Adjust padding to match your layout
  },
})
