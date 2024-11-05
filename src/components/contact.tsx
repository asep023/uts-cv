"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useInView";

import { motion } from "framer-motion";
import SubmitBtn from "./submit-btn";

import {Fade} from "react-awesome-reveal"



export default function Contact() {

const {ref} = useSectionInView("#contact")

return(
<motion.section
id="contact"
ref={ref}
>
    <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}><Fade />
    <SectionHeading>
     {"Contact Me"} 
     </SectionHeading>
    </Fade>
    <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
        {"Feel free to contact me directly through this form"}
        </p>
    </Fade>
     
    <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
    <form className="mt-10 flex flex-col dark:text-black" >
<input 
className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:text-white/40"
name="senderEmail"
type="email"
required
maxLength={500}
placeholder={"Your email"}
/>
<textarea 
className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white dark:text-white/40"
name="massage"
placeholder={
    "Your mail"
}
required
maxLength={5000}
/>
<SubmitBtn text={"Submit"}/>
    </form>
    </Fade>


</motion.section>
)
}