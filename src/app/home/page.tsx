'use client'

import Greetings from './greetings.section'
import Spending from './spending.section'
import { AddPurchase } from './addPurchase.section'
import { Purchases } from './purchases.section'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/classNames'
import { Prediction } from './prediction.section'
import { Header } from '../components/ui/Header'
import { Sidebar } from '../components/ui/Sidebar'


const HomePage = () => {
  const path = usePathname()
  const isHome = path !== '/'
  return (
    <div className={cn(
      'flex flex-col min-h-[100vh]',
      path === '/' ? 'bg-transparent' : 'bg-[#1c1c1e]',
    )}>
      <Header/>
      <div>
        {isHome && <Sidebar/>}
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
    </div>
  )
}

export default HomePage