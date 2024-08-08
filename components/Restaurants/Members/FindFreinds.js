import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import ButtonDesyV2 from '../../Utility/ButtonDesy'

export function FindFriends() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="person-outline"
            size={40}
            color="#61b9ec"
            style={styles.icon}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Looking for more friends who have tried this spot?
          </Text>
          <Text style={styles.subtext}>
            Follow more friends to see where they've been eating
          </Text>
        </View>
      </View>
      <ButtonDesyV2
        buttonText={'Find Friends'}
        isEnabled={true} // Disable button when loading
        // onPress={pressToAllowContacts}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    borderColor: '#03A4FF',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    width: '100%',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: '#03A4FF26',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    borderRadius: 25,
    width: 50,
    height: 50,
    marginRight: 10,
  },
  icon: {
    alignSelf: 'center',
    // alignItems: 'flex-start',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
  },
  subtext: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    color: '#6E6E6E',
  },
})

export default FindFriends
