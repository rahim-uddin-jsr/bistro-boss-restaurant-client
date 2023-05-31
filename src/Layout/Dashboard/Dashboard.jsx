import {
  FaBars,
  FaCalendarAlt,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to={"dashboard"}>
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"reservation"}>
              <FaCalendarAlt></FaCalendarAlt> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"payment-history"}>
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to={"myCart"}>
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaShoppingCart /> Home
            </NavLink>
          </li>
          <li tabIndex={0}>
            <NavLink to="/menu" className="">
              <FaBars /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order" className="">
              <FaShoppingBag /> Order Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
