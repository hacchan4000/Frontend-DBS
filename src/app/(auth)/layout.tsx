'use client';

import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import Card from '../components/atoms/Card';


interface AuthProps {
  children: React.ReactNode;
  text: string

}

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  const path = usePathname()
  return (
    <main>
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
                {path === '/login' ? 'welcome back' : 'hello, welcome'}
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
              {children}
            </Card>
  
          </div>
  
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
