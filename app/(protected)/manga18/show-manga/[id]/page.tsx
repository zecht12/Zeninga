import React from 'react';
import { NHentai } from "@shineiichijo/nhentai-ts";
import ShowManga from '@/components/pages/show';

const ShowMangaPage = async ({ params }: any) => {
    const { id } = params;

    if (!id) {
        return <div>Loading...</div>;
    }

    const user_agent = "User Agent";
    const cookie_value = process.env.NEXT_PUBLIC_NHENTAI_TOKEN;
    const nhentai = new NHentai({
        site: "nhentai.net",
        user_agent,
        cookie_value,
    });

    const data = await nhentai.getDoujin(id);
    console.log(data)
    const images = data.images.pages;
    if (!data) {
        return <div>No data found</div>;
    }

    const downloads = `https://nhentai.net/g/${data.id}/download`

    return(
        <ShowManga data={data} downloads={downloads} images={images} />
    );
};

export default ShowMangaPage;
