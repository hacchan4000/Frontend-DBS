'use client';

import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Button from '../../components/ui/Button';
import TextInput from '../../components/ui/TextInput';
import { useAuth } from '@/hooks/useAuth';

type LoginForm = {
  email: string;
  password: string;
};

const Page = () => {
  const router = useRouter();
  const { login } = useAuth()

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };


  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useForm({
    resolver: joiResolver(schema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <>
    <div className="space-y-6">
      
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
        label="Login"
        variant="contained"
        color="primary"
        className="w-full h-12 rounded-xl"
        disabled={!isValid || isSubmitting}
        onClick={handleSubmit(onSubmit)}
      />
      
      <div className="text-white/80">
        <p>Don't have an account?</p>
      
        <button
          onClick={() => router.push('/register')}
          className="
            text-blue-400
            hover:text-blue-300
            underline
          "
        >
          Sign in here
        </button>
      </div>
      
    </div>
    </>
  );
};

export default Page;