import React from 'react';
import { CalendarIcon, UsersIcon, XCircleIcon, MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { jobs } from "../data";
import useSound from 'use-sound';
import quack from '../duck.mp3';

// ************************************
// *       TOP QUACK BUTTONS          *
// ************************************
const RedQuackButton = () => {
  const [play] = useSound(quack, { volume: .3 });
  return <XCircleIcon className="my-3 ml-4 w-4 text-[#FC605B] bg-red-700 rounded-full active:text-red-600" viewBox='2.5 2.5 15 15' onClick={play} />;
};
const YellowQuackButton = () => {
  const [play] = useSound(quack, { playbackRate: 1.25, volume: .3 });
  return <MinusCircleIcon className="my-3 mx-2 text-[#FCBB40] w-4 bg-yellow-700 rounded-full active:text-yellow-600" viewBox='2.5 2.5 15 15' onClick={play} />;
};
const GreenQuackButton = () => {
  const [play] = useSound(quack, { playbackRate: 1.5, volume: .3 });
  return <PlusCircleIcon className="my-3 text-[#33C648] w-4 bg-green-800 rounded-full active:text-green-700" viewBox='2.5 2.5 15 15' onClick={play} />;
};

// ******** HIDES SCROLLING ICON ***********
const runOnScroll = (e) => {
//  console.log(e.target.scrollTop)
  if (e.target.scrollTop > 15 ) { 
    document.getElementById('scrollIcon3').setAttribute('style', 'visibility: hidden; opacity: 0; transition: visibility 400ms, opacity 0.5s linear;');
  }
  else {
    document.getElementById('scrollIcon3').setAttribute('style', 'visibility: visible; opacity: 100; transition: visibility 1s, opacity 0.5s linear;');
  } 
};

export default function WorkExperience() {
  return (
    <section id="work" key='work' className='h-[90vh] mb-64 mt-44 md:mb-0 md:mt-0'>

      {/* Entire "window" */}
      {/* size l is when the sidebar is reveiled and navbar at top is hidden */}

      <div className='mx-10 my-10 md:my-16 md:mx-16 lg:ml-[20%] rounded-xl bg-slate-300/[.85] shadow-md shadow-slate-500/70'>

        {/* window units @ the top */}
        <div className='flex flex-wrap px-2 rounded-t-xl bg-slate-400'>
          <RedQuackButton />
          <YellowQuackButton />
          <GreenQuackButton />
        </div>

        {/* "Window" outside of top bar */}
        <div className="container mx-auto pb-4">
          {/* title "PastWorkExperience" box */}
          <h1 className="sm:text-4xl font-medium title-font text-slate-100 rounded-lg bg-emerald-300/80 shadow-md shadow-emerald-600/40 p-4 mx-8 mt-4 mb-4 md:mb-2">
            <UsersIcon className="w-8 h-8 text-indigo-400 inline mr-4 mb-1" />
            <span className="hidden md:inline">Past </span>Work Experience
          </h1>

          {/* WRAPPER FOR BLUE BOXES...has dimensions and viewport */}
          <div className="rounded-[1rem] mt-4 h-[65vh] 3xl:h-auto mx-6 overflow-y-scroll" onScroll={runOnScroll}>

            {/*Scrolling animated icon*/}
              <div id="scrollIcon3" className='relative overflow-visible 3xl:hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#334155" className="w-8 absolute left-[47%] md:left-[47.5%] lg:left-[48.4%] top-[60vh] animate-pulse">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.59L7.3 9.24a.75.75 0 00-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75z" clipRule="evenodd" />
              </svg>
              </div>
              

            {/*MIDDLE THAT HAS THE OVERFLOW */}
            <div className= 'flex flex-wrap overflow-y-auto'> 
            {/* Each 'box' that has info */}
            {jobs.map((job) => (
              <div className="pb-2 px-2 md:w-1/2 w-full ">

                <div className="h-full bg-cyan-300/70 font-bold shadow-inner shadow-cyan-600/40 p-8 rounded-md">

                  {/* Begins actual content/text from data.js */}
                  <h1 className='title-font text-xl text-slate-600/[.85] mb-2'>
                    {job.company}
                  </h1>
                  <h4 className="title-font text-lg text-indigo-400 font-bold mb-1.5">
                    <CalendarIcon className='w-6 h-6 inline text-indigo-400 mr-1 mb-1' /> {job.date}
                  </h4>
                  {/* Degree name [jobs.title] on data.js] */}
                  <h5 className="text-base text-slate-700/80  mb-2">{job.title}</h5>
                  <p className="text-slate-600/[.85] text-sm italic">
                    {job.description}
                  </p>
                </div>

              </div>
            ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
} 
