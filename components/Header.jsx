import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 
    bg-white shadow-md p-2 md:px-24"
    >
      {/* airbnb icon */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-16 cursor-pointer my-auto"
      >
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
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          className="flex-grow pl-4 bg-transparent outline-none text-gray-600 
          placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon
          className="hidden lg:inline-flex h-8 bg-abnbpink 
        text-white rounded-full p-2 
        cursor-pointer md:mx-2"
        />
      </div>
      {/* globe and user icon */}
      <div className="flex items-center space-x-4 justify-end text-black">
        <p
          className="hidden xl:inline cursor-pointer active:scale-90 transform transition ease-out 
        hover:bg-cyan-50 rounded-full p-2"
        >
          Become a host
        </p>
        <GlobeAltIcon
          className="h-6 cursor-pointer active:scale-90 
        transform transition ease-out hover:bg-cyan-50"
        />
        <div className="flex item-center space-x-2 border-2 p-2 rounded-full text-gray-600">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-1">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              type="number"
              className="w-12 pl-2 text-lg outline-none"
              min={1}
              max={30}
              onChange={(event) => setNoOfGuests(event.target.value)}
            />
          </div>
          <div className="flex mb-2">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-abnbpink ">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
