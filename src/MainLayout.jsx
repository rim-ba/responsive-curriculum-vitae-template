import NavigationMenu from "./components/NavigationMenu";
import Header from "./components/Header";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-b from-sage from-30% via-reseda-green to-feldgrau min-h-screen">
      <Header />
      <NavigationMenu />
      <main className="p-2 mt-2">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
