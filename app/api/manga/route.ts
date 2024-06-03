import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_MANGADEX_ENDPOINT;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {searchQuery,sortBy,filterTags,contentRating,demographic,authors,artists,publicationStatus,originalLanguages,publicationYear,} = req.body;

    const filters = {
        title: searchQuery,

        includedTags: await getTagUUIDs(filterTags),

        contentRating: contentRating !== 'any' ? [contentRating] : undefined,

        publicationDemographic: demographic !== 'any' ? [demographic] : undefined,

        authors: authors || undefined,

        artists: artists || undefined,

        status: publicationStatus !== 'any' ? [publicationStatus] : undefined,

        originalLanguage: originalLanguages !== 'any' ? [originalLanguages] : undefined,

        publicationYear: publicationYear || undefined,

        ...getOrderQuery(sortBy)
    };

    try {
        const response = await axios.get(`${baseUrl}/manga`, { params: filters });

        res.status(200).json({ results: response.data.data });
    } catch (error) {
        console.error('Error fetching manga:', error);

        res.status(500).json({ error: 'Failed to fetch manga' });
    }
}

const getTagUUIDs = async (tagNames: string[]) => {
    if (tagNames.length === 0) return [];

    try {
        const response = await axios.get(`${baseUrl}/manga/tag`);

        const tags = response.data.data;
        return tags.filter((tag: any) => tagNames.includes(tag.attributes.name.en)).map((tag: any) => tag.id);
    } catch (error) {
        console.error('Error fetching tags:', error);
        return [];
    }
};

const getOrderQuery = (sortBy: string) => {
    const order: any = {};
    if (sortBy !== 'none') {
        order[`order[${sortBy}]`] = 'desc';
    }
    return order;
};
