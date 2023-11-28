import React from 'react';
import { XCircleIcon, MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
// got this react hook use-sound and adds interactivity to website design
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


export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="h-[80vh] mb-64 mt-44 md:mb-0 md:mt-0">
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
        <div className="container px-8 py-10 mx-auto flex rounded-b-xl sm:flex-nowrap flex-wrap">
          
          <div className="lg:w-1/2 mr-2 flex flex-col rounded-lg overflow-auto break-all items-center">
            <h2 className="text-slate-800 sm:text-4xl text-3xl mb-1 font-medium title-font">
              Connect with me
            </h2>
            <span className="leading-relaxed text-slate-800 break-normal m-4 mb-5 text-left">
              Currently accepting work on digital products including - but not limited to: <br/> ●designing web components ●hosting your site ●integrating shopify ●helping with the online presence of your product or organization <br/>
              For office solutions and IT or network related work, please reach out here. 
              </span>

              <div>

              <a href='https://linkedin.com/in/antonio-ponce-meza'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'rgba(255, 255, 255, 1)'}} className='hover:bg-indigo-500'><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg> 
              </a>
{/*               
              <a href='https://github.com/tony-bologna'> <box-icon type='logo' name='github' size='lg' ></box-icon>
              </a>
              <a href='https://instagram.com/scoobertsnack'> <box-icon type='logo' name='instagram'size='lg'></box-icon> </a>
              <a href='https://linkedin.com/in/antonio-ponce-meza'> <box-icon type='logo' name='spotify' size='lg'></box-icon> </a> */}

            </div>

            <div className="bg-fuchsia-800 flex flex-wrap py-6 rounded-md shadow-md">
              <div className="px-8">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  LOCATION
                </h2>
                <p className="mt-1">
                  Texas <br />
                  USA
                </p>
              </div>
              <div className="px-8 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white wrap tracking-widest text-xs">
                  EMAIL
                </h2>
                {/* eslint-disable-next-line  */}
                <a className="text-indigo-400 leading-relaxed">
                  antonioponcemeza@gmail.com
                </a>
  
              </div>
            </div>
          </div>

          <form
            netlify
            name="contact"
            onSubmit={handleSubmit}
            className="md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 pt-7 md:mt-0 sm:pl-6">

            <div className="relative mb-4">
              <p> &lt; THIS IS A TEST &gt;  <br/> </p> { // REMOVE THIS LOL 
              }
              <label htmlFor="name" className="leading-7 text-sm text-slate-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-slate-300 rounded-md border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-slate-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-slate-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-slate-300 rounded-md border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-slate-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-slate-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-slate-300 rounded-md border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-slate-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-slate-100 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}