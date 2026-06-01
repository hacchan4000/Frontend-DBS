'use client';

import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import Button from '../../components/ui/Button';
import TextInput from '../../components/ui/TextInput';

const Page = () => {
  const router = useRouter();

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const {
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