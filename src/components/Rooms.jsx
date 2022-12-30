import React from "react";
import Oda1 from "../assets/oda1.jpg";
import Oda2 from "../assets/oda2.jpg";
import Oda3 from "../assets/oda8.jpg";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-orange-50 mx-auto my-2 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-2 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="font-custom2 text-3xl font-bold text-orange-900">
          Fine Interior Rooms
        </h3>
        <p className="font-custom2 text-lg pt-4 text-orange-800 mt-10">
          Bastion Hotel Canggu is a 3-star hotel near the city centre of Breda.
          The hotel is situated along the A16 which makes you flexible in your
          plans during your stay. Our guests choose this hotel for its location,
          the comfort for a reasonable price and the nice trips in the area like
          the yearly Breda Jazz Festival and the Efteling. This hotel offers
          free Wi-Fi throughout the hotel and a 24-hour reception service.
          Besides, you can have breakfast, lunch, and dinner in our attractive
          à-la-carte restaurant and for a drink in our welcoming hotel bar. The
          convenient location and the Brabant hospitality make this hotel very
          popular with our guests. We would like to welcome you in Breda!
        </p>
      </div>
      <div className="flex items-strech gap-4">
        <img
          className="object-contain"
          src={Oda1}
          alt="/"
          width="55%"
          height="50%"
        />

        <div className="flex flex-col gap-4">
          <img className="object-cover" src={Oda2} alt="/" width="100%" />
          <img className="object-cover" src={Oda3} alt="/" width="100%" />
        </div>
      </div>
      
    </div>
  );
};

export default Rooms;
