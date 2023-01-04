import React from "react";
import Tilt from "react-parallax-tilt";
import Navbar from "./Navbar";


const Contac = () => {

  return (
    <div className="fixed top-0 left-0 right-0">
    <Navbar />
   
    <div className="bg-orange-50 h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center">
 
      <div className="h-[60rem] w-[60rem] bg-gradient-to-r from-orange-200/80 to-orange-400 rounded-full absolute left-2/3 -top-56 animate-pulse"></div>
       <div className="h-[50rem] w-[50rem] bg-gradient-to-r from-orange-200 via-orange-700 to-orange-500 rounded-full absolute top-96 -left-0 animate-pulse"></div>
      <Tilt className="container h-5/6 w-2/4 bg-orange-800/10 relative z-2 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm">
       <div className="container w-full h-full">
        <form className="h-full flex flex-col justify-evenly items-center ">
          <div className="font-custom2 text-orange-800 text-3xl tracking-wider justify-center">Contact Us</div>
          <input type="text" placeholder="Name" className="input-text text-xl" />
          <input type="text" placeholder="Surname" className="input-text text-xl" />
          <input type="text" placeholder="Phone " className="input-text text-xl"/>
          <textarea type="message" placeholder="Message" className="input-text text-xl "/>
           <input type="Submit" className="font-custom2 text-orange-50 bg-orange-400/80 cursor-pointer px-7 py-2 rounded-full hover:bg-orange-600/70" />
        </form>
       </div>
       </Tilt>
    </div>
    </div>
  );
};

export default Contac;
