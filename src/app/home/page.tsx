'use client'

import Greetings from './greetings.section'
import Spending from './spending.section'
import { AddPurchase } from './addPurchase.section'
import { Purchases } from './purchases.section'
import { redirect, usePathname } from 'next/navigation'
import { cn } from '@/utils/classNames'
import { Prediction } from './prediction.section'
import { Header } from '../components/ui/Header'
import { Sidebar } from '../components/ui/Sidebar'
import { useAuth } from '@/hooks/useAuth'
import { showToast } from '../components/atoms/toast'


const HomePage = () => {
  const path = usePathname()
  const isHome = path !== '/'
  const { user } = useAuth()
  
  if(user){ // ini protect route /home jd cuma bsa di akses kalo uda login aja
    // kalo mau liat home tgl !user aja
    return (
    <div className={cn(
      'flex flex-col min-h-[100vh]',
      path === '/' ? 'bg-transparent' : 'bg-[#1c1c1e]',
    )}>
      <Header/>
        <main>
          <div className='relative z-10'>

            <div className='
            pointer-events-none fixed inset-0 z-0 w-[100vw] 
            h-[100vh] my-background bg-cover bg-center bg-no-repeat' 
            aria-hidden />

            <div className='relative z-10 pt-[20px] pb-[10px] px-6 sm:pl-[100px] sm:pr-[100px]'>
              <Greetings/>
              <div className='p-6 sm:p-7 rounded-[60px] border border-white/8 bg-[#222222]/70 backdrop-blur-[30px]'>
                <div className='flex flex-col items-center gap-10'>
                  <Spending />
                  <div className='flex w-[100%] flex-col items-center justify-center gap-10 xl:flex-row'>
                    <Purchases />
                    <div className='flex flex-col gap-10'>
                      <Prediction />
                      <AddPurchase />
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
  }else{
    showToast('Please login first', 'warning')
    redirect('/login')
  }
  
}

export default HomePage