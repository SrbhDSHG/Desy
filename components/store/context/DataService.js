import axios from 'axios'

const baseUrl = 'http://192.168.23.187:8000/api/v1/'

export const fetchEmailVerify = async (email) => {
  console.log('email id for verification', email)
  try {
    const response = await axios.post(`${baseUrl}users/emailverify`, { email })
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
    console.log('error in fetchOtpVerify', error.data)
    // throw error
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

export const sendUserData = async () => {
  try {
    const response = await axios.post(`${baseUrl}users/`, {
      firstName,
      lastName,
      phoneNumber,
      photoAdded,
      email,
      password,
      imagelink,
      cuisineNotLike,
      dietaryRestriction,
      usrName,
      defaultCity,
      emailVerified,
    })

    return response
  } catch (error) {
    console.log('unable to create user', error)
  }
}
