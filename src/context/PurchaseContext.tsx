'use client'

import { PurchaseItem } from '@/model/Purchase'
import { SubscriptionItem } from '@/model/Subscription'
import { PurchaseService } from '@/services/api/purchase.service'
import React, { createContext, useState } from 'react'


interface PurchaseProps {
  purchases: PurchaseItem[],
  subscriptions: SubscriptionItem[],
  create:(body: PurchaseItem)=>Promise<any>,
  read:(id:number | undefined)=>Promise<any>,
  update:(body:PurchaseItem)=>Promise<any>,
}

export const PurchaseContext = createContext<PurchaseProps>({
  purchases:[],
  subscriptions:[],
  create:async () => {},
  read:async() => {},
  update:async() => {},
})

export const PurchaseProvider = ({children}:{children:React.ReactNode}) => {
  
  const [ purchases, setPurchases ] = useState<PurchaseItem[]>([])
  const [ subscriptions, setSubscriptions ] = useState<SubscriptionItem[]>([])

  const create = async (body:PurchaseItem) => {

    try {
      const res = await PurchaseService.create(body)
      return res
    } catch (error) {
      console.error(error)
      throw error
    } 
  }
  const read = async (user_id:number | undefined) => {
    try {
      const hasil = await PurchaseService.read(user_id)
 
      if (!hasil?.data) return

      const listPurchases = hasil.data
      const subscriptionsOnly = listPurchases.filter(
        (item: PurchaseItem) => String(item.category_id) === '60134'
      )
      const purchasesOnly = listPurchases.filter(
        (item: PurchaseItem) => String(item.category_id) !== '60134'
      )
      setSubscriptions(subscriptionsOnly)
      setPurchases(purchasesOnly)
      
      return { 
        purchases: purchasesOnly,
        subscriptions: subscriptionsOnly
      }
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
    <PurchaseContext.Provider value={{ purchases, subscriptions, create, read, update}}>
      {children}
    </PurchaseContext.Provider>
  )
}