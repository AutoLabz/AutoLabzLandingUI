import React from 'react';
import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export function Socials() {
  return (
    <section id="socials" className="h-fit min-h-screen w-full flex relative items-center justify-center p-4 md:p-8">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardVariants}
        className="w-full h-full flex items-center justify-center flex-col gap-6 md:gap-8 max-w-7xl"
      >
        <h3 className='text-3xl md:text-5xl font-bold text-white text-center'>
          Stay <span style={{ color: '#0033CC' }}>Connected</span> with Us
        </h3>
        <div className="w-full max-w-lg md:max-w-3xl p-6 md:p-8 rounded-md shadow-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 flex flex-col items-center justify-center" style={{ borderImage: 'linear-gradient(to right, #0033CC, #EB2891) 1' }}>
          <h2 className="text-xl md:text-2xl text-center mb-4 md:mb-6 font-medium text-white">
            Follow us for the latest updates <br />(we’re just getting started)
          </h2>
          <div className="flex justify-center items-center">
            <a
              href="https://x.com/Autolabsz"
              className="p-3 md:p-4 bg-black rounded-full text-white hover:bg-gray-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                className="fill-current text-white"
              >
                <path d="M13.982 10.622 20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.876 10.007L3.5 21h1.554l6.012-6.989L15.868 21h5.245l-7.131-10.378Zm-2.128 2.474-.697-.997-5.543-7.93H8l4.474 6.4.697.996 5.815 8.318h-2.387l-4.745-6.787Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
