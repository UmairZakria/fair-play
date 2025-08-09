import React from "react";
import Bettingtable from "./Bettingtable";
const Board = () => {
  return (
    <div className="relative z-[50]  h-[165px]  ">
      <img src="svgs/roulete.svg" className="w-[260px] object-cover" alt="" />
      <div className="absolute flex  gap-3 w-[240px] h-[40px]  bottom-2 left-2 !z-[9999]">
        <div className="flex flex-col w-full px-2 py-1 rounded-xl bg-[#0F0F0E] text-white">
          <span className="font-medium tracking-wide text-white/50 text-[10px]">
            Balance
          </span>
          <span className="font-medium tracking-wide text-white text-xs">
            0CPL
          </span>
        </div>
        <div className="flex flex-col w-full   px-2 py-1 rounded-xl bg-[#0F0F0E] text-white">
          <span className="font-medium tracking-wide text-white/50 text-[10px]">
            Balance
          </span>
          <span className="font-medium tracking-wide text-white text-xs">
            0CPL
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 !z-[9999]">

        <Bettingtable />
      </div>
    </div>
  );
};

export default Board;
