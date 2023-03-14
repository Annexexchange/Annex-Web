import React from 'react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import ScrollToTop from 'react-scroll-to-top'

import { BackroundImg, ClockImg } from '../assets'
import { TopBar, Footer, BuyButton } from '../components'

const Trade = () => {
  return (
    <div className='relative'>
      <div className='relative'>
        <img src={BackroundImg} alt="Background" />

        <div className='absolute top-0 w-full'>
          <TopBar />

          <div className=" h-2/3 flex flex-col items-center gap-10 m-10 justify-between self-center">
            <div className='text-white font-roboto font-bold text-4xl'>Token Sales Countdown</div>
            <div className='relative flex flex-col items-center justify-center'>
              {/* <ClockIcon className='h-60 w-60 text-slate-400' /> */}
              <img src={ClockImg} alt="clock icon" className='' />
              <div className='text-slate-300 font-roboto font-medium text-4xl absolute w-fit text-center whitespace-nowrap bottom-12'>183d 21h 57m 30s</div>
            </div>
            <BuyButton />
          </div>
        </div>
      </div>

      <div className='absolute top-[95%] rounded-t-5xl bg-purple-100 flex flex-col gap-10 p-12 items-center justify-center'>
        <Footer />

        <ScrollToTop
          smooth
          top={100}
          component={<ChevronUpIcon className='!h-10 !w-10 !text-white' />}
          className='!bg-purple-annex !p-2 !rounded-full !flex !items-center !justify-center !animate-bounce !transition !ease-in-out !delay-150 hover:!-translate-y-1 hover:!scale-110 !duration-500'
        />
      </div >
    </div>
  )
}

export default Trade