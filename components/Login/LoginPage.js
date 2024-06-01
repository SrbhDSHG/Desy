import { StyleSheet, Text, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import Container from '../UI/Container'
import HeadingCreator from '../UI/HeadingCreator'
import ButtonDesyV2 from '../Utility/ButtonDesy'
function LoginPage() {
  return (
    <Container>
      <HeadingCreator
        headerText={'Enter your credentials'}
        IconComp={
          <AntDesign name="login" size={40} color="rgba(3, 164, 255, 1)" />
        }
      />
      <TextInput
        style={styles.input}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={handleEmailValueChange}
        placeholder="Email address"
        placeholderTextColor="#B2B2B2"
      />
      <ButtonDesyV2 buttonText={'Log in'} isEnabled={{}} />
    </Container>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
