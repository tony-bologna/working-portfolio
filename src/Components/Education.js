import React from 'react';
import { CalendarIcon, AcademicCapIcon, XCircleIcon, MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { schools } from "../data";
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

export default function Education() {

  return (
    <section id="education" className='h-[90vh] mb-64 mt-44 md:mb-0 md:mt-0'>

      {/* Entire "window" */}
      {/* size l is when the sidebar is revieled and navbar at top is hidden */}

      <div className='mx-10 my-10 md:my-16 md:mx-16 lg:ml-[20%]  rounded-xl bg-slate-300/[.85] shadow-md shadow-slate-500/70'>
        {/* window units @ the top */}
        <div className='flex flex-wrap px-2 py-1 rounded-t-xl bg-slate-400'>
          <RedQuackButton />
          <YellowQuackButton />
          <GreenQuackButton />
        </div>
        {/* "Window" outside of top bar */}
        <div className="container mx-auto">
          {/* title "education" box */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-slate-100 rounded-lg bg-emerald-300/80 shadow-md shadow-emerald-600/40 p-4 mx-8 mt-4 mb-4 md:mb-2">
            <AcademicCapIcon className="w-8 h-8 text-indigo-400 inline mr-4 mb-1" />
            Education
          </h1>
          {/* Entire two sections in a row */}
          <div className="flex flex-wrap mx-6">
            {/* Each 'box' that has info */}
            {schools.map((school) => (
              <div className="py-4 px-2 md:w-1/2 w-full">
                <div className="h-full bg-cyan-300/70 font-bold shadow-inner shadow-cyan-600/40 p-8 rounded-md">
                  {/* Begins actual content/text from data.js */}
                  <h1 className='title-font text-xl text-slate-600/70 mb-2'>
                    {school.place}
                  </h1>
                  <h4 className="title-font text-lg text-indigo-400 font-bold mb-1.5">
                    <CalendarIcon className='w-6 h-6 inline text-indigo-400 mr-1 mb-1' /> {school.gradSeason}
                  </h4>
                  {/* Degree name [school.degree on data.js] */}
                  <h5 className="text-base text-slate-700/80  mb-2">{school.degree}</h5>
                  <p className="text-slate-600/70 text-sm italic">
                    {school.other}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
