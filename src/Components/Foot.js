import React from 'react';

export default function Foot() {

  return (
    <section id="foot" className=''>
        <div className='bg-black/60 w-full h-18 overflow-auto bottom-[0%] lg:bottom-0px'> 
            <div className='md:text-sm text-xs text-center md:text-right py-4 pr-10 text-white/80'>
                Website <p className='inline underline decoration-dashed sm:decoration-1'>designed</p> & <p className='inline underline decoration-dashed sm:decoration-1'>coded</p> with 🤎 by Antonio Ponce-Meza(me!) <br/>
                Built and styled using creat-react-app & Tailwinds CSS
            </div>
        </div>
    </section>
  );
}