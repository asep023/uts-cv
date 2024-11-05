"use client";

import React from 'react'
import SectionHeading from './section-heading'
import Image from 'next/image'
import { useSectionInView } from '@/lib/useInView'

import { motion } from 'framer-motion'
import {Fade} from "react-awesome-reveal"

export default function About () {
    
    const {ref} = useSectionInView("#about");

    return (
        <motion.section 
        inital={{opacity:0, y: 100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.175}}
        id= "about"
        ref={ref}
        className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
        >
            <div className="container mx-auto" >
            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                <SectionHeading>
                    About Me
                </SectionHeading>
            </Fade>
           
                <div className="grid xl:grid-cols-2 lg:text-start">
                    <div className="flex-1">
                        <div className="text-lg mt-12 xl:mt-3">
                            <div className="flex justify-start flex-col">

                            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h3 className="font-bold mt-6">Asep Saepuloh</h3>
                            </Fade>

                            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <p className="mt-2 leading-relaxed text-sm text-gray-700
                            dark:text-white/70">
                                    Garut, 23 November 2004. Pria Single dengan tinggi 176cm dan berat badan 51kg. Belum menikah. kontak saya jika anda berminat jadi istri saya WA: 088224368530 / e-mail: epul7825@gmail.com
                                </p>
                            </Fade>
                                
                            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h3 className="font-bold mt-6">Riwayat Pendidikan</h3>
                            </Fade>

                            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <p className="mt-2  leading-relaxed text-sm text-gray-700
                            dark:text-white/70">
                                    SDN 01 Citeras 2010-2016, SMP Al-Ilyas Malangbong 2016-2019, SMK Krija Bhakti Utama Limbangan 2019-2022, Ma'soem University 2022-sekarang.
                                </p>
                            </Fade>
                                
                            </div>
                        </div>
                    </div>
                    
                    {/*Image*/}
                    <div>
                    <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                    <Image 
                    src="/12.jpg"
                    alt="About Me"
                    width="600"
                    height="600"
                    quality="100"
                    priority={true}
                    className="rounde-full mt-8 object-cover"
                    />
                            </Fade>
                    
                    </div>
                </div>
            </div>
        </motion.section>
    )
}