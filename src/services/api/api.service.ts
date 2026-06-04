import axios from "axios"

interface RequestProps {
  url:string
  method : 'GET' | 'POST' | 'PUT' | 'DELETE'
}

export const ApiService = async({}:RequestProps) => {

  const hasil = await fetch(``)
  const json = JSON.stringify(hasil)
}