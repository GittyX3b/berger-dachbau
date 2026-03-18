import { Outlet } from "react-router";

import { Navbar } from "@components";

const MainLayout = () => {
  return (
    <div id="MainLayout" className="min-h-screen w-full bg-bd-blackstones">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
