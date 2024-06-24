import ShowManga from '@/components/pages/show';
import { NHentai } from '@shineiichijo/nhentai-ts';
import React from 'react';

const RandomMangaPage = async () => {
    const nhentai = new NHentai();
    const data = await nhentai.getRandom();

    const plainData = {
        id: data.id,
        title: data.title,
        originalTitle: data.originalTitle,
        cover: data.cover || null,
        parodies: data.parodies,
        tags: data.tags,
        artists: data.artists,
        groups: data.groups,
        languages: data.languages,
        categories: data.categories,
        images: data.images.pages,
    };

    const images = plainData.images;
    const downloads = `https://nhentai.net/g/${data.id}/download`;

    return (
        <ShowManga data={plainData} images={images} downloads={downloads} />
    );
};

export default RandomMangaPage;
