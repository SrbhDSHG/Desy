import { createContext, useContext, useState } from 'react'
import { fetchEmailVerify, fetchOtpVerify } from './DataService'

const defaultValue = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  setEmail: () => {},
  usrName: '',
  setUsrName: () => {},
  password: '',
  setPassword: () => {},

  cuisineNotLike: [],
  setCuisineNotLike: () => {},
  image: '',
  setImage: () => {},
  cuisineNotLike: [],
  setCuisineNotLike: () => {},
  dietaryRestriction: [],
  setDietaryRestriction: () => {},
  defaultCity: '',
  setDefaultCity: () => {},
}

export const DataContext = createContext(defaultValue)

export const useData = () => useContext(DataContext)
function DataProvider({ children }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [usrName, setUsrName] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState(null)
  const [photoAdded, setPhotoAdded] = useState(false)
  const [cuisineNotLike, setCuisineNotLike] = useState([])
  const [dietaryRestriction, setDietaryRestriction] = useState([])
  const [defaultCity, setDefaultCity] = useState([])
  const [emailVerified, setEmailVerified] = useState(false)

  // firstName && console.log('firstName: , lastName:', firstName, lastName)
  // phoneNumber && console.log('phoneNumber:', phoneNumber)
  // email && console.log('email:', email)
  // password && console.log('password:', password)
  // image && console.log('image:', image)
  // cuisineNotLike && console.log('cuisineNotLike:', cuisineNotLike)
  // usrName && console.log('usrName:', usrName)
  // defaultCity && console.log('defaultCity:', defaultCity)
  const emailverification = async (email) => {
    console.log('In the  data context', email)
    const response = await fetchEmailVerify(email)
    return response
  }
  const otpverification = async (email, otp) => {
    console.log('In the  data context', email, otp)
    const response = await fetchOtpVerify(email, otp)
    console.log('response of otp verification', response.data)
    return response.data
  }

  const value = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    usrName,
    setUsrName,
    email,
    setEmail,
    password,
    setPassword,
    image,
    setImage,
    photoAdded,
    setPhotoAdded,
    defaultCity,
    setDefaultCity,
    cuisineNotLike,
    setCuisineNotLike,
    dietaryRestriction,
    setDietaryRestriction,
    emailVerified,
    emailverification,
    otpverification,
    setEmailVerified,
  }
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export default DataProvider
