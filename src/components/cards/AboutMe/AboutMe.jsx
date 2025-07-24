import MyInfo from '@/components/sections/about-me/MyInfo/MyInfo';
import ProfessionalInfo from '@/components/sections/about-me/ProfessionalInfo/ProfessionalInfo';
import React from 'react';
import { FaUser } from "react-icons/fa";


export const AboutMe = () => {

    return (
        <div>
            <h2 className='flex items-center gap-2 text-xl font-semibold uppercase pb-3'>
                <FaUser />
                <span>Personal Information</span>
            </h2>
            <p>
                I{"'"}m a Front-End Developer based in Dinajpur, Bangladesh, with a serious passion for UI effects, animations, and creating intuitive, user-friendly interfaces. With 3+ years of experience, I specialize in modern web technologies like React and Next.js. I{"'"}m always looking to improve my skills and deliver high-quality solutions that provide a seamless user experience. I believe in continuous learning and adapting to new challenges.
            </p>



            <MyInfo />
            <ProfessionalInfo />
        </div>
    );
};