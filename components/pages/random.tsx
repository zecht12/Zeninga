import Image from "next/image";
import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { body, bodyBold, head } from "@/utils/font";
import { Button } from "../ui/button";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";
import { NHentai } from "@shineiichijo/nhentai-ts";


const RandomManga = async () => {
    const nhentai = new NHentai();
    const data = await nhentai.getRandom();
    const images =  data.images.pages;

    const downloads = `https://nhentai.net/g/${data.id}/download`

    return (
        <div className="h-auto w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#153067] to-zinc-900 py-28 px-4">
            <div className="gap-4 flex flex-col justify-center items-center">
                <Card color="black" className="w-[90%] h-auto py-8 px-12">
                    <div id="manga-info" className="h-full w-full flex flex-row justify-center items-center gap-8">
                        <div className="w-[400px] h-[600px]">
                            <Image src={data.cover??""} alt='image cover' width={1000} height={1000} className="w-full h-full" />
                        </div>
                        <div className="w-[45%] h-auto">
                            <p className={cn("text-white text-2xl text-justify pb-2", head.className)}>{data.title}</p>
                            <p className={cn("text-white text-md text-justify pb-8", bodyBold.className)}>{data.originalTitle}</p>
                            <p className={cn("text-white pb-2", body.className)}>
                                <span className="font-bold">Parodies:</span> {data.parodies.join(", ")}
                            </p>
                            <p className={cn("text-white pb-2", body.className)}>
                                <span className="font-bold text-justify">Tags:</span> {data.tags.join(", ")}
                            </p>
                            <p className={cn("text-white pb-2", body.className)}>
                                <span className="font-bold">Artists:</span> {data.artists.join(", ")}
                            </p>
                            <p className={cn("text-white pb-2", body.className)}>
                                <span className="font-bold">Groups:</span> {data.groups.join(", ")}
                            </p>
                            <p className={cn("text-white pb-2", body.className)}>
                                <span className="font-bold">Languages:</span> {data.languages.join(", ")}
                            </p>
                            <p className={cn("text-white pb-2", body.className)}>
                                <span className="font-bold">Categories:</span> {data.categories.join(", ")}
                            </p>
                            <div className="gap-4 flex flex-row justify-center items-center">
                                {/* <Button type="submit" className="w-full flex gap-4 items-center justify-center text-slate-100">
                                    <MdFavoriteBorder className="text-slate-100" /> Favorite
                                </Button> */}
                                <Button asChild className="w-full flex gap-4 items-center justify-center text-slate-100" >
                                    <Link href={downloads}>
                                        <IoMdDownload className="text-slate-100" /> Download
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card color="black" variant="rounded" className="flex flex-wrap p-4 gap-4 justify-center w-[90%]">
                    {images.map((image, index)=>(
                        <div id="manga-image" key={index} className="w-[150px] h-auto flex flex-col justify-start items-center">
                            <Image src={image} alt={`Page ${index + 1}`} width={150} height={150} className="w-full h-full" />
                        </div>
                    ))}
                </Card>
            </div>
        </div>
    );
};

export default RandomManga;
