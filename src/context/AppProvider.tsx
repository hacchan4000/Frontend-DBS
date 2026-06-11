'use client'

import React from 'react'
import { AuthProvider } from './AuthContext'
import { PurchaseProvider } from './PurchaseContext'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <PurchaseProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {children}
        </LocalizationProvider>
      </PurchaseProvider>
    </AuthProvider>
  )
}

export default AppProvider