import React, { useState } from "react";
import "../Form.css";
import { CiUser } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiChevronRight } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";

const Rezervations = () => {
  // let contact_info = document.querySelector('#contact_info');
  // let contact_us = document.querySelector('#contact_us');
  // let switch_to_contact_info = document.querySelector('#switch_to_contact_info');
  // let switch_to_contact_us = document.querySelector('#switch_to_contact_us');

  // switch_to_contact_us.addEventListener('click', () => {
  //   contact_info.style.display = 'none';
  //   contact_us.style.display = 'block';
  // });
  // switch_to_contact_info.addEventListener('click', () => {
  //   contact_info.style.display = 'block';
  //   contact_us.style.display = 'none';
  // });
  const [selects, setSelects] = useState();

  return (
    <div>
      <div className="h-screen w-full grid place-items-center bg-white">
        <div className="bg-orange-50 rounded-md shadow flex flex-row ">
          {/*info*/}
          <div
            className="bg-orange-800 pt-16 md:hover:scale-y-110 rounded-md transition md:block"
            id="contact_info"
          >
            <div className="flex justify-center">
              <h2 className="text-orange-50 font-custom2 text-3xl py-6">
                Contact Information
              </h2>
              <h2
                className="text-orange-50 font-custom2 text-sm flex flex-row md:hidden block cursor-pointer"
                id="switch_to_contact_info"
              >
                Contact Us
                <BsArrowLeft className="h-4 w-4 ml-1" />
              </h2>
            </div>
            <div className="mt-12 flex flex-row justify-center ">
              <div>
                {/*icon*/}
                <CiUser className=" text-orange-50 mr-2" size={43} />
              </div>
              <div>
                <h2 className="text-orange-50 font-custom2 text-md ">Name: </h2>
                <p className="text-orange-50 font-custom2 text-md j">
                  Merve Barış{" "}
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-row justify-center ">
              <div>
                {/*icon*/}
                <MdOutlineAlternateEmail
                  className=" text-orange-50 mr-2"
                  size={40}
                />
              </div>
              <div>
                <h2 className="text-orange-50 font-custom2 text-md">Email: </h2>
                <p className="text-orange-50 font-custom2 text-md">
                  mrvbaris1@gmail.com{" "}
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-row justify-center ">
              <div>
                {/*icon*/}
                <BsPhone className=" text-orange-50 mr-2" size={40} />
              </div>
              <div>
                <h2 className="text-orange-50 font-custom2 text-md">Phone: </h2>
                <p className="text-orange-50 font-custom2 text-md">
                  0555 555 55 55{" "}
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-row justify-center ">
              <div>
                {/*icon*/}
                <GoLocation className=" text-orange-50 mr-2" size={40} />
              </div>
              <div>
                <h2 className="text-orange-50 font-custom2 text-md">
                  Adress:{" "}
                </h2>
                <p className="text-orange-50 font-custom2 text-md">
                  3569 Sok. No:24 d:46{" "}
                </p>
              </div>
            </div>
          </div>

          {/*form */}
          <div id="contact_us" className="px-6 py-8 ">
            <div className="flex justify-center">
              <h2 className="text-orange-800 font-custom2 text-3xl py-6">
                Rezervations
              </h2>
              <h2
                className="font-custom2 text-orange-800 text-sm flex flex-row md:hidden block cursor-pointer"
                id="switch_to_contact_us"
              >
                Contact Info
                <FiChevronRight className="h-5 w-5 ml-1" />
              </h2>
            </div>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full text-sm px-3 h-8 my-4 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your SurName"
              className="w-full text-sm px-3 h-8 my-4 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full text-sm px-3 h-8 my-4 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <input
              type="date"
              placeholder="StartDate"
              className="w-full text-sm px-3 h-8 my-4 outline-none rounded-md border focus:shadow-sm"
            />
            <br />
            <input
              type="date"
              placeholder="EndDate"
              className="w-full text-sm px-3 py-2 h-8 my-4 outline-none rounded-md border focus:shadow-sm"
            />
            <br />

            <select
              value={selects}
              onChange={(e) => setSelects(e.target.value)}
              className="w-full text-sm px-3 h-8 my-6 outline-none rounded-md border focus:shadow-sm"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
            <select className="w-full text-sm px-3 h-8 my-6 outline-none rounded-md border focus:shadow-sm">
              <option>Oda 1</option>
              <option>Oda 2</option>
              <option>Oda 3</option>
            </select>
            <input
              type="submit"
              value="Send"
              className="bg-orange-800 px-4 py-2 my-4 rounded-md text-orange-50 text-sm cursor-pointer hover:shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rezervations;
