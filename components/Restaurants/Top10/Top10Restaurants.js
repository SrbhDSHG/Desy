import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import TopDish from '../../Utility/StaticData/DishesPics/TopPic.jpeg'
import ListAndMapTab from './ListAndMapTab'
import Top10ListCreator from './Top10ListCreator'

import InfoText from './InfoText'

function Top10Restaurants({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.TopDishPicContainer}>
        <ImageBackground source={TopDish} style={styles.TopDishPic} />
        <View style={styles.desyListMapContainer}>
          <Text style={styles.desyText}>Desy</Text>
          <ListAndMapTab
            navigation={navigation}
            backgroundColor={'#FFFFFFBF'}
          />
        </View>
        <InfoText />
      </View>
      <View style={styles.ListItem}>
        <Top10ListCreator navigation={navigation} />
      </View>
    </View>
  )
}

export default Top10Restaurants

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  textColor: {
    color: '#FFFFFFFF',
  },

  TopDishPicContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    // paddingHorizontal: 30,
  },
  TopDishPic: {
    width: 550,
    height: 380,
    left: -10,
    transform: [{ rotate: '-90deg' }],
  },
  desyListMapContainer: {
    position: 'absolute',
    top: 40,
  },
  desyText: {
    fontFamily: 'Philosopher-Bold',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },

  ListItem: {
    flex: 0.5,
    width: '100%',
    marginTop: 50,
    backgroundColor: 'white',
  },
})
