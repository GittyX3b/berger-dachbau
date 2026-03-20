import { Header, Hero, Services } from "@components";

const Home = () => {
  return (
    <div id="Home" className="w-full">
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  );
};

export default Home;
