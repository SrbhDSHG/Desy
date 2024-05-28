import { StyleSheet, View } from 'react-native'
import HomeScreenMap from '../../UI/HomeScreenMap'
function OnMapListed() {
  return (
    <View style={styles.container}>
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
})
