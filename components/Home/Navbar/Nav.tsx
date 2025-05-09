import { navLinks } from "@/constant/constant";
import Link from "next/link";
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
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-top-right">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;
