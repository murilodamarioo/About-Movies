import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      console.log(response)
      const { user, token } = response.data

      localStorage.setItem('@aboutmovies:user', JSON.stringify(user))
      localStorage.setItem('@aboutmovies:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })
    } catch(error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível realizar o login!')
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@aboutmovies:user')
    localStorage.removeItem('@aboutmovies:token')

    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem('@aboutmovies:user')
    const token = localStorage.getItem('@aboutmovies:token')

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user: JSON.parse(user), token })
    }
  }, [])

  return (
    <AuthContext.Provider value={{signIn, signOut, user: data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }