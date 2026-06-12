'use client'

import { SubscriptionItem } from "@/model/Subscription"
import { SubscriptionService } from "@/services/api/subscription.service"
import { createContext, useState } from "react"


interface SubsProps {
  subscriptions: SubscriptionItem[]
  create:(body: SubscriptionItem)=>Promise<any>,
  read:(id:number | undefined)=>Promise<any>,
  update:(body:SubscriptionItem)=>Promise<any>,
}

export const SubscriptionContext = createContext<SubsProps>({
  subscriptions:[],
  create:async () => {},
  read:async() => {},
  update:async() => {},
})


export const SubscriptionProvider = ({children}:{children:React.ReactNode}) => {

  const [ subscriptions, setSubscriptions ] = useState<SubscriptionItem[]>([])
  
    const create = async (body:SubscriptionItem) => {
  
      try {
        const res = await SubscriptionService.create(body)
        return res
      } catch (error) {
        console.error(error)
        throw error
      } 
    }
    const read = async (user_id:number | undefined) => {
      try {
        const hasil = await SubscriptionService.read(user_id)
        if (hasil) {
          setSubscriptions(hasil.data)
        }
        return subscriptions
      } catch (error) {
        console.error(error)
        throw error
      }
    }
    const update = async (body:SubscriptionItem) => {
      try {
        const updet = await SubscriptionService.update(body)
        return updet
      } catch (error) {
        console.error(error)
        throw error
      }
    }

  <SubscriptionContext.Provider value={{subscriptions, create, read, update}}>
    {children}
  </SubscriptionContext.Provider>
}