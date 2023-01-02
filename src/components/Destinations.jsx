import React from "react";
import Bali3 from "../assets/bali3.jpg";
import Bali4 from "../assets/bali17.jpg";
import Bali5 from "../assets/bali11.jpg";
import Bali8 from "../assets/bali14.jpg";
import Bali11 from "../assets/bali2.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1400px] m-auto py-12 px-4 grid lg:grid-cols-2 gap-7 shadow-xl-orange-50">
        {/*sol*/}
        <div className="flex flex-col h-full justify-center">
        <p className="font-custom2 text-2xl py-6 text-orange-800">
        BULGARI RESORT Milan
        </p>
        <p className="font-custom2 text-2xl py-6 text-orange-800">
        BULGARI RESORT London
        </p>
        <p className="font-custom2 text-2xl py-6 text-orange-800">
        BULGARI RESORT Dubai
        </p>
        <p className="font-custom2 text-2xl py-6 text-orange-800">
        BULGARI RESORT Bali
        </p>
        <p className="font-custom2 text-2xl py-6 text-orange-800">
        BULGARI RESORT Paris
        </p>
        <p className="font-custom2 text-2xl py-6 text-orange-800">
        BULGARI RESORT Rome
        </p>
        <p className="font-custom2 text-2xl py-6 text-orange-800">
        BULGARI RESORT Tokyo
        </p>
        <p className="font-custom2 text-2xl py-6 text-orange-800">
        BULGARI RESORT Los Angeles
        </p>
        <p className="font-custom2 text-2xl py-6 text-orange-800">
        BULGARI RESORT Miami Beach
        </p>
      </div>
      {/*sağ*/}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh] p-2 shadow-xl">
        <img
          className="row-span-3 object-cover w-full h-full p-2 "
          src={Bali3}
          alt="bali"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 "
          src={Bali11}
          alt="bali" 
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 "
          src={Bali8}
          alt="bali"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2 "
          src={Bali5}
          alt="bali"
        />
        <img
          className="row-span-2 object-cover w-full  h-full p-2 "
          src={Bali4}
          alt="bali"
        />
      </div>
    
    </div>
  );
};

export default  Destinations;