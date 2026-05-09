import React from 'react';

const Navbar = () => {
  const navLinks = ['Home', 'Portfolio', 'Skills', 'Experience', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f1113]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter text-white">MOMODU ENOCH</div>
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
      </div>
    </nav>
  );
};

export default Navbar;