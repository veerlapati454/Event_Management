import { Outlet, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function MainLayout() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/dashboard";

  return (
    <>
      {!hideLayout && <Header />}

      <main>
        <Outlet />
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}

export default MainLayout;