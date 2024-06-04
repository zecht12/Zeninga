"use client";

import React, { useState } from 'react';
import MangaSearch from '../shared/mangasearch';
import { Manga } from '@/schemas';

export default function MangaPaging() {
    const [results, setResults] = useState<Manga[]>([]);

    const handleSearch = (searchResults: Manga[]) => {
        setResults(searchResults);
    };

    return (
        <div className="h-auto w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#153067] to-zinc-900 pt-48 pb-28 px-4">
            <MangaSearch onSearch={handleSearch} />
            <div className='text-slate-100'>
                {results.length > 0 ? (
                    <ul>
                        {results.map((result, index) => (
                            <li key={index}>
                                {result.attributes.title.en || result.attributes.title.jp}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}