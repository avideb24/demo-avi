"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { FaBriefcase, FaUserGraduate, FaStar, FaCalendarAlt } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";

const StarRatings = dynamic(() => import('react-star-ratings'), { ssr: false });

const skillsData = [
    { name: 'HTML', level: 7 },
    { name: 'CSS', level: 7 },
    { name: 'ReactJs', level: 7 },
    { name: 'NextJs', level: 6 },
    { name: 'Tailwind CSS', level: 7 },
    { name: 'JavaScript', level: 5 },
    { name: 'ExpressJs', level: 5 },
    { name: 'MongoDB', level: 5 },
    { name: 'Prisma', level: 5 },
    { name: 'Sequelize', level: 4 },
    { name: 'MySQL', level: 4 },
    { name: 'PostgreSQL', level: 4 }
];

const ProfessionalInfo = () => {
    const [selectedTab, setSelectedTab] = useState('experience');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const tabData = [
        {
            name: 'experience',
            icon: <FaBriefcase />,
            content: (
                <>
                    <h2 className='flex justify-center items-center gap-x-3 bg-primary py-4 uppercase text-2xl font-bold'>
                        <FaBriefcase /> Experience
                    </h2>
                    <div className='p-4 border border-t-0 border-slate-700'>
                        {[
                            {
                                title: 'Full-Time',
                                company: 'CodeThinker',
                                link: 'https://codethinker.io/',
                                from: '02-12-2024',
                                to: '28-02-2025',
                            },
                            {
                                title: 'Contractual',
                                company: 'Vida Technologies Ltd.',
                                link: 'https://vida.com.bd/',
                                from: '01-05-2024',
                                to: '30-11-2024',
                            },
                            {
                                title: 'Internship',
                                company: 'Amend Care',
                                link: 'https://www.amendcare.net/',
                                from: '06-02-2024',
                                to: '20-04-2024',
                            }
                        ].map((job, idx) => (
                            <div key={idx}>
                                <h3 className='flex flex-col md:flex-row md:items-center gap-x-4 text-lg pb-3'>
                                    <span className='font-semibold'>
                                        <span className='text-primaryColor'>{job.title} </span>
                                        Front-End Developer
                                    </span> 
                                    <span className='hidden md:inline'>-</span>
                                    <a href={job.link} target='_blank' className='text-sky-600' rel="noopener noreferrer">
                                        {job.company}
                                    </a>
                                </h3>
                                <p className='flex items-center gap-3 pb-2'>
                                    <FaCalendarAlt />
                                    <span className='flex items-center gap-2'>{job.from} <BsDashLg /> {job.to}</span>
                                </p>
                                {idx !== 2 && <div className='w-20 h-[2px] bg-primaryColor my-4'></div>}
                            </div>
                        ))}
                    </div>
                </>
            )
        },
        {
            name: 'skills',
            icon: <FaStar />,
            content: (
                <>
                    <h2 className='flex justify-center items-center gap-x-3 bg-primary py-4 uppercase text-2xl font-bold'>
                        <FaStar /> Skills
                    </h2>
                    <div className='p-4 border border-t-0 border-slate-700 grid grid-cols-2 gap-5'>
                        {skillsData.map((skill, idx) => (
                            <div key={idx}>
                                <h4>{skill.name}</h4>
                                <StarRatings
                                    rating={skill.level}
                                    starDimension="15px"
                                    starSpacing="2px"
                                    starRatedColor="yellow"
                                    numberOfStars={8}
                                    name='rating'
                                />
                            </div>
                        ))}
                    </div>
                </>
            )
        },
        {
            name: 'education',
            icon: <FaUserGraduate />,
            content: (
                <>
                    <h2 className='flex justify-center items-center gap-x-3 bg-primary py-4 uppercase text-2xl font-bold'>
                        <FaUserGraduate /> Education
                    </h2>
                    <div className='p-4 border border-t-0 border-slate-700'>
                        {[
                            {
                                title: 'Diploma In Engineering',
                                school: 'Thakurgaon Polytechnic Institute',
                                dept: 'RAC',
                                from: '01-06-2018',
                                to: '20-04-2022'
                            },
                            {
                                title: 'High School',
                                school: 'Alokjhari High School',
                                dept: 'Science',
                                from: '01-01-2014',
                                to: '20-04-2017'
                            },
                            {
                                title: 'Primary School',
                                school: 'Alokjhari/2 Govt Primary School',
                                dept: '',
                                from: '01-01-2009',
                                to: '25-12-2013'
                            }
                        ].map((edu, idx) => (
                            <div key={idx}>
                                <h3 className='text-lg pb-3 uppercase text-primaryColor font-bold'>
                                    {edu.title} - <span className='text-white'>{edu.school}</span>
                                </h3>
                                {edu.dept && <p>
                                    {edu.title == "High School" ? "Group" : "Department"} - {edu.dept}</p>}
                                <p className='flex items-center gap-3'>
                                    <FaCalendarAlt />
                                    <span className='flex items-center gap-2 py-3'>{edu.from} <BsDashLg /> {edu.to}</span>
                                </p>
                                {idx !== 2 && <div className='w-20 h-[2px] bg-primaryColor my-4'></div>}
                            </div>
                        ))}
                    </div>
                </>
            )
        }
    ];

    return (
        <div className='py-14 grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-4'>
            {/* Tabs */}
            <div>
                {tabData.map((tab, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedTab(tab.name)}
                        className={`w-full flex items-center border ${selectedTab === tab.name
                            ? 'bg-primaryColor border-primaryColor text-primary'
                            : 'border-slate-500 text-slate-500'
                            } uppercase font-bold pl-4 mb-3 py-2 duration-300`}
                    >
                        <span className='mr-2'>{tab.icon}</span>
                        <span>{tab.name}</span>
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className='md:col-span-3'>
                {tabData.map((tab, idx) => (
                    <div key={idx} className={`${selectedTab !== tab.name ? 'hidden' : ''}`}>
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfessionalInfo;
