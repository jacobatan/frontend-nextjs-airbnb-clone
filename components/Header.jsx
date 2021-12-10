import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 
    bg-white shadow-md p-2 md:px-24"
    >
      {/* airbnb icon */}
      <div className="relative flex items-center h-16 cursor-pointer my-auto">
        <Image
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170606.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* searchbox */}
      <div
        className="flex items-center md:border-2 rounded-full py-2 
      md:shadow-sm"
      >
        <input
          className="flex-grow pl-4 bg-transparent outline-none text-gray-600 
          placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon
          className="hidden lg:inline-flex h-8 bg-abnbpink 
        text-white rounded-full p-2 
        cursor-pointer md:mx-2"
        />
      </div>
      {/* globe and user icon */}
      <div className="flex items-center space-x-4 justify-end text-black">
        <p className="hidden xl:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex item-center space-x-2 border-2 p-2 rounded-full text-gray-600">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
