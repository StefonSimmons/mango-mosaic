  
import api from './apiConfig';

export const loginUser = async (loginParams) => {
  const resp = await api.post('/auth/login', { auth: loginParams })

  if (resp.data.token) {
    const token = resp.data.token
    const admin = resp.data.user
    localStorage.setItem('authToken', token);
    api.defaults.headers.common.authorization = `Bearer ${token}`
    return admin
  } else {
    const unauthorized = resp.data.errors
    return unauthorized
  }
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    const admin = resp.data
    return admin
  }
  return false
}

// logging out
export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}