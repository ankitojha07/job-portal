import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // React icons for menu toggle
import LeftMenu from "./LeftMenu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-purple-900 via-black to-purple-900 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10 pointer-events-none">
        {[...Array(100)].map((_, index) => (
          <div key={index} className="border border-gray-700"></div>
        ))}
      </div>
      {/* Hamburger Icon (visible only below lg) */}
      <button
        className="absolute top-4 right-4 z-30 p-2 bg-purple-700 text-white rounded-md lg:hidden"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Left Menu */}
      <div
        className={`fixed top-0 left-0 h-full  transition-transform duration-300 z-40
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:w-64`} /* Always visible on lg */
      >
        {/* Menu Content */}
        <div
          className={`relative z-10 overflow-y-auto bg-gradient-to-br from-purple-900 to-black lg:bg-transparent transition-opacity duration-300 ${
            // eslint-disable-next-line no-constant-condition
            isMenuOpen || "lg:opacity-100" ? "opacity-100" : "opacity-0"
          }`}
        >
          <LeftMenu />
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 h-full overflow-y-auto transition-all duration-300 relative 
          lg:ml-64`} /* Add margin only on lg and above */
      >
        {/* Dynamic Content */}
        <div className="relative z-10 p-5">{children}</div>
      </div>

      {/* Overlay (below lg, only when menu is open) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)} // Close menu when clicking outside
        ></div>
      )}
    </div>
  );
};

export default Layout;
