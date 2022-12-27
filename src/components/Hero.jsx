import React from "react";
import ev from "../assets/ev.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <video
        className="top-0 left-0 w-full h-screen object-cover"
        src={ev}
        autoPlay
        loop
        muted
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white ">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p className="font-custom font-mediumtext-2xl md:text-4xl drop-shadow-2xl">All Inclusive</p>
          <h1 className="font-custom font-bold text-3xl md:text-5xl">The Ultimate Guide To Bali</h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">Swim with dolphins in Lovina. Stay in a luxurious pool villa. Learn to surf in Canggu. Discover the 7 falls at sekumpul waterfall. Dance on the stepping stones at tirta gangga. </p>
          <button className="bg-white text-black">Reserve Now</button>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;