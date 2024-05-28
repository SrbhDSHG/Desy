import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import ButtonDesyV2 from '../Utility/ButtonDesy'
import { useData } from '../store/context/DataContext'

function UserName({ navigation }) {
  const { usrName, setUsrName } = useData()
  // const [usrName, setUsrName] = useState('')

  const handleChangeUsrName = (text) => {
    setUsrName(text)
  }
  const onPressHandler = () => {
    setTimeout(() => {
      navigation.navigate('Createpass')
    }, 300)
  }
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Entypo name="email" size={40} color="rgba(3, 164, 255, 1)" />
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.headerText}>Your username</Text>
        <Text style={styles.bodyText}>
          How do you want to be known on Desy?
        </Text>
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.textAtDrate}>@</Text>
          <TextInput
            style={styles.input}
            value={usrName}
            onChangeText={handleChangeUsrName}
            placeholder="Enter username"
            placeholderTextColor="#B2B2B2"
          />
          {usrName.length > 1 && (
            <View style={styles.rightIconContainer}>
              <AntDesign name="checkcircle" size={24} color="#24b924" />
            </View>
          )}
        </View>
      </View>
      {/* <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}> */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: '400',
          color: '#B2B2B2',
          marginTop: -20,
        }}
      >
        You can always change this later.
      </Text>
      {/* </View> */}
      <View style={styles.buttonContainer}>
        <ButtonDesyV2
          buttonText="Continue"
          onPress={onPressHandler}
          isEnabled={usrName.length > 1}
        />
      </View>
    </View>
  )
}

export default UserName
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  textsContainer: {
    marginVertical: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#E9F7FF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  rightIconContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingRight: 10,
  },
  // headerTextContainer: {
  //   marginVertical: 10,
  // },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
  },
  bodyText: {
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 10,
  },
  inputsContainer: {
    marginVertical: 30,
    width: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#B2B2B2',
    color: '#B2B2B2',
  },
  input: {
    height: 40,
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
    width: '100%',
  },
  textAtDrate: {
    marginRight: 5,
  },

  buttonContainer: {
    marginTop: 80,
  },
})
