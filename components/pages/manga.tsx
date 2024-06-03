"use client"

import React from 'react'
import MangaSearch from '../shared/mangasearch'

export default function MangaPaging() {
    return (
        <div className="h-auto w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#153067] to-zinc-900 py-28 px-4">
            <MangaSearch onSearch={()=>{} } />
        </div>
    )
}
