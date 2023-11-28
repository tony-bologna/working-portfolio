import React from 'react';
import { TerminalIcon, XCircleIcon, MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { projects } from "../data";
import useSound from 'use-sound';
import quack from '../duck.mp3';

const RedQuackButton = () => {
  const [play] = useSound(quack, { volume: .3 });
  return <XCircleIcon className="my-3 ml-4 w-4 h-4 text-[#FC605B] bg-red-700 rounded-full active:text-red-600" viewBox='2.5 2.5 15 15' onClick={play} />;
};
const YellowQuackButton = () => {
  const [play] = useSound(quack, { playbackRate: 1.25, volume: .3 });
  return <MinusCircleIcon className="my-3 mx-2 text-[#FCBB40] w-4 h-4 bg-yellow-700 rounded-full active:text-yellow-600" viewBox='2.5 2.5 15 15' onClick={play} />;
};
const GreenQuackButton = () => {
  const [play] = useSound(quack, { playbackRate: 1.5, volume: .3 });
  return <PlusCircleIcon className="my-3 text-[#33C648] w-4 h-4 bg-green-800 rounded-full active:text-green-700" viewBox='2.5 2.5 15 15' onClick={play} />;
};

// ******** HIDES SCROLLING ICON ***********
const runOnScroll = (e) => {
  // PRINTS Y POSITION OF SCROLLING console.log(e.target.scrollTop)
  if (e.target.scrollTop > 15 ) { 
    document.getElementById('scrollIcon2').setAttribute('style', 'visibility: hidden; opacity: 0; transition: visibility 400ms, opacity 0.5s linear; z-index:50;');
  }
  else {
    document.getElementById('scrollIcon2').setAttribute('style', 'visibility: visible; opacity: 100; transition: visibility 1s, opacity 0.5s linear; z-index:50;');
  } 
};

export default function ProjectsAndActivity() {
  return (
    <section id="projects" className='h-[90vh] mb-64 mt-44 md:mb-0 md:mt-0'>
       {/* Entire "window" */}
      {/* size l is when the sidebar is revieled and navbar at top is hidden */}

       <div className='mx-10 my-10 md:my-16 md:mx-16 lg:ml-[20%] rounded-xl bg-slate-300/[.85] shadow-md shadow-slate-500/70'>

        {/* window units @ the top */}
        <div className='flex flex-wrap px-2 py-1 rounded-t-xl bg-slate-400'>
          <RedQuackButton />
          <YellowQuackButton />
          <GreenQuackButton />
        </div>

       {/* "Window" outside of top bar */}
       <div className="container mx-0 md:mx-auto pb-4">
          {/* title "Projects" box */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-slate-100 rounded-lg bg-emerald-300/80 shadow-md shadow-emerald-600/40 p-4 mx-8 mt-4 mb-4 md:mb-2">
            <TerminalIcon className="w-8 h-8 text-indigo-400 inline mr-4 mb-1" />
            Projects &amp; Activities
            {/* <p className="text-base text-slate-600/70 text-left pl-12 mt-2">
              
            </p> */}
          </h1>

          {/* WRAPPER FOR BLUE BOXES...has dimensions and viewport */}
          <div className="rounded-[1rem]  md:mt-4 h-[50vh] md:h-[30rem] lg:h-[65vh] 3xl:h-auto mx-6 overflow-y-scroll" onScroll={runOnScroll}> 

            {/*Scrolling animated icon*/}
            <div id="scrollIcon2" className='relative overflow-visible 3-xl:hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#34d399" className="w-8 absolute left-[45%] md:left-[47.8%] lg:left-[48.4%] top-[45vh] md:top-[35vh] lg:top-[60vh] animate-pulse z-50">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z" clipRule="evenodd" />
              </svg>
              </div>

            {/*MIDDLE THAT HAS THE OVERFLOW */}
        <div className="flex flex-wrap overflow-y-scroll">
            {/* Each 'box' that has info */}
            {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full pb-2 px-2 ">

              <div className="flex relative ">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-md shadow-md shadow-slate-800/40"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-slate-800 bg-slate-900 opacity-80 hover:opacity-100 rounded-md">
                  <h2 className="tracking-widest text-sm title-font font-medium text-emerald-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-bold text-slate-100 mb-3">
                    {project.title}
                  </h1>
                  <p className="text-white">{project.description}</p>
                </div>
              </div>
              
            </a>
          ))}
          </div>

      </div>
      </div>
      </div>
    </section>
  );
}
