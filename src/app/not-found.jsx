"use client";

import React from 'react';
import Link from 'next/link';


const NotFoundPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center'>
                <div className='text-primaryColor -mt-5'>Your requested page was not found!</div>
                <Link href={'/'} className='bg-primaryColor text-primary font-semibold px-4 py-1 mt-4'>Go Back</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;