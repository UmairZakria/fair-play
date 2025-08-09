import React from "react";
import { motion } from "framer-motion";
const Bettingtable = () => {
  // Number grid data with colors
  const numbers = [
    { num: 3, color: "red" },
    { num: 6, color: "black" },
    { num: 9, color: "red" },
    { num: 12, color: "red" },
    { num: 15, color: "black" },
    { num: 18, color: "red" },
    { num: 21, color: "red" },
    { num: 24, color: "black" },
    { num: 27, color: "red" },
    { num: 30, color: "red" },
    { num: 33, color: "black" },
    { num: 36, color: "red" },
    { num: 2, color: "black" },
    { num: 5, color: "red" },
    { num: 8, color: "black" },
    { num: 11, color: "black" },
    { num: 14, color: "red" },
    { num: 17, color: "black" },
    { num: 20, color: "black" },
    { num: 23, color: "red" },
    { num: 26, color: "black" },
    { num: 29, color: "black" },
    { num: 32, color: "red" },
    { num: 35, color: "black" },
    { num: 1, color: "red" },
    { num: 4, color: "black" },
    { num: 7, color: "red" },
    { num: 10, color: "black" },
    { num: 13, color: "black" },
    { num: 16, color: "red" },
    { num: 19, color: "red" },
    { num: 22, color: "black" },
    { num: 25, color: "red" },
    { num: 28, color: "black" },
    { num: 31, color: "black" },
    { num: 34, color: "red" },
  ];

  return (
    <div
    style={{ perspective: "1000px" }}
    >
      <motion.div
        initial={{ rotateX: 35 }}
        whileHover={{ rotateX: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" "
      >
        <div className="flex gap-0.5">
          <div className="flex flex-col ">
            <button
              className={`w-10 h-28 bg-[#17732E] rounded-md text-white font-bold text-lg border-[1px] border-white/30 hover:bg-[#17732E]/95 transition-colors`}
            >
              0
            </button>
          </div>

          <div className="grid grid-cols-12  gap-0.5">
            {numbers.map((item, index) => (
              <button
                key={item.num}
                className={`
                  w-9 h-9 font-bold text-white rounded-md text-xs transition-all duration-300 ease-in-out border-[1px] border-white/30 hover:opacity-80 
                  ${
                    item.color === "red"
                      ? "bg-[#B2121F] hover:bg-[#B2121F]/95"
                      : "bg-primary hover:bg-primary/95"
                  }

                `}
              >
                {item.num}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-0.5">
            <button
              className={`w-10 h-9 rounded-sm  bg-primary text-white/60 text-xs font-bold border-[1px] border-white/30 hover:bg-primary/95 transition-colors`}
            >
              2to1
            </button>
            <button
              className={`w-10 h-9 rounded-sm  bg-primary text-white/60 text-xs font-bold border-[1px] border-white/30 hover:bg-primary/95 transition-colors`}
            >
              2to1
            </button>
            <button
              className={`w-10 h-9 rounded-sm  bg-primary text-white/60 text-xs font-bold border-[1px] border-white/30 hover:bg-primary/95 transition-colors `}
            >
              2to1
            </button>
          </div>
        </div>

        <div className=" flex gap-0.5">
          <div className="w-12"></div>
          <button
            className={`flex-1 h-8 bg-primary text-white/60 text-xs rounded-md font-bold border-[1px] border-white/20 hover:bg-primary/90 transition-colors `}
          >
            1st12
          </button>
          <button
            className={`flex-1 h-8 bg-primary text-white/60 text-xs rounded-md font-bold border-[1px] border-white/20 hover:bg-primary/90 transition-colors `}
          >
            2nd12
          </button>
          <button
            className={`flex-1 h-8 bg-primary text-white/60 text-xs rounded-md font-bold border-[1px] border-white/20 hover:bg-primary/90 transition-colors `}
          >
            3rd12
          </button>
          <div className="w-12"></div>
        </div>

        <div className=" flex gap-0.5">
          <div className="w-12"></div>

          <div className="flex gap-0.5 flex-1">
            <button
              className={`flex-1 h-8  text-white/60 text-xs font-semibold bg-primary border-[1px] border-white/30 hover:bg-primary/95 rounded-md transition-colors `}
            >
              1 - 18
            </button>

            <button
              className={`flex-1 h-8  text-white/60 text-sm font-semibold bg-primary border-[1px] border-white/30 hover:bg-primary/95 rounded-md transition-colors `}
            >
              Even
            </button>

            <button
              className={`flex-1 h-8 bg-primary border-[1px] border-white/30 hover:bg-primary/95 rounded-md flex items-center justify-center`}
            >
              <div className="w-4 h-4 bg-[#B2121F] transform rotate-45 border-[1px] border-[#B2121F]"></div>
            </button>

            <button
              className={`flex-1 h-8 bg-primary border-[1px] border-white/30 hover:bg-primary/95 rounded-md transition-colors flex items-center justify-center `}
            >
              <div className="w-4 h-4 bg-primary transform rotate-45 border-[1px] border-white/30"></div>
            </button>

            <button
              className={`flex-1 h-8 bg-primary border-[1px] border-white/30 hover:bg-primary/95 rounded-md text-white/60 transition-colors `}
            >
              Odd
            </button>

            <button
              className={`flex-1 h-8  text-white/60 text-sm font-semibold bg-primary border-[1px] border-white/30 hover:bg-primary/95 rounded-md transition-colors `}
            >
              19 - 36
            </button>
            <div className="w-12"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Bettingtable;
