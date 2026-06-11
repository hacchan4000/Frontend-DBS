import { AuthProvider } from "./AuthContext";
import React from 'react'
import { PurchaseProvider } from "./PurchaseContext"

const AppProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <AuthProvider>
      <PurchaseProvider>
        {children}
      </PurchaseProvider>
    </AuthProvider>
  )
}

export default AppProvider
