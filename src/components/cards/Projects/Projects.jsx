import ProjectCard from '@/components/shared/ProjectCard/ProjectCard';
import React from 'react';
import bazarZoneImg from '@/assets/images/projects/bazar-zone.png';
import bankersImg from '@/assets/images/projects/bankers-soft.png';
import bucketbeeImg from '@/assets/images/projects/baucketBee.png';
import trackifyImg from '@/assets/images/projects/trackify.png';
import techvibeImg from '@/assets/images/projects/techVibe.png';
import axitImg from '@/assets/images/projects/axit.png';
import startupImg from '@/assets/images/projects/startup.png';
import youtubeImg from '@/assets/images/projects/youtube.png';
import flowerShopImg from '@/assets/images/projects/flower-shop.png';
import swimmingImg from '@/assets/images/projects/swimming.png';
import glowqueImg from '@/assets/images/projects/glowque.png';
import electroImg from '@/assets/images/projects/electro.png';
import adminDashboardImg from '@/assets/images/projects/admin-dashboard.png';


export const Projects = () => {

    const projectsData = [
        {
          name: "Glowque Cosmetics",
          type: "E-Commerce Website",
          techs: "NextJs, TailwindCSS, JavaScript",
          date: "12-02-2025",
          image: glowqueImg,
          liveLink: "https://glowique-cosmetics.vercel.app/",
          githubClient: "https://github.com/avideb24/bazar-zone",
          githubServer: "https://github.com/avideb24/bazar-zone-server"
        },
        {
          name: "Bazar-Zone",
          type: "E-Commerce Website",
          techs: "NextJs, TailwindCSS, JavaScript, ExpressJs, MongoDB",
          date: "25-06-2024",
          image: bazarZoneImg,
          liveLink: "https://bazar-zone.vercel.app/",
          githubClient: "https://github.com/avideb24/bazar-zone",
          githubServer: "https://github.com/avideb24/bazar-zone-server"
        },
        {
          name: "Admin Dashboard",
          type: "Admin Dashboard",
          techs: "ReactJs, TailwindCSS, JavaScript",
          date: "28-01-2025",
          image: adminDashboardImg,
          liveLink: "https://admin-dashboard-cosmetics.vercel.app/",
          githubClient: "https://github.com/avideb24/bazar-zone",
          githubServer: "https://github.com/avideb24/bazar-zone-server"
        },
        {
          name: "Bankers Software",
          type: "Banking Management Website",
          techs: "ReactJs, TailwindCSS, DaisyUI, i18next",
          date: "18-08-2024",
          image: bankersImg,
          liveLink: "https://bankers-soft-client.vercel.app/",
          githubClient: "https://github.com/avideb24/bankers-soft-client"
        },
        {
          name: "Eletro",
          type: "E-Commerce Website",
          techs: "NextJs, TailwindCSS, JavaScript",
          date: "06-01-2025",
          image: electroImg,
          liveLink: "https://eletro-gadgets.vercel.app/",
          githubClient: "https://github.com/avideb24/bazar-zone",
          githubServer: "https://github.com/avideb24/bazar-zone-server"
        },
        {
          name: "BucketBee",
          type: "Blog Website",
          techs: "React, Tailwind, JavaScript, ExpressJs, MongoDB",
          date: "21-10-2023",
          image: bucketbeeImg,
          liveLink: "https://bucketbee-13436.web.app/",
          githubClient: "https://github.com/avideb24/bucketBee-client",
          githubServer: "https://github.com/avideb24/bucketBee-server"
        },
        {
          name: "Trackify",
          type: "Asset Management Website",
          techs: "React, Tailwind, JavaScript, ExpressJs, MongoDB",
          date: "27-11-2023",
          image: trackifyImg,
          liveLink: "https://trackify-management.web.app/",
          githubClient: "https://github.com/avideb24/trackify-client",
          githubServer: "https://github.com/avideb24/trackify-server"
        },
        {
          name: "TechVibe",
          type: "Tech Events Website",
          techs: "React, Tailwind, JavaScript, AOS",
          date: "21-10-2023",
          image: techvibeImg,
          liveLink: "https://tech-vibe.web.app/",
          github: "https://github.com/avideb24/tech-vibe"
        },
        {
          name: "Axit",
          type: "Modern Axure Template",
          techs: "HTML, Css, JavaScript",
          date: "20-10-2022",
          image: axitImg,
          liveLink: "https://avideb24.github.io/axit/",
          github: "https://github.com/avideb24/axit"
        },
        {
          name: "StartUp",
          type: "A StartUp Template",
          techs: "HTML, Css, JavaScript",
          date: "20-10-2022",
          image: startupImg,
          liveLink: "https://avideb24.github.io/startup/",
          github: "https://github.com/avideb24/startup"
        },
        {
          name: "YouTube Clone",
          type: "Clone Template",
          techs: "HTML, Css, JavaScript",
          date: "07-14-2023",
          image: youtubeImg,
          liveLink: "https://avideb24.github.io/YouTube-clone/",
          github: "https://github.com/avideb24/YouTube-clone"
        },
        {
          name: "Flower Shop",
          type: "Shop Template",
          techs: "HTML, Css",
          date: "25-02-2022",
          image: flowerShopImg,
          liveLink: "https://avideb24.github.io/flower-shop/",
          github: "https://github.com/avideb24/flower-shop"
        },
        {
          name: "Swimming",
          type: "Swimming Template",
          techs: "HTML, Css",
          date: "20-10-2022",
          image: swimmingImg,
          liveLink: "https://avideb24.github.io/swimming/",
          github: "https://github.com/avideb24/swimming"
        }
      ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};
