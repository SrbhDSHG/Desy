import React from 'react'
import { TouchableOpacity } from 'react-native'
import {
  Feather,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from '@expo/vector-icons' // Add more icon families as needed

const Icon = ({ iconFamily, icon, size, color, onPress }) => {
  let IconComponent
  switch (iconFamily) {
    case 'Feather':
      IconComponent = Feather
      break
    case 'AntDesign':
      IconComponent = AntDesign
      break
    case 'MaterialIcons':
      IconComponent = MaterialIcons
      break
    case 'MaterialCommunityIcons':
      IconComponent = MaterialCommunityIcons
      break
    case 'Entypo':
      IconComponent = Entypo
      break
    // Add more cases for other icon families
    default:
      IconComponent = AntDesign // Default to AntDesign if no family is specified
  }

  return (
    <TouchableOpacity onPress={onPress} style={{ marginLeft: 10 }}>
      <IconComponent name={icon} size={size} color={color} />
    </TouchableOpacity>
  )
}

export default Icon
