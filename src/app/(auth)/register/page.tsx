'use client';

import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import Button from '../../components/ui/Button';
import TextInput from '../../components/ui/TextInput';
import { joiResolver } from '@hookform/resolvers/joi';
import { userSchema } from './schema';

const page = () => {

  const router = useRouter();
  const {
      control,
      formState: { isSubmitting, isValid },
    } = useForm({
      resolver: joiResolver(userSchema),
      mode: 'onChange',
      defaultValues: {
        name: '',
        email: '',
        password: '',
      },
    });
  return (
    <>
      <div className="space-y-6">
            
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              label="Name"
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              label="E-mail"
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />
        
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              label="Password"
              type="password"
              {...field}
              error={fieldState.error?.message}
            />
          )}
        />
        
        <Button
          label="Register"
          variant="contained"
          color="primary"
          className="w-full h-12 rounded-xl"
          disabled={!isValid || isSubmitting}
        />
        
        <div className="text-white/80">
          <p>Don't have an account?</p>
        
          <button
            onClick={() => router.push('/login')}
            className="
              text-blue-400
              hover:text-blue-300
              underline
            "
          >
            login here
          </button>
        </div>
            
      </div>
    </>
  )
}

export default page