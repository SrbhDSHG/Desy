import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

function FriendsList({ route }) {
  const { friends } = route.params

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text style={styles.friendName}>{item.name}</Text>
            <Text style={styles.friendEmail}>{item.email}</Text>
            {item.phoneNumber && (
              <Text style={styles.friendPhone}>{item.phoneNumber}</Text>
            )}
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  friendItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  friendName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  friendEmail: {
    fontSize: 16,
  },
  friendPhone: {
    fontSize: 16,
  },
})

export default FriendsList
