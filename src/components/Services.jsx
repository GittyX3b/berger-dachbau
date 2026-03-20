export const Services = () => (
  <section id="Services" className="w-full bg-white">
    <h2
      id="ServicesTitle"
      className="bg-bd-darkgray text-white text-center px-4 w-full"
    >
      Unsere Leistungen
    </h2>
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
      <div
        id="ServicesRight"
        className="md:order-2 w-full h-full bg-[url('./assets/images/Berger-Dachbau_Referenz_00008.jpg')] bg-cover bg-center"
      ></div>
      <div
        id="ServicesLeft"
        className="md:order-1 w-full text-center  bg-bd-lightgray p-15 md:text-start lg:px-25 xl:p-25"
      >
        <ul className="font-bold grid gap-5 lg:gap-10">
          <li>Dachdeckerarbeiten aller Art</li>
          <li>Klempner- und Zimmererleistungen</li>
          <li>Fassaden- und Schieferarbeiten</li>
          <li>Balkon- und Fassadenabdichtungen</li>
          <li>Montage von Photovoltaikanlagen</li>
          <li>Gerüstbau</li>
        </ul>
      </div>
    </div>
    <div className="hidden w-full text-justify p-10 pb-15 md:block sm:px-15 lg:px-25">
      Sprechen Sie uns an. Unabhängig vom Umfang der auszuführenden Arbeiten
      sind wir gerne für Sie da. Wir sind stets bestrebt, Ihre individuellen
      Wünsche und Vorstellungen, unter Berücksichtigung der anerkannten Regeln
      der Technik, bei Planung und Ausführung der Arbeiten zu realisieren.
    </div>
  </section>
);
