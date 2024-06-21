import SearchResult from '@/components/pages/search-result';
import { NHentai } from '@shineiichijo/nhentai-ts';
import React from 'react';

type Props = {
    params: {
        tag: string;
        page: string;
    };
};

const SearchResultPage = async ({ params }: Props) => {
    const { tag, page } = params;
    const currentPage = parseInt(page, 10) || 1;

    try {
        const nhentai = new NHentai();
        const { data } = await nhentai.search(tag, { page: currentPage });

        if (!data || data.length === 0) {
            return <div>No data found</div>;
        }

        return (
            <div>
                <SearchResult data={data} tag={tag} currentPage={currentPage} />
            </div>
        );
    } catch (error) {
        console.error(error);
        return <div>Error fetching data</div>;
    }
};

export default SearchResultPage;
