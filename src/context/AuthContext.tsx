import React, { createContext } from 'react'

interface AuthContextProps {

}

export const AuthContext = createContext<AuthContextProps>({
  
})

export const AuthProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <AuthContext.Provider value={}>
      {children}
    </AuthContext.Provider>
  )
}
