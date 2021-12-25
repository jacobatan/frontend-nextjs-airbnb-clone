import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Hero } from "../components/Hero";
import Largecard from "../components/Largecard";
import Mediumcard from "../components/Mediumcard";
import Smallcard from "../components/Smallcard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />

      <main className="max-w-7xl mx-auto px-8 sm:px-16 shadow-2xl my-5">
        {/* SMALL CARDS / TRIP INSPIRATION  */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            Inspiration for your next trip
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location, id }) => (
              <Smallcard
                img={img}
                distance={distance}
                location={location}
                key={id}
              />
            ))}
          </div>
        </section>
        {/* MEDIUM CARDS / LIVE ANYWHERE */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map(({ id, img, title }) => (
              <Mediumcard key={id} img={img} title={title} />
            ))}
          </div>
        </section>{" "}
        <div className="py-16">
          <Largecard
            img="https://images.pexels.com/photos/3760916/pexels-photo-3760916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Questions about hosting?"
            description="Earn extra income and unlock new opportunities by sharing your space."
            buttonText="Ask a superhost"
          />
        </div>
        <section className="pb-16">
          <h2 className="text-4xl font-semibold py-8">
            Discover Airbnb Experiences
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="pb-4 md:pr-4 md:pb-0">
              <Largecard
                img="https://images.pexels.com/photos/8527681/pexels-photo-8527681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Things to do on your trip"
                buttonText="Experiences"
              />{" "}
            </div>
            <div className="pt-4 md:pl-4 md:pt-0">
              <Largecard
                img="https://images.pexels.com/photos/4012966/pexels-photo-4012966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                title="Things to do from home"
                buttonText="Online Experiences"
              />{" "}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/FR0Q").then((res) =>
    res.json()
  );

  const cardsData = await fetch("https://jsonkeeper.com/b/JAFA").then((res) =>
    res.json()
  );
  console.log(cardsData);
  console.log("cardsData");

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
