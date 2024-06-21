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

    return (
        <Manga18 data={data}/>
    );
}

export default MangaPage;
