"use client";

import { useActiveSectionContext } from "@/container/active-section";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75){
    const { ref, inView } = useInView({
        threshold,
    });
    const {setActiveSection, time0fLastClick} = useActiveSectionContext();

    useEffect(()  =>{
        if (inView && Date.now() - time0fLastClick > 1000){
            setActiveSection(sectionName);

        }
    }, [inView, setActiveSection, time0fLastClick] );

    return{
        ref,
    };
}