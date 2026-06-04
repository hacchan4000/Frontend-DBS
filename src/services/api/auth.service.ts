import { ApiService } from "./api.service"

export const AuthService = {
  login:(email:string, password:string)=>{
    return ApiService({
      url:'authentications',
      method:'POST',
      body:{ email,password },
      authorization:false
    })
  },

  register:(name:string,email:string,password:string)=>{
    return ApiService({
      url:'users',
      method:'POST',
      body:{name,email,password},
      authorization:false
    })
  },

  refresh:(token:string)=>{
    return ApiService({
      url:'authentications',
      method:'PUT'
    })
  },

  logout:()=>{
    return ApiService({
      url:'authentications',
      method:'DELETE'
    })
  },
}