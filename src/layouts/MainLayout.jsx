import { Outlet } from "react-router";

import { Navbar } from "@components";

const MainLayout = () => {
  return (
    <div id="MainLayout" className="min-h-screen w-full bg-bd-blackstones">
      <Navbar />
      <div className="m-auto w-screen app-maxwidth">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
