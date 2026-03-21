import { Mail } from "lucide-react";

export const Hero = () => (
  <section id="Hero" className="w-full bg-white">
    <h1 id="Hero-Title" className="bg-black text-white text-center px-4 w-full">
      Neubau Sanierung Reparatur
    </h1>
    <div
      id="Hero-Grid"
      className="w-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2"
    >
      <div
        id="Hero-Left"
        className="w-full h-full bg-[url('./assets/images/Berger-Dachbau_Referenz_Hero.jpg')] bg-cover bg-center"
      ></div>
      <div
        id="Hero-Right"
        className="grid grid-rows-2 text-center w-full p-15 xl:p-33"
      >
        <div>
          <h2 className="text-xl pb-10">
            Wir übernehmen Arbeiten an Dach, Fassade, Balkon und Terasse.
          </h2>
          <p className="text-xl">
            Gerne unterstützen wir Sie bereits in der Planungsphase!
          </p>
        </div>
        <div className="lg:max-w-[80%] m-auto pt-15 xl:pt-25">
          <a
            className="btn btn-md btn-bd-cta m-auto w-full xl:btn-lg "
            href="mailto:andreas@berger-dachbau.de"
          >
            <Mail className="pr-1" size={36} />
            <span>Anfrage schreiben</span>
          </a>
          <p className="text-xs pt-3">
            <i>
              Die Beratung und das unverbindliche Erstellen eines ersten
              Angebotes sind in der Regel für Sie kostenfrei und unverbindlich.
            </i>
          </p>
        </div>
      </div>
    </div>
  </section>
);
