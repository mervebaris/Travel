import React from "react";
import Bulgari8 from "../assets/bulgari8.jpg";
import Bulgari7 from "../assets/bulgari7.jpg";
import Bulgari6 from "../assets/bulgari6.jpg";
import Bulgari5 from "../assets/bulgari5.jpg";
import Bulgari4 from "../assets/bulgari4.jpg";
import Bulgari2 from "../assets/bulgari2.jpg";
import Bulgari9 from "../assets/bulgari9.jpg";
import Bulgari10 from "../assets/bulgari10.jpg";

import Footer from '../components/Footer'
import Navbar from "./Navbar";

const Destinations = () => {
  return (
 
    <div className="w-full h-screen overflow-scroll bg-white">
      <Navbar />
       <h5 className="font-custom2 text-orange-800 text-5xl font-bold text-center pt-[50px]">Destinations</h5>
      <div className="flex min-h-screen items-center justify-center">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-16">
   
         <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-orange-800/30 transtion-shadow">
          <div className="h-96 w-72">
          <img src={Bulgari8} alt="bali" className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent orange-200 group-hover:from-orange-50/10 group-hover:via-orange-50/70 group-hover:to-orange-50/90"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
            <h2 className="font-custom2 text-3xl font-bold text-orange-800 bg-orange-50/70 p-2 mb-24"> Bali</h2>
            <p className="font-custom2 text-lg text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Via Privata Fratelli Gabba, 7B, 20121 Milano MI, İtalya</p>
           </div>
         </div>
         <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-orange-800/30 transtion-shadow">
          <div className="h-96 w-72">
          <img src={Bulgari4} alt="bali" className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent orange-200 group-hover:from-orange-50/10 group-hover:via-orange-50/70 group-hover:to-orange-50/90"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
            <h2 className="font-custom2 text-3xl font-bold text-orange-800 bg-orange-50/70 p-2 mb-24"> Milan</h2>
            <p className="font-custom2 text-lg text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Via Privata Fratelli Gabba, 7B, 20121 Milano MI, İtalya</p>
           </div>
         </div>
         <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-orange-800/30 transtion-shadow">
          <div className="h-96 w-72">
          <img src={Bulgari6} alt="bali" className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent orange-200 group-hover:from-orange-50/10 group-hover:via-orange-50/70 group-hover:to-orange-50/90"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
            <h2 className="font-custom2 text-3xl font-bold text-orange-800 bg-orange-50/70 p-2 mb-24"> Rome</h2>
            <p className="font-custom2 text-lg text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Via Privata Fratelli Gabba, 7B, 20121 Milano MI, İtalya</p>
           </div>
         </div>
         <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-orange-800/30 transtion-shadow">
          <div className="h-96 w-72">
          <img src={Bulgari5} alt="bali" className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent orange-200 group-hover:from-orange-50/10 group-hover:via-orange-50/70 group-hover:to-orange-50/90"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
            <h2 className="font-custom2 text-3xl font-bold text-orange-800 bg-orange-50/70 p-2 mb-24"> Paris</h2>
            <p className="font-custom2 text-lg text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Via Privata Fratelli Gabba, 7B, 20121 Milano MI, İtalya</p>
           </div>
         </div>
         <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-orange-800/30 transtion-shadow">
          <div className="h-96 w-72">
          <img src={Bulgari7} alt="bali" className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent orange-200 group-hover:from-orange-50/10 group-hover:via-orange-50/70 group-hover:to-orange-50/90"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
            <h2 className="font-custom2 text-3xl font-bold text-orange-800 bg-orange-50/70 p-2 mb-24"> London</h2>
            <p className="font-custom2 text-lg text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Via Privata Fratelli Gabba, 7B, 20121 Milano MI, İtalya</p>
           </div>
         </div>
         <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-orange-800/30 transtion-shadow">
          <div className="h-96 w-72">
          <img src={Bulgari2} alt="bali" className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent orange-200 group-hover:from-orange-50/10 group-hover:via-orange-50/70 group-hover:to-orange-50/90"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
            <h2 className="font-custom2 text-3xl font-bold text-orange-800 bg-orange-50/70 p-2 mb-24"> Los Angles</h2>
            <p className="font-custom2 text-lg text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Via Privata Fratelli Gabba, 7B, 20121 Milano MI, İtalya</p>
           </div>
         </div>
         <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-orange-800/30 transtion-shadow">
          <div className="h-96 w-72">
          <img src={Bulgari9} alt="bali" className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent orange-200 group-hover:from-orange-50/10 group-hover:via-orange-50/70 group-hover:to-orange-50/90"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
            <h2 className="font-custom2 text-3xl font-bold text-orange-800 bg-orange-50/70 p-2 mb-24"> Miami</h2>
            <p className="font-custom2 text-lg text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Via Privata Fratelli Gabba, 7B, 20121 Milano MI, İtalya</p>
           </div>
         </div>
         <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-orange-800/30 transtion-shadow">
          <div className="h-96 w-72">
          <img src={Bulgari10} alt="bali" className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent orange-200 group-hover:from-orange-50/10 group-hover:via-orange-50/70 group-hover:to-orange-50/90"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
            <h2 className="font-custom2 text-3xl font-bold text-orange-800 bg-orange-50/70 p-2 mb-24"> Tokyo</h2>
            <p className="font-custom2 text-lg text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Via Privata Fratelli Gabba, 7B, 20121 Milano MI, İtalya</p>
           </div>
         </div>
         <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-orange-800/30 transtion-shadow">
          <div className="h-96 w-72">
          <img src={Bulgari8} alt="bali" className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent orange-200 group-hover:from-orange-50/10 group-hover:via-orange-50/70 group-hover:to-orange-50/90"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
            <h2 className="font-custom2 text-3xl font-bold text-orange-800 bg-orange-50/70 p-2 mb-24"> Shanghai</h2>
            <p className="font-custom2 text-lg text-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Via Privata Fratelli Gabba, 7B, 20121 Milano MI, İtalya</p>
           </div>
         </div>
        </div>
        <div className="fixed bottom-16">
        <p className="font-custom2 text-2xl font-semibold text-orange-800"></p>
       </div>
       
      </div>
      <div>
        <Footer />
      </div>
    </div>
  ); 
};

export default Destinations;
