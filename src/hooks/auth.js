import { createContext, userContext, useState } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.get('/sessions', { email, password })
      const { user, token } = response.data

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

  return (
    <AuthContext.Provider value={{signIn, user: data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }