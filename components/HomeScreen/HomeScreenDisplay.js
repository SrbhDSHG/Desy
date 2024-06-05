import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import ButtonDesy from '../Utility/ButtonDesy'

import { AntDesign } from '@expo/vector-icons'
import { Platform } from 'react-native'
// import StartScreenMap from '../UI/StartScreenMap'
import LoginHelper from '../Login/LoginHelper'
import SlideInfoDisplay from './SlideInfoDisplay'
import GradientText from './GradientTextV2'
import StartScreenMap from '../UI/MapScreen'

function HomeScreenDisplay({ navigation }) {
  const onPressHandler = () => {
    setTimeout(() => {
      navigation.navigate('SignUpContact')
    }, 300)
  }
  return (
    <View>
      <View style={styles.map}>
        <StartScreenMap />
      </View>
      <View style={styles.ellipse} />
      <View style={styles.container}>
        <GradientText style={styles.desyTextStyle}>Desy</GradientText>
        <SlideInfoDisplay />
        <ButtonDesy
          onPress={onPressHandler}
          buttonText="Get Started"
          isEnabled={true}
        >
          <View style={styles.arrowIconContainer}>
            <AntDesign name="arrowright" size={24} color="white" />
          </View>
        </ButtonDesy>

        <View style={styles.logincontiner}>
          <Text style={styles.logintext}>Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate('Loginpage')}>
            <Text style={styles.logintextColor}>Log in</Text>
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.footerText}>
            By continuing, you agree to our{' '}
            <Text style={[styles.footerText, styles.span]}>Terms</Text>
            .You acknowledge receipt and understanding of our
            <Text style={[styles.footerText, styles.span]}>
              {' '}
              Privacy Policy
            </Text>{' '}
            and
            <Text style={[styles.footerText, styles.span]}> Cookie Notice</Text>
            .
          </Text>
        </View>
      </View>
    </View>
  )
}

export default HomeScreenDisplay

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'transparent',
  },
  map: {
    width: '100%',
    height: '60%',
    position: 'absolute',
  },
  ellipse: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'white',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    top: 400,
    width: '100%',
    height: '50%',
    // height: 400,
    transform: [{ scaleX: 1.3 }],
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  desyText: {
    color: '#03A4FF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  bodyText: {
    color: '#000000',
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 40,
  },
  footerText: {
    color: '#9c9c9c',
    fontSize: 13,
    textAlign: 'center',
    marginVertical: 5,
    paddingHorizontal: 13,
    // fontFamily: 'Des',
  },
  span: {
    color: '#03A4FF',
  },
  logincontiner: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  logintext: { fontSize: 16, fontFamily: 'Mulish-Medium', color: '#9c9c9c' },
  logintextColor: {
    color: '#03A4FF',
    fontSize: 16,
  },
  arrowIconContainer: {
    marginLeft: 5,
  },
  desyTextStyle: {
    fontFamily: 'Philosopher-Bold',
    fontSize: 30,
  },
})
