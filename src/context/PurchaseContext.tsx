'use client'

import { PurchaseItem } from '@/model/Purchase'
import { PurchaseService } from '@/services/api/purchase.service'
import React, { createContext, useState } from 'react'


interface PurchaseProps {
  purchases: PurchaseItem[]
  create:(body: PurchaseItem)=>Promise<any>,
  read:(id:string)=>Promise<any>,
  update:(body:PurchaseItem)=>Promise<any>,
}

export const PurchaseContext = createContext<PurchaseProps>({
  purchases:[],
  create:async () => {},
  read:async() => {},
  update:async() => {},
})

export const PurchaseProvider = ({children}:{children:React.ReactNode}) => {
  
  const [ purchases, setPurchases ] = useState<PurchaseItem[]>([])

  const create = async (body:PurchaseItem) => {

    try {
      const res = await PurchaseService.create(body)
      return res
    } catch (error) {
      console.error(error)
      throw error
    } 
  }
  const read = async (user_id:string) => {
    try {
      const hasil = await PurchaseService.read(user_id)
      if (hasil) {
        setPurchases(hasil)
      }
      return hasil
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  const update = async (body:PurchaseItem) => {
    try {
      const updet = await PurchaseService.update(body)
      return updet
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  return (
    <PurchaseContext.Provider value={{ purchases, create, read, update}}>
      {children}
    </PurchaseContext.Provider>
  )
}