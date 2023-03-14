import React from 'react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import ScrollToTop from 'react-scroll-to-top'

import { BackroundImg } from '../assets'
import { TopBar, TokenSalesCard, Footer, ContactCard } from '../components'

const Contact = () => {

  return (
    <div className=''>
      <div className='relative'>
        <img src={BackroundImg} alt="Background" />

        <div className='absolute top-0 w-full'>
          <TopBar />

          <div className='py-16 px-20 text-white font-roboto font-bold text-4xl'>
            Contact
          </div>
        </div>
      </div>

      <div className='absolute top-80 rounded-t-5xl bg-purple-100 z-10 flex flex-col gap-10 p-12 items-center justify-center'>
        <ContactCard />

        <TokenSalesCard />

        <Footer />

        <ScrollToTop
          smooth
          top={100}
          component={<ChevronUpIcon className='h-10 w-10 text-white' />}
          className='!bg-purple-annex !p-2 !rounded-full !flex !items-center !justify-center !animate-bounce !transition !ease-in-out !delay-150 hover:!-translate-y-1 hover:!scale-110 !duration-500'
        />
      </div>
    </div>
  )
}

export default Contact