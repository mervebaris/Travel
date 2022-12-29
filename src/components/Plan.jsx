import React from "react";
import Bali3 from "../assets/bali3.jpg";
import Bali4 from "../assets/bali17.jpg";
import Bali5 from "../assets/bali11.jpg";
import Bali8 from "../assets/bali14.jpg";
import Bali11 from "../assets/bali2.jpg";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-12 px-4 grid lg:grid-cols-2 gap-7">
      {/*sol*/}
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
      {/*sağ*/}
      <div className="flex flex-col h-full justify-center">
        <h3 className="font-custom2 text-3xl md:text-4xl font-bold text-orange-900">Plan Your Next Trip</h3>
        <p className="font-custom2 text-2xl py-6 text-orange-800">
          You are ready to plan your next trip, so let is find a stay that fits
          your needs.{" "}
        </p>
        <p className="font-custom2 pb-6 text-lg text-orange-800">
          Create a Trip board for all the plans for your next great adventure.
          Prepare cards for tasks you need to complete beforehand, as well as
          activities you want to check out while you're away.
        </p>
        <div>
          <button className="font-custom2 border-orange-800 mr-4 text-orange-800 hover:shadow-xl">Learn More</button>
          <button className="font-custom2 bg-orange-50 text-orange-800 border-orange-800 hover:shadow-xl">Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
