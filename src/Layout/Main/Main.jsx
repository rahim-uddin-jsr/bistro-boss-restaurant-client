import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";

const Main = () => {
  const isLoginPage = useLocation().pathname.includes("login");
  const isRegisterPage = useLocation().pathname.includes("register");
  if (isLoginPage || isRegisterPage) {
    return <Outlet />;
  } else {
    return (
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  }
};

export default Main;
