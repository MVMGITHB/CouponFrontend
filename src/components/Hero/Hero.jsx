"use client";

import HeroFirst from './HeroFirst';
import HeroSecond from './HeroSecond';
import Baner from './Baner'

const Hero = () => {
  return (

    <div className='bg-blue-100  md:pt-[50px]'>
       {/* <div className= "w-[90%]  flex flex-col lg:flex-row  mx-auto mt-4 gap-12 px-4 lg:px-10">
      <div className="w-full">
        <HeroFirst />
      </div>
      <div className="w-full lg:w-[40%]">
        <HeroSecond />
      </div>
    </div> */}

    {/* <div></div> */}

    <Baner/>
    </div>
   
  );
};

export default Hero;
