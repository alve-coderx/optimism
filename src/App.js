import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Swap from "./Component/Swap";

const App = () => {
  const [modal, setModal] = useState(false);
 
  return (
    <BrowserRouter>
      <div className="h-screen relative bg-[#F1F4F9] ">
        <div>
          <Navbar
            modal={modal}
            setModal={setModal}
          />
          <Swap modal={modal} setModal={setModal} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
