'use client'

import React from 'react'
import Socials from './Socials'
import Link from 'next/link'
import Image from 'next/image'
import { League_Spartan, Montserrat, Open_Sans, Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { IoIosArrowRoundBack } from "react-icons/io";
import { logout } from '@/actions/logout';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button'

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

const SettingNavbar = () => {
    const pathname = usePathname();
    const settings = pathname === "/profile";
    const editSettings = pathname === "/profile/edit";
    const onClick = () => {
        logout();
    }
    return (
        <header className="fixed z-30 w-full flex items-center px-40 xl:px-0 xl:h-[70px] ">
            <div className="container mx-0">
                <div className="flex flex-col lg:flex-row justify-around items-center gap-y-6 py-8">
                    <div className='md:flex items-center justify-center gap-2'>
                        {settings && (
                            <Link href="/home">
                                <IoIosArrowRoundBack size={35} className="text-white hover:text-blue-600" />
                            </Link>
                        )}
                        {editSettings && (
                            <Link href="/profile">
                                <IoIosArrowRoundBack size={35} className="text-white hover:text-blue-600" />
                            </Link>
                        )}
                    </div>
                    <Button asChild variant="linkwhite" size="sm">
                        <button type="submit" onClick={onClick}>
                            Sign Out
                        </button>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default SettingNavbar;