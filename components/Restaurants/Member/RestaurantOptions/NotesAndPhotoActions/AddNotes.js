import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const list = [
  {
    title: 'Your notes',
  },
]

function AddNotes({ navigation }) {
  const [searchValue, setSearchValue] = useState('')
  const route = useRoute()
  const { list } = route.params

  const onValueChange = (text) => {
    console.log('search value', text)
    setSearchValue(text)
  }
  return (
    <View style={styles.container}>
      <View style={styles.noteAdd}>
        <TextInput
          placeholder="Tips,Tricks,things to remember"
          keyboardType="default"
          value={searchValue}
          onChangeText={onValueChange}
          style={styles.textInput}
          placeholderTextColor={'#545454'}
        />
      </View>
    </View>
  )
}

export default AddNotes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  noteAdd: {
    borderRadius: 5,
    marginBottom: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: '#E0E0E0',
  },
  textInput: {
    paddingLeft: 5,
    color: '#E0E0E0',
  },
})
