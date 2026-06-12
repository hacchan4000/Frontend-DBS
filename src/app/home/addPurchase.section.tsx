'use client'

import Card from '../components/atoms/Card'
import Button from '../components/atoms/Button'
import PopUp from '../components/ui/PopUp'
import { useState } from 'react'

export function AddPurchase() {
  const [popUp, setPopUp] = useState(false)

  const showPopUp = () => {
    setPopUp(true)
  }

  return (
    <>
    {popUp && <PopUp setPopUp={setPopUp}/>}
    <Card variant="addPurchase">
      <p className='m-0 text-3xl font-semibold leading-5'>Add your purchases here!</p>
      <Button onClick={showPopUp} type="button" className='flex items-center justify-center w-[106px] h-[106px] border-none rounded-[50%] bg-white cursor-pointer transition-transform duration-200 ease-in hover:scale-110' aria-label="Add purchase">
        <span className='text-4xl text-black font-semibold'>Add</span>
        <span className="sr-only">Add</span>
      </Button>
    </Card>
    </>
    
  )
}