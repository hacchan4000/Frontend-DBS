'use client'

import TextInput from '../atoms/TextInput'
import { Controller, useForm } from 'react-hook-form'
import Button from '../atoms/Button'
import Card from '../atoms/Card'
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi'
import { usePurchase } from '@/hooks/usePurchase'
import { PurchaseItem } from '@/model/Purchase'
import CategoryInput from '../atoms/CategoryInput'
import DateInput from '../atoms/DateInput'
import dayjs from 'dayjs';
import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { showToast } from '../atoms/toast'


interface PopUpProps {
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>
}
const PopUp = ({setPopUp}:PopUpProps) => {
  const { user } = useAuth()
  const { create } = usePurchase();

  const purchaseSchema = Joi.object({
    title: Joi.string().required(),
    category_id: Joi.string().required(),
    date: Joi.string().required(),
    price: Joi.number().required(),
  })

  const { handleSubmit, watch, control, formState:{ isValid, isSubmitting} } = useForm<PurchaseItem>({ 
    resolver:joiResolver(purchaseSchema),
    mode:'onChange', // strategi validasi sblm submit
    defaultValues:{ // nilai default untuk form yg nanti akan di cached
      title:'',
      category_id:'',
      date:'',
      price:0
    }
  })
  const category = watch('category_id')
  

  const onSubmit = async(data: PurchaseItem) => {
    try {
      if (!user?.id) {
        showToast('User not found', 'error')
        return
      }
      const body = {user_id:user?.id, ...data}
      const hasil = await create(body)

      if (hasil) {
        showToast('berhasil add purchase','success')
      }
      setPopUp(false)

    } catch (error) {
      showToast(
        error instanceof Error
          ? error.message
          : 'gagal add purchase',
        'error'
      )
    }
  }
  

  return (
    <div className='fixed top-110 right-[-102] w-screen h-screen z-50 flex items-center justify-center bg-black/70 overflow-hidden overscroll-none'>
      
      <Card bgColor='dark-grey' className='h-[400px] px-20'>
        <div className='justify-center'>
            <h1 className='text-4xl'>Add Purchase</h1>
        </div>
        <Controller control={control} name='title' render={({field, fieldState})=>(
          <TextInput label='Title' {...field} error={fieldState.error?.message}/>
        )} />
        <Controller control={control} name='category_id' render={({field, fieldState})=>(
          <CategoryInput label='Category' {...field} error={fieldState.error?.message}/>
        )} />
        
        <Controller control={control} name='date' render={({field, fieldState})=>(
          <DateInput 
            label={category === '60134' ? 'Subscription Exp Date': 'Date Bought'}
            value={field.value ? dayjs(field.value) : null} 
            onChange={(date) => field.onChange(date?.format('YYYY-MM-DD'))} 
            error={fieldState.error?.message}
          />
        )} />
        <Controller control={control} name='price' render={({field, fieldState})=>(
          <TextInput 
            label="Price"
            value={ field.value ? Number(field.value).toLocaleString('id-ID') : '' }
            onChange={(e) => {
              const raw = e.target.value.replace(/\./g, '');
              field.onChange(raw === '' ? undefined : Number(raw));
            }}
            error={fieldState.error?.message}/>
        )} />
          
        <div className='flex flex-row'>
          <Button 
        label='Add' variant="contained"
        color="primary" className="w-full h-12 rounded-xl"
        disabled={!isValid || isSubmitting}
        onClick={handleSubmit(onSubmit)}/>
        <Button label='Cancel' variant='contained' color='primary' onClick={()=>setPopUp(false)}/>
        </div>
        
      </Card>
    </div>
  )
}

export default PopUp