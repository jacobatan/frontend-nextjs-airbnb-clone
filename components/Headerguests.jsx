import React from "react";

function Headerguests({ noOfGuests, update, guestType, description }) {
  return (
    <div className="flex w-full p-2 border-b">
      <div className="flex flex-col flex-grow">
        <p className="text-xl ">{guestType}</p>
        <p className="text-gray-500">{description}</p>
      </div>
      <input
        value={noOfGuests}
        type="number"
        className="w-12 pl-2 text-lg outline-none"
        min={1}
        max={30}
        onChange={(event) => update(event.target.value)}
      />
    </div>
  );
}

export default Headerguests;
