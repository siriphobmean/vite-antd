// src/auth/useAuth.ts
import { useState } from 'react'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (username: string, password: string) => {
    if (username === 'admin' && password === '1234') {
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  return { isAuthenticated, login, logout }
}