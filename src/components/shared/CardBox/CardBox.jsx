import React from 'react';

const CardBox = ({ title1 = "", title2 = "", setActiveSection }) => {
    return (
        <div onClick={() => setActiveSection(title1 + " " + title2)} className='bg-secondary flex justify-center items-center relative overflow-hidden group cursor-pointer'>
            <div className='flex gap-2 text-4xl 2xl:text-5xl font-bold relative uppercase'>
                <p className='text-yellow-500 relative overflow-hidden'>
                    <span className='block transition-transform transform group-hover:-translate-y-full duration-500'>{title1}</span>
                    <span className='block absolute inset-0 text-white transition-transform transform -translate-y-[-100%] group-hover:translate-y-0 duration-500'>{title1}</span>
                </p>
                <p className='relative overflow-hidden'>
                    <span className='block transition-transform transform group-hover:translate-y-full duration-500'>{title2}</span>
                    <span className='block absolute inset-0 text-yellow-500 transition-transform transform translate-y-[-100%] group-hover:translate-y-0 duration-500'>{title2}</span>
                </p>
            </div>
        </div>
    );
};

export default CardBox;
