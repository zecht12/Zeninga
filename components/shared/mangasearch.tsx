"use client";

import { useState } from 'react';
import axios from 'axios';
import { Input } from '../ui/input';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from '../ui/button';
import { Manga } from "@/schemas"

type MangaSearchProps = {
    onSearch: (results: Manga[]) => void;
};

const MangaSearch: React.FC<MangaSearchProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('none');
    const [filterTags, setFilterTags] = useState<string[]>([]);
    const [contentRating, setContentRating] = useState('any');
    const [demographic, setDemographic] = useState('any');
    const [authors, setAuthors] = useState('');
    const [artists, setArtists] = useState('');
    const [publicationStatus, setPublicationStatus] = useState('any');
    const [originalLanguages, setOriginalLanguages] = useState('any');
    const [publicationYear, setPublicationYear] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post<{ results: Manga[] }>('/api/search', {
                searchQuery,
                sortBy,
                filterTags,
                contentRating,
                demographic,
                authors,
                artists,
                publicationStatus,
                originalLanguages,
                publicationYear,
            });

            onSearch(response.data.results);
        } catch (error) {
            setError('Failed to fetch manga');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="w-full flex justify-between items-start mb-4 text-slate-100 gap-4">
                <div className="w-[65%] flex items-center justify-center pt-4">
                    <Input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full"
                    />
                    <Button type="submit" className="ml-2" disabled={loading}>
                        {loading ? 'Searching...' : 'Search'}
                    </Button>
                </div>
                <div className="w-[35%]">
                    <Accordion type="single" collapsible className="w-auto">
                        <AccordionItem value="filters">
                            <AccordionTrigger>Show Filters</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center gap-4">
                                    <div>
                                        <label htmlFor="sortBy">Sort by</label>
                                        <Select
                                            value={sortBy}
                                            onValueChange={(value) => setSortBy(value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="None" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Sort by</SelectLabel>
                                                    <SelectItem value="none">None</SelectItem>
                                                    <SelectItem value="bestMatch">Best Match</SelectItem>
                                                    <SelectItem value="latestUpload">Latest Upload</SelectItem>
                                                    <SelectItem value="oldestUpload">Oldest Upload</SelectItem>
                                                    <SelectItem value="titleAscending">Title Ascending</SelectItem>
                                                    <SelectItem value="titleDescending">Title Descending</SelectItem>
                                                    <SelectItem value="highestRating">Highest Rating</SelectItem>
                                                    <SelectItem value="lowestRating">Lowest Rating</SelectItem>
                                                    <SelectItem value="mostFollows">Most Follows</SelectItem>
                                                    <SelectItem value="fewestFollows">Fewest Follows</SelectItem>
                                                    <SelectItem value="recentlyAdded">Recently Added</SelectItem>
                                                    <SelectItem value="oldestAdded">Oldest Added</SelectItem>
                                                    <SelectItem value="yearAscending">Year Ascending</SelectItem>
                                                    <SelectItem value="yearDescending">Year Descending</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label htmlFor="filterTags">Filter tags</label>
                                        <Input
                                            type="text"
                                            placeholder="Search tags"
                                            value={filterTags.join(', ')}
                                            onChange={(e) => setFilterTags(e.target.value.split(',').map(tag => tag.trim()))}
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contentRating">Content Rating</label>
                                        <Select
                                            value={contentRating}
                                            onValueChange={(value) => setContentRating(value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Any" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Content Rating</SelectLabel>
                                                    <SelectItem value="any">Any</SelectItem>
                                                    <SelectItem value="safe">Safe</SelectItem>
                                                    <SelectItem value="suggestive">Suggestive</SelectItem>
                                                    <SelectItem value="erotica">Erotica</SelectItem>
                                                    <SelectItem value="pornographic">Pornographic</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label htmlFor="demographic">Magazine Demographic</label>
                                        <Select
                                            value={demographic}
                                            onValueChange={(value) => setDemographic(value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Any" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Demographic</SelectLabel>
                                                    <SelectItem value="any">Any</SelectItem>
                                                    <SelectItem value="shounen">Shounen</SelectItem>
                                                    <SelectItem value="shoujo">Shoujo</SelectItem>
                                                    <SelectItem value="seinen">Seinen</SelectItem>
                                                    <SelectItem value="josei">Josei</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label htmlFor="authors">Authors</label>
                                        <Input
                                            type="text"
                                            placeholder="Any"
                                            value={authors}
                                            onChange={(e) => setAuthors(e.target.value)}
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="artists">Artists</label>
                                        <Input
                                            type="text"
                                            placeholder="Any"
                                            value={artists}
                                            onChange={(e) => setArtists(e.target.value)}
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="publicationStatus">Publication Status</label>
                                        <Select
                                            value={publicationStatus}
                                            onValueChange={(value) => setPublicationStatus(value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Any" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Publication Status</SelectLabel>
                                                    <SelectItem value="any">Any</SelectItem>
                                                    <SelectItem value="ongoing">Ongoing</SelectItem>
                                                    <SelectItem value="completed">Completed</SelectItem>
                                                    <SelectItem value="hiatus">Hiatus</SelectItem>
                                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label htmlFor="originalLanguages">Original languages</label>
                                        <Select
                                            value={originalLanguages}
                                            onValueChange={(value) => setOriginalLanguages(value)}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="All languages" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Original languages</SelectLabel>
                                                    <SelectItem value="any">All languages</SelectItem>
                                                    <SelectItem value="ja">Japanese</SelectItem>
                                                    <SelectItem value="ko">Korean</SelectItem>
                                                    <SelectItem value="zh-s">Chinese (Simplified)</SelectItem>
                                                    <SelectItem value="zh-t">Chinese (Traditional)</SelectItem>
                                                    <SelectItem value="en">English</SelectItem>
                                                    <SelectItem value="sq">Albanian</SelectItem>
                                                    <SelectItem value="ar">Arabic</SelectItem>
                                                    <SelectItem value="az">Azerbaijani</SelectItem>
                                                    <SelectItem value="bn">Bengali</SelectItem>
                                                    <SelectItem value="bg">Bulgarian</SelectItem>
                                                    <SelectItem value="my">Burmese</SelectItem>
                                                    <SelectItem value="ca">Catalan</SelectItem>
                                                    <SelectItem value="cs">Czech</SelectItem>
                                                    <SelectItem value="da">Danish</SelectItem>
                                                    <SelectItem value="nl">Dutch</SelectItem>
                                                    <SelectItem value="et">Estonian</SelectItem>
                                                    <SelectItem value="tl">Filipino</SelectItem>
                                                    <SelectItem value="fi">Finnish</SelectItem>
                                                    <SelectItem value="fr">French</SelectItem>
                                                    <SelectItem value="de">German</SelectItem>
                                                    <SelectItem value="el">Greek</SelectItem>
                                                    <SelectItem value="he">Hebrew</SelectItem>
                                                    <SelectItem value="hi">Hindi</SelectItem>
                                                    <SelectItem value="hu">Hungarian</SelectItem>
                                                    <SelectItem value="id">Indonesian</SelectItem>
                                                    <SelectItem value="it">Italian</SelectItem>
                                                    <SelectItem value="lt">Lithuanian</SelectItem>
                                                    <SelectItem value="ms">Malay</SelectItem>
                                                    <SelectItem value="mn">Mongolian</SelectItem>
                                                    <SelectItem value="ne">Nepali</SelectItem>
                                                    <SelectItem value="no">Norwegian</SelectItem>
                                                    <SelectItem value="fa">Persian</SelectItem>
                                                    <SelectItem value="pl">Polish</SelectItem>
                                                    <SelectItem value="pt-br">Portuguese (Brazil)</SelectItem>
                                                    <SelectItem value="pt">Portuguese (Portugal)</SelectItem>
                                                    <SelectItem value="ro">Romanian</SelectItem>
                                                    <SelectItem value="ru">Russian</SelectItem>
                                                    <SelectItem value="sr">Serbian</SelectItem>
                                                    <SelectItem value="es">Spanish</SelectItem>
                                                    <SelectItem value="es-la">Spanish (Latin America)</SelectItem>
                                                    <SelectItem value="sv">Swedish</SelectItem>
                                                    <SelectItem value="th">Thai</SelectItem>
                                                    <SelectItem value="tr">Turkish</SelectItem>
                                                    <SelectItem value="uk">Ukrainian</SelectItem>
                                                    <SelectItem value="ur">Urdu</SelectItem>
                                                    <SelectItem value="vi">Vietnamese</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label htmlFor="publicationYear">Year of release</label>
                                        <Input
                                            type="text"
                                            placeholder="Year of release"
                                            value={publicationYear}
                                            onChange={(e) => {
                                                const year = e.target.value;
                                                if (/^\d*$/.test(year)) {
                                                    setPublicationYear(year);
                                                }
                                            }}
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            {error && <div className="text-red-500">{error}</div>}
        </form>
    );
};

export default MangaSearch;
