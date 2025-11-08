import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1550px] mx-auto px-6 md:px-10 flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <button className="md:hidden" onClick={() => setToggle(!toggle)}>
            {toggle ? <X /> : <Menu />}
          </button>
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co/WW9g140C/demo.jpg"
              alt="Logo"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-2xl bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent font-bold">
              Ragory
            </span>
          </NavLink>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <NavLink
            to="/login"
            className="px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/register"
            className="px-5 py-2 rounded-lg font-semibold border border-purple-500 text-purple-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition"
          >
            Sign Up
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-gray-50 shadow-md p-5 rounded-lg transition-all duration-300 ${
            toggle ? "top-16 opacity-100" : "-top-96 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3">
            <NavLink
              to="/login"
              className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/register"
              className="px-4 py-2 rounded-lg font-semibold border border-purple-500 text-purple-600 text-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition"
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
