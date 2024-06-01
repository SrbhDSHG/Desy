import React from 'react'

function ScreenCreator() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign name="user" size={40} color="rgba(3, 164, 255, 1)" />
      </View>
      <View>
        <Text style={styles.headerText}>What’s your name?</Text>
        <Text>This is how your friends will see you!</Text>
      </View>
      <View>
        <TextInput placeholder="First name" />
        <TextInput placeholder="Last name" />
      </View>
    </View>
  )
}

export default ScreenCreator
