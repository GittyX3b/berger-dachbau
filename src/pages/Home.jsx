import { useState } from "react";
import { Header, Hero, Services, Gallery, Contact, Footer } from "@components";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4">Herzlich Willkommen!</h2>
            <p className="mb-6">
              Diese Webseite ist{" "}
              <span className="underline font-bold">NICHT</span> die offizielle
              Webseite der beschriebenen Dachdeckerfirma.
            </p>
            <p className="mb-6">
              Es ist nur eine Beispielwebseite für das machbare Webdesign bei
              <a
                className="px-2 underline"
                href="https://www.dandynagel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.dandynagel.com
              </a>
              .
            </p>
            <p className="mb-6">
              Die offizielle Webseite des Dachdeckerbetriebes findet man unter
              <a
                className="px-2 underline"
                href="http://www.berger-dachbau.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.berger-dachbau.de
              </a>
              .
            </p>
            <div className="w-full py-8">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn btn-md bg-blue-500 text-white px-4 py-2 w-full rounded"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
