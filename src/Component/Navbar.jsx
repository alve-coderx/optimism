import React, { useState } from "react";
import { AiOutlineInfoCircle, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsCodeSquare } from "react-icons/bs";
import {  MdOutlineLightMode } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const components = [
  { name: "Superchain", href: "/", status: true, icon: false },
  { name: "Governance", href: "/add-liquidity", status: false, icon: false },
  { name: "Ecosystem", href: "/create-pool", status: false, icon: false },
  { name: "Bridge", href: "/create-pool", status: false, icon: false },
  { name: "Developers", href: "/create-pool", status: false, icon: false },
  { name: "More", href: "/create-pool", status: false, icon: false },
];

const options = [
  { name: "Vote in governance", icon: <AiOutlineInfoCircle /> },
  { name: "Onboarding", icon: <BsCodeSquare /> },
];

const Navbar = ({ setModal }) => {
  const [setting, setSetting] = useState(false);

  return (
    <>
      <div className="flex justify-between shadow-md items-center p-4 bg-white ">
        <div className="flex text-white space-x-5 items-center font-[700]">
          <AiOutlineMenu onClick={() => setModal(true)} className="text-black text-xl "/>
          <NavLink to="/">
            <p className="text-[#ff0420] italic text-3xl font-[900]">
              OPTIMISM
            </p>
          </NavLink>
        </div>

        <div className="flex space-x-4 items-center">

          <button className="bg-[#ff0420] text-white px-6 py-2 flex items-center space-x-2 rounded-full shadhow-xl lg:text-lg text-[15px] mx-3  font-[800]">
            <p onClick={() => setModal(true)}>Connect Wallet</p>
            {setting && (
              <div className="absolute border border-slate-700 border-white bg-white  lg:w-96 w-full px-4 py-2 right-0 rounded-xl lg:top-20   lg:bottom-[38rem]  bottom-12  z-10">
                <button
                  onClick={() => setModal(true)}
                  className=" w-full text-white  bg-[#F73397] text-xl font-[700] text-sm px-2 py-2 rounded-xl mb-3  "
                >
                  Connect Wallet
                </button>
                <hr className="block" />
                <div className="flex items-center justify-between my-2 hover:bg-slate-100 p-3 rounded-xl">
                  <p className="text-black text-[#98a1c0]">Language</p>
                  <p className="text-black text-[#98a1c0] flex items-center">
                    ENG
                    <MdOutlineKeyboardArrowRight />
                  </p>
                </div>
                <div className="flex items-center justify-between my-2 hover:bg-slate-100 p-3 rounded-xl">
                  <p className="text-black block ">Dark Theme</p>
                  <p className="text-black ">
                    <MdOutlineLightMode className="block text-lg" />
                  </p>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
      <div className=" flex items-center justify-center mx-8 lg:pt-20 md:pt-20 pt-4">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
