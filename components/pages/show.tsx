/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import Image from "next/image";
import React, { Component } from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { body, bodyBold, head } from "@/utils/font";
import { Button } from "../ui/button";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "../ui/pagination";

interface MangaData {
    title: string;
    originalTitle: string;
    cover: string | null;
    parodies: string[];
    tags: string[];
    artists: string[];
    groups: string[];
    languages: string[];
    categories: string[];
}

interface ShowMangaProps {
    data: MangaData;
    images: string[];
    downloads?: string;
}

interface DialogPaginationProps {
    images: string[];
    initialIndex: number;
    title: string;
}

interface DialogPaginationState {
    currentIndex: number;
}

class DialogPagination extends Component<DialogPaginationProps, DialogPaginationState> {
    constructor(props: DialogPaginationProps) {
        super(props);
        this.state = {
            currentIndex: props.initialIndex,
        };
    }

    goToPrevious = () => {
        this.setState((prevState) => ({
            currentIndex: prevState.currentIndex > 0 ? prevState.currentIndex - 1 : prevState.currentIndex,
        }));
    };

    goToNext = () => {
        this.setState((prevState) => ({
            currentIndex: prevState.currentIndex < this.props.images.length - 1 ? prevState.currentIndex + 1 : prevState.currentIndex,
        }));
    };

    render() {
        const { images, title, initialIndex } = this.props;
        const { currentIndex } = this.state;

        return (
            <Dialog>
                <DialogTrigger asChild>
                    <div className="w-[150px] h-auto flex flex-col justify-start items-center cursor-pointer">
                        <Image src={images[initialIndex]} alt={`Page ${initialIndex + 1}`} width={150} height={150} className="w-full h-full" />
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className={cn("text-black text-xl text-center", head.className)}>{title}</DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="flex flex-col items-center justify-center w-full h-[450px]">
                        <Image src={images[currentIndex]} alt={`Page ${currentIndex + 1}`} width={1000} height={1000} className="w-full h-full" />
                    </DialogDescription>
                    <DialogFooter>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <Button variant={"link"} onClick={this.goToPrevious}>
                                        Prev
                                    </Button>
                                </PaginationItem>
                                <PaginationItem>
                                    {currentIndex + 1} / {images.length}
                                </PaginationItem>
                                <PaginationItem>
                                    <Button variant={"link"} onClick={this.goToNext}>
                                        Next
                                    </Button>
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );
    }
}

const ShowManga: React.FC<ShowMangaProps> = ({ data, images, downloads }) => {
    if (!data) {
        return <div>Loading...</div>;
    }

    const { title, originalTitle, cover, parodies, tags, artists, groups, languages, categories } = data;

    return (
        <div className="h-auto w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#153067] to-zinc-900 py-28 px-4">
            <div className="gap-4 flex flex-col justify-center items-center">
                <Card color="black" className="w-[90%] h-auto py-8 px-12">
                    <div id="manga-info" className="h-full w-full flex flex-row justify-center items-center gap-8">
                        <div className="w-[400px] h-[600px]">
                            {cover ? (
                                <Image src={cover} alt='image cover' width={1000} height={1000} className="w-full h-full" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-200">No Image Available</div>
                            )}
                        </div>
                        <div className="w-[45%] h-auto">
                            <p className={cn("text-white text-2xl text-justify pb-2", head.className)}>{title}</p>
                            <p className={cn("text-white text-md text-justify pb-8", bodyBold.className)}>{originalTitle}</p>
                            <p className={cn("text-white pb-2", body.className)}>
                                <span className="font-bold">Parodies:</span> {parodies.join(", ")}
                            </p>
                            <p className={cn("text-white pb-2", body.className)}>
                                <span className="font-bold text-justify">Tags:</span> {tags.join(", ")}
                            </p>
                            <p className={cn("text-white pb-2", body.className)}>
                                <span className="font-bold">Artists:</span> {artists.join(", ")}
                            </p>
                            <p className={cn("text-white pb-2", body.className)}>
                                <span className="font-bold">Groups:</span> {groups.join(", ")}
                            </p>
                            <p className={cn("text-white pb-2", body.className)}>
                                <span className="font-bold">Languages:</span> {languages.join(", ")}
                            </p>
                            <p className={cn("text-white pb-2", body.className)}>
                                <span className="font-bold">Categories:</span> {categories.join(", ")}
                            </p>
                            <div className="gap-4 flex flex-row justify-center items-center">
                                <Button asChild className="w-full flex gap-4 items-center justify-center text-slate-100" >
                                    <Link href={downloads ?? ""}>
                                        <IoMdDownload className="text-slate-100" /> Download
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card color="black" variant="rounded" className="flex flex-wrap p-4 gap-4 justify-center w-[90%]">
                    {images.map((image, index) => (
                        <DialogPagination key={index} images={images} initialIndex={index} title={title} />
                    ))}
                </Card>
            </div>
        </div>
    );
};

export default ShowManga;
