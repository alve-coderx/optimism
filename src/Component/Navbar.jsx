import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { GiSuspensionBridge } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";

const components = [
  { name: "Superchain", href: "/", status: true, icon: false },
  { name: "Governance", href: "/add-liquidity", status: false, icon: false },
  { name: "Ecosystem", href: "/create-pool", status: false, icon: false },
  { name: "Bridge", href: "/create-pool", status: false, icon: false },
  { name: "Developers", href: "/create-pool", status: false, icon: false },
  { name: "More", href: "/create-pool", status: false, icon: false },
];



const Navbar = ({ setModal }) => {

  return (
    <>
      <div className="flex justify-between shadow-md items-center lg:p-4 p-2 bg-white ">
        <div className="flex text-white space-x-5 items-center font-[700]">
          <AiOutlineMenu
            onClick={() => setModal(true)}
            className="text-black text-xl "
          />
          <NavLink to="/">
            <p className="text-[#ff0420] italic text-3xl font-[900]">
              OPTIMISM
            </p>
          </NavLink>
          <div className="hidden lg:block ml-5">
            <ul className="flex space-x-4 text-white items-center font-[700]  p-1 rounded-3xl">
              {components.map((item, index) => (
                <li
                  to={item.href}
                  key={index}
                  onClick={() => setModal(true)}
                  className={
                    item.status
                      ? "px-3 py-1 font-[600] text-black text-lg opacity-80 rounded-lg flex cursor-pointer hover:bg-white"
                      : "px-3 py-1 flex font-[600] items-center text-lg opacity-80 text-[#5D6785] rounded-lg cursor-pointer hover:bg-white"
                  }
                >
                  {item.icon ? (
                    <GiSuspensionBridge className="mr-3 text-2xl" />
                  ) : (
                    ""
                  )}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex space-x-4 items-center">
          <button className="bg-[#ff0420] text-white lg:px-6 px-4 py-2 flex items-center space-x-2 rounded-full shadhow-xl lg:text-lg text-sm text-[15px]  font-[800]">
            <p onClick={() => setModal(true)}>Connect Wallet</p>
          </button>
          <button className="border lg:block hidden rounded-full text-2xl p-2">
            <CiDark/>
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
