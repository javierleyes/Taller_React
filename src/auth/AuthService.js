import axios from 'axios'
var jwtDecode = require('jwt-decode')

const API_LOGIN = 'https://reqres.in/api/login'

// Si puedo loguearme guardo el token 
const login = async (email, password) => {
    try {
        const response = await axios.post(API_LOGIN, { email, password })
        localStorage.setItem("token", response.data.token)
    } catch (error) {
        throw error
    }
}

// Si hay un token el usuario esta logueado
const isLogged = () => {
    const token = localStorage.getItem("token")
    return !!token
}

// Borro token
const logout = () => {
    localStorage.removeItem("token")
}

const getUser = () => {
    const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    const username = jwtDecode(jwt).name
    return username
}

export {
    login,
    isLogged,
    logout,
    getUser
}
