import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { HiMenuAlt3 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const GitDest = () => {
    navigate(`/destinations`);
  };
  const GitRez = () => {
    navigate(`/rezervations`);
  };
  const GitAmen = () => {
    navigate(`/amenities`);
  };
  const GitRoom = () => {
    navigate(`/room`);
  };



  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
    if(!nav) {
        document.body.style.overflow = 'hidden'
    }else {
        document.body.style.overflow = 'scroll'
    }
  }
  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <img className="z-20 mx-5 mt-3" src={Logo} width="80px" height="80px" />
      <HiMenuAlt3 onClick={handleNav} className="z-20 text-white cursor-pointer  m-4" size={40} />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-orange-900 left-0 top-0 w-full h-screen bg-gray-100/100 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100] ease-out duration-300 -z-10 text-white"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-custom2 font-bold text-3xl p-8">Home</li>
          <li onClick={GitDest} className="font-custom2 font-bold text-3xl p-8">Destinations</li>
          <li onClick={GitRez} className="font-custom2 font-bold text-3xl p-8">Rezervations</li>
          <li onClick={GitAmen} className="font-custom2 font-bold text-3xl p-8">Amenities</li>
          <li onClick={GitRoom}  className="font-custom2 font-bold text-3xl p-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
