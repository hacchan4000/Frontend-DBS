'use client'

import React, { createContext, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { AuthService } from '@/services/api/auth.service';
import { showToast } from '@/components/atoms/toast';
import { getErrorMessage } from '@/utils/handleError';


interface AuthContextProps {
  login:(email:string,password:string)=>Promise<any>;
  register:(name:string,email:string,password:string)=>Promise<any>;
  logout:()=>void;
  getToken:()=>string;
}

export const AuthContext = createContext<AuthContextProps>({ // ini buat objek global
  login: async () => {},
  register: async () => {},
  logout: () => {},
  getToken: () => '',
})

export const AuthProvider = ({children}:{children:React.ReactNode}) => {
  const navigation = useRouter();
  const pathname = usePathname();

  const login = async (email: string, password: string) => {
    try {
      const hasil = await AuthService.login(email, password)
      if (hasil?.access_token) {
        localStorage.setItem('token', hasil.access_token)
      }

      showToast('Success login', 'success')
      navigation.push('/')
      return hasil
    } catch (error) {
      const pesan = getErrorMessage(error)
      showToast(pesan, 'error');
    }
    
  }
  const logout = async () => {
    localStorage.removeItem('token');
    navigation.push('/login')
  }
  const getToken = ():string => {
    return localStorage.getItem('token') || '';
  }
  const register = async(name:string,email:string,password:string) => {
    try{
      const hasil = await AuthService.register(name, email, password)
      if(hasil){
        localStorage.setItem('token', hasil.access_token)
      }

      showToast(
      'Register successful',
      'success'
    );

      navigation.push('/login')
    }catch (error){
      const pesan = getErrorMessage(error)

      showToast(
      pesan,
      'error'
    );
    throw error
    }
    
  }
  return (
    <AuthContext.Provider value={{login, logout, getToken, register}}>
      {children}
    </AuthContext.Provider>
  )
}
