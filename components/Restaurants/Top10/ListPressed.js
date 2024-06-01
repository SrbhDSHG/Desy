import React from 'react'
import ListAndMapTab from './ListAndMapTab'
import Top10ListCreator from './Top10ListCreator'
import { StyleSheet, View } from 'react-native'

function ListPressed({ navigation }) {
  // const { setActiveTab } = useData()
  return (
    <View style={styles.container}>
      <View style={styles.forElevation}>
        <View style={styles.listAndMap}>
          <ListAndMapTab navigation={navigation} backgroundColor={'#E9F7FF'} />
        </View>
      </View>
      <View style={styles.top10ListContainer}>
        <Top10ListCreator />
      </View>
    </View>
  )
}

export default ListPressed
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  forElevation: {
    marginTop: 30,
    elevation: 5,
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  listAndMap: {
    justifyContent: 'center',
    alignItems: 'center',

    // paddingVertical: 2,
  },
  top10ListContainer: {
    // position: 'absolute',
  },
})
