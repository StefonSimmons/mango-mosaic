  
import api from './apiConfig';

export const loginUser = async (loginParams) => {
  const resp = await api.post('/auth/login', { auth: loginParams })
    const token = resp.data.token
    const admin = resp.data.user
    localStorage.setItem('authToken', token);
    api.defaults.headers.common.authorization = `Bearer ${token}`
    return admin
}

export const verifyAdmin = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    const admin = resp.data
    return admin
  }
  return false
}

// export const verifyCommenter = async () => {
  
// }
// logging out
export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}