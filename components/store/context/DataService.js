import axios from 'axios'

//look for the ipv4 address and paste here
const baseUrl = 'http://192.168.142.141:8000/api/v1/'
// const baseUrl = 'http://192.168.23.187:8000/api/v1/'

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

export const sendUserData = async (userdata) => {
  console.log('Sending user data', userdata)

  const formData = new FormData()
  for (const key in userdata) {
    if (userdata.hasOwnProperty(key)) {
      if (key === 'imagelink') {
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
