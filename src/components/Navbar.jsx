import { Phone, Send } from "lucide-react";
import favicon from "../assets/icons/favicon_Dachdecker.ico";

export const Navbar = () => (
  <div className="navbar bg-bd-yellow shadow shadow-bd-lightgray">
    <div className="flex m-auto w-screen app-maxwidth">
      <div className="navbar-start">
        <a className="btn btn-ghost rounded border-0 text-xl" href="/">
          <img
            src={favicon}
            alt="Berger Dachbau"
            className="w-6 h-6 mr-1 hidden xs:block"
          />
          Berger Dachbau
        </a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-sm btn-bd-link mr-2" href="tel:+491711947621">
          <Phone className="px-1" />
          <span className="hidden xs:flex">Anrufen</span>
        </a>
        <a
          className="btn btn-sm btn-bd-link hidden 2xs:flex"
          href="mailto:andreas@berger-dachbau.de"
        >
          <Send className="px-1" />
          <span className="hidden xs:flex">Email</span>
        </a>
      </div>
    </div>
  </div>
);
