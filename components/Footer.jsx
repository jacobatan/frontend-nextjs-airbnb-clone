import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <div className="border-b-2 lg:border-b-0 pb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
          <p className="py-2 cursor-pointer hover:underline">
            How Airbnb works
          </p>
          <p className="py-2 cursor-pointer hover:underline">Newsroom</p>
          <p className="py-2 cursor-pointer hover:underline">
            Learn about new features
          </p>
          <p className="py-2 cursor-pointer hover:underline">
            Letter from our founders
          </p>
          <p className="py-2 cursor-pointer hover:underline">Careers</p>
          <p className="py-2 cursor-pointer hover:underline">Investors</p>
          <p className="py-2 cursor-pointer hover:underline">Airbnb Luxe</p>
        </div>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <div className="border-b-2 lg:border-b-0 pb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
          <p className="py-2 cursor-pointer hover:underline">
            Airbnb.org: disaster relief housing
          </p>
          <p className="py-2 cursor-pointer hover:underline">
            Support Afghan refugees
          </p>
          <p className="py-2 cursor-pointer hover:underline">
            Celebrating diversity & belonging
          </p>
          <p className="py-2 cursor-pointer hover:underline">
            Combating discrimination
          </p>
        </div>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <div className="border-b-2 lg:border-b-0 pb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
          <p className="py-2 cursor-pointer hover:underline">Host your home</p>
          <p className="py-2 cursor-pointer hover:underline">
            Host an Online Experience
          </p>
          <p className="py-2 cursor-pointer hover:underline">
            Host an Experience
          </p>
          <p className="py-2 cursor-pointer hover:underline">
            Responsible hosting
          </p>
          <p className="py-2 cursor-pointer hover:underline">Resource Centre</p>
          <p className="py-2 cursor-pointer hover:underline">
            Community Centre
          </p>
        </div>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <div className="pb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
          <p className="py-2 cursor-pointer hover:underline">
            Our COVID-19 Response
          </p>
          <p className="py-2 cursor-pointer hover:underline">Help Centre</p>
          <p className="py-2 cursor-pointer hover:underline">
            Cancellation options
          </p>
          <p className="py-2 cursor-pointer hover:underline">
            Neighbourhood Support
          </p>
          <p className="py-2 cursor-pointer hover:underline">Trust & Safety</p>
        </div>
      </div>
      <div>
        <div>
          <p>© 2021 Airbnb, Inc.</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
