"use client"

import Spline from '@splinetool/react-spline'
import Image from 'next/image'
import Link from 'next/link'
import infoCards from './libs/InfoCards'
import { CheckCheck, LucideIcon } from 'lucide-react'
import { ReactElement } from 'react'
import pricingCards from './libs/PricingCards'

export default function Home() {
  return (
    <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
      <Navbar />

      <div className='flex flex-grow items-center justify-center'>
        <h3 className='text-center'> Coming Soon :)</h3>
      </div>
      <Footer/>

    </main>
  )
}

const Footer = () => {
  return (
    <footer className="footer z-10 border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent text-white">
      <div className="p-12 flex items-center ">
        <p className="text-slate-600 ml-auto">
          © 2024 AutoLabz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};




function Navbar() {
  return (
    <div className='w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='font-bold'>AutoLabz</h6>
        <ul className='flex gap-8'>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#home">Home</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#about">About</Link></li>
          <li><a className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' rel="noopener noreferrer" target="_blank" href="https://airtable.com/appp8uGD4nwkYR88V/shrAS5KXDf7rXDbui">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}