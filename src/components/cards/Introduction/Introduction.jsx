"use client";

import React from 'react';
import animation from '@/assets/animation/animation.json';
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false, });


export const Introduction = () => {
    return (
        <div className='w-fit h-fit p-20'>
            <Lottie animationData={animation} loop={true} autoplay={true} />
        </div>
    );
};