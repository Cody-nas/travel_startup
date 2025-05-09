import React from "react";

import { ImAirplane } from "react-icons/im";

const Nav = () => {
  return (
    <div className="bg-blue-950 transition-all duration-200 h-[12vh] z-[1000]">
      <div className="flex items-center h-full justify-between w-[90%]  xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
            <ImAirplane className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-base md:text-lg text-white uppercase font-bold">
            TripBuddy
          </h1>
        </div>

        {/* navlinks */}
      </div>
    </div>
  );
};

export default Nav;
