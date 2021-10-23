import React, { useEffect } from "react";
import logo from "../../public/logo.png";

const NavBar = (props) => {
  useEffect(() => {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  });

  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="w-full  px-4">
          <div className="flex justify-between">
            <div>
              <a href="#home" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">
                  React Work
                </span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#home"
                className="py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold "
              >
                Home
              </a>
              <a
                href="#about-us"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                About Us
              </a>
              <a
                href="#contact-us"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                Contact Us
              </a>
              <div>
                <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-blue-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden mobile-menu">
          <ul className="">
            <li className="active">
              <a
                href="#home"
                className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
