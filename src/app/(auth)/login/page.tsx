'use client';
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi';
import { Controller, useForm } from 'react-hook-form';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import TextInput from '../../components/ui/TextInput';


const page = () => {
  const schema = Joi.object({
     email: Joi.string().email().required(),
     password: Joi.string().required()
  })
  const router = useRouter();

  const navigateToRegister = () => {
    router.push('/register');
  };

  const navigateToForgotPassword = () => {
    router.push('/forgot-password');
  };
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useForm({
    resolver: joiResolver(schema),
    mode: 'onChange',
    defaultValues: { email: '', password: '' },
  });

  return (
    <>
    <div className="flex mt-10 min-h-[80vh] flex-col items-center justify-center py-10">
      <div className="flex w-full justify-center px-4">
        <div className='flex gap-3'>
          <Image src="/GraphsBG.png" width={200} height={200} alt=""/>
          
          <Card bgColor='dark-grey'>
            <h1>Welcome Back</h1>
          </Card>
          <Image src="/CardsBG.png" width={200} height={200} alt=""/>
        </div> 


        <div className='absolute'>
          <Card>
            <div>
              <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <TextInput
                  label="Email"
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
              label="Login"
              variant="contained"
              color={'primary'}
              className="mt-4 h-12 w-full"
              disabled={!isValid || isSubmitting}
            />
            </div>
          </Card>
        </div>
        
      </div>
    </div>
    </>
    
  )
}

export default page

/**
 * <div className='absolute'>
          <Image src="/CardsBG.png" width={200} height={200} alt="Picture of the author"/>
        </div>
        <Card bgColor='dark-grey'>
          <h1>Welcome Back</h1>
        </Card>
        <Card>
          <div>ini login</div>
        </Card>
 */