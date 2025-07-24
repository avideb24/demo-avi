import React, { useEffect, useRef } from 'react';
import aboutMeIcon from '@/assets/icons/about-me.json';
import myProjectsIcon from '@/assets/icons/my-projects.json';
import contactIcon from '@/assets/icons/contact.json';
import LordIcon from '../LordIcon/LordIcon';

const Header = ({ title = "" }) => {

    const renderedIcon = (title) => {
        switch (title) {
            case 'About Me':
                return aboutMeIcon;
            case 'My Projects':
                return myProjectsIcon;
            case 'Get In Touch':
                return contactIcon;
        }
    };


    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-2xl md:text-5xl font-bold space-x-4 uppercase'>
                <span>{title?.split(" ")[0]}</span>
                <span className='text-yellow-500'>{title?.split(" ")?.slice(1)?.join(" ")}</span>
            </h2>
            <div className='w-full grid grid-cols-9 items-center gap-5 md:px-40 pt-4 pb-5'>
                <p className='col-span-4 h-[2px] bg-slate-500'></p>
                <div className='flex justify-center'>
                   <LordIcon Icon={renderedIcon(title)} />
                </div>
                <p className='col-span-4 h-[2px] bg-slate-500'></p>
            </div>
        </div>
    );
};

export default Header;
