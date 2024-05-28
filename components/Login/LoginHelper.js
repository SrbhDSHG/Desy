import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import LoginPage from './LoginPage'

function LoginHelper({ navigation }) {
  console.log('navigation object', navigation)
  return (
    <View style={styles.logincontiner}>
      <Text style={styles.logintext}>Already have an account? </Text>
      <Pressable onPress={() => navigation.navigate('Loginpage')}>
        <Text style={styles.logintextColor}>Log in</Text>
      </Pressable>
    </View>
  )
}

export default LoginHelper

const styles = StyleSheet.create({
  logincontiner: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  logintext: { fontWeight: '100', fontSize: 16 },
  logintextColor: {
    color: '#03A4FF',
    fontSize: 16,
  },
})
