'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const AboutMe = dynamic(() =>
  import('@/components/cards/AboutMe/AboutMe').then((mod) => mod.AboutMe), { ssr: false }
);
const Contact = dynamic(() =>
  import('@/components/cards/Contact/Contact').then((mod) => mod.default), { ssr: false }
);
const Introduction = dynamic(() =>
  import('@/components/cards/Introduction/Introduction').then((mod) => mod.Introduction), { ssr: false }
);
const Projects = dynamic(() =>
  import('@/components/cards/Projects/Projects').then((mod) => mod.Projects), { ssr: false }
);
const RenderedSection = dynamic(() =>
  import('@/components/pages/home/RenderedSection/RenderedSection').then((mod) => mod.default), { ssr: false }
);
const CardBox = dynamic(() =>
  import('@/components/shared/CardBox/CardBox').then((mod) => mod.default), { ssr: false }
);


import { useGlobalContext } from '@/components/provider/GlobalProvider';



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