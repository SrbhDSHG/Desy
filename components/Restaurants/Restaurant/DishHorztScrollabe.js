import React from 'react'
import PopularDishes from './PopularDishes'
import { ScrollView, StyleSheet, View } from 'react-native'

function DishHorztScrollabe({ popularDish }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.dishContainer}>
        {popularDish.map((dish, index) => {
          return (
            <PopularDishes
              key={index}
              imagelink={dish.imagelink}
              dishName={dish.name}
            />
          )
        })}
      </View>
    </ScrollView>
  )
}

export default DishHorztScrollabe

const styles = StyleSheet.create({
  dishContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
})
