'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {HiHome} from 'react-icons/hi2';

export const navData = [
    { name: 'home', path: '#home', icon: <HiHome /> },
];

const Sidebar = () => {
    const pathname = usePathname();

    return(
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 w-screen xl:w-16 top-0 xl:max-w-md xl:h-screen'>
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
                {navData.map((link, index)=> {
                return(
                    <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center text-slate-100 hover:text-blue-500 group scroll-smooth transition-all duration-300 delay-100`} href={link.path} key={index} >
                        <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                            <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px] '>
                                <div className='text-[12px] leading-none font-semibold capitalize '>
                                    {link.name}
                                </div>
                                <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2 '></div>
                            </div>
                        </div>
                        <div>
                            {link.icon}
                        </div>
                    </Link>
                )
                })}
            </div>
        </nav>
    )
};

export default Sidebar;