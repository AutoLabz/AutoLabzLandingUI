"use client";

import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Link from 'next/link';
import infoCards from './libs/InfoCards';
import { CheckCheck, LucideIcon } from 'lucide-react';
import { ReactElement } from 'react';
import pricingCards from './libs/PricingCards';
import { Footer } from "./components/Footer";
import { Faq } from "./components/Faq";
import { NavBar } from './components/NavBar';
import { Socials } from './components/Socials';
import { motion, useMotionValue, useTransform , useScroll } from 'framer-motion';
import { Paragraph } from './components/Paragraph'

const paragraph = "AI-powered searches. Lightning-fast results. Your perfect ride, just clicks away. Experience the future of car shopping - where finding your dream car is as easy as turning the key."

export default function Home() {
  return (
    <main
      className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
      <NavBar />
      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
        <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-black md:text-8xl'>AutoLab<span style={{ color: '#0033CC' }}>z</span></h1>
            <h2 className='text-md md:text-2xl'>Find your dream car!</h2>
          </div>
          <p className='max-w-md text-sm md:text-base text-zinc-500'>AutoLabz is an AI-powered car search engine tool that provides data-driven insights to find your dream car.</p>
          <div className='w-full flex items-center justify-center md:justify-start gap-4'>
            <button className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-[#0033CC] hover:text-white transition-colors'>Find a car!</button>
            <span className='w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors flex items-center justify-center'>
              <a className='transition-colors text-xs sm:text-base' rel="noopener noreferrer" target="_blank" href="https://airtable.com/appp8uGD4nwkYR88V/shrAS5KXDf7rXDbui">Contact</a>
            </span>
          </div>
        </div>

        <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
          <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode' />
        </div>
      </header>

      <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
        <div className='absolute -z-10 h-full w-full overflow-hidden'>
          <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl" />
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
          <h3 className='text-4xl md:text-5xl font-bold'>LLM powered Car Search</h3>
          <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
            {infoCards.map((infoCard) => (
              <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
                <p className="text-sm sm:text-base text-center md:text-left">{infoCard.bodyText}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>


      <Faq />
      <Socials />
      <Footer />
    </main>
  );
}

interface IInfoCardProps {
  title: string;
  Icon: LucideIcon;
  children: ReactElement<any, any>;
}

function InfoCard({ title, Icon, children }: IInfoCardProps) {
  return (
    <div className='w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className="p-4 bg-fuchsia-700 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className='text-lg font-bold sm:text-xl'>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}

interface IPricingCardProps {
  title: string;
  price: number;
  benefits: string[];
  oneliner: string;
}

function PricingCard({ title, price, benefits, oneliner }: IPricingCardProps) {
  return (
    <div className='h-fit w-full rounded flex flex-col p-8 gap-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className='flex flex-col gap-2'>
        <div>
          <h6 className='text-2xl'>{title}</h6>
          <p className='text-sm text-zinc-500'>{oneliner}</p>
        </div>
        <p className='text-4xl font-bold'>
          ${price} <span className='text-sm font-normal text-zinc-500'>/ Month</span>
        </p>
      </div>
      <button className='bg-fuchsia-700 rounded p-2 text-sm transition-colors hover:bg-fuchsia-800'>Try 7 days free!</button>
      <div className='flex flex-col w-full gap-4'>
        {benefits.map((benefit, i) => (
          <p key={i} className='text-sm text-zinc-500 flex items-center gap-2'>
            <span>
              <CheckCheck />
            </span>
            {benefit}
          </p>
        ))}
      </div>
    </div>
  );
}
