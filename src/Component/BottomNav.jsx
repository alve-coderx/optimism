import React from "react";
import { GiSuspensionBridge } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
const components = [
  { name: "Swap", href: "/", status: true, icon: false },
  { name: "Token", href: "/add-liquidity", status: false, icon: false },
  { name: "NFT", href: "/create-pool", status: false, icon: false },
  { name: "Pool", href: "/create-pool", status: false, icon: false },
];

const BottomNav = ({ setModal }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 block lg:hidden  border-t border-gray-300 w-full">
      <ul className="flex space-x-4 justify-between text-white items-center font-[700]  p-1 rounded-3xl ">
        {components.map((item, index) => (
          <li
            to={item.href}
            key={index}
            onClick={() => setModal(true)}
            className={
              item.status
                ? "px-3 py-1 font-[600] text-black opacity-80 text-lg rounded-lg flex cursor-pointer hover:bg-white"
                : "px-3 py-1 flex font-[600] items-center text-lg text-[#98a1c0]  rounded-lg cursor-pointer hover:bg-white"
            }
          >
            {item.icon ? <GiSuspensionBridge className="mr-3 text-2xl" /> : ""}
            {item.name}
          </li>
        ))}
        <BsThreeDots className="text-4xl  p-2 rounded-3xl shadhow-xl text-black" />
      </ul>
    </div>
  );
};

export default BottomNav;
