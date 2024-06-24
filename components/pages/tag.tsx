import React from 'react';
import { Card } from '../ui/card';
import Link from 'next/link';

const allTags = [
    { id: 1, tag: 'Loli', value: 'loli' },
    { id: 2, tag: 'Impregnation', value: 'impregnation' },
    { id: 3, tag: 'Milf', value: 'milf' },
    { id: 4, tag: 'Sister', value: 'sister' },
    { id: 5, tag: 'Harem', value: 'harem' },
    { id: 6, tag: 'NTR', value: 'netorare' },
    { id: 7, tag: 'Incest', value: 'incest' },
    { id: 8, tag: 'Mother', value: 'mother' },
    { id: 9, tag: 'Father', value: 'father' },
    { id: 10, tag: 'Aunt', value: 'aunt' },
    { id: 11, tag: 'Angel', value: 'angel' },
    { id: 12, tag: 'Birth', value: 'birth' },
    { id: 13, tag: 'Pregnant', value: 'pregnant' },
    { id: 14, tag: 'Brother', value: 'brother' },
    { id: 15, tag: 'Sleeping', value: 'sleeping' },
    { id: 16, tag: 'Slave', value: 'slave' },
    { id: 17, tag: 'Masturbation', value: 'masturbation' },
    { id: 18, tag: 'Paizuri', value: 'paizuri' },
    { id: 19, tag: 'Blowjob', value: 'blowjob' },
    { id: 20, tag: 'Shotacon', value: 'shotacon' },
    { id: 21, tag: 'Blindfold', value: 'blindfold' },
    { id: 22, tag: 'Rape', value: 'rape' },
    { id: 23, tag: 'Blood', value: 'blood' },
    { id: 24, tag: 'Virginity', value: 'virginity' },
];

const Tags = () => {
    return (
        <div className="h-auto w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#153067] to-zinc-900 py-28 px-4">
            <div className="flex flex-wrap gap-8 justify-center items-center">
                {allTags.map((tag) => (
                    <Link key={tag.id} href={`/manga18/search-result/${String(tag.value)}/1`} className='cursor-pointer hover:scale-110'>
                        <Card color='gray' className="w-[150px] h-auto flex flex-col justify-start items-center text-slate-100">
                            {tag.tag}
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Tags;
