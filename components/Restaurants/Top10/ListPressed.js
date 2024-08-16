import React from 'react'
import ListAndMapTab from './ListAndMapTab'
import Top10ListCreator from './Top10ListCreator'
import { StyleSheet, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

function ListPressed({ navigation }) {
  const route = useRoute()
  const { top10RestList, dishType } = route.params
  console.log('in the  list pressed', dishType)
  return (
    <View style={styles.container}>
      <View style={styles.forElevation}>
        <View style={styles.listAndMap}>
          <ListAndMapTab
            navigation={navigation}
            backgroundColor={'#E9F7FF'}
            top10RestList={top10RestList}
            dishType={dishType}
          />
        </View>
      </View>
      <View style={styles.top10ListContainer}>
        <Top10ListCreator
          navigation={navigation}
          top10RestList={top10RestList}
          dishType={dishType}
        />
      </View>
    </View>
  )
}

export default ListPressed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  forElevation: {
    width: '100%',
    paddingBottom: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  listAndMap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  top10ListContainer: {
    flex: 1,
  },
})
