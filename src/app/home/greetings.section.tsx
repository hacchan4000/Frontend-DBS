
import { useAuth } from '@/hooks/useAuth'
import React from 'react'

const Greetings = () => {
  const { user } = useAuth();  
  const user_name = user?.name ;
  return (
    <div className='mb-7 text-white'>
      <h1 className='m-0 my-font text-6xl'>hello, {user_name}</h1>
      <p className='mt-3 max-w-[400px] text-2xl'>
        Your expenses are according to budget so far.
      </p>
    </div>
   
  )
}

export default Greetings