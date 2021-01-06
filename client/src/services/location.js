import axios from 'axios'
import api from './apiConfig'

export const getLocationInfo = async () => {
  const res = await axios.get(`https://geolocation-db.com/json/${process.env.REACT_APP_GEO_KEY}`)
  return res.data
}

export const postLocation = async (locationParams) => {
  const res = await api.post('/locations', { location: locationParams })
  return res.data
}

export const getAllLocations = async () => {
  const res = await api.get('locations')
  console.log(res)
  return res.data
}