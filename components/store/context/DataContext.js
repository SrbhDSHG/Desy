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
  MaterialIcons,
  Feather,
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
  currentUser: '',
  setCurrentUser: () => {},

  cuisineNotLike: [],
  setCuisineNotLike: () => {},
  imagelink: '',
  setUserPhoto: () => {},
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
  friends: '',
  setFriends: () => {},
  dishType: '',
  setDishType: () => {},
  setDefaultCityForDish: () => {},
  defaultCityForDish: '',
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

const restauFooterIcon = [
  {
    id: 0,
    text: 'Feed',
    icon: <Ionicons name="grid-outline" size={24} color="#03A4FF" />,
  },
  {
    id: 1,
    text: 'Your List',
    icon: <MaterialIcons name="list-alt" size={24} color="#03A4FF" />,
  },
  {
    id: 2,
    text: 'Search',
    icon: <FontAwesome name="plus-circle" size={40} color="#03A4FF" />,
  },
  {
    id: 3,
    text: 'Leaderboard',
    icon: <Ionicons name="trophy-outline" size={24} color="#03A4FF" />,
  },
  {
    id: 4,
    text: 'Profile',
    icon: <FontAwesome name="user-o" size={24} color="#03A4FF" />,
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
  const [userPhoto, setUserPhoto] = useState(null)
  const [photoAdded, setPhotoAdded] = useState(false)
  const [cuisineNotLike, setCuisineNotLike] = useState([])
  const [dietaryRestriction, setDietaryRestriction] = useState([])
  const [defaultCity, setDefaultCity] = useState([])
  const [emailVerified, setEmailVerified] = useState(false)
  const [top10RestList, setTop10RestList] = useState([])
  const [currentUser, setCurrentUser] = useState('')
  const [friends, setFriends] = useState([])
  const [dishType, setDishType] = useState('')
  const [defaultCityForDish, setDefaultCityForDish] = useState('')

  const { activeTab, setActiveTab, tabSelected, setTabSelected } = useTabs(tabs)

  useEffect(() => {
    const fetchRestaurantsList = async () => {
      const response = await fetchRestaurants()
      // console.log('response after fetching Top10', response.data.restaurants)
      setTop10RestList(response.data.restaurants)
    }

    fetchRestaurantsList()
  }, [])
  // firstName && console.log('firstName: , lastName:', firstName, lastName)
  // phoneNumber && console.log('phoneNumber:', phoneNumber)
  // email && console.log('email:', email)
  // password && console.log('password:', password)
  // userPhoto && console.log('image:', userPhoto)
  // cuisineNotLike && console.log('cuisineNotLike:', cuisineNotLike)
  // userName && console.log('userName:', userName)
  // defaultCity && console.log('defaultCity:', defaultCity)
  // dietaryRestriction && console.log('dietaryRestriction:', dietaryRestriction)

  const emailverification = async (email, firstName, lastName) => {
    console.log('In the  data context, email:', email)
    try {
      const response = await fetchEmailVerify(email, firstName, lastName)
      console.log('Email verification response:', response)
      return response
    } catch (err) {
      console.log('Error in email verification', err)
      throw err
    }
  }
  const otpverification = async (email, otp) => {
    console.log('In the  data context', email, otp)
    try {
      const response = await fetchOtpVerify(email, otp)
      console.log('response of otp verification', response.data)
      return response.data
    } catch (err) {
      console.log('Error in otp verification', err)
      throw err
    }
  }
  const createUser = async () => {
    console.log('Creating user')
    try {
      const response = await sendUserData({
        firstName,
        lastName,
        phoneNumber,
        photoAdded,
        email,
        password,
        userPhoto,
        cuisineNotLike,
        dietaryRestriction,
        userName,
        defaultCity,
        emailVerified,
      })
      console.log('User created :', response)

      return response.data
    } catch (e) {
      console.log('User creation error', e)
    }
  }

  const value = {
    currentUser,
    setCurrentUser,
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
    userPhoto,
    setUserPhoto,
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
    restauFooterIcon,
    friends,
    setFriends,
    dishType,
    setDishType,
    defaultCityForDish,
    setDefaultCityForDish,
  }
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export default DataProvider
