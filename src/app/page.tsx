'use client'

import Greetings from './home-page/greetings.section'
import Spending from './home-page/spending.section'
import { AddPurchase } from './home-page/addPurchase.section'
import { Purchases } from './home-page/purchases.section'
import { usePathname } from 'next/navigation'
import { Sidebar } from './components/ui/Sidebar'
import { cn } from '@/utils/classNames'
import { Header } from './components/ui/Header'
import { Prediction } from './home-page/prediction.section'


export default function Home() {
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
