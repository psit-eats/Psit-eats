import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header className="header flex items-center justify-between bg-amber-800 px-4 py-2 shadow-lg">
      <div className="logo-container flex items-center gap-3">
        <img className="h-14 w-14 rounded-full object-cover" src={LOGO_URL} alt="CampusCrave logo" />
        <div>
          <p className="text-xs text-amber-100">PSIT</p>
          <p className="text-xl font-semibold text-white">CampusCrave</p>
        </div>
      </div>

      <nav className="nav-items">
        <ul className="flex items-center gap-4 text-sm text-white md:text-base">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartCount})</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
