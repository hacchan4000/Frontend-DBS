import React from 'react'
import TextInput from '../atoms/TextInput'
import { Controller, useForm } from 'react-hook-form'
import Button from '../atoms/Button'
import Card from '../atoms/Card'
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi'
import { usePurchase } from '@/hooks/usePurchase'
import { PurchaseItem } from '@/model/Purchase'



const PopUp = (setPopUp:any) => {
  const { create } = usePurchase();

  const purchaseSchema = Joi.object({
    title: Joi.string().required(),
    category: Joi.string().required(),
    date: Joi.string().required(),
    price: Joi.string().required(),
  })

  const { handleSubmit, control, formState:{ isValid, isSubmitting} } = useForm({ //
    resolver:joiResolver(purchaseSchema),
    mode:'onChange', // strategi validasi sblm submit
    defaultValues:{ // nilai default untuk form yg nanti akan di cached
      title:'',
      category:'',
      date:'',
      price:''
    }
  })

  const onSubmit = async(data: PurchaseItem) => {
    const { title, category, date, price } = data
    return await create(data)
  }

  return (
    <div className='absolute bg-black/10 w-[100%] h-[100%]'>
      <Card variant='addPurchase'>
        <Controller control={control} name='title' render={({field, fieldState})=>(
          <TextInput label='Title' {...field} error={fieldState.error?.message}/>
        )} />
        <Controller control={control} name='category' render={({field, fieldState})=>(
          <TextInput label='Category' {...field} error={fieldState.error?.message}/>
        )} />
        <Controller control={control} name='date' render={({field, fieldState})=>(
          <TextInput label='Date' {...field} error={fieldState.error?.message}/>
        )} />
        <Controller control={control} name='price' render={({field, fieldState})=>(
          <TextInput label='Price' {...field} error={fieldState.error?.message}/>
        )} />
          
        <div className='flex flex-row'>
          <Button 
        label='Add' variant="contained"
        color="primary" className="w-full h-12 rounded-xl"
        disabled={!isValid || isSubmitting}
        onClick={handleSubmit(onSubmit)}/>
        <Button label='Cancel' variant='contained' color='primary' onClick={()=>{setPopUp(false)}}/>
        </div>
        
      </Card>
    </div>
  )
}

export default PopUp