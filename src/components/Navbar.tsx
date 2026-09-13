import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const GRADIENT = "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-base-100/95 backdrop-blur border-b border-base-200 shadow-sm">
      <div className="container mx-auto px-4 h-16 hidden md:flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg ${GRADIENT} flex items-center justify-center text-white font-bold text-sm`}>
            DS
          </div>
          <span className="font-bold text-xl text-base-content">Dev Stack</span>
        </a>

        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              
                <a href={link.href}
                className="text-base-content/70 hover:text-base-content transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="btn btn-ghost btn-sm">Sign In</button>
          <button
            className={`btn btn-sm rounded-full text-white border-none ${GRADIENT} hover:opacity-90`}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden h-14 flex items-center justify-between px-4">
        {/* Left: Hamburger */}
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseLine size={22} /> : <RiMenu3Line size={22} />}
        </button>

        {/* Center: Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className={`w-7 h-7 rounded-lg ${GRADIENT} flex items-center justify-center text-white font-bold text-xs`}>
            DS
          </div>
          <span className="font-bold text-lg text-base-content">Dev Stack</span>
        </a>

        {/* Right: Buttons */}
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-xs">Sign In</button>
          <button
            className={`btn btn-xs rounded-full text-white border-none ${GRADIENT}`}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-base-200 bg-base-100 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                
                  <a href={link.href}
                  className="block text-base-content/70 hover:text-base-content text-sm font-medium py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;