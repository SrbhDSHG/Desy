import React from 'react'
import ListAndMapTab from './ListAndMapTab'
import Top10ListCreator from './Top10ListCreator'
import { Top10DishList } from '../../Utility/StaticData/Top10ResData'
import { StyleSheet, View } from 'react-native'
import Container from '../../UI/Container'
const TopTenReversed = Top10DishList.slice().reverse()
function ListPressed({ activeTab, handlePress, tabs }) {
  return (
    <View style={styles.container}>
      <View style={styles.listAndMap}>
        <ListAndMapTab
          activeTab={activeTab}
          handlePress={handlePress}
          tabs={tabs}
        />
      </View>
      <View style={styles.top10}>
        <Top10ListCreator ListedRest={TopTenReversed} />
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
  listAndMap: {
    marginTop: 200,
    elevation: 2,

    width: '100%',
  },
  top10: {
    position: 'relative',
  },
})
