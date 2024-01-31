import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <span className="font-semibold text-xl text-orange">LOGO</span>
            </Link>
          </div>
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className="text-orange-100 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/recipes"
                className="text-orange-100 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm "
              >
                Recipes
              </NavLink>
              <NavLink
                to="/users"
                className="text-orange-100 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Users
              </NavLink>

              <>
                <NavLink
                  to="/login"
                  className="text-orange-100 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="text-orange-100 hover:bg-orange-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Register
                </NavLink>
              </>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
