import { cn } from '@/lib/utils';
import { bodyBold } from '@/utils/font';
import React from 'react'
import { BiSearch } from 'react-icons/bi';

const Search = () => {
    return (
        <div className='border-[1px] w-full md:w-auto py-2 px-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer '>
            <div className='flex items-center justify-center xl:gap-28 lg:gap-20 md:gap-14 sm:gap-10 gap-6'>
                <p className={cn('text-slate-100 text-md text-center', bodyBold.className)}>Search Here</p>
                <div className='p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-slate-100'>
                    <BiSearch size={18} />
                </div>
            </div>
        </div>
    )
}

export default Search