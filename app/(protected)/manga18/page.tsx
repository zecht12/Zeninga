import React from 'react';
import { NHentai } from "@shineiichijo/nhentai-ts";
import Manga18 from '@/components/pages/manga18';

const MangaPage = async () => {
    const user_agent = "User Agent";
    const cookie_value = process.env.NEXT_PUBLIC_NHENTAI_TOKEN;
    const nhentai = new NHentai({
        site: "nhentai.net",
        user_agent,
        cookie_value,
    });

    const { data } = await nhentai.explore();

    const mangaDetails = await Promise.all(data.map(async (manga) => {
        try {
            const doujin = await nhentai.getDoujin(manga.id);
            return { ...manga, languages: doujin.languages };
        } catch (error) {
            console.error(`Failed to fetch details for manga ID ${manga.id}:`, error);
            return { ...manga, languages: [] };
        }
    }));
    console.log(mangaDetails)

    return (
        <Manga18 data={mangaDetails}/>
    );
}

export default MangaPage;
