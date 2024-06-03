/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [ 
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
            'res.cloudinary.com',
            'cdn.waifu.im',
            'i.waifu.pics'
        ]
    },
    env: {
        NEXT_PUBLIC_MANGADEX_ENDPOINT: process.env.NEXT_PUBLIC_MANGADEX_ENDPOINT,
    },
};

export default nextConfig;
