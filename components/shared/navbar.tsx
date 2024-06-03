'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { League_Spartan, Montserrat, Open_Sans, Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { logout } from '@/actions/logout'
import { useCurrentUser } from '@/hooks/use-current-user'
import { Button } from '../ui/button'
import Avatar from './avatar'
import { AiOutlineMenu } from "react-icons/ai"

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
    const [menuOpen, setMenuOpen] = useState(false);
    const user = useCurrentUser();
    const onClick = () => {
        logout();
    }
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <header className="fixed z-30 w-full flex items-center px-40 xl:px-0 xl:h-[70px] ">
            <div className="container mx-0">
                <div className="flex flex-col lg:flex-row justify-around items-center gap-y-6 py-8">
                    <div className='md:flex items-center justify-center gap-2'>
                        <Link href='/home' className='flex justify-center items-center scroll-smooth transition delay-100'>
                            <Image src={'/avatar.jpg'} width={40} height={40} alt="logo" priority={true} className="w-[40px] h-[40px] hover:scale-110 rounded-full shadow-md shadow-slate-500" />
                        </Link>
                        <p className={cn('text-2xl font-bold cursor-default inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent', head.className)}>Zeninga</p>
                    </div>
                    <div className='md:flex justify-around items-center md:gap-3'>
                        <p className={cn('md:text-lg text-sm font-bold cursor-default bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-justify md:flex hidden', head.className)}>Powerfull Manga World</p>
                        <div className='gap-3 p-2 md:py-1 md:px-2 px-6 border-[1px] border-neutral-300 rounded-full bg-slate-200 flex justify-around items-center shadow-sm shadow-neutral-500'>
                            <Avatar src={user?.image} />
                            <div className="relative">
                                <AiOutlineMenu size={25} onClick={toggleMenu} className="text-black hover:text-blue-600 cursor-pointer" />
                                {menuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 flex flex-col justify-center items-center">
                                        <Button asChild variant="link" size="sm">
                                            <Link href="/profile">
                                                Profile
                                            </Link>
                                        </Button>
                                        {user?.role === "ADMIN" && (
                                            <Button asChild variant="link" size="sm">
                                                <Link href="/admin">
                                                    Admin
                                                </Link>
                                            </Button>
                                        )}
                                        <Button asChild variant="link" size="sm">
                                            <button type="submit" onClick={onClick}>
                                                Sign Out
                                            </button>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar