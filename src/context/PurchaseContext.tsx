'use client'

import { showToast } from '@/app/components/atoms/toast'
import { PurchaseItem } from '@/model/Purchase'
import { PurchaseService } from '@/services/api/purchase.service'
import React, { createContext, useState } from 'react'


interface PurchaseProps {
  purchases: PurchaseItem[]
  create:({title, category, date, price}:PurchaseItem)=>{},
  read:(id:string)=>Promise<any>,
  update:()=>{},
}

export const PurchaseContext = createContext<PurchaseProps>({
  purchases:[],
  create:async () => {},
  read:async() => {},
  update:async() => {},
})

export const PurchaseProvider = ({children}:{children:React.ReactNode}) => {
  
  const [ purchases, setPurchases ] = useState<PurchaseItem[]>([])
  const [loading, setLoading] = useState(false)

  const create = async (body:any) => {
    setLoading(true)
    try {
      const res = await PurchaseService.create(body)
      return res
    } catch (error) {
      console.log(error)
    }
  }
  const read = async (user_id:any) => {
    try {
      const hasil = await PurchaseService.read(user_id)
      if (hasil) {
        setPurchases(hasil)
      }
      return hasil
    } catch (error) {
      console.log(error)
    }
  }
  const update = async () => {
    
  }
  
  return (
    <PurchaseContext.Provider value={{ purchases, create, read, update}}>
      {children}
    </PurchaseContext.Provider>
  )
}