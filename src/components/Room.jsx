import React from "react";
import otel from "../assets/otel.mp4";
import otel1 from "../assets/otel2.jpg";
import otel2 from "../assets/otel3.jpg";
import otel3 from "../assets/otel4.jpg";
import Footer from './Footer'
function Room() {
  return (
    <div className="w-full h-screen overflow-scroll">
      <video
        className="top-0 left-0 w-full h-5/6 object-cover"
        src={otel}
        autoPlay
        loop
        muted
      />
      <div className=" max-w[900px] shadow-lg m-auto px-20 py-12">
        <p className="font-custom2 text-center text-orange-900 font-bold text-5xl">
          Rooms
        </p>
      </div>
      {/*1.oda*/}
      <div className="max-w-[1400px] h-auto mx-auto my-12 lg:mb-[2%] md:mb-[5%] px-4 grid lg:grid-cols-2 gap-6 shadow">
        <div className="flex items-strech gap-4">
          <img
            className="object-contain"
            src={otel1}
            alt="/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="lg:top-20 relative lg:col-span-1 col-span-2 p-4">
          <h3 className="font-custom2 text-3xl font-bold text-orange-900">
            Ocean View Villa
          </h3>
          <p className="font-custom2 text-lg pt-2 text-orange-800 mt-10">
            These villas at Bulgari Resort Bali with one bedroom vaunt
            extraordinary views of the ocean, some framed by the thatched roofs
            of other sea view villas and others spanning the entire horizon.
            Nestled within high perimeter walls, one enters into a tropical
            garden, an expansive open-air living area, a spacious vestibule and
            an enormous bathroom with ...
          </p>
          <div className="mt-6">
            <button className="font-custom2 border-orange-800 mr-4 text-orange-800 hover:shadow-xl">
              Descover
            </button>
          </div>
        </div>
      </div>
      {/*2.oda*/}
      <div className="max-w-[1400px] h-auto mx-auto my-12 pt-16 lg:mb-[2%] md:mb-[5%] px-4 grid lg:grid-cols-2 gap-6 shadow">
        <div className="lg:top-20 relative lg:col-span-1 col-span-2 p-4">
          <h3 className="font-custom2 text-3xl font-bold text-orange-900">
            The Bulgari Villa
          </h3>
          <p className="font-custom2 text-lg pt-2 text-orange-800 mt-10">
            A private entrance conducts to this 1,300 square metres unit that
            includes two bedrooms, a living room with bar, a spacious dining
            room, a private cinema, a kitchen and a spa treatment room. The
            20-metre private pool and a meditation pergola surrounded by an
            extensive terrace and small pavilions where to eat and live in the
            open complete this ...
          </p>
          <div className="mt-6">
            <button className="font-custom2 border-orange-800 mr-4 text-orange-800 hover:shadow-xl">
              Descover
            </button>
          </div>
        </div>
        <div className="flex items-strech gap-4">
          <img
            className="object-contain"
            src={otel2}
            alt="/"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      {/*2.oda*/}
      <div className="max-w-[1400px] h-auto mx-auto my-12 pt-16 lg:mb-[2%] md:mb-[5%] px-4 grid lg:grid-cols-2 gap-6 shadow">
        <div className="flex items-strech gap-4">
          <img
            className="object-contain"
            src={otel3}
            alt="/"
            width="100%"
            height="100%"
          />
        </div>
        <div className="lg:top-20 relative lg:col-span-1 col-span-2 p-4">
          <h3 className="font-custom2 text-3xl font-bold text-orange-900">
            The Five Bedroom
          </h3>
          <p className="font-custom2 text-lg pt-2 text-orange-800 mt-10">
            The Five-Bedroom Mansions feature five separate bedrooms, private
            pool and garden with Indian Ocean View, terrace, open – air living
            room pavilion, Miele kitchen appliances and private elevator. Every
            Mansion has its own garden and swimming pool ranging from 14 to 23
            metres surrounded by sun decks and a gazebo with open living areas
            opening into ...
          </p>
          <div className="mt-6">
            <button className="font-custom2 border-orange-800 mr-4 text-orange-800 hover:shadow-xl">
              Descover
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Room;
