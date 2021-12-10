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

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pull data from server */}

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

        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData.map(({ id, img, title }) => (
              <Mediumcard key={id} img={img} title={title} />
            ))}
          </div>
        </section>

        <Largecard
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title="Try hosting"
          description="Earn extra income and unlock new opportunities by sharing your space."
          buttonText="Learn more"
        />
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
