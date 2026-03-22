import { Header, Hero, Services, Gallery, Contact } from "@components";

const Home = () => {
  return (
    <div id="Home" className="w-full">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
