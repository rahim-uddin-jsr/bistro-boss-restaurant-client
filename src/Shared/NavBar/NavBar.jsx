import { useContext } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useCart from "../../hooks/UseMenu/useCart";
const NavBar = () => {
  const { logout, user } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };
  const navItems = (
    <>
      <li>
        <NavLink to="/" className="">
          Home
        </NavLink>
      </li>
      <li tabIndex={0}>
        <NavLink to="/menu" className="">
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/order" className="">
          Order Food
        </NavLink>
      </li>
      <li>
        <NavLink to="/secret" className="">
          Secrets
        </NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/login" className="">
            Login
          </NavLink>
        </li>
      )}
      {user && (
        <button className="btn btn-ghost" onClick={handleLogout}>
          Logout
        </button>
      )}
    </>
  );
  const [cart] = useCart();
  return (
    <div className="navbar bg-base-300 bg-opacity-5 text-white fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost h-auto  normal-case text-xl">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold">BISTRO BOSS</h2>
            <h4 className="text-2xl uppercase font-semibold tracking-widest">
              Restaurant
            </h4>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost relative mr-4">
          <FaShoppingBasket className="text-3xl" />
          <div className="badge -top-5 -right-2 absolute mt-2">
            +{cart ? cart?.length : "0"}
          </div>
        </button>
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default NavBar;
