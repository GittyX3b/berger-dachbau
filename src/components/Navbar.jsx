import { Home, Phone, Send } from "lucide-react";
import favicon from "../assets/icons/favicon_Dachdecker.ico";

export const Navbar = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (!element) return;
    const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY - navbarHeight + 1;
    window.scrollTo({ top: elementPosition, behavior: "smooth" });
  };

  return (
    <section className="navbar fixed bg-bd-yellow shadow shadow-bd-darkgray z-100">
      <div className="flex m-auto w-screen app-maxwidth">
        <div className="navbar-start">
          <a
            className="btn btn-ghost rounded border-0 text-xl hover:bg-white"
            href="/"
            aria-label="Seite neu laden"
          >
            <img
              src={favicon}
              alt="Berger Dachbau"
              className="w-6 h-6 mr-1 hidden xs:block"
            />
            Berger-Dachbau
          </a>
        </div>
        <nav id="Navigation" className="navbar-center gap-2 hidden lg:flex">
          <button
            id="Nav-Hero"
            onClick={(e) => handleNavClick(e, "Hero")}
            className="nav-item btn btn-xs btn-ghost p-4 bg-bd-yellow hover:bg-white"
            aria-label="Startpunkt zeigen"
          >
            <Home size={20} />
          </button>
          <button
            id="Nav-Services"
            onClick={(e) => handleNavClick(e, "Services")}
            className="nav-item btn btn-xs btn-ghost p-4 bg-bd-yellow hover:bg-white"
            aria-label="Leistungen zeigen"
          >
            Leistungen
          </button>
          <button
            id="Nav-Gallery"
            onClick={(e) => handleNavClick(e, "Gallery")}
            className="nav-item btn btn-xs btn-ghost p-4 bg-bd-yellow hover:bg-white"
            aria-label="Referenzen zeigen"
          >
            Referenzen
          </button>
          <button
            id="Nav-Contact"
            onClick={(e) => handleNavClick(e, "Contact")}
            className="nav-item btn btn-xs btn-ghost p-4 bg-bd-yellow hover:bg-white"
            aria-label="Kontaktdaten zeigen"
          >
            Kontakt
          </button>
        </nav>
        <div className="navbar-end">
          <a
            className="btn btn-sm btn-bd-link mr-2"
            href="tel:+491711947621"
            aria-label="Anrufen"
          >
            <Phone className="px-1" />
            <span className="hidden xs:flex">Anrufen</span>
          </a>
          <a
            className="btn btn-sm btn-bd-link hidden 2xs:flex"
            href="mailto:andreas@berger-dachbau.de?subject=Kontaktaufnahme über Webseite"
            aria-label="Email schreiben"
          >
            <Send className="px-1" />
            <span className="hidden xs:flex">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};
