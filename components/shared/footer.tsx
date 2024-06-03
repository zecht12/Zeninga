import { Montserrat, Poppins } from 'next/font/google';
import React from 'react'
import { cn } from '../../lib/utils';

const body = Montserrat({
    subsets: ["latin"],
    weight: ["700"]
});

const Footer = () => {
    return (
        <div>
            <div className='w-auto h-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#181b25] to-zinc-900'>
                <div className='flex w-full h-full p-2 justify-center'>
                    <p className={cn('font-bold text-slate-100', body.className)}>Copyright @ 2024 <span className='inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Zeninga</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer