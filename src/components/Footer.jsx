import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-orange-50 text-orange-800 py-2 px-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-orange-800 py-8 px-4">
        <div>
          <h6 className="font-custom2 font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1 font-custom2 text-orange-800">Travel</li>
            <li className="py-1 font-custom2 text-orange-800">Booking</li>
            <li className="py-1 font-custom2 text-orange-800">Flights</li>
            <li className="py-1 font-custom2 text-orange-800">Cruises</li>
            <li className="py-1 font-custom2 text-orange-800">Ground</li>
          </ul>
        </div>
        <div>
          <h6 className="font-custom2 font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1 font-custom2 text-orange-800">Pricing</li>
            <li className="py-1 font-custom2 text-orange-800">Docomentation</li>
            <li className="py-1 font-custom2 text-orange-800">Tours</li>
            <li className="py-1 font-custom2 text-orange-800">Refunds</li>
          </ul>
        </div>
        <div>
          <h6 className="font-custom2 font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1 font-custom2 text-orange-800">About</li>
            <li className="py-1 font-custom2 text-orange-800">Blog</li>
            <li className="py-1 font-custom2 text-orange-800">Jobs</li>
            <li className="py-1 font-custom2 text-orange-800">Press</li>
            <li className="py-1 font-custom2 text-orange-800">Partners</li>
          </ul>
        </div>
        <div>
          <h6 className="font-custom2 font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1 font-custom2 text-orange-800">Claims</li>
            <li className="py-1 font-custom2 text-orange-800">Privacy</li>
            <li className="py-1 font-custom2 text-orange-800">Terms</li>
            <li className="py-1 font-custom2 text-orange-800">Policies</li>
            <li className="py-1 font-custom2 text-orange-800">Conditions</li>
          </ul>
        </div>
        <div className="col-span-2 py-8 md:pt-2">
          <p className="py-1 font-custom2 text-orange-800 font-bold uppercase">
            Subscribe to our newsletters
          </p>
          <p className="py-1 font-custom2 text-orange-800 py-4">
            The Latest deals, articles and resources sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email..."
            />
            <button className="p-2 mb-4 rounded-md font-custom2 bg-orange-50 text-orange-800 border-orange-800">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1400px] px-4 py-4 mx-auto justify-between sm:flex-row text-center">
        <p className="py-4">2023 Experiences, LLC All rights reserved</p>
        <div className="flex justify-between s:w-[300px pt-4 text-2xl]">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
