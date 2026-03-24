export const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-bd-darkgray text-xs text-bd-lightgray rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <button className="nav-item btn btn-xs btn-ghost p-3 bg-bd-darkgray hover:bg-white">
          Impressum
        </button>
        <button className="nav-item btn btn-xs btn-ghost p-3 bg-bd-darktgray hover:bg-white">
          Datenschutz
        </button>
        <button className="nav-item btn btn-xs btn-ghost p-3 bg-bd-darkgray hover:bg-white">
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
        <a
          className="text-zinc-700 italic hover:text-zinc-500"
          href="https://www.dandynagel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Webdesign: www.dandynagel.com
        </a>
      </aside>
    </footer>
  );
};
