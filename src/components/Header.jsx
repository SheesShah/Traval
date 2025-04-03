import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa"; // Import icons
import Logo from "../assets/main-logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     <div className="main-header-set">
     <nav className="bg-white lg:w-[80%] lg:rounded-[30px] lg:mt-[30px] mian-header-responsive">    
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo */}
          <div>
            <img src={Logo} alt="Arrow" className="main-logo w-[150px] h-[50px]" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Navigation Menu */}
          <div
            className={`lg:flex lg:items-center lg:gap-5 absolute lg:relative top-[60px] lg:top-0 left-0 w-full lg:w-auto menu-card bg-white lg:bg-transparent shadow-lg lg:shadow-none p-5 lg:p-0 transition-all ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center gap-12">
              <li className="font-[600] uppercase text-[13px] active:text-[#00026e] hover:text-[#00026e]">
                <a href="" >Home</a>
              </li>
              <li className="font-[600] uppercase text-[13px] active:text-[#00026e] hover:text-[#00026e]">
                <a href="">About</a>
              </li>

              {/* Dropdown Menu for Routes */}
              <li
                className="font-[600] relative cursor-pointer flex items-center gap-1 uppercase text-[13px] active:text-[#00026e] hover:text-[#00026e]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <a href="#">Routes</a>
                {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />} {/* Small Arrow Icon */}

                {isOpen && (
                  <ul className="absolute left-0 mt-2 w-60 bg-white border border-gray-300 rounded-lg shadow-lg top-[20px] grid gap-2 px-4 py-2 z-50">
                    <li className="hover:bg-gray-100 px-3 py-2 rounded-md whitespace-nowrap active:text-[#00026e] hover:text-[#00026e]">
                      <a href="#">Makkah to Madinah</a>
                    </li>
                    <li className="hover:bg-gray-100 px-3 py-2 rounded-md whitespace-nowrap active:text-[#00026e] hover:text-[#00026e]">
                      <a href="#">Jeddah Airport to Makkah</a>
                    </li>
                    <li className="hover:bg-gray-100 px-3 py-2 rounded-md whitespace-nowrap active:text-[#00026e] hover:text-[#00026e]">
                      <a href="#">Zeyarat</a>
                    </li>
                  </ul>
                )}
              </li>

              <li className="font-[600] uppercase text-[13px] active:text-[#00026e] hover:text-[#00026e]">
                <a href="">Transport</a>
              </li>
              <li className="font-[600] uppercase text-[13px] active:text-[#00026e] hover:text-[#00026e]">
                <a href="">Packages</a>
              </li>
              <li className="font-[600] uppercase text-[13px] active:text-[#00026e] hover:text-[#00026e]">
                <a href="">Blogs</a>
              </li>
            </ul>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <button
              type="button"
              className="font-medium text-white bg-[#00026e] hover:bg-[#00026e] hover:text-white focus:ring-4 focus:ring-[#00026e] rounded-lg text-sm px-5 py-2.5">
              Contact
            </button>
          </div>
        </div>
      </nav>
     </div>
    </>
  );
}

export default Header;
