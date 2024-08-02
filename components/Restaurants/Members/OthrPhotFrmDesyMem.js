import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import PopularDishes from '../Restaurant/PopularDishes'
import OtherPhotoListHoriz from './OtherPhotoListHoriz'

function OthrPhotFrmDesyMem({ userDishes }) {
  // console.log('userDishes in OthrPhotFrmDesyMem', userDishes)
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.dishContainer}>
        {userDishes.map((dish, index) => {
          return (
            <OtherPhotoListHoriz
              key={index}
              imagelink={dish.imagelink}
              dishName={dish.dishType}
              // recomndState={true}
              // imageHeight={'100%'}
            />
          )
        })}
      </View>
    </ScrollView>
  )
}

export default OthrPhotFrmDesyMem

const styles = StyleSheet.create({
  dishContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
})
