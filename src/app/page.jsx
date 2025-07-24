"use client";

import { AboutMe } from '@/components/cards/AboutMe/AboutMe';
import Contact from '@/components/cards/Contact/Contact';
import { Introduction } from '@/components/cards/Introduction/Introduction';
import { Projects } from '@/components/cards/Projects/Projects';
import RenderedSection from '@/components/pages/home/RenderedSection/RenderedSection';
import { useGlobalContext } from '@/components/provider/GlobalProvider';
import CardBox from '@/components/shared/CardBox/CardBox';
import React from 'react';


const Home = () => {

  const { activeSection, setActiveSection } = useGlobalContext();


  const renderedSectionContent = (section) => {
    switch (section) {
      case 'About Me':
        return <AboutMe />;
      case 'My Projects':
        return <Projects />
      case 'Get In Touch':
        return <Contact />
    }
  };


  return (
    <div className='relative'>
      <div className='hidden lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 h-screen-cal'>
        <div className='bg-secondary flex justify-center items-center'>
          <Introduction />
        </div>
        <CardBox title1={'About'} title2={"Me"} setActiveSection={setActiveSection} />
        <CardBox title1={'My'} title2={"Projects"} setActiveSection={setActiveSection} />
        <CardBox title1={'Get'} title2={"In Touch"} setActiveSection={setActiveSection} />
      </div>
      {
        activeSection && <RenderedSection content={renderedSectionContent} activeSection={activeSection} setActiveSection={setActiveSection} />
      }
    </div>
  );
};

export default Home;