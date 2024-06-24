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

    if (!data) {
        return <div>No data found</div>;
    }

    const plainData = {
        title: data.title,
        originalTitle: data.originalTitle,
        cover: data.cover || null,
        parodies: data.parodies,
        tags: data.tags,
        artists: data.artists,
        groups: data.groups,
        languages: data.languages,
        categories: data.categories,
    };

    const images = data.images.pages;

    const downloads = `https://nhentai.net/g/${data.id}/download`;

    return (
        <ShowManga data={plainData} downloads={downloads} images={images} />
    );
};

export default ShowMangaPage;
