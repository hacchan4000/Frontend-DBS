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
  read:(user_id:any | undefined)=>{
    return ApiService({
      url:'purchases',
      method:'GET',
      params:{ user_id }
    })
},
  update:(body:any)=>{
    return ApiService({
      url:'purchases',
      method:'POST',
      body,
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