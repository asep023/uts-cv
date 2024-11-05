import type { Metadata } from "next";
import { Sora } from "next/font/google"
import "./globals.css";
import Providers from "@/container/providers";
import Navbar from "@/components/navbar";


const sora =Sora({ 
  subsets:["latin"],
  variable: '--font-sora',
  weight: ['100','200','300','400','700','800'], 
});

export const metadata: Metadata = {
  title: "Fronted | Advance",
  description: "Fronted Advance Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
          className={`${sora.variable} font-Sora flex flex-col bg-gray-50
          text-black-950 relative dark:bg-gray-900 dark:text-gray-50 
          dark:text-opacity-90 antialiased`}
>
           {/*Gardient background color*/}

        <div className="bg-[#fbe2e3] absolute top-[-6rem] flex-1 -z- [10] 
        right-[11rem] h-[10rem] w-[10rem] rounded-full 
        blur-[5rem] sm:w-[-10rem] dark:bg-[#946263]"></div>

        <div className="bg-[#fbe2e3] absolute top-[-1rem] flex-1 -z- [10] 
        left-[10rem] h-[10rem] w-[10rem] rounded-full 
        blur-[5rem] sm:w-[-10rem] md:left-[-10rem] lg:left-[-10rem]
        xl:left-[-5rem] 2xl:left-[-1rem] dark:bg-[#676394]"></div>

        <Providers>
        <Navbar />
        {children} 
        </Providers>
        
      </body>
    </html>
  );
}
