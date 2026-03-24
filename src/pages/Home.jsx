import { Header, Hero, Services, Gallery, Contact, Footer } from "@components";

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
      <Footer />
    </div>
  );
};

export default Home;
