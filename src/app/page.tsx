import { Header } from '@/components/layout/Header'
import { AppLayout } from '../components/layout/AppLayout'
import { AddPurchaseCard } from '../components/widgets/AddPurchaseCard'
import { AiPredictionCard } from '../components/widgets/AiPredictionCard'
import { LatestPurchaseCard } from '../components/widgets/LatestPurchaseCard'
import { ThisMonthCard } from '../components/widgets/ThisMonthCard'
import { ThisWeekCard } from '../components/widgets/ThisWeekCard'
import { USER_NAME } from '../utils/data'


export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <div className='relative z-10'> 
          <div className='pointer-events-none fixed inset-0 z-0 w-[100vw] h-[100vh] my-background bg-cover bg-center bg-no-repeat' aria-hidden />
          <div className='relative z-10 pt-[20px] pb-[10px] px-6 sm:pl-[100px] sm:pr-[100px]'>
            <div className='mb-7 text-white'>
              <h1 className='m-0 my-font text-6xl'>hello, {USER_NAME}</h1>
              <p className='mt-3 max-w-[80px] text-3xl'>
                Your expenses are according to budget so far.
              </p>
            </div>

            <div className='p-6 sm:p-7 rounded-[60px] border border-white/8 bg-[#222222]/70 backdrop-blur-[30px]'>
              <div className='flex flex-col items-center gap-10'>
                <div className='flex w-[100%] flex-col items-center justify-center gap-10 xl:flex-row'>
                  <ThisWeekCard />
                  <ThisMonthCard />
                </div>
                <div className='flex w-[100%] flex-col items-center justify-center gap-10 xl:flex-row'>
                  <LatestPurchaseCard />
                  <div className='flex flex-col gap-10'>
                    <AiPredictionCard />
                    <AddPurchaseCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
    
  )
}
