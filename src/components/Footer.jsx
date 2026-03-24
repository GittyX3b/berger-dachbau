import { useState } from "react";

export const Footer = () => {
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-bd-darkgray text-xs text-bd-lightgray rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <button
            className="nav-item btn btn-xs btn-ghost p-3 bg-bd-darkgray hover:bg-white"
            onClick={() => setOpenModal("impressum")}
          >
            Impressum
          </button>
          <button
            className="nav-item btn btn-xs btn-ghost p-3 bg-bd-darkgray hover:bg-white"
            onClick={() => setOpenModal("datenschutz")}
          >
            Datenschutz
          </button>
          <button
            className="nav-item btn btn-xs btn-ghost p-3 bg-bd-darkgray hover:bg-white"
            onClick={() => setOpenModal("links")}
          >
            Links
          </button>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()}
            <span className="hidden md:inline"> - </span>
            <br className="md:hidden"></br>
            All right reserved by Berger-Dachbau UG
          </p>
        </aside>
      </footer>

      {openModal && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-6xl bg-white">
            <h3 className="font-bold text-lg">
              {openModal.charAt(0).toUpperCase() + openModal.slice(1)}
            </h3>
            <div className="py-4">
              {openModal === "impressum" && (
                <div id="ModalContent-Impressum">
                  <p className="pb-4">
                    <strong>Angaben gemäß § 5 DDG</strong>
                    <br />
                    Andreas Berger
                    <br />
                    Berger-Dachbau UG (haftungsbeschränkt)
                    <br />
                    Paschlewwrstr.9
                    <br />
                    06366 Köthen/Anhalt
                  </p>

                  <p className="pb-4">
                    <strong>Kontakt</strong>
                    <br />
                    Telefon: +49 171 194 7621
                    <br />
                    E-Mail: andreas@berger-dachbau.de
                  </p>

                  <p className="pb-4">
                    <strong>Aufsichtsbehörde</strong>
                    <br />
                    Handwerkskammer Magdeburg, Gareisstraße 10, 39106 Magdeburg
                    <br />
                  </p>

                  <p className="pb-4">
                    <strong>Berufsbezeichnung</strong>
                    <br />
                    Dachdeckermeister (verliehen in der Bundesrepublik
                    Deutschland)
                    <br />
                    Es gilt die Handwerksordnung (HwO):
                    <a
                      href="https://www.gesetze-im-internet.de/hwo/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.gesetze-im-internet.de/hwo/
                    </a>
                  </p>

                  <p className="pb-4">
                    <strong>Umsatzsteuer-ID</strong>
                    <br />
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                    Umsatzsteuergesetz: ['''???''']
                  </p>

                  <p className="pb-4">
                    <strong>Streitschlichtung</strong>
                    <br />
                    Die Europäische Kommission stellt eine Plattform zur
                    Online-Streitbeilegung (OS) bereit:
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                    . Wir sind nicht bereit oder verpflichtet, an
                    Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              )}
              {openModal === "datenschutz" && (
                <div id="ModalContent-Datenschutz">
                  <p className="pb-2">
                    Wir schützen Ihre Privatsphäre: Beim Besuch unserer Webseite
                    werden keine Daten erhoben und keine Cookies gesetzt.
                  </p>
                  <p>
                    Nehmen Sie per E-Mail oder Telefon Kontakt mit uns auf,
                    speichern wir Ihre Angaben lediglich für die Korrespondenz.
                    Einer Speicherung können Sie jederzeit mit Wirkung für die
                    Zukunft widersprechen und die Löschung Ihrer Daten
                    anfordern.
                  </p>
                </div>
              )}
              {openModal === "links" && (
                <div id="ModalContent-Links">
                  <ul>
                    <li>
                      <a
                        className="text-zinc-700 italic hover:text-zinc-500"
                        href="http://www.pissdorf.de/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.pissdorf.de
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-zinc-700 italic hover:text-zinc-500"
                        href="https://www.osternienburgerhc.de"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.osternienburgerhc.de
                      </a>
                    </li>
                  </ul>
                  <p className="py-5">
                    <strong>Webdesign:</strong>
                    <a
                      className="text-zinc-700 hover:text-zinc-500 pl-2"
                      href="https://www.dandynagel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.dandynagel.com
                    </a>
                  </p>
                  <p className="py-10 text-xs italic">
                    Für die Inhalte externer Links übernehmen wir keine Haftung,
                    da diese von Dritten verwaltet werden. Zum Zeitpunkt der
                    Verlinkung waren keine Rechtsverstöße auf den verlinkten
                    Seiten erkennbar. Eine permanente inhaltliche Kontrolle der
                    verlinkten Seiten ist ohne konkrete Anhaltspunkte einer
                    Rechtsverletzung jedoch nicht zumutbar.
                  </p>
                </div>
              )}
            </div>
            <div className="modal-action">
              <button className="btn" onClick={() => setOpenModal(null)}>
                Schliessen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
