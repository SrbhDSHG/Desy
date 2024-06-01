import axios from 'axios'

const baseUrl = 'http://192.168.5.109:8000/api/v1/users/'

export const fetchEmailVerify = async (email) => {
  console.log('email id for verification', email)
  try {
    const response = await axios.post(`${baseUrl}emailverify`, { email })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const fetchOtpVerify = async (email, otp) => {
  try {
    const response = await axios.post(`${baseUrl}otpverify`, { email, otp })
    console.log('response from fetchOtpVerify', response)
    return response
  } catch (error) {
    console.log('error in fetchOtpVerify', error.data)
    // throw error
  }
}
