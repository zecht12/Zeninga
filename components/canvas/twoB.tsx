'use client'

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "./loader";

const TwoB = ({ isMobile }: any) => {
    const twoB = useGLTF('/assets/2B_Pose_Katana.glb');

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='black' color="#f8f8f8" position={[0, 0, 0]} />
            <directionalLight intensity={3} color="white" position={[-20, 50, 10]} castShadow shadow-mapSize={1024} />
            <pointLight intensity={2} />
            <primitive
                object={twoB.scene}
                scale={isMobile ? 2 : 2}
                position={isMobile ? [0, -1.5, 0] : [0, -1.5, 0]}
                rotation={[0, -0.2, 0]}
            />
        </mesh>
    );
};

const TwoBCanvas = ({ className }: { className?: string }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event: any) => {
            setIsMobile(event.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <div className={className}>
            <Canvas frameloop='demand' shadows dpr={[1, 2]} camera={{ position: [20, 3, 1], fov: 25 }} gl={{ preserveDrawingBuffer: true }} >
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                    <TwoB isMobile={isMobile} />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default TwoBCanvas;
