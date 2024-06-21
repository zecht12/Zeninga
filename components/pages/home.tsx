"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { body, bodyBold, button, head } from '@/utils/font';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';
import Checkout from '../shared/checkout';

const chooseData = [
    {
        header: "One-Stop Manga Haven",
        description: " Zeninga consolidates all your manga needs into one convenient platform. Say goodbye to hopping between different websites to find your favorite titles. With our comprehensive library, everything you need is right here, making your manga journey smooth and hassle-free."
    },
    {
        header: "Ad-Free Reading",
        description: " Nothing ruins the flow of a good story like intrusive ads. At Zeninga, we offer an ad-free reading experience, allowing you to immerse yourself fully in the world of manga without interruptions."
    },
    {
        header: "Customer Support",
        description: "We are committed to providing excellent customer service. Our support team is always ready to assist you with any questions, issues, or feedback. We’re here to ensure your experience with Zeninga is smooth and enjoyable."
    },
    {
        header: "User-Friendly Interface",
        description: "Navigate Zeninga with ease thanks to our intuitive, user-friendly interface. Find your favorite content quickly and effortlessly, making your experience smooth and enjoyable from start to finish."
    },
    {
        header: "Personalized Recommendations",
        description: "Zeninga’s advanced algorithms provide personalized recommendations tailored to your tastes. Discover new anime and manga based on your preferences, ensuring that you always have something exciting to read."
    },
    {
        header: "Curated Collections",
        description: "Explore curated collections of manga that highlight popular series, hidden gems, and thematic selections. Our expert-curated lists make it easy to find content that resonates with your interests."
    },
]

const plans = [
    {
        id:1,
        name: "ZeniLover",
        duration: "One Day Pass",
        price: "Rp1.000/day",
        values:1000,
        benefits: [
            "Full access to all manga without limitation",
            "Personalized recommendations",
            "Exclusive content",
            "24-hour access"
        ],
    },
    {
        id: 2,
        name: "ZeniEnthusiast",
        duration: "One Week Pass",
        price: "Rp6.500/week",
        values:6500,
        benefits: [
            "Full access to all manga without limitation",
            "High-quality reading",
            "Personalized recommendations",
            "Exclusive content",
            "7-day access"
        ],
    },
    {
        id:3,
        name: "ZeniPride",
        duration: "One Month Pass",
        price: "Rp27.000/month",
        values:27000,
        benefits: [
            "Full access to all manga without limitation",
            "High-quality reading",
            "Personalized recommendations",
            "Exclusive content",
            "30-day access"
        ],
    }
]

