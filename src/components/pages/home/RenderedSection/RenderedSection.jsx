import Header from '@/components/shared/Header/Header';
import LordIcon from '@/components/shared/LordIcon/LordIcon';
import React from 'react';
import xMark from '@/assets/icons/x-mark.json';


const RenderedSection = ({ content, activeSection, setActiveSection }) => {
    
    return (
        <div className={`${activeSection ? 'w-full h-full opacity-100 visible' : 'w-0 h-0 opacity-0 invisible'} absolute left-0 top-0 bg-secondary p-10 duration-300 overflow-y-scroll`}>

            {/* content close button */}
            <button onClick={() => setActiveSection(null)} className='absolute top-2 right-3'>
                <LordIcon Icon={xMark} />
            </button>

            {/* header */}
            <Header title={activeSection} />

            {/* content */}
            <div>
                {content(activeSection)}
            </div>
        </div>
    );
};

export default RenderedSection;