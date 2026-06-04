import { ApiService } from "./api.service"

export const AuthService = {
  login:(email:string, password:string)=>{
    return ApiService({
      url:'authenthication',
      method:'GET',
      body:{ email,password }
    })
  },
  register:(name:string, email:string, password:string)=>{
    return ApiService({
      url:'authenthication',
      method:'POST',
      body:{ name,email,password  }
    })
  },
  refresh:(token:string)=>{
    return ApiService({
      url:'authenthication',
      method:'PUT'
    })
  },
  logout:(token:string)=>{
    return ApiService({
      url:'authenthication',
      method:'DELETE'
    })
  },
}