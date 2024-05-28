import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { countryCode } from '../Utility/StaticData/PhoneNumberInput' // Import the country code array
import { MaterialIcons } from '@expo/vector-icons'
import ButtonDesy from '../Utility/ButtonDesy'
import { useData } from '../store/context/DataContext'

function formatPhoneNumber(value) {
  // Format the phone number as '234-567-8901'
  // Remove all non-numeric characters from the input
  const formattedText = value.replace(/\D/g, '')
  // Format the phone number as '234-567-8901'
  return formattedText.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
}

function SignUpContanct({ navigation }) {
  const { setPhoneNumber } = useData()
  const [phoneInput, onChangePhoneInput] = useState('')
  const [selectedCountryCode, setSelectedCountryCode] = useState({
    name: 'United States',
    dial_code: '+1',
    code: 'US',
  })
  const [filteredCountryCodes, setFilteredCountryCodes] = useState(countryCode)
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const selectCountryCode = (item) => {
    setSelectedCountryCode(item)
    setShowDropdown(false)
  }

  const handleInputChange = (text) => {
    const formattedPhoneNumber = formatPhoneNumber(text)
    onChangePhoneInput(formattedPhoneNumber)
  }

  const renderCountryCodeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.countryCodeItem}
      onPress={() => selectCountryCode(item)}
    >
      <Text>{`${item.name} (${item.dial_code})`}</Text>
    </TouchableOpacity>
  )

  const onPressHandler = () => {
    setPhoneNumber(selectedCountryCode.dial_code + phoneInput)
    setTimeout(() => {
      navigation.navigate('NameInput')
    }, 300)
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather
          style={styles.icon}
          name="phone"
          size={40}
          color="rgba(3, 164, 255, 1)"
        />
      </View>
      <View style={styles.textsContainer}>
        <Text style={styles.headerText}>First, what’s your phone number?</Text>
        <Text style={styles.bodyText}>
          By submitting your phone number, you consent to receive information
          messages at that number from Desy. Message and data rates may apply.
          See our <Text style={styles.span}>Privacy Policy</Text> and{' '}
          <Text style={styles.span}>Terms of Service</Text> for more
          information.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TouchableOpacity
            style={styles.countryCodeContainer}
            onPress={toggleDropdown}
          >
            <TextInput
              style={styles.inputCountryCode}
              placeholder="+1"
              value={
                selectedCountryCode ? `${selectedCountryCode.dial_code}` : ''
              }
              editable={false}
            />
            <View style={{ marginLeft: 1, marginTop: 5 }}>
              <MaterialIcons name="arrow-drop-down" size={30} color="black" />
            </View>
          </TouchableOpacity>
          <View style={styles.inputPhoneNumberContainer}>
            {phoneInput === '' && (
              <Text style={styles.placeholder}>Enter phone number</Text>
            )}
            <TextInput
              style={styles.inputPhoneNumber}
              value={phoneInput}
              maxLength={12}
              onChangeText={handleInputChange}
              keyboardType="phone-pad"
              placeholder=""
              placeholderTextColor="#B2B2B2"
            />
          </View>
        </View>
        {showDropdown && (
          <FlatList
            style={styles.dropdownList}
            data={filteredCountryCodes}
            renderItem={renderCountryCodeItem}
            keyExtractor={(item) => item.code}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <ButtonDesy
          onPress={onPressHandler}
          buttonText="Submit"
          isEnabled={phoneInput.length > 11}
        />
      </View>
    </View>
  )
}

export default SignUpContanct

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#E9F7FF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  textsContainer: {
    marginVertical: 20,
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'Mulish-Bold',
  },
  bodyTextContainer: {
    marginVertical: 10,
  },
  bodyText: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
  },
  span: {
    color: '#03A4FF',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 30,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    width: '20%',
    borderBottomWidth: 1,
    borderBottomColor: '#B2B2B2',
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  inputCountryCode: {
    height: 40,
    fontSize: 20,
    color: '#000000',
    fontWeight: '700',
  },
  inputPhoneNumberContainer: {
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: '#B2B2B2',
    color: '#B2B2B2',
  },
  inputPhoneNumber: {
    height: 40,
    paddingHorizontal: 10,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 25,
    fontFamily: 'Mulish-Regular', // Apply font family to input text
  },
  placeholder: {
    position: 'absolute',
    top: 0,
    left: 10,
    height: 40,
    lineHeight: 40,
    color: '#B2B2B2',
    fontSize: 20,
    fontFamily: 'Mulish-Bold', // Apply font family to placeholder text
  },
  buttonContainer: {
    marginTop: 80,
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '40%',
    maxHeight: 200,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#B2B2B2',
    borderRadius: 5,
    elevation: 5,
  },
  countryCodeItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#B2B2B2',
  },
})
