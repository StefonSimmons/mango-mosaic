import axios from 'axios'

// api/server runs on localhost 3000 in development
const baseUrl = process.env.NODE_ENV !== 'production' ? 'https://mango-mosaic-api.herokuapp.com/' : 'http://localhost:3000' 

console.log(process.env)
const api = axios.create({
  baseURL: baseUrl
})

export default api;