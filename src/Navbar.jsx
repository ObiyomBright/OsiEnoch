import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Using lucide-react for professional icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'Portfolio', 'Skills', 'Experience', 'Contact'];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f1113]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-white">
          MOMODU OSI ENOCH
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-sm uppercase tracking-widest text-gray-400 hover:text-blue-500 transition-colors font-bold"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger Icon (Visible only on mobile) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-gray-400 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0f1113]/95 border-b border-gray-800 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setIsOpen(false)} // Close menu when a link is clicked
              className="block text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-blue-500 font-bold transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;