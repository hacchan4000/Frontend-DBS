import { AuthProvider } from "./AuthContext";
import React from 'react'

const AppProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default AppProvider
