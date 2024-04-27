import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import open from "../Images/open.png";
import close from "../Images/close.png";
import hyggexlogo from "../Images/hyggex.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="p-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid  items-center  sm:flex sm:justify-between">
            <div className="flex justify-between justify-center  p-1 sm:grid">
              <div className=" ml-4 sm:ml-12"><img src={hyggexlogo}></img></div>
              <div className="justify-right sm:hidden">
                <button
                  onClick={toggleMenu}
                  className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                >
                  <img
                    src={isOpen ? close : open}
                    alt={isOpen ? "Close Menu" : "Open Menu"}
                    className="h w-5 py-1 mr-1 "
                  />
                </button>
              </div>
            </div>
            <div className={isOpen ? "block" : "hidden sm:block"}>
              <ul className="grid flex-wrap  p-1 sm:flex sm:flex-no-wrap space-x-4 sm:space-x-8 justify-center sm:justify-between sm:mr-6 items-center text-lg font-sans">
              <li>
                  <a href="#" className="">
                    
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Flashcard
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    <button className="bg-gradient-to-t from-blue-600 to-blue-900 text-white rounded-2xl px-6 py-1">
                      Login
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
