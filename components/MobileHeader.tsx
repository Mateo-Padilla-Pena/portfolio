"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface MobileHeaderProps {
  name: string;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ name }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (mobileMenuOpen && !target.closest("header")) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50">
      <div className="bg-slate-900/70 backdrop-blur-xl border-b border-slate-700/50 px-6 py-4 shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between w-full">
          {/* Name */}
          <div className="text-cyan-400 font-bold text-lg tracking-wider">
            {name}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`p-2 rounded-full transition-all duration-200 ${
              mobileMenuOpen
                ? "bg-cyan-400/20 text-cyan-400"
                : "hover:bg-slate-800/50 text-slate-300"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Floating Panel */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900/90 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl shadow-black/30 overflow-hidden animate-slide-in">
          <div className="p-4">
            <div className="flex flex-col space-y-2">
              <a
                href="#about"
                className="text-slate-300 hover:text-cyan-400 transition-all duration-200 text-sm font-medium px-4 py-3 rounded-xl hover:bg-slate-800/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre Mí
              </a>
              <a
                href="#projects"
                className="text-slate-300 hover:text-cyan-400 transition-all duration-200 text-sm font-medium px-4 py-3 rounded-xl hover:bg-slate-800/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proyectos
              </a>
              <a
                href="#experience"
                className="text-slate-300 hover:text-cyan-400 transition-all duration-200 text-sm font-medium px-4 py-3 rounded-xl hover:bg-slate-800/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experiencia
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-cyan-400 transition-all duration-200 text-sm font-medium px-4 py-3 rounded-xl hover:bg-slate-800/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
