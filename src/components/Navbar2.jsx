import React, { useState } from "react";
import {
  LayoutGrid,
  Repeat1,
  ChartNoAxesColumn,
  ArrowUpDown,
  History,
  Volume2,
  Info,
  Minimize2,
  Settings,
  Maximize2,
} from "lucide-react";
import Button from "./Button";
// import Button from "./button";
import Leftnav from "./Leftnav";
const Navbar2 = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className=" relative z-[50] text-white px-4 py-2">
      <div className="flex items-start justify-between">
        {/* left nav section */}
        <div  className="flex flex-col gap-4    ">
            
          <div className="flex items-center gap-3 ">
            <div className="inline-flex gap-2 items-center  font-semibold text-sm">
              <LayoutGrid />
              <span>Lobby</span>
            </div>
            <div className="inline-flex gap-2 items-center  font-semibold text-sm ">
              <img
                src="https://img.icons8.com/fluency/28/great-britain-circular.png"
                alt=""
              />
              <span>Roulette Speed</span>
            </div>
            <div className="text-gold font-semibold text-sm">
              CLP 100-2500000
            </div>
          </div>
          <div className=" ">
            <Leftnav />

          </div>
        </div>

        {/* Right nav section */}
        <div className="flex ">
          <div className="scale-90">
            <Button />
          </div>
          <div className="flex items-center text-white/80 gap-3 scale-90">
            <span className="border-r-[1px] pr-2 border-white/40">
              <img
                src="https://img.icons8.com/?size=28&id=g0YrFYUO2fCr&format=png&color=FFFFFF"
                alt=""
              />
             </span>
            <span className="border-r-[1px] pr-2 border-white/40">
              <Repeat1 />
            </span>
            <span className="border-r-[1px] pr-2 border-white/40">
              <ChartNoAxesColumn />
            </span>
            <span className="border-r-[1px] pr-2 border-white/40">
              <ArrowUpDown />
            </span>
            <span className="border-r-[1px] pr-2 border-white/40">
              <History />
            </span>
            <span className="border-r-[1px] pr-2 border-white/40">
              <Volume2 />
            </span>
            <span className="border-r-[1px] pr-2 border-white/40">
              <Info />
            </span>

            <span className="border-r-[1px] pr-2 border-white/40">
              <Settings />
            </span>
            <span className="border-r-[1px] pr-2 border-white/40">
              <Maximize2 />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;


