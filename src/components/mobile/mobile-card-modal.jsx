"use client";

import React from 'react';
import { useGlobalContext } from '../provider/GlobalProvider';
import { AboutMe } from '../cards/AboutMe/AboutMe';
import LordIcon from '@/components/shared/LordIcon/LordIcon';
import xMark from '@/assets/icons/x-mark.json';
import { Projects } from '../cards/Projects/Projects';
import Contact from '../cards/Contact/Contact';
import Header from '../shared/Header/Header';


const MobileCardModal = () => {

    const { activeSection, setActiveSection } = useGlobalContext();

    const renderActiveSection = section => {
        switch (section) {
            case "About Me":
                return <AboutMe />;
            case "My Projects":
                return <Projects />;
            case "Get In Touch":
                return <Contact />
        }
    }

    return (
        <div className={`${activeSection ? 'w-full h-full opacity-100 visible' : 'w-0 h-0 opacity-0 invisible'} fixed left-0 top-0 bg-secondary p-4 duration-300 overflow-y-scroll lg:hidden`}>

            {/* close button */}
            <button onClick={() => setActiveSection(null)} className='lg:hidden fixed z-30 top-2 right-3 w-fit h-fit bg-secondary rounded-full'>
                <LordIcon Icon={xMark} />
            </button>

            {activeSection && <Header title={activeSection} />}

            <div>
                {activeSection && renderActiveSection(activeSection)}
            </div>

        </div>
    );
};

export default MobileCardModal;