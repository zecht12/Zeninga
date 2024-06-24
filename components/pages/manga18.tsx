import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { bodyBold, head } from "@/utils/font";

type SearchResultProps = {
    data: any[];
};

const getFlagImage = (languages: string[]) => {
    if (languages.includes('japanese')) {
        return '/images/japan.png';
    } else if (languages.includes('chinese')) {
        return '/images/china.png';
    } else if (languages.includes('english')) {
        return '/images/uk.png';
    }
    return null;
};

const Manga18 = ({ data }: SearchResultProps) => {
    if (!Array.isArray(data)) {
        return <div>No data available</div>;
    }

    return (
        <div className="h-auto w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#153067] to-zinc-900 py-28 px-4">
            <h1 className={cn("text-white text-center text-3xl pb-8", head.className)}>Recently Updated</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                {data.map((manga) => {
                    const flagImage = getFlagImage(manga.languages);
                    return (
                        <Card color="white" variant="rounded" key={manga.id} className="w-[150px] h-auto flex flex-col justify-start items-center relative">
                            <Link href={`/manga18/show-manga/${manga.id}`} passHref>
                                <div className="w-[150px] h-[150px] relative">
                                    {flagImage && (
                                        <div className="absolute top-0 left-0 w-8 h-8">
                                            <Image src={flagImage} alt="flag" width={32} height={32} className="w-full h-full rounded-full" />
                                        </div>
                                    )}
                                    <Image src={manga.cover || '/images/default-cover-url.jpg'} alt="cover" width={150} height={150} className="w-full h-full rounded-t-xl" />
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className={cn("text-center p-2 text-xs", bodyBold.className)}>{manga.title}</p>
                                </div>
                            </Link>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default Manga18;
