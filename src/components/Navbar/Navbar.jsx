import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/logo.jpg";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blogs", link: "/blogs" },
  { name: "Best Places", link: "/best-places" },
];

const QuickLinks = [
  { name: "Hotels & Resorts", link: "/hotel" },
  { name: "Tour Guides", link: "/guide" },
  { name: "Transport Options", link: "/transport" },
  { name: "Tour Packages", link: "/package" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12 lg:px-20">
      
       
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-14 w-auto rounded-md shadow-sm" onError={(e) => (e.target.style.display = "none")} />
          <span className="text-2xl font-bold flex">
            <span className="text-blue-600">travel</span>
            <span className="text-green-600">Dagdiya</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {NavbarLinks.map(({ name, link }) => (
            <NavLink
              key={name}
              to={link}
              className="text-gray-700 font-semibold hover:text-primary transition-all duration-300"
            >
              {name}
            </NavLink>
          ))}

          {/* Quick Links Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-2 text-gray-700 font-semibold hover:text-primary transition-all"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Quick Links <FaCaretDown className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-52 py-2 z-50 border border-gray-200">
                <ul className="space-y-2">
                  {QuickLinks.map(({ name, link }) => (
                    <li key={name}>
                      <NavLink
                        to={link}
                        className="block px-5 py-2 text-gray-700 hover:bg-gray-100 transition-all rounded-md"
                        onClick={() => setDropdownOpen(false)} 
                      >
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>


        <div className="flex items-center gap-5">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-600 hover:from-blue-600 hover:to-green-400 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all hover:scale-105"
            onClick={handleOrderPopup}
          >
            Book Now
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            {showMenu ? (
              <HiMenuAlt1
                onClick={() => setShowMenu(!showMenu)}
                size={30}
                className="text-gray-700 cursor-pointer"
              />
            ) : (
              <HiMenuAlt3
                onClick={() => setShowMenu(!showMenu)}
                size={30}
                className="text-gray-700 cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
