import React from "react";
import Image from "next/image";

function Largecard({ img, title, description, buttonText }) {
  return (
    <section className="relative  cursor-pointer ">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12 max-w-xs">
        <h3 className="text-4xl mb-3 w-64 text-white font-semibold">{title}</h3>
        <p className="text-white">{description}</p>

        <button
          className="text-sm text-gray-900 bg-white px-4 
        py-2 rounded-lg mt-5 "
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default Largecard;
