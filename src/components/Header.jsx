import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navContent = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Courses", link: "/courses" },
    { name: "About Us", link: "/aboutus" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center group">
            <h1 className="font-extrabold text-3xl text-gray-800 transition-colors duration-300 group-hover:text-green-500">
              BVS
            </h1>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navContent.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  `text-lg font-medium transition-all duration-300 relative text-gray-800 hover:text-green-500
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-500 after:scale-x-0 after:origin-center after:transition-transform after:duration-300
                  hover:after:scale-x-100
                  ${isActive ? "text-green-500 after:scale-x-100" : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes size={24} className="text-gray-800" />
            ) : (
              <CiMenuFries size={24} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 p-4">
            {navContent.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) =>
                  `text-lg font-medium py-2 px-4 rounded-lg transition-colors duration-300 ${
                    isActive
                      ? "bg-green-500 text-white"
                      : "text-gray-800 hover:bg-gray-100"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
