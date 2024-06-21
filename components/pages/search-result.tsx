import { cn } from '@/lib/utils';
import { bodyBold, head } from '@/utils/font';
import React from 'react';
import { Card } from '../ui/card';
import Link from 'next/link';
import Image from 'next/image';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../ui/pagination"


type SearchResultProps = {
    data: any[];
    tag: string;
    currentPage: number;
};

const SearchResult = ({ data, tag, currentPage }: SearchResultProps) => {
    if (!Array.isArray(data)) {
        return <div>No data available</div>;
    }

    return (
        <div className="h-auto w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#153067] to-zinc-900 py-28 px-4">
            <h1 className={cn("text-white text-center text-3xl pb-8", head.className)}>Recently Added Manga</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                {data.map((manga: any) => (
                    <Card color="white" variant="rounded" key={manga.id} className="w-[150px] h-auto flex flex-col justify-start items-center">
                        <Link href={`/manga18/show-manga/${manga.id}`} passHref>
                            <div className="w-[150px] h-[150px]">
                                <Image src={manga.cover || '/images/default-cover-url.jpg'} alt="cover" width={150} height={150} className="w-full h-full rounded-t-xl" />
                            </div>
                            <div className="flex justify-center items-center">
                                <p className={cn("text-center p-2 text-xs", bodyBold.className)}>{manga.title}</p>
                            </div>
                        </Link>
                    </Card>
                ))}
            </div>
            <Pagination className='mt-8'>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href={`/manga18/search-result/${tag}/${currentPage - 1}`} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href={`/manga18/search-result/${tag}/${currentPage}`}>{currentPage}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        {data.length === 25 && (
                            <PaginationNext href={`/manga18/search-result/${tag}/${currentPage + 1}`} />
                        )}
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default SearchResult;
