import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#1E293B] shadow-lg sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <Link to="/Dashboard" className="flex items-center transition-opacity hover:opacity-80">
              <img
                src="https://static.vecteezy.com/system/resources/previews/043/212/923/non_2x/a-logo-design-representing-a-building-company-symbolizing-construction-and-innovation-a-simple-icon-that-communicates-the-concept-of-warehousing-and-inventory-management-free-vector.jpg"
                alt="Inventory Logo"
                className="h-10 w-auto object-contain brightness-110 contrast-125 rounded-md"
              />
              <span className="ml-3 text-white font-black tracking-tight text-lg hidden md:block uppercase">Inventory<span className="text-[#534BB3]">Pro</span></span>
            </Link>
          </div>

          <div className="flex space-x-6 items-center">
            {[
              { label: 'Home', path: '/dashboard' },
              { label: 'Profile', path: '/profile', special: true },
              { label: 'Login', path: '/' },
              { label: 'Sign Up', path: '/signup' }
            ].map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`
                  text-[13px] font-bold uppercase tracking-wider transition-all duration-300
                  ${link.special
                    ? 'bg-[#534BB3] text-white px-5 py-2 rounded-xl hover:bg-[#433A9B] hover:shadow-[0_4px_15px_rgba(83,75,179,0.3)] shadow-[0_2px_10px_rgba(83,75,179,0.2)]'
                    : 'text-slate-300 hover:text-white hover:translate-y-[-1px]'}
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
