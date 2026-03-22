import { Mail, Phone, Printer, Smartphone } from "lucide-react";

export const Contact = () => (
  <section id="Contact" className="w-full bg-white">
    <h2
      id="Contact-Title"
      className="bg-black text-white italic text-center px-4 w-full"
    >
      Ihr Fachbetrieb aus Köthen/Anhalt!
    </h2>
    <div
      id="Contact-Grid"
      className="w-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2"
    >
      <div
        id="Contact-Left"
        className="w-full p-15 text-center md:text-start md:order-2 xl:p-33"
      >
        <h3>Kontakt</h3>
        <strong>Dachdeckermeister Andreas Berger </strong>
        <br />
        <br />
        <address className="not-italic">
          <p>
            <strong>Berger-Dachbau UG</strong>
            <br />
            Paschlewwerstr. 9<br />
            06366 Köthen
          </p>
        </address>
        <div className="mt-4 space-y-2">
          <p>
            <Mail className="inline mr-2" size={18} />
            <a href="mailto:andreas@berger-dachbau.de">
              andreas@berger-dachbau.de
            </a>
          </p>
          <p>
            <Phone className="inline mr-2" size={18} />
            <a href="tel:+493496212840">+49 3496 / 212840</a>
          </p>
          <p>
            <Smartphone className="inline mr-2" size={18} />
            <a href="tel:+491711947621">+49 171 / 1947621</a>
          </p>
          <p>
            <Printer className="inline mr-2" size={18} />
            +49 3496 / 212618
          </p>
        </div>
      </div>
      <div id="Contact-Right" className="w-full md:order-1">
        <iframe
          src="https://maps.google.de/maps?hl=de&q=Berger-Dachbau+UG%20%20Paschlewwerstr.9%20Köthen&t=TERRAIN&z=13&ie=utf8&iwloc=b&output=embed"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  </section>
);
