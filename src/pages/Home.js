import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import ScrollToTop from 'react-scroll-to-top'

import { BackgroundMobileImg, BackgroundImg, CoinImg, AnnexRoadmap } from '../assets'
import { TransparentButton, PurpleButton, TopBar, TokenSalesCard, Footer, TransactionCard, Astronaut, WhyCard } from '../components'

const Home = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [firstDropDown, setFirstDropDown] = useState(false);
  const [secondDropDown, setSecondDropDown] = useState(false);

  return (
    <div className='z-0'>
      <div className='relative'>
        <img src={BackgroundImg} alt="Background" className='hidden md:flex w-screen' />
        <img src={BackgroundMobileImg} alt="Background" className='md:hidden w-screen h-screen bg-contain' />

        <div className='absolute top-0'>
          <TopBar showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} home />

          <div className=''>
            <div className='flex md:flex-row md:justify-around md:px-10 md:pt-16'>
              <div className='w-full md:w-1/2 flex flex-col items-center md:items-start gap-5 md:gap-8 p-4 md:py-20'>
                <div className='flex flex-col items-center md:items-start'>
                  <div className='font-roboto font-medium text-center md:text-left md:font-semibold text-white text-2xl md:text-4xl md:tracking-widest'>Buy, trade, and hold</div>
                  <div className='font-roboto font-medium text-center md:text-left md:font-semibold text-white text-2xl md:text-4xl md:tracking-widest'>350+ cryptocurrencies on</div>
                  <div className='font-roboto font-medium text-center md:text-left md:font-semibold text-white text-2xl md:text-4xl md:tracking-widest'>Annex</div>
                </div>
                <div className='flex flex-col items-center md:items-start'>
                  <div className='font-roboto font-normal text-white text-xs md:text-base text-center md:text-left'>Here at Annex, we are committed to user protection with strictprotocols and industry-leading technical measures.</div>
                </div>
                <div className='flex flex-row gap-4 justify-center md:justify-start'>
                  <PurpleButton text='Download App' />
                  <TransparentButton text='Download RoadMap' download={true} downloadFile={AnnexRoadmap} />
                </div>
              </div>

              <div className='hidden md:flex md:w-1/2'>
                <img src={CoinImg} alt="Coin and smartphone" />
              </div>
            </div>

            <div className='rounded-t-4xl md:rounded-t-5xl bg-purple-100 flex flex-col gap-10 p-8 md:p-12 items-center justify-center'>
              <div className='flex md:flex-row gap-5 md:px-24 justify-center' id='AboutUs'>
                <div className='hidden md:w-1/2 md:flex items-center justify-center'>
                  <Astronaut />
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-2 md:gap-4'>
                  <div className='flex flex-col items-center gap-4 py-5 rounded-2xl bg-slate-400 md:bg-transparent'>
                    <div className='font-roboto font-bold text-3xl tracking-widest text-white md:text-slate-700'>About Us</div>
                    <div className='font-roboto font-normal text-xs tracking-widest text-white md:text-slate-600'>The Most Trusted Cryptocurrency Platform</div>
                  </div>
                  <div className='text-justify font-roboto font-normal text-xs tracking-widest text-slate-600 mt-5'>
                    Here at Annex, we are committed to user protection with strict protocols and
                    industry-leading technical measures. Annex stores 10% of all trading fees in a
                    secure asset fund to protect a share of user funds. Personalized access control
                    allows you to restrict devices and addresses that can access your account, for
                    greater ease of mind. Your transaction data is secured via end-to-end encryption,
                    ensuring that only you have access to your personal information.
                    Stay in the know with our app and desktop client.
                  </div>
                  <div className='flex flex-col gap-2 md:gap-6'>
                    <div className='font-roboto font-normal text-xs tracking-widest text-slate-600 flex flex-row items-stretch text-justify'>
                      <ChevronRightIcon className='h-4 w-4 text-purple-annex' />
                      <div className='w-[90%]'>
                        Get 24/7 chat support with our friendly customer service agents at your service
                      </div>
                    </div>
                    <div className='font-roboto font-normal text-xs tracking-widest text-slate-600 flex flex-row items-center text-justify'>
                      <ChevronRightIcon className='h-4 w-4 text-purple-annex' />
                      <div className='w-[90%]'>
                        Stay up to date with the latest stories and commentary
                      </div>
                    </div>
                    <div className='font-roboto font-normal text-xs tracking-widest text-slate-600 flex flex-row items-center text-justify'>
                      <ChevronRightIcon className='h-4 w-4 text-purple-annex' />
                      <div className='w-[90%]'>
                        Simple & Secure. Search popular coins and start earning
                      </div>
                    </div>
                  </div>
                </div>
              </div >

              <TransactionCard />

              <WhyCard />

              <TokenSalesCard />

              <Footer />

              <ScrollToTop
                smooth
                top={50}
                component={<ChevronUpIcon className='h-10 w-10 text-white' />}
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

      {/* <div className='w-screen absolute top-[88%] rounded-t-4xl md:rounded-t-5xl bg-purple-100 flex flex-col gap-10 p-8 md:p-12 items-center justify-center'>
        <div className='flex md:flex-row gap-5 md:px-24 justify-center' id='AboutUs'>
          <div className='hidden md:w-1/2 md:flex items-center justify-center'>
            <Astronaut />
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-2 md:gap-4'>
            <div className='flex flex-col items-center gap-4 py-5 rounded-2xl bg-slate-400 md:bg-transparent'>
              <div className='font-roboto font-bold text-3xl tracking-widest text-white md:text-slate-700'>About Us</div>
              <div className='font-roboto font-normal text-xs tracking-widest text-white md:text-slate-600'>The Most Trusted Cryptocurrency Platform</div>
            </div>
            <div className='text-justify font-roboto font-normal text-xs tracking-widest text-slate-600 mt-5'>
              Here at Annex, we are committed to user protection with strict protocols and
              industry-leading technical measures. Annex stores 10% of all trading fees in a
              secure asset fund to protect a share of user funds. Personalized access control
              allows you to restrict devices and addresses that can access your account, for
              greater ease of mind. Your transaction data is secured via end-to-end encryption,
              ensuring that only you have access to your personal information.
              Stay in the know with our app and desktop client.
            </div>
            <div className='flex flex-col gap-2 md:gap-6'>
              <div className='font-roboto font-normal text-xs tracking-widest text-slate-600 flex flex-row items-center text-justify'>
                <ChevronRightIcon className='h-5 w-5 text-purple-annex' />
                Get 24/7 chat support with our friendly customer service agents at your service
              </div>
              <div className='font-roboto font-normal text-xs tracking-widest text-slate-600 flex flex-row items-center text-justify'>
                <ChevronRightIcon className='h-5 w-5 text-purple-annex' />
                Stay up to date with the latest stories and commentary
              </div>
              <div className='font-roboto font-normal text-xs tracking-widest text-slate-600 flex flex-row items-center text-justify'>
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

        <ScrollToTop
          smooth
          top={100}
          component={<ChevronUpIcon className='h-10 w-10 text-white' />}
          className='!bg-purple-annex !p-2 !rounded-full !flex !items-center !justify-center !animate-bounce !transition !ease-in-out !delay-150 hover:!-translate-y-1 hover:!scale-110 !duration-500'
        />
      </div > */}
    </div>
  )
}

export default Home