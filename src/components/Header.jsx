import FirmenLogo from "@assets/graphics/Logo_Berger-Dachbau_xl.png";

export const Header = () => (
  <header id="Header" className="w-full pt-16">
    <img
      id="HeaderLogo"
      src={FirmenLogo}
      alt="Firmenlogo Dachdeckermeister Andreas Berger"
      className="w-full"
      aria-label="Grosses, gelb-schwarzes Firmenlogo von Berger-Dachbau"
    />
  </header>
);
