import axios from 'axios'

//look for the ipv4 address and paste here
const baseUrl = 'http://192.168.142.141:8080/api/v1/'
// const baseUrl = 'http://192.168.23.187:8000/api/v1/'

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
  }
}

export const fetchOtpVerify = async (email, otp) => {
  try {
    const response = await axios.post(`${baseUrl}users/otpverify`, {
      email,
      otp,
    })
    console.log('response from fetchOtpVerify', response)
    return response
  } catch (error) {
    throw error
    // if (error.response) {
    //   console.log('error in fetchOtpVerify', error.response.data)
    //   throw error.response.data
    //   // throw new Error(error.response.data || 'An error occurred')
    // } else {
    //   console.log('error2 in fetchOtpVerify', error)
    //   throw new Error('Network error')
    // }
  }
}

export const fetchRestaurants = async () => {
  try {
    const response = await axios.get(`${baseUrl}restaurants`)
    // console.log('Restaurant response:', response.restaurants)
    return response
  } catch (error) {
    console.log('unable to fetch Restaurant list', error)
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
    console.log('User dish photos response:', response.data.dishPhotos)
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
