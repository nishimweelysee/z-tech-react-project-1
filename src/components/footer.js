import React from "react";

const Footer = (props) => {
  return (
    <footer className="footer bg-white relative border-b-2 border-blue-700">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-around">
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Quick Links
              </span>
              <span className="my-2">
                <a
                  href="#home"
                  className="text-blue-700 text-md hover:text-blue-500"
                >
                  Home
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#about"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  About
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#contact"
                  className="text-blue-700 text-md hover:text-blue-500"
                >
                  Contact us
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Top Continents
              </span>
              <span className="my-2">
                <a
                  href="#africa"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  Africa
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#america"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  America
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#europe"
                  className="text-blue-700  text-md hover:text-blue-500"
                >
                  Europe
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-blue-700 font-bold mb-2">© Zatec 2021</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
