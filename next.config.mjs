/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
            'res.cloudinary.com',
            'cdn.waifu.im',
            'i.waifu.pics',
            'i.nhentai.net',
            't3.nhentai.net',
            'nhentai.net',
            't7.nhentai.net',
            't5.nhentai.net',
            't1.nhentai.net',
            't2.nhentai.net',
            't4.nhentai.net',
            't6.nhentai.net'
        ]
    },
    env: {
        NEXT_PUBLIC_MANGADEX_ENDPOINT: process.env.NEXT_PUBLIC_MANGADEX_ENDPOINT,
    },
};

export default nextConfig;
