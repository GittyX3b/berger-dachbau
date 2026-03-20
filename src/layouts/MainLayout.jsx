import { Outlet } from "react-router";

import { Navbar } from "@components";

const MainLayout = () => {
  return (
    <div
      id="MainLayout"
      className="min-h-screen w-fit lg:w-full bg-bd-blackstones"
    >
      <Navbar />
      <div className="m-auto w-full app-maxwidth">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
