import axios from 'axios'

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`
axios.defaults.timeout = 6000

function authHeader() {
  const token = localStorage.getItem('token')
  if (!token) return {}
  return {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  }
}

class Request {
  async get(ruta, parametros = {}) {
    try {
      return await axios.get(ruta, {
        params: parametros,
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async post(ruta, parametros = {}) {
    try {
      return await axios.post(ruta, parametros, {
        headers: authHeader(),
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async put(ruta, parametros = {}) {}
  async delete(ruta, parametros = {}) {
    try {
      return await axios.delete(ruta, {
        headers: authHeader(),
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async login(ruta, parametros = {}) {
    try {
      return await axios.post(ruta, parametros, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default new Request()
