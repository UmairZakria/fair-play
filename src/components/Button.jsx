import React, {useState} from "react";

const Button = () => {
    const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className={`
              relative w-[120px] shadow-sm shadow-[#F5C857] bg-primary h-10 rounded-full transition-all duration-500 ease-in-out overflow-hidden

            `}
      >

        <div
          className={`
              absolute top-1 flex w-fit items-center transition-all duration-500 ease-in-out transform
            ${isOn ? "left-1" : "left-10"}


            `}
        >
          <div
            className={`
                 rounded-full h-8 flex items-center justify-center px-[14px] transition-all duration-500 ease-out
                ${
                  !isOn
                    ? "bg-gradient-to-r border-[1px] border-gold    bg-[linear-gradient(to_right,_#E8A363,_#F3DEB3,_#F5C857)]  shadow-lg"
                    : "bg-primary  border-[1px] border-[#F3DEB3] "
                }
              `}
          >
            <span
              className={`
                  text-sm font-medium transition-all duration-500
                  ${!isOn ? "text-primary" : "text-[#F4CF81] brightness-110 "}
                `}
            >
              Aurum
            </span>
          </div>
        </div>

        {/* Fixed ON/OFF indicators */}
        <div
          className={`
              absolute top-2 bottom-2 left-2 w-8 rounded-full flex items-center justify-center transition-all duration-500
           ${isOn ? " -z-[10]" : "bg-transparent "}
            `}
        >
          <span
            className={`
                text-[12px] font-semibold   transition-all duration-500
                ${isOn ? "text-gold " : "text-gold brightness-150 tsext-gray-400"}
              `}
          >
            ON
          </span>
        </div>

        <div
          className={`
              absolute top-2 bottom-2 right-2 w-8 rounded-full flex items-center justify-center transition-all duration-500
              ${!isOn ? "-z-[10]" : "bg-transparent "}
            `}
        >
          <span
            className={`
                text-[12px] font-semibold transition-all duration-500
                ${!isOn ? "text-gray-900" : "text-gray-300/50"}
              `}
          >
            OFF
          </span>
        </div>
      </button>
    </>
  );
};

export default Button;