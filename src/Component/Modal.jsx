import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GrClose } from "react-icons/gr";
import { BsQuestionLg } from "react-icons/bs";
import injected from "../assets/injected.png";
import rainbow from "../assets/rainbow.webp";
import coinbase from "../assets/coinbase.svg";
import metamask from "../assets/metamask.png";
import walletConnect from "../assets/walletConnect.svg";
import trust from "../assets/trust.png";
import atomic from "../assets/atomic.png";
import ImportWallet from "./ImportWallet";
const wallets = [
  { name: "Atomic Wallet", img: atomic, id: 1 },
  { name: "Rainbow", img: rainbow, id: 2 },
  { name: "Coinbase Wallet", img: coinbase, id: 3 },
  { name: "Metamask", img: metamask, id: 4 },
  { name: "WalletConnect", img: walletConnect, id: 5 },
  { name: "Trust Wallet", img: trust, id: 6 },
];

export default function Modal({ modal, setModal, image }) {
  const cancelButtonRef = useRef(null);
  const [currentWallet, setCurrentWallet] = useState();
  const [importWallet, setImportWallet] = useState(false);

  return (
    <Transition.Root show={modal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white blur-sm bg-opacity-90 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden bg-white rounded-xl p-2 text-left shadow-2xl transition-all sm:my-8 w-full lg:max-w-md max-w-sm mb-96">
                <div>
                  {!importWallet ? (
                    <div className="bg-white p-3">
                      <div className="flex items-center justify-between">
                        <BsQuestionLg
                          className="text-right bg-[#e7e9ee] p-2 text-4xl text-gray-800 rounded-full cursor-pointer"
                          onClick={() => setModal(false)}
                        />
                        <p className="text-2xl font-[900]">Connect a Wallet</p>
                        <GrClose
                          className="text-right bg-[#e7e9ee] p-2 font-900] text-4xl text-gray-800 rounded-full cursor-pointer"
                          onClick={() => setModal(false)}
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-lg text-gray-400 p-2 font-[800]">
                          Popular
                        </p>
                        <div className="flex flex-col space-y-5">
                          {wallets.map((item) => (
                            <div
                              onClick={() => {
                                setImportWallet(true);
                                setCurrentWallet(item.img);
                              }}
                              className="flex items-center space-x-4 hover:bg-gray-100 p-2 cursor-pointer rounded-lg"
                            >
                              <img src={item.img} className="w-8 rounded-lg" />
                              <p className="text-xl font-[800]">{item.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ImportWallet currentWallet={currentWallet} />
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
