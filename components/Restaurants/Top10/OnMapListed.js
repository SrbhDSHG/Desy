import { StyleSheet, View } from 'react-native'
import HomeScreenMap from '../../UI/HomeScreenMap'
import ListAndMapTab from './ListAndMapTab'
function OnMapListed({ activeTab, handlePress, tabs }) {
  return (
    <View style={styles.container}>
      <View style={styles.listAndMap}>
        <ListAndMapTab
          activeTab={activeTab}
          handlePress={handlePress}
          tabs={tabs}
        />
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
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
  },
})
