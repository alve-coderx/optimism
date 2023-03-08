import React from "react";
import Input from "./Input";
import Modal from "./Modal";
const Swap = ({ modal, setModal }) => {
  return (
    <div className="">
      <Input title="Swap" modal={modal} setModal={setModal} />
      {modal && <Modal modal={modal} setModal={setModal} />}
    </div>
  );
};

export default Swap;
