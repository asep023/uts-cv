"use client";

import { SectionName } from "@/lib/types"; // Ensure this path is correct
import React, { useState, createContext, useContext } from "react";

type ActiveSectionContextProviderProps = {
    children: React.ReactNode; // Fixed typo from 'childern' to 'children'
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    time0fLastClick: number;
    setTime0fLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children, // Fixed typo here as well
}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("#home");
    const [time0fLastClick, setTime0fLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                time0fLastClick,
                setTime0fLastClick,
            }}>
            {children} {/* Fixed typo here */}
        </ActiveSectionContext.Provider>
    );
}

// Changed to named export
export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}