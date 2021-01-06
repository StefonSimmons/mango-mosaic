import axios from 'axios'


export const getLocationInfo = async () => {
  const res = await axios.get('https://geolocation-db.com/json/85249190-4601-11eb-9067-21b51bc8dee3')
  return res.data
}