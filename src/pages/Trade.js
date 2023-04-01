import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon, ChevronUpIcon, ClockIcon } from '@heroicons/react/20/solid'
import ScrollToTop from 'react-scroll-to-top'

import { BackgroundImg, BackgroundMobileImg, ClockImg } from '../assets'
import { TopBar, Footer, BuyButton } from '../components'

const Trade = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [firstDropDown, setFirstDropDown] = useState(false);
  const [secondDropDown, setSecondDropDown] = useState(false);

  return (
    <div className='z-0'>
      <div className='relative'>
        <img src={BackgroundImg} alt="Background" className='hidden md:flex w-screen bg-cover' />
        <img src={BackgroundMobileImg} alt="Background" className='md:hidden w-screen h-screen bg-covers' />

        <div className='absolute top-0'>
          <TopBar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} trade />

          <div className=''>
            <div className="h-2/3 flex flex-col items-center gap-5 md:gap-10 m-10 justify-between self-center">
              <div className='text-white text-center font-roboto font-medium md:font-bold text-2xl md:text-4xl'>Token Sales Countdown</div>
              <div className='md:relative flex flex-row md:flex-col items-center justify-between md:justify-center'>
                <img src={ClockImg} alt="clock icon" className='hidden md:block' />
                <ClockIcon className='h-10 w-10 text-slate-300 md:hidden' />
                <div className='text-slate-300 font-roboto font-medium text-2xl md:text-4xl md:absolute w-fit text-center whitespace-nowrap md:bottom-12'>183d 21h 57m 30s</div>
              </div>
              <BuyButton />
            </div>

            <div className='rounded-t-4xl md:rounded-t-5xl bg-purple-100 flex flex-col gap-10 p-8 md:p-12 items-center justify-center'>
              <Footer />

              <ScrollToTop
                smooth
                top={50}
                component={<ChevronUpIcon className='!h-10 !w-10 !text-white' />}
                className='!bg-purple-annex !p-2 !rounded-full !flex !items-center !justify-center !animate-bounce !transition !ease-in-out !delay-150 hover:!-translate-y-1 hover:!scale-110 !duration-500'
              />
            </div >
          </div>
        </div>
      </div>

      <div className={showMobileNav ? "absolute top-0 block z-10 w-screen h-fit bg-slate-50 rounded-b-3xl transition duration-700" : "hidden"}>
        <TopBar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />

        <div className='flex flex-col p-5'>
          <Link to='/' className="font-roboto font-medium text-base text-slate-700 hover:text-white hover:bg-purple-annex rounded-2xl p-5">Home</Link>
          <div className="font-roboto font-medium text-base text-slate-700 hover:text-white hover:bg-purple-annex rounded-2xl p-5 flex flex-row gap-2 items-center justify-start" onClick={() => { setFirstDropDown(!firstDropDown) }}>
            Buy Crypto {firstDropDown ? <ChevronUpIcon className='h-7 w-7' /> : <ChevronDownIcon className='h-7 w-7' />}
          </div>
          {firstDropDown &&
            <div className='flex flex-col'>
              <Link to='/' className="font-roboto font-medium text-base text-slate-700 hover:text-white hover:bg-purple-annex rounded-2xl p-5 indent-10">Bank Deposit</Link>
              <Link to='/' className="font-roboto font-medium text-base text-slate-700 hover:text-white hover:bg-purple-annex rounded-2xl p-5 indent-10">Credit/Debit Card</Link>
              <Link to='/' className="font-roboto font-medium text-base text-slate-700 hover:text-white hover:bg-purple-annex rounded-2xl p-5 indent-10">Peer 2 Peer (P2P)</Link>
              <Link to='/' className="font-roboto font-medium text-base text-slate-700 hover:text-white hover:bg-purple-annex rounded-2xl p-5 indent-10">Third Party Payment</Link>
            </div>}
          <Link to='/livemarket' className="font-roboto font-medium text-base text-slate-700 hover:text-white hover:bg-purple-annex rounded-2xl p-5">Live Market</Link>
          <div className="font-roboto font-medium text-base text-slate-700 hover:text-white hover:bg-purple-annex rounded-2xl p-5 flex flex-row gap-2 items-center justify-start" onClick={() => { setSecondDropDown(!secondDropDown) }}>
            Trade {secondDropDown ? <ChevronUpIcon className='h-7 w-7' /> : <ChevronDownIcon className='h-7 w-7' />}
          </div>
          {secondDropDown &&
            <div className='flex flex-col'>
              <Link to='/trade' className="font-roboto font-medium text-base text-slate-700 hover:text-white hover:bg-purple-annex rounded-2xl p-5 indent-10">Peer 2 Peer (P2P)</Link>
              <Link to='/trade' className="font-roboto font-medium text-base text-slate-700 hover:text-white hover:bg-purple-annex rounded-2xl p-5 indent-10">Swap</Link>
              <Link to='/trade' className="font-roboto font-medium text-base text-slate-700 hover:text-white hover:bg-purple-annex rounded-2xl p-5 indent-10">NFT</Link>
              <Link to='/trade' className="font-roboto font-medium text-base text-slate-700 hover:text-white hover:bg-purple-annex rounded-2xl p-5 indent-10">Annex Token</Link>
            </div>}
          <Link to='/contact' className="font-roboto font-medium text-base text-slate-700 hover:text-white hover:bg-purple-annex rounded-2xl p-5">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Trade