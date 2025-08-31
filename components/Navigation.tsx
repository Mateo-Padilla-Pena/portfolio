"use client";

import React, { useState, useEffect } from "react";
import MobileHeader from "./MobileHeader";

interface NavigationProps {
  name: string;
}

const Navigation: React.FC<NavigationProps> = ({ name }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Header - Only visible on mobile */}
      <MobileHeader name={name} />

      {/* Desktop Navigation - Only visible on desktop */}
      <nav className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div
          className={`relative transition-all duration-300 ${
            isScrolled && !isHovered ? "scale-90" : "scale-100"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Desktop Navigation Container */}
          <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 rounded-full px-6 py-3 shadow-2xl shadow-black/20">
            <div className="flex items-center space-x-6">
              <a
                href="#about"
                className="text-slate-300 hover:text-cyan-400 transition-all duration-200 text-sm font-medium px-3 py-1 rounded-full hover:bg-slate-800/50"
              >
                Sobre Mí
              </a>
              <a
                href="#projects"
                className="text-slate-300 hover:text-cyan-400 transition-all duration-200 text-sm font-medium px-3 py-1 rounded-full hover:bg-slate-800/50"
              >
                Proyectos
              </a>
              <a
                href="#experience"
                className="text-slate-300 hover:text-cyan-400 transition-all duration-200 text-sm font-medium px-3 py-1 rounded-full hover:bg-slate-800/50"
              >
                Experiencia
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-cyan-400 transition-all duration-200 text-sm font-medium px-3 py-1 rounded-full hover:bg-slate-800/50"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
