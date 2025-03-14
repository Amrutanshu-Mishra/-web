"use client"
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
     return (
          <section>

               <div className='grid grid-cols-1 sm:grid-cols-12'>
                    <div className='col-span-7 place-self-center text-center sm:text-left'>
                         <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-600 '>Hello, I'm{" "}</span>
                              <br/>
                              <TypeAnimation
                                   sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'Amrutanshu',
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        'Competitive Programmer',
                                        1000,
                                        'Web Developer',
                                        1000,
                                        'UI/UX Designer',
                                        1000
                                   ]}
                                   wrapper="span"
                                   speed={50}

                                   repeat={Infinity}
                              />
                         </h1>
                         <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>"Passionate about software development, I’m a B.Tech student at NIT Rourkela with a keen interest in
                              competitive programming, full-stack development, and cutting-edge technologies like quantum
                              computing. I thrive on creating innovative solutions and building impactful projects."
                         </p>
                         <div>
                              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-700 to-red-800 hover:bg-slate-200 text-white'>Contact Me</button>
                              <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-700 to-red-800 hover:bg-slate-800 text-white  mt-3'>
                                   <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                              </button>
                         </div>
                    </div>

                    <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                         <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                              <Image
                                   src="/images/me.jpg"
                                   alt='hero image'
                                   className='absolute trasform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                                   width={300}
                                   height={300}
                              />
                         </div>

                    </div>
               </div>
          </section>
     )
}

export default HeroSection
