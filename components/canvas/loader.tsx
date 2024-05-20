'use client'

import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html center>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className='canvas-loader'></div>
                <p style={{ fontSize: 14, color: "#F1F1F1", fontWeight: 800, marginTop: 20 }}>
                    {progress.toFixed(2)}%
                </p>
            </div>
        </Html>
    );
};

export default CanvasLoader;
