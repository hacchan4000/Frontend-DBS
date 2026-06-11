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
  read:(user_id:number | undefined)=>{ // untuk ngambil semua purchase oleh user tertentu
    return ApiService({
      url:'purchases',
      method:'GET',
      body: user_id,
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