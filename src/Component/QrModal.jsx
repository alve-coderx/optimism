import React, { useState } from "react";
import ImportWallet from "./ImportWallet";
import { AiOutlineClose } from "react-icons/ai";
import { othersWallet } from "../utils";
import walletC from "../assets/walletC.svg";

const Modal = ({ setModal, setImportWallet, importWallet, setQRModal }) => {
  const [active, setActive] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const itemsPerPage = 14;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(othersWallet.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    // Filter the data based on the search term
    const filteredData = othersWallet.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredData);
  }, [searchTerm]);
  return (
    <div>
      <div className="">
        {!importWallet ? (
          <div className="transition-10 duration-50 justify-center items-center flex fixed top-0  inset-0 z-50 outline-0 ">
            <div>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-2">
                  <img src={walletC} alt="walletC" className="w-10" />
                  <p className=" text-2xl font-[600]">
                    WalletConnect
                  </p>
                </div>
                <AiOutlineClose
                  onClick={() => setQRModal((prev) => !prev)}
                  className="bg-white rounded-full text-3xl p-1 cursor-pointer"
                />
              </div>
              <div className="lg:w-[38rem] md:w-[35rem] w-[20rem] rounded-3xl bg-white drop-shadow-2xl">
                <div className="lg:flex md:flex flex-col items-center lg:p-8 p-4 space-y-4 ">
                  <div className="bg-[#d4d5d9] flex items-center space-x-2 items-center text-center p-1 lg:w-96 md:w-96 rounded-md">
                    {[
                      {
                        name: "QR Code",
                        id: 1,
                      },
                      {
                        name: "Desktop",
                        id: 2,
                      },
                    ].map((item) => (
                      <button
                        key={item.id}
                        className={`${
                          item.id === active ? "bg-white" : ""
                        } text-[#08fdfe] rounded-md w-full py-1 px-4`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                  <p className="lgtext-lg text-sm text-[#767676] font-[700]">
                    Choose your preferred wallet
                  </p>
                  <input
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Search"
                    className="bg-[#d4d5d9] w-full rounded-md px-4 py-2 mb-4 outline-0"
                  />

                  <div className=" lg:px-10 md:px-9 px-4">
                    <div className="grid lg:grid-cols-4 grid-cols-3 gap-x-10  ">
                      {currentData.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col items-center text-white hover:opacity-80  p-4 rounded-xl cursor-pointer"
                          onClick={() => setImportWallet(true)}
                        >
                          <img
                            src={item.icon}
                            alt="dakjdga"
                            className="w-5 lg:w-12"
                          />
                          <p className="lg:text-md text-black text-xs text-center mt-4 font-[700]">
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center flex space-x-2 items-center justify-center">
                    {pageNumbers.map((number) => (
                      <button
                        key={number}
                        onClick={() => handlePageChange(number)}
                      >
                        {number}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ImportWallet />
        )}
      </div>
    </div>
  );
};

export default Modal;
