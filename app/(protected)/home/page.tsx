"use client"

import HomePaging from '@/components/pages/home'
import React, { useEffect } from 'react'

const HomePage = () => {
    useEffect(() => {
        const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";

        const clientKey = process.env.NEXT_PUBLIC_CLIENT;

        const script = document.createElement("script");
        script.src = snapScript;
        script.setAttribute("data-client-key", clientKey ?? "");
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <HomePaging />
    )
}

export default HomePage