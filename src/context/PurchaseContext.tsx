'use client'

import { showToast } from '@/app/components/atoms/toast'
import { PurchaseItem } from '@/model/Purchase'
import { PurchaseService } from '@/services/api/purchase.service'
import { useRouter } from 'next/router'
import React, { createContext, useState } from 'react'


interface PurchaseProps {
  purchases: PurchaseItem[]
  create:({title, category, date, price}:PurchaseItem)=>{},
  read:()=>{},
  update:()=>{},
}

export const PurchaseContext = createContext<PurchaseProps>({
  purchases:[],
  create:async() => {},
  read:async() => {},
  update:async() => {},
})

export const PurchaseProvider = ({children}:{children:React.ReactNode}) => {
  const [ purchases, setPurchases ] = useState<PurchaseItem[]>([])
  const [loading, setLoading] = useState(false)
  const navigation = useRouter(); 

  const create = async ({title, category, date, price}:PurchaseItem) => {
    setLoading(true)

    try {
      const body = { title, category, date, price }
      const res = await PurchaseService.create(body)

      setPurchases(res.data)
      showToast('Success add purchase', 'success')

      return res
    } catch (error) {
      
    }
  }
  const read = async () => {
    
  }
  const update = async () => {
    
  }
  
  return (
    <PurchaseContext.Provider value={{ purchases, create, read, update}}>
      {children}
    </PurchaseContext.Provider>
  )
}