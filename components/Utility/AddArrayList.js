import React from 'react'
import { useData } from '../store/context/DataContext'

// export const AddCityList = (city, currentList) => {
//   console.log('City passed down', city)
//   if (currentList.includes(city)) {
//     const updatedList = currentList.filter((c) => c !== city)
//     return updatedList.length === 0 ? [] : updatedList
//   } else {
//     return [...currentList, city]
//   }
// }

export const addArrayList = (list, currentList) => {
  console.log('list passed down', list)
  if (currentList.includes(list)) {
    const updatedList = currentList.filter((c) => c !== list)
    return updatedList.length === 0 ? [] : updatedList
  } else {
    return [...currentList, list]
  }
}
