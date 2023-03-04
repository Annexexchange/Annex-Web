import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import { BackroundImg, CoinImg } from '../assets'
import { TransparentButton, PurpleButton, TopBar, TokenSalesCard, Footer, TransactionCard, Astronaut, WhyCard } from '../components'

const View = () => {
  return (
    <div>
      <div className='relative -z'>
        <img src={BackroundImg} alt="Background" />

        <div className='absolute top-0 w-full'>
          <TopBar />

          <div className='flex flex-row p-10 justify-around pt-16'>
            <div className='flex flex-col gap-8 py-20'>
              <div className=''>
                <h3 className='font-roboto font-semibold text-white text-4xl tracking-widest'>Buy, trade, and hold</h3>
                <h3 className='font-roboto font-semibold text-white text-4xl tracking-widest'>350+ cryptocurrencies on</h3>
                <h3 className='font-roboto font-semibold text-white text-4xl tracking-widest'>Annex</h3>
              </div>
              <div className=''>
                <div className='font-roboto font-normal text-white text-base'>Here at Annex, we are committed to user protection with strict</div>
                <div className='font-roboto font-normal text-white text-base'>protocols and industry-leading technical measures.</div>
              </div>
              <div className='flex flex-row gap-4'>
                <PurpleButton text='Download App' />
                <TransparentButton text='Download PDF' />
              </div>
            </div>

            <div className=''>
              <img src={CoinImg} alt="Coin and smartphone" />
            </div>
          </div>
        </div>
      </div>

      <div className='rounded-t-4xl bg-purple-100 z-10 flex flex-col gap-10 p-12 items-center justify-center'>
        <div className='flex flex-row gap-5 px-24 justify-center' id='AboutUs'>
          <div className='w-1/2 flex items-center justify-center'>
            <Astronaut />
          </div>
          <div className='w-1/2 flex flex-col gap-4'>
            <div className='font-roboto font-bold text-3xl tracking-widest text-slate-700'>About Us</div>
            <div className='font-roboto font-normal text-xs tracking-widest text-slate-600'>The Most Trusted Cryptocurrency Platform</div>
            <div className='text-justify font-roboto font-normal text-xs tracking-widest text-slate-600 mt-5'>
              Here at Annex, we are committed to user protection with strict protocols and
              industry-leading technical measures. Annex stores 10% of all trading fees in a
              secure asset fund to protect a share of user funds. Personalized access control
              allows you to restrict devices and addresses that can access your account, for
              greater ease of mind. Your transaction data is secured via end-to-end encryption,
              ensuring that only you have access to your personal information.
              Stay in the know with our app and desktop client.
            </div>
            <div className='flex flex-col gap-6'>
              <div className='font-roboto font-normal text-xs tracking-widest text-slate-600 flex flex-row items-center'>
                <ChevronRightIcon className='h-5 w-5 text-purple-annex' />
                Get 24/7 chat support with our friendly customer service agents at your service
              </div>
              <div className='font-roboto font-normal text-xs tracking-widest text-slate-600 flex flex-row items-center'>
                <ChevronRightIcon className='h-5 w-5 text-purple-annex' />
                Stay up to date with the latest stories and commentary
              </div>
              <div className='font-roboto font-normal text-xs tracking-widest text-slate-600 flex flex-row items-center'>
                <ChevronRightIcon className='h-5 w-5 text-purple-annex' />
                Simple & Secure. Search popular coins and start earning
              </div>
            </div>
          </div>
        </div >
        <TransactionCard />

        <WhyCard />

        <TokenSalesCard />

        <Footer />
      </div >
    </div >
  )
}

export default View