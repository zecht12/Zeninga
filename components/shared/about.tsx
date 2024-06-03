/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { cn } from "../../lib/utils";
import { Poppins, Montserrat, League_Spartan, Open_Sans } from "next/font/google";
import Image from "next/image";

const head = League_Spartan({
    subsets: ["latin"],
    weight: ["800"]
});

const subHead = Poppins({
    subsets: ["latin"],
    weight: ["700"]
})

const body = Montserrat({
    subsets: ["latin"],
    weight: ["400"]
});

const bodyBold = Montserrat({
    subsets: ["latin"],
    weight: ["500"]
});

const button = Open_Sans({
    subsets: ["latin"],
    weight: ["500"]
})

const About = () => {
    return (
        <div className="w-full md:h-screen h-auto xl:flex md:flex justify-between items-center mx-auto xl:px-16 md:px-12 sm:px-8 px-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#171f32] to-zinc-900">
            <div className="max-w-lg">
                <p className={cn("inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-5xl xl:pt-8 md:pt-6 sm:pt-5 pt-12 md:text-start text-center ", head.className)}>
                    Our Website and Content Usage Policy
                </p>
                <p className={cn("text-slate-100 text-base text-justify xl:pt-4 md:pt-3 sm:pt-2 pt-2", body.className)}>
                    We're Zeninga, do not engage in the sale of our website under any circumstances, whether to individuals, organizations, or third parties. Unauthorized duplication, distribution, or use of any content from our website is strictly prohibited. To utilize our content, you must obtain explicit written permission from Zeninga.
                </p>
            </div>
            <div className="xl:pr-16 md:pr-8 sm:pr-0 pr-0 xl:py-0 md:py-0 sm:py-12 py-8 flex items-center justify-center">
                <Image alt="logo" width="1000" height="1000" src="/avatar.jpg" className="w-[250px] h-[250px] rounded-full" />
            </div>
        </div>
    )
}

export default About