import React, { useState } from "react";
import { AiOutlineInfoCircle, AiOutlineArrowDown } from "react-icons/ai";
import { FaChartArea } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import rth from "../assets/rth.png";
import op from "../assets/op.png";

const Input = ({ title, createState, setModal }) => {
  const [active, setActive] = useState(1);

  const clickHandler = (index) => {
    setActive((prev) => {
      return prev === index ? null : index;
    });
  };
  return (
    <div className="flex justify-center ">
      <div className="bg-white shadow-xl p-5 rounded-2xl lg:w-[40rem] w-[23rem]">
        <div className="flex justify-between space-x-2 bg-[#e7e9ee] p-1 rounded-xl items-center my-2 ">
          <button className="bg-white p-3 rounded-xl text-xl font-[600] w-full">
            Deposite
          </button>
          <button className=" p-3 rounded-xl text-xl font-[600] w-full">
            Windrow
          </button>
        </div>

        <div className="flex flex-col space-y-5 items-center w-full">
          <div className="relative bg-[#F5F6FB] rounded-2xl p-4 w-full">
            <div className="flex items-center space-x-5 my-4">
              <p className="text-lg opacity-80 text-black">From</p>
              <button className=" flex items-center top-7 text-white border text-sm p-2 rounded-md">
                <img src={rth} className="w-5" alt="rth" />
                <span
                  className="mx-2 text-lg text-black font-[700] cursor-pointer"
                  onClick={() => setModal(true)}
                >
                  Ethereum Mainnet
                </span>
                <MdKeyboardArrowDown className="text-xl font-[700] text-black " />
              </button>
            </div>
            <div className="flex items-center">
              <input
                className="bg-white border-y border-l border-slate-400 w-full px-2 py-4  rounded-l-2xl text-2xl text-white outline-0"
                placeholder="0.0"
              />
              <button className="bg-white flex items-center top-7 text-white border border-slate-400 text-sm py-4 px-8 rounded-r-2xl">
                <img src={rth} className="w-6" alt="rth" />
                <span
                  className="mx-2 text-2xl text-black font-[500] cursor-pointer"
                  onClick={() => setModal(true)}
                >
                  Eth
                </span>
                <MdKeyboardArrowDown className="text-xl font-[700] text-black " />
              </button>
            </div>
          </div>
          <AiOutlineArrowDown className="text-center text-[#ff0420] text-2xl  my-5" />
          <div className="relative bg-[#F5F6FB] rounded-2xl p-6 w-full">
            <div className="flex items-center space-x-2">
              <span>To</span>{" "}
              <img src={op} className="w-5 rounded-full" alt="op" />{" "}
              <span className="font-[700]">Optimism</span>
            </div>
            <p>You will receive: 0 ETH</p>
          </div>
        </div>
        {createState && (
          <div className="bg-[#31314e] w-full p-2 rounded-2xl flex text-white justify-around bg my-1">
            {[
              { name: "Unconfirmed", id: 1, icon: <FaChartArea /> },
              { name: "Stable", id: 2, icon: <FiTriangle /> },
            ].map((item) => (
              <p
                onClick={() => clickHandler(item.id)}
                className={
                  item.id === active
                    ? "cursor-pointer px-4 w-full py-2 text-lg rounded-3xl font-[700] bg-[#4A495E] flex items-center justify-center"
                    : "cursor-pointer px-4 w-full py-2 text-lg rounded-3xl  font-[700]  flex items-center justify-center"
                }
              >
                {item.icon}
                <p className="mx-3">{item.name}</p>
                <AiOutlineInfoCircle />
              </p>
            ))}
          </div>
        )}

        <button
          onClick={() => setModal(true)}
          className="bg-[#ff0420] w-full px-5 py-4 rounded-2xl hover:opacity-80 shadhow-xl text-white font-[700] mb-1 mt-2 transition duration-300 ease-in-out outline-0 text-xl"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Input;
