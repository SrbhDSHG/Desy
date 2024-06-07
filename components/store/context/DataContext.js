import { createContext, useContext, useEffect, useState } from 'react'
import {
  fetchEmailVerify,
  fetchOtpVerify,
  fetchRestaurants,
  sendUserData,
} from './DataService'
import { useTabs } from '../useTabs'
import {
  Foundation,
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

const defaultValue = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  setEmail: () => {},
  userName: '',
  setUsrName: () => {},
  password: '',
  setPassword: () => {},

  cuisineNotLike: [],
  setCuisineNotLike: () => {},
  imagelink: '',
  setImage: () => {},
  cuisineNotLike: [],
  setCuisineNotLike: () => {},
  dietaryRestriction: [],
  setDietaryRestriction: () => {},
  defaultCity: '',
  setDefaultCity: () => {},
  tabSelected: '',
  setTabSelected: () => {},
  activeTab: '',
  setActiveTab: () => {},
}
export const tabs = [
  { text: 'List', iconName: 'list' },
  { text: 'Map', iconName: 'map-pin' },
]

export const restauOptionHeader = [
  { id: 0, text: 'Date Night' },
  { id: 1, text: 'Short list' },
  { id: 2, text: 'Tasting Menu' },
  { id: 3, text: 'Atmosphere' },
]

export const RestauInfo = [
  {
    id: 0,
    text: 'Website',
    icon: <Foundation name="web" size={14} color={'#03A4FF'} />,
  },
  {
    id: 1,
    text: 'Call',
    icon: <Ionicons name="call-outline" size={14} color={'#03A4FF'} />,
  },
  {
    id: 2,
    text: 'Reserve',
    icon: <FontAwesome name="calendar" size={14} color={'#03A4FF'} />,
  },
  {
    id: 3,
    text: 'Direction',
    icon: (
      <MaterialCommunityIcons name="directions" size={14} color={'#03A4FF'} />
    ),
  },
]
// export const TopTenReversed = []
// export const TopTenReversed = Top10DishList.slice().reverse()
// export const TopTenReversed = await fetchRestaurants.data.restaurants

export const DataContext = createContext(defaultValue)

export const useData = () => useContext(DataContext)

function DataProvider({ children }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUsrName] = useState('')
  const [password, setPassword] = useState('')
  const [imagelink, setImage] = useState(null)
  const [photoAdded, setPhotoAdded] = useState(false)
  const [cuisineNotLike, setCuisineNotLike] = useState([])
  const [dietaryRestriction, setDietaryRestriction] = useState([])
  const [defaultCity, setDefaultCity] = useState([])
  const [emailVerified, setEmailVerified] = useState(false)
  const [top10RestList, setTop10RestList] = useState([])

  const { activeTab, setActiveTab, tabSelected, setTabSelected } = useTabs(tabs)

  useEffect(() => {
    const fetchRestaurantsList = async () => {
      const response = await fetchRestaurants()
      setTop10RestList(response.data.restaurants)
    }
    fetchRestaurantsList()
  }, [])
  firstName && console.log('firstName: , lastName:', firstName, lastName)
  phoneNumber && console.log('phoneNumber:', phoneNumber)
  email && console.log('email:', email)
  password && console.log('password:', password)
  imagelink && console.log('image:', imagelink)
  cuisineNotLike && console.log('cuisineNotLike:', cuisineNotLike)
  userName && console.log('userName:', userName)
  defaultCity && console.log('defaultCity:', defaultCity)
  dietaryRestriction && console.log('dietaryRestriction:', dietaryRestriction)

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
  const createUser = async () => {
    try {
      const response = await sendUserData({
        firstName,
        lastName,
        phoneNumber,
        photoAdded,
        email,
        password,
        imagelink,
        cuisineNotLike,
        dietaryRestriction,
        userName,
        defaultCity,
        emailVerified,
        imagelink,
      })
      console.log('User created :', response)
      return response
    } catch (e) {
      console.log('User creation error', e)
    }
  }

  const value = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    userName,
    setUsrName,
    email,
    setEmail,
    password,
    setPassword,
    imagelink,
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
    tabs,
    activeTab,
    setActiveTab,
    tabSelected,
    setTabSelected,
    // TopTenReversed,
    top10RestList,
    createUser,
    restauOptionHeader,
    RestauInfo,
  }
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export default DataProvider
