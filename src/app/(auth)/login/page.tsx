'use client';

import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Card from '../../components/ui/Card';
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
    <div className="min-h-screen bg-[#111217] flex items-center justify-center overflow-hidden px-5">

      {/* Main Container */}
      <div className="relative w-[900px] h-[650px]">

        {/* Left background image */}
        <div className="absolute left-[100px] top-[100px] opacity-90">
          <Image
            src="/GraphsBG.png"
            width={150}
            height={150}
            alt=""
          />
        </div>
        {/* Right background image */}
        <div className="absolute right-[10px] top-[60px] rotate-x-20 opacity-80">
          <Image
            src="/CardsBG.png"
            width={350}
            height={350}
            alt=""
          />
        </div>
        {/* Welcome card */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[70px] z-20">

          <Card bgColor='dark-grey'
            className="
              w-[450px]
              h-[690px]
              rounded-[40px]
              flex
              justify-center
              shadow-xl
            "
          >
            <h1
              className="
                text-white
                pt-20
                text-5xl
                font-light
                tracking-wide
                my-font
              "
            >
              Welcome back
            </h1>
          </Card>

        </div>


        <div className="absolute left-1/2 -translate-x-1/2 top-[280px] z-30">

          <Card
            className="
              w-[820px]
              h-[500px]
              rounded-[40px]
              p-10
              bg-black/5
              backdrop-blur-xl
              border
              border-white/10
              shadow-2xl
            "
          >
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
          </Card>

        </div>

      </div>
    </div>
  );
};

export default Page;