import React from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;
  var sDateObj = new Date(startDate);
  var eDateObj = new Date(endDate);

  const formattedStartDate = format(sDateObj, "dd MMM yy");
  const formattedEndDate = format(eDateObj, "dd MMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const timeDiff = eDateObj.getTime() - sDateObj.getTime();

  const dayDiff = timeDiff / (1000 * 3600 * 24);
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-12 px-6">
          <h1 className="text-3xl font-semibold pb-4">Stays in {location}</h1>
          <hr />
          <div className="pt-4">
            <p className="text-xs pb-4">
              300+ stays in {location} - {range}
            </p>
            <p className="text-xs text-gray-600 pb-4">
              Enter dates and number of guests to see the total trip price
              including additional fees and taxes, and rounded up to the nearest
              integer.
            </p>
            <p className="text-xs pb-4">
              {" "}
              Review COVID-19 travel restrictions before you book.{" "}
              <span className="underline cursor-pointer">Learn more.</span>
            </p>
            <hr />
          </div>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap mt-4">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({
                id,
                img,
                location,
                title,
                description,
                star,
                price,
                total,
              }) => (
                <InfoCard
                  key={id}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  dayDiff={dayDiff}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const searchResults = await fetch("https://jsonkeeper.com/b/EBCP").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
