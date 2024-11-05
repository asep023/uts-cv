"use client";

import { hobbyData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useInView";


export default function Hobby(){
    const {ref} = useSectionInView("#hobby", 0.1)
    return(
        <section id="hobby" className="scroll-mt28 mb-28">
            <SectionHeading>
                Hobby
            </SectionHeading>

            <div>
                {
                    hobbyData.map((hobby, index) => (
                        <Hobby {...hobby} key={index} />
                    ))
                }
            </div>
        </section>
    )
}