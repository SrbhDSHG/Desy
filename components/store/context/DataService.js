import axios from 'axios'

//look for the ipv4 address and paste here
const baseUrl = 'http://192.168.31.72:8080/api/v1/'
// const baseUrl = 'http://192.168.110.190:8080/api/v1/'
// const baseUrl = 'http://192.168.23.187:8000/api/v1/'

export const userLogin = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}users/login`, {
      email,
      password,
    })
    console.log('Login response:', response.data)
    return response.data
  } catch (err) {
    console.log('Error during login:', err)
    throw new Error('Network error')
  }
}

export const fetchEmailVerify = async (email, firstName, lastName) => {
  console.log('email id for verification', email)
  try {
    const response = await axios.post(`${baseUrl}users/emailverify`, {
      email,
      firstName,
      lastName,
    })
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const fetchOtpVerify = async (email, otp, newUser = false) => {
  try {
    const response = await axios.post(`${baseUrl}users/otpverify`, {
      email,
      otp,
      newUser,
    })
    return response.data
  } catch (error) {
    if (error.response && error.response.data) {
      // If the server provides a specific error message, throw that.
      throw new Error(error.response.data.message || 'Server error')
    } else {
      // Handle network or unexpected errors
      throw new Error('Network error')
    }
  }
}

// export const resetPassOtp = async (email) => {
//   try {
//     const response = await axios.post(`${baseUrl}users/reset-password-otp`, {
//       email,
//     })
//     console.log('Reset password OTP response:', response.data)
//     return response.data
//   } catch (error) {
//     console.log('Error in reset password OTP:', error)
//     throw new Error('Network error')
//   }
// }
export const resetPassOtp = async (email) => {
  try {
    const response = await axios.post(`${baseUrl}users/reset-password-otp`, {
      email,
    })
    console.log('Reset password OTP response:', response.data)
    return response.data
  } catch (error) {
    console.log('Error in reset password OTP:', error)
    if (error.response && error.response.data) {
      // If the server provides an error message, return that.
      throw new Error(error.response.data.message || 'Server error')
    } else {
      // Handle network errors or other unexpected issues
      throw new Error('Network error')
    }
  }
}

export const fetchResetToNewPassword = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}users/reset-password`, {
      email,
      password,
    })
    console.log('Reset password response:', response.data)
    return response.data
  } catch (error) {
    console.log('Error in reset password:', error)
    throw new Error('Network error')
  }
}

export const fetchfindFriends = async (contacts) => {
  try {
    const response = await axios.post(`${baseUrl}users/find-contacts`, {
      contacts,
    })
    console.log('response after fetch friend request', response.data)
    return response
  } catch (error) {
    Alert.alert('Error finding friends', error.message)
    throw new Error(error.message)
  }
}

export const fetchRestaurants = async () => {
  try {
    const response = await axios.get(`${baseUrl}restaurants`)
    // console.log('Restaurant response:', response.data)
    return response
  } catch (error) {
    console.log('unable to fetch Restaurant list', error)
  }
}

// restaurants visited by a user
export const fetchRestVisitedByUser = async (id) => {
  try {
    const response = await axios.get(
      `${baseUrl}users/visited-restaurants/${id}`
    )
    console.log('response after fetching visited restaurants', response.data)
    return response.data
  } catch (error) {
    console.log('Error fetching visited restaurants', error)
    throw error
  }
}

export const fetchRestaurantsByParams = async (params) => {
  try {
    // Construct the query string from the params object
    const queryString = new URLSearchParams(params)
      .toString()
      .replace(/\+/g, '%20')
    console.log('queryString', queryString)
    const response = await axios.get(
      `${baseUrl}restaurants/search?${queryString}`
    )
    console.log(
      'response after fetching rest by pramas ',
      'Total cout',
      response.data.count,
      'Restaurants',
      response.data.restaurants
    )
    return response.data && response.data
  } catch (error) {
    console.log('Error fetching restaurants by params', error.response.data)
    throw error
  }
}

// fetch restuarant visisted by user
export const fetchResVistedByUser = async (userId) => {
  try {
    const response = await axios.get(
      `${baseUrl}users/visited-restaurants/${userId}`
    )
    console.log('response after fetching visited restaurants', response.data)
    return response.data
  } catch (error) {
    console.log('Error fetching visited restaurants', error)
    throw error
  }
}

export const sendUserData = async (userdata) => {
  console.log('Sending user data', userdata)

  const formData = new FormData()
  for (const key in userdata) {
    if (userdata.hasOwnProperty(key)) {
      if (key === 'userPhoto') {
        formData.append(key, {
          uri: userdata[key],
          name: 'profile.jpg',
          type: 'image/jpeg',
        })
      } else if (Array.isArray(userdata[key])) {
        userdata[key].forEach((item) => formData.append(key, item))
      } else {
        formData.append(key, userdata[key])
      }
    }
  }
  try {
    const response = await axios.post(`${baseUrl}users`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    console.log('response senduser data', response)
    return response
  } catch (error) {
    console.log('unable to create user', error)
    throw error
  }
}

exports.fetchUserDishPhotos = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}users/${id}/dishphotos`)
    // console.log('User dish photos response:', response.data.dishPhotos)
    return response.data.dishPhotos
  } catch (error) {
    console.log('Unable to fetch user dishes', error)
    throw error
  }
}

exports.fetchUser = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}users/${id}`)
    console.log('User response:', response.data)
    return response.data
  } catch (error) {
    console.log('Unable to fetch user', error)
    throw error
  }
}

exports.fetchUsersDishForARestau = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}usersDishPhotos/${id}`)
    console.log('User response for restaurant:', response.data)
    return response.data
  } catch (e) {
    console.log('Unable to fetch users dishes for the restaurant', e)
    throw e
  }
}
