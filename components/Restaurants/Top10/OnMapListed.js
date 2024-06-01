import { StyleSheet, View } from 'react-native'
import HomeScreenMap from '../../UI/HomeScreenMap'
import ListAndMapTab from './ListAndMapTab'
function OnMapListed({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.listAndMap}>
        <ListAndMapTab navigation={navigation} backgroundColor={'#FFFFFFBF'} />
      </View>
      <HomeScreenMap />
    </View>
  )
}

export default OnMapListed
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  listAndMap: {
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
  },
})
