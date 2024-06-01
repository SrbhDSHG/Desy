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
        <Top10ListCreator />
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
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    // paddingHorizontal: 30,
  },
  TopDishPic: {
    width: 550,
    height: 446,
    left: -10,
    transform: [{ rotate: '-90deg' }],
  },
  desyListMapContainer: {
    position: 'absolute',
    top: 50,
  },
  desyText: {
    fontFamily: 'Philosopher-Bold',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  map: {
    marginVertical: 5,
  },

  ListItem: {
    flex: 1,
    // ?marginTop: 10,
    backgroundColor: 'white',
  },
})
