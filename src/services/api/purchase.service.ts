import { ApiService } from "./api.service"

export const PurchaseService = {
  
  create:(body:any)=>{
    return ApiService({
      url:'purchases',
      method:'POST',
      body,
      authorization:true
    })
  },
  read:()=>{
    return ApiService({
      url:'purchases',
      method:'GET',
      authorization:true
    })
  },
  update:()=>{
    return ApiService({
      url:'purchases',
      method:'POST',
      authorization:true
    })
  },
  delete:()=>{
    return ApiService({
      url:'authentications',
      method:'POST',
      authorization:true
    })
  },
}