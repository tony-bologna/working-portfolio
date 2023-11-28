import React from 'react';
import confetti from "canvas-confetti";
import * as Tooltip from '@radix-ui/react-tooltip';


export default function About() {

//******** EMOJI CANNON **********
  var scalar = 2;
  var emoji = confetti.shapeFromText({ text: '✩', scalar});
  function boom() {
    confetti({
      spread: 180,
      ticks: 100,
      gravity: 0,
      flat: true,
      decay: .85,
      startVelocity: -35,
      shapes: [emoji],
      origin: { y: -0.1 },
      scalar
    });
  }


  return (
    <section id="about" className='md:h-[95vh] lg:ml-[20vw] pt-24 mx-[5vw] md:mx-[4vw]'>
      {/* ONE CONTAINER with a FLEXBOX cloumn that has 3 items in it (heading, p, and inline flexboxes*/}
      {/* ***NOTE*** rounded-'large' is a custom theme on tailwind. look at tailwind.config file shape specifics */}

      {/* size l is when the sidebar is revieled and navbar at top is hidden */}
      <div className='rounded-heffer bg-gradient-to-r from-cyan-300/90 via-emerald-300/90 to-sky-300/[.95] flex flex-col p-8 lg:p-[4vh] pt-[8vh] items-center text-center' >

        {/* *** PROFILE PIC *** */}
        <img  src={require('./assets/pfp.png')} className = 'm w-[8rem] h-[8rem] lg:w-[15vh] lg:h-[15vh] lg:object-cover rounded-full'  alt='black and white of Antonio in a gray light jacket with a blue and black patterned button down shirt underneath. He is also wearing a blue jean cap.'/> 


        {/* ********* TOOL TIP FROM RADIX IS IMBEDDED ********** */}
        <Tooltip.Provider>
          <Tooltip.Root delayDuration={0}>
            <Tooltip.Trigger asChild>
            <h1 id="howdy" className="text-2xl lg:text-[4.5vh] my-[3vh] mb-[3.5vh] mx-auto text-white hover:text-indigo-500 drop-shadow cursor-pointer z-50" onClick={boom}>
              Hi! I'm Antonio.
            </h1>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content sideOffset={-30} align='start' alignOffset={100} className='w-[50%]'>
                <img src={require('./assets/bongo-cat-transparent.gif')} className='rotate-[-13deg] overflow-visible z-10' alt='cat playing bongos on top of my name'/>
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
        {/* ******** RADIX END ********* */}

        <p className="lg:text-[1.8vh] text-white mb-[3.5vh] mx-[8vw] leading-relaxed break-normal drop-shadow-sm">
           <span className='underline [text-underline-offset:2px] [text-decoration-thickness:2px]'>I help</span> people and organizations <span className='underline [text-underline-offset:2px] [text-decoration-thickness:2px]'>implement</span> their <span className='underline [text-underline-offset:2px] [text-decoration-thickness:2px]'>technical or digital vision/criteria</span> through <span className='underline [text-underline-offset:2px] [text-decoration-thickness:2px] '>vibrant and functional user experiences; designed interfaces; and technical solutions</span>.<br/> <br/>
           Programmer, builder, creative and code wrangler since 2019
        </p>

        {/* two "buttons" that are rlly just <a> in a flexbox with hover color changing */}
        <div className="flex justify-content-around m-2">
          <div
            onClick={() => document.getElementById("contact").scrollIntoView()}
            className=" cursor-pointer inline-flex text-slate-100 border border-[.2vh] border-indigo-500 bg-indigo-500/90 hover:text-slate-300 hover:border-indigo-600 hover:bg-indigo-600 rounded-[1.7vh] mb-[1vh] py-[1vh] px-[3vh] text-[2vh]">
            Contact
          </div>
          <div
            onClick={() => document.getElementById("projects").scrollIntoView()}
            className=" cursor-pointer ml-[1vw] inline-flex text-slate-100 border border-[.2vh] border-blue-500 bg-blue-500/90  hover:bg-blue-600 hover:border-blue-600 hover:text-slate-300 rounded-[1.7vh] mb-[1vh] py-[1vh] px-[3vh] text-[2vh]">
            <span className="hidden lg:inline">Past</span>&nbsp;Projects
          </div>
        </div>
      </div>
    </section>
  );
}
