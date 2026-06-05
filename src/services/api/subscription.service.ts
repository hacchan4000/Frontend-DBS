
import { ApiService } from "./api.service"

export const SubscriptionService = {
  
  create:(body:any)=>{
    return ApiService({
      url:'subscription',
      method:'POST',
      body,
      authorization:true
    })
  },
  read:()=>{
    return ApiService({
      url:'subscription',
      method:'GET',
      authorization:true
    })
  },
  update:()=>{
    return ApiService({
      url:'subscription',
      method:'POST',
      authorization:true
    })
  },
  delete:()=>{
    return ApiService({
      url:'subscription',
      method:'POST',
      authorization:true
    })
  },
}