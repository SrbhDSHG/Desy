import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useData } from '../../store/context/DataContext'

function ListAndMapTab({
  navigation,
  backgroundColor,
  top10RestList,
  dishType,
}) {
  const { tabs, activeTab, setActiveTab, setTabSelected } = useData()

  const handlePress = (tab) => {
    setActiveTab(tab)
    setTabSelected(true)
    console.log(`${tab} pressed`)

    if (tab === 'List') {
      console.log('dish type ', dishType)
      navigation.navigate('List View Pressed', { top10RestList, dishType })
    }
    if (tab === 'Map') {
      console.log('dish type ', dishType)
      navigation.navigate('OnMapListed', { top10RestList, dishType })
    }
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {tabs.map((tab, index) => (
        <Pressable key={index} onPress={() => handlePress(tab.text)}>
          <View
            style={[
              styles.tab,
              activeTab === tab.text && styles.pressedBackground,
            ]}
          >
            <Feather
              name={tab.iconName}
              size={18}
              style={[
                styles.iconColor,
                activeTab === tab.text && styles.iconPressedColor,
              ]}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === tab.text && styles.pressedColor,
              ]}
            >
              {tab.text}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  )
}

export default ListAndMapTab

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFFBF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    // marginTop: 5,
  },
  tab: {
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    borderRadius: 10,
  },
  pressedBackground: {
    backgroundColor: '#1C8AC8',
    borderRadius: 10, // Ensure borderRadius is applied to the pressed state
  },
  pressedColor: {
    color: 'white',
  },
  tabText: {
    color: '#03A4FF',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
  },
  iconColor: {
    color: '#03A4FF',
  },
  iconPressedColor: {
    color: 'white',
  },
})
