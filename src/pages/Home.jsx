import { Header, Hero, Services, Gallery } from "@components";

const Home = () => {
  return (
    <div id="Home" className="w-full">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
      </main>
    </div>
  );
};

export default Home;
