import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-24 p-5 fixed top-0 left-0 z-10 bg-opacity-80 backdrop-blur-md">
      <div className="nav-wrap h-full w-full flex items-center justify-start gap-8 bg-gray-800 rounded-lg px-8 shadow-lg">
        {/* VIA STYLE */}
        <NavLink
          style={(e) => ({
            textDecoration: e.isActive ? "underline" : "",
            fontWeight: e.isActive ? "600" : "",
            color: e.isActive ? "#3b82f6" : "#e5e7eb",
          })}
          to="/"
          className="text-lg transition duration-300"
        >
          Home
        </NavLink>

        {/* VIA CLASSNAME */}
        <NavLink
          className={(e) =>
            [
     
              "text-lg transition duration-300",
              e.isActive
                ? "text-blue-500 font-semibold underline"
                : "text-gray-200",
            ].join(" ")
          }
          to="/azul"
        >
          Azul
        </NavLink>

        {/* ON CHILD */}
        <NavLink to="/playground">
          {(e) => (
            <span
              className={[
                "text-lg transition duration-300",
                e.isActive
                  ? "text-blue-500 font-semibold underline"
                  : "text-gray-200",
              ].join(" ")}
            >
              Playground
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
