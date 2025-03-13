"use client"
import Image from 'next/image'
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton';



const TAB_DATA = [
     {
          title: "Skills",
          id: "skills",
          content: (
               <ul className='list-disc pl-2'>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>React.js</li>
                    <li>Javascript</li>
               </ul>
          ),
     },
     {
          title: "Education",
          id: "education",
          content: (
               <ul className='list-disc pl-2'>
                    <li>National Institute Of Tech. Rourkela</li>
                    <li>Mother's Public School, Bhubaneshwar</li>
               </ul>
          ),
     },
     {
          title: "Certifications",
          id: "certifications",
          content: (
               <ul className='list-disc pl-2'>
                    <li>National Institute Of Tech. Rourkela</li>
                    <li>Mother's Public School, Bhubaneshwar</li>
               </ul>
          ),
     },
]

const AboutSection = () => {
     const [tab, setTab] = useState("skills");
     const [isPending, startTransition] = useTransition();

     const handleTabChange = (id) => {
          startTransition(() => {
               setTab(id);
          });
     }
     return (
          <section className='text-white'>
               <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                    <Image src="/images/about.jpg" width={500} height={500} alt='Image of a keyboard' />
                    <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                         <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                         <p className='text-base lg:text-lg'>
                              Hi, I'm Amrutanshu Mishra, a passionate and results-driven software developer with a strong foundation in full-stack web development and competitive programming. Currently pursuing my B.Tech in Computer Science and Engineering from NIT Rourkela, I love building innovative solutions that make an impact.
                              <br />
                              From developing real-time chat applications and video conferencing platforms to designing user-friendly web interfaces, I enjoy working on projects that challenge me to grow. I have hands-on experience with modern web technologies including Next.js, TypeScript, MongoDB, and Node.js, and I'm always eager to explore new tools and frameworks.
                              <br />
                              Apart from development, I'm an active participant in competitive programming, with achievements on platforms like Codeforces, CodeChef, and AtCoder. I also contribute to organizing coding contests and mentoring peers.
                              <br />
                              When I'm not coding, you'll find me learning about optimization algorithms, contributing to social initiatives, or exploring new tech trends.

                              If you're interested in collaborating or just want to say hi, feel free to connect!
                         </p>
                         <div className='flex flex-row justify-start mt-8'>
                              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                                   {" "}
                                   Skills{" "}
                              </TabButton>
                              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                                   {" "}
                                   Education{" "}
                              </TabButton>
                              <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                                   {" "}
                                   Certifications{" "}
                              </TabButton>

                         </div>
                         <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                    </div>
               </div>
          </section>
     )
}

export default AboutSection
