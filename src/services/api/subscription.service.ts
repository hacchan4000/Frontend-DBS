
import { ApiService } from "./api.service"

export const SubscriptionService = {
  
  create:(body:any)=>{
    return ApiService({
      url:'subscriptions',
      method:'POST',
      body,
      authorization:true
    })
  },
  read:(user_id:any | undefined)=>{
    return ApiService({
      url:'subscriptions',
      method:'GET',
      params: {user_id},
      authorization:true
    })
  },
  update:(body:any)=>{
    return ApiService({
      url:'subscriptions',
      method:'POST',
      authorization:true
    })
  },
  delete:()=>{
    return ApiService({
      url:'subscriptions',
      method:'POST',
      authorization:true
    })
  },
}