import React from "react";
import Navbar2 from "./Navbar2";
import Board from "./Board";
// import RouletteWheel from "./RouletteWheel";

const Main = () => {
  return (
    <>
      <div className="absolute w-full h-[100px]  bg-gradient-to-t     z-[50] from-black via-black/40 to-transparent   bottom-0  left-0"></div>

      <div className="flex flex-col justify-between relative w-full md:w-[90vw] mx-auto h-[100vw] md:h-[calc(100vh-50px)] ">
        <img
          src="/images/background.jpg"
          className="absolute top-0 left-0 h-full  w-full object-center object-cover "
          alt=""
        />
        <div  className="md:scale-100 scale-50">

        <Navbar2 />
        </div>
        <div className="md:scale-100 relative !z-[999] scale-[30%]">

        <Board />
        </div>
      </div>
    </>
  );
};

export default Main;