export default function HomePaging() {
    const [selectedProduct, setSelectedProduct] = useState(plans[0]);

    return (
        <>
            <div className="h-auto w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#153067] to-zinc-900 py-28 px-4">
                <div className='md:flex items-center justify-between'>
                    <div className='md:w-[50%] w-full h-full'>
                        <h1 className={cn('text-slate-100 md:text-6xl text-4xl font-bold md:text-start text-center', head.className)}>Your Ultimate Web for <span className={cn('inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent', head.className)}>Manga</span>!</h1>
                        <p className={cn('text-slate-100 pt-8 text-justify', body.className)}>
                            Welcome to <span className={cn("inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent", bodyBold.className)}>Zeninga</span>,  your ultimate destination for all things manga! Dive into a world where every story unfolds at your fingertips. Whether you're a seasoned manga enthusiast or a newcomer looking to explore new adventures, <span className={cn("inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent", bodyBold.className)}>Zeninga</span> is your perfect companion on this journey. Experience the magic of manga like never before, all in one place.
                        </p>
                        <p className={cn('text-slate-100 pt-4 text-justify', body.className)}>
                            At <span className={cn("inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent", bodyBold.className)}>Zeninga</span>, we believe in delivering an unparalleled experience by bringing together the best of manga. Whether you’re a seasoned otaku or a newcomer to the world of Japanese comics, <span className={cn("inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent", bodyBold.className)}>Zeninga</span> is designed to be your go-to source for all things manga.
                        </p>
                        <div className='py-8 md:w-[50%] h-auto flex justify-center items-center'>
                            <Button asChild size="xlhov" variant="newbutton">
                                <Link href="#offer" className={cn('text-slate-100 flex justify-center items-center gap-4', button.className)} >
                                    What We're Offer?
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className='md:w-[50%] w-full h-full md:flex items-center justify-center'>
                        <Image width={500} height={500} alt='home' src="/images/1.jpg" className='md:w-[400px] w-full md:h-[500px] h-[500px]' />
                    </div>
                </div>
                <div id='offer' className='w-full h-full pt-14'>
                    <h1 className={cn('text-slate-100 md:text-6xl text-4xl font-bold text-center underline-title mb-8', head.className)}>
                        What we're <span className={cn('inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent', head.className)}>Offer</span>?
                    </h1>
                    <div className='flex items-center justify-center'>
                        <p className={cn('text-slate-100 md:text-center text-justify md:w-3/5 text-2xl', body.className)}>
                            At <span className={cn("inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent", bodyBold.className)}>Zeninga</span>, we pride ourselves on providing a rich and diverse manga reading experience that caters to all tastes and preferences. Here’s a detailed look at what we bring to the <span className={cn("inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent", bodyBold.className)}>Zeninga</span>:
                        </p>
                    </div>
                    <div className='md:flex items-center justify-between py-8'>
                        <div className='md:w-[50%] w-full md:h-[50%] h-full flex items-center md:justify-start justify-center'>
                            <Image width={500} height={500} alt='home' src="/images/2.jpg" className='md:w-[500px] w-[300px] md:h-[500px] h-[300px]' />
                        </div>
                        <div className='md:w-[50%] w-full h-full md:flex items-center justify-start md:pt-0 pt-8'>
                            <div className='md:w-[80%] w-full'>
                                <h1 className='text-slate-100 text-4xl font-bold md:text-justify text-center'>Extensive <span className="inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Vast</span> Library
                                </h1>
                                <p className='text-slate-100 pt-8 text-xl text-justify'>
                                    Our expansive library boasts thousands of manga titles across various genres, including action, adventure, romance, comedy, drama, fantasy, horror, sci-fi, and more. Whether you’re looking for the latest hits or timeless classics, you’ll find them all here.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex items-center justify-between py-8'>
                        <div className='md:w-[50%] w-full md:h-[50%] h-full flex md:hidden items-center md:justify-start justify-center'>
                            <Image width={500} height={500} alt='home' src="/images/3.jpg" className='md:w-[500px] w-[300px] md:h-[500px] h-[300px]' />
                        </div>
                        <div className='md:w-[50%] w-full h-full md:flex items-center justify-start md:pt-0 pt-8'>
                            <div className='md:w-[80%] w-full'>
                                <h1 className='text-slate-100 text-4xl font-bold md:text-justify text-center'><span className="inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">High-Quality</span> Scans
                                </h1>
                                <p className='text-slate-100 pt-8 text-xl text-justify'>
                                    We ensure that every manga in our collection is presented with high-resolution scans, offering crisp, clear, and detailed images for an immersive reading experience. Our quality control team meticulously checks each scan to maintain the highest standards.
                                </p>
                            </div>
                        </div>
                        <div className='md:w-[50%] w-full md:h-[50%] h-full md:flex hidden items-center md:justify-start justify-center'>
                            <Image width={500} height={500} alt='home' src="/images/3.jpg" className='md:w-[500px] w-[300px] md:h-[500px] h-[300px]' />
                        </div>
                    </div>
                    <div className='md:flex items-center justify-between py-8'>
                        <div className='md:w-[50%] w-full md:h-[50%] h-full flex items-center md:justify-start justify-center'>
                            <Image width={500} height={500} alt='home' src="/images/4.jpg" className='md:w-[500px] w-[300px] md:h-[500px] h-[300px]' />
                        </div>
                        <div className='md:w-[50%] w-full h-full md:flex items-center justify-start md:pt-0 pt-8'>
                            <div className='md:w-[80%] w-full'>
                                <h1 className='text-slate-100 text-4xl font-bold md:text-justify text-center'><span className="inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Frequent</span> Updates
                                </h1>
                                <p className='text-slate-100 pt-8 text-xl text-justify'>
                                    We understand the anticipation of waiting for new chapters. That’s why we update our library regularly, adding the latest releases as soon as they are available. Stay current with ongoing series and discover new stories as they unfold.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex items-center justify-between py-8'>
                        <div className='md:w-[50%] w-full md:h-[50%] h-full flex md:hidden items-center md:justify-start justify-center md:pt-0 pt-4'>
                            <Image width={500} height={500} alt='home' src="/images/5.jpg" className='md:w-[500px] w-[300px] md:h-[500px] h-[300px]' />
                        </div>
                        <div className='md:w-[50%] w-full h-full md:flex items-center justify-start md:pt-0 py-8'>
                            <div className='md:w-[80%] w-full'>
                                <h1 className='text-slate-100 text-4xl font-bold md:text-justify text-center'><span className="inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Seamless</span> Integration
                                </h1>
                                <p className='text-slate-100 pt-8 text-xl text-justify'>
                                    Experience the ultimate convenience with Zeninga seamless integration. Manage synchronized watch and read lists, receive personalized recommendations based on your interests, and enjoy our user-friendly navigation designed to make finding your next favorite series a breeze.
                                </p>
                            </div>
                        </div>
                        <div className='md:w-[50%] w-full md:h-[50%] h-full md:flex hidden items-center md:justify-start justify-center md:pt-0 pt-4'>
                            <Image width={500} height={500} alt='home' src="/images/5.jpg" className='md:w-[500px] w-[300px] md:h-[500px] h-[300px]' />
                        </div>
                    </div>
                </div>
                <div id='choose' className='w-full h-full pt-14'>
                    <div className='pb-8'>
                        <h1 className={cn('text-slate-100 md:text-6xl text-4xl font-bold text-center underline-title mb-8', head.className)}>
                            Why <span className={cn('inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent', head.className)}>Choose</span> Us?
                        </h1>
                        <div className='flex items-center justify-center'>
                            <p className={cn('text-slate-100 md:text-center text-justify md:w-3/5 text-2xl', body.className)}>
                                Choosing <span className={cn("inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent", bodyBold.className)}>Zeninga</span>means embracing a manga reading experience that’s tailored to meet the needs and desires of avid readers. Here’s why <span className={cn("inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent", bodyBold.className)}>Zeninga</span> is the best choice for manga enthusiasts:
                            </p>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                        {chooseData.map((item, index) => (
                            <Card color="white" variant='rounded' className='hover:scale-110' key={index}>
                                <CardHeader className=''>
                                    <h1 className='text-2xl font-bold text-justify underline-title-card'>
                                        {item.header}
                                    </h1>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className='text-lg text-justify pt-4'>
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))
                        }
                    </div>
                </div>
                {/* <div id='plans' className='w-full h-full pt-14'>
                    <div className='pb-8'>
                        <h1 className={cn('text-slate-100 md:text-6xl text-4xl font-bold text-center underline-title mb-8', head.className)}>
                            Our <span className={cn('inline bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent', head.className)}>Plans</span>
                        </h1>
                    </div>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-6'>
                        {plans.map((plan, index) => (
                            <Card color="white" variant="rounded" 
                                className={cn('relative border-4 bg-slate-100', {
                                    'border-blue-500': plan.name === "ZeniEnthusiast"
                                }, head.className)} 
                                key={index}
                            >
                                {plan.name === "ZeniEnthusiast" && (
                                    <span className={cn("absolute top-[-16px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold", head.className)}>Most Popular</span>
                                )}
                                <CardHeader>
                                    <h1 className={cn('text-2xl font-bold text-center underline-title-card', head.className)}>
                                        {plan.name}
                                    </h1>
                                </CardHeader>
                                <CardContent>
                                    <p className={cn('text-lg text-center', bodyBold.className)}>
                                        {plan.duration}
                                    </p>
                                    <p className={cn('text-xl font-bold text-center pt-2', bodyBold.className)}>
                                        {plan.price}
                                    </p>
                                    <ul className='list-disc pl-8 pt-4 h-[170px]'>
                                        {plan.benefits.map((benefit, i) => (
                                            <li key={i} className={cn('text-lg',body.className)}>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className='flex justify-center items-center'>
                                    <Checkout product={plan} setSelectedProduct={setSelectedProduct} />
                                </CardFooter>
                            </Card>
                        ))
                        }
                    </div>
                </div> */}
            </div>
        </>
    );
}