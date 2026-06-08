'use client'

import React, { createContext, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { AuthService } from '@/services/api/auth.service';
import { showToast } from '@/app/components/atoms/toast';
import { getErrorMessage } from '@/utils/handleError';
import { Users } from '../model/User';


interface AuthContextProps {
  user:Users | null;
  login:(email:string,password:string)=>Promise<any>;
  register:(name:string,email:string,password:string)=>Promise<any>;
  logout:()=>void;
  getToken:()=>string | null;
}

export const AuthContext = createContext<AuthContextProps>({ // ini buat objek global
  user:null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  getToken: () => '',
})

export const AuthProvider = ({children}:{children:React.ReactNode}) => {
  const [user, setUser] = useState<Users | null>(null)
  const [loading, setLoading] = useState(true)
  const navigation = useRouter();
  const pathname = usePathname();

  const login = async (email: string, password: string) => {
    try {
      setLoading(true)

      const hasil = await AuthService.login(email, password)
      if (hasil?.access_token) {
        localStorage.setItem('token', hasil.access_token)
      }

      setUser(hasil.data)
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
  const getToken = ():string | null => {
     if (typeof window === 'undefined') return null;

    return localStorage.getItem('token');
    // OR cookies depending on your implementation
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
    <AuthContext.Provider value={{ user, login, logout, getToken, register}}>
      {children}
    </AuthContext.Provider>
  )
}
