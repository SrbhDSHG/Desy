import { StyleSheet, View } from 'react-native'
import MapScreen from '../../UI/MapScreen'
import ListAndMapTab from './ListAndMapTab'
import MapDisplay from './MapDisplay'
import { useData } from '../../store/context/DataContext'
function OnMapListed({ navigation }) {
  const { top10RestList } = useData()

  // console.log('coordinates', coordinates)
  return (
    <View style={styles.container}>
      <View style={styles.listAndMap}>
        <ListAndMapTab navigation={navigation} backgroundColor={'#FFFFFFBF'} />
      </View>
      <MapDisplay locations={top10RestList} />
      {/* <MapScreen /> */}
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
