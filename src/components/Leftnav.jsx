import React, { useState } from "react";
import {
  MessageCircle,
  Headphones,
  Headset,
  Bell,
  Send,
  ChevronDown,
} from "lucide-react";

const Leftnav = () => {
  const [activeTab, setActiveTab] = useState("chat");
  const [message, setMessage] = useState("");

  return (
    <div className="space-y-2  w-[300px] flex flex-col">
      <div className="flex  w-full  gap-2">
        <div className="relative flex w-full rounded-xl bg-[#000000ad] backdrop-blur-sm ">
          <div
            className="absolute top-0 bottom-0  border-b-2 border-gold transition-transform duration-500 ease-out"
            style={{
              width: "50%",
              transform:
                activeTab === "chat"
                  ? "translateX(0%)"
                  : activeTab === "support"
                  ? "translateX(100%)"
                  : "",
            }}
          />

          <button
            onClick={() => setActiveTab("chat")}
            className={`relative z-10 flex-1 flex items-center   justify-center gap-2 py-3 px-4 transition-colors duration-300 ${
              activeTab === "chat" ? "text-gold" : "text-white/80"
            }`}
          >
            <MessageCircle size={16} />
            <span className="text-sm font-medium">Chat</span>
          </button>

          <button
            onClick={() => setActiveTab("support")}
            className={`relative z-10 flex-1 flex items-center  justify-center gap-2 py-3 px-4 transition-colors duration-300 ${
              activeTab === "support" ? "text-gold" : "text-white/80"
            }`}
          >
            <Headset size={16} />

            <span className="text-sm font-medium">Support</span>
          </button>
        </div>
        <button
          onClick={() => setActiveTab("notification")}
          className={`relative z-10 flex rounded-xl items-center  bg-[#000000ad] backdrop-blur-sm  justify-center gap-2  px-4 transition-colors duration-300 text-gold`}
        >
          <Bell size={18} />
        </button>
      </div>
      <div className="flex items-center w-full bg-[#000000ad] backdrop-blur-sm  rounded-lg ">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message here"
          className="flex-1 bg-transparent text-amber-100 placeholder-white/70  px-4 py-3 text-sm focus:outline-none"
        />

        <button className="px-4  text-white hover:text-gold transition-colors duration-200">
          <Send size={18} />
        </button>

        <button className="px-[18px] py-2  border-l-[1px] border-white/40 text-white hover:text-gold transition-colors duration-200">
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default Leftnav;
