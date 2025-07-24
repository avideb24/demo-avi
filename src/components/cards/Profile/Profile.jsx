"use client";

import Image from 'next/image';
import React from 'react';
import profileImg from '@/assets/images/profile-image.jpeg';
import IconButton from '@/components/shared/IconButton/IconButton';
import { FaLinkedinIn, FaFacebookF, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import coverImg from '@/assets/images/cover.jpg';
import { FaLocationDot } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import CountUp from 'react-countup';
import { IoIosMail, IoMdMail } from "react-icons/io";


export const Profile = () => {

    const statsData = [
        { label: 'Years', value: 2, suffix: "+" },
        { label: 'Certifications', value: 3 },
        { label: 'Projects', value: 10, suffix: "+" },
        { label: 'Happy Clients', value: 6, suffix: "+" },
    ];


    return (
        <div className='bg-secondary p-2 h-screen-cal flex flex-col'>

            <div className='w-full rounded-t-lg'>
                <PhotoProvider>
                    <PhotoView src={coverImg.src}>
                        <Image src={coverImg} width={500} height={300} className='w-full object-cover relative' alt='Profile Image' />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src={profileImg.src}>
                        <Image src={profileImg} width={200} height={200} className='max-w-40 mx-auto object-contain border-4 border-secondary rounded-full -translate-y-20' alt='Profile Image' />
                    </PhotoView>
                </PhotoProvider>
            </div>

            <div className='-translate-y-20 flex flex-col items-center'>
                {/* info */}
                <h2 className='text-2xl font-bold pt-4 uppercase'>Avi Debnath</h2>
                <p className='text-base pt-1 pb-3 uppercase'>Front-End Developer</p>

                <div className='flex justify-center items-center gap-8 opacity-70 pt-1'>
                    <p className='flex items-center gap-1'>
                        <FaLocationDot />
                        <span>Dinajpur, Bangladesh</span>
                    </p>
                    <p className='flex items-center gap-1'>
                        <MdLanguage className='text-lg' />
                        <span>English, Bengali</span>
                    </p>
                </div>
                {/* <div className='flex justify-center items-center gap-8 opacity-70 pt-1'>
                    <p className='flex items-center gap-1'>
                        <IoIosMail className='text-lg' />
                        <span>devavi24bd@gmail.com</span>
                    </p>
                    <p className='flex items-center gap-1'>
                        <IoIosCall className='text-lg' />
                        <span>+8801723622125</span>
                    </p>
                </div> */}

                {/* buttons */}
                <div className='w-fit mx-auto px-6 pt-3 pb-1 flex justify-center items-center gap-8 border border-slate-400 rounded-full translate-y-5'>
                    <div className='lg:hidden xl:block'>
                        <IconButton Icon={IoMdMail} href={'mailto:devavi24bd@gmail.com'} />
                    </div>
                    <IconButton Icon={FaLinkedinIn} href={'https://www.linkedin.com/in/avi-debnath-bd/'} />
                    <IconButton Icon={FaFacebookF} href={'https://www.facebook.com/profile.php?id=100093367126028'} />
                    <IconButton Icon={FaWhatsapp} href={'https://wa.me/+8801954516380'} />
                    <IconButton Icon={FaXTwitter} href={'https://x.com/AviDebnathBD'} />
                    <IconButton Icon={FaGithub} href={'https://github.com/avideb24'} />
                </div>

            </div>

            {/* bottom */}
            <div className='w-full h-full px-5 -translate-y-6 grid grid-cols-2 gap-3'>
                {statsData.map((stat, index) => (
                    <div
                        key={index}
                        className='flex justify-center items-center gap-1 bg-[#2c2c2c] rounded-md'
                    >
                        <span className='text-2xl 2xl:text-3xl font-bold text-primaryColor'>
                            <CountUp start={0} end={stat?.value} duration={3} />
                            {stat?.suffix && <span>{stat?.suffix}</span>}
                        </span>
                        <span className='text-lg 2xl:text-xl'>{stat?.label}</span>
                    </div>
                ))}
            </div>

        </div>
    );
};
