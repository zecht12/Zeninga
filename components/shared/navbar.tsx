import React from 'react'
import Socials from './Socials'
import Link from 'next/link'
import Image from 'next/image'
import { League_Spartan, Montserrat, Open_Sans, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { logout } from '@/actions/logout';

const font = Poppins({
    subsets: ["latin"],
    weight: ["700"]
});

const head = League_Spartan({
    subsets: ["latin"],
    weight: ["700"]
});

const body = Montserrat({
    subsets: ["latin"],
    weight: ["400"]
});

const bodyBold = Montserrat({
    subsets: ["latin"],
    weight: ["600"]
});

const button = Open_Sans({
    subsets: ["latin"],
    weight: ["700"]
})

const Navbar = () => {
    return (
        <header className="fixed z-30 w-full flex items-center px-40 xl:px-0 xl:h-[70px] ">
            <div className="container mx-0">
                <div className="flex flex-col lg:flex-row justify-around items-center gap-y-6 py-8">
                    <div className='md:flex items-center justify-center gap-2'>
                        <Link href='/home' className='flex justify-center items-center scroll-smooth transition delay-100'>
                            <Image src={'/avatar.jpg'} width={40} height={40} alt="logo" priority={true} className="w-[40px] h-[40px] hover:scale-110 rounded-full shadow-md shadow-slate-500" />
                        </Link>
                        <p className={cn('text-2xl font-bold cursor-default text-red-500', head.className)}>Zeninga</p>
                    </div>
                    <Socials />
                </div>
            </div>
        </header>
    )
}

export default Navbar