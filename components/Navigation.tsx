"use client";

import React, { useState, useEffect } from "react";
import MobileHeader from "./MobileHeader";

interface NavigationProps {
  name: string;
}

const Navigation: React.FC<NavigationProps> = ({ name }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Animar la navegación al cargar
    setTimeout(() => setIsVisible(true), 500);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Header - Only visible on mobile */}
      <MobileHeader name={name} />

      {/* Desktop Navigation - Only visible on desktop */}
      <nav
        className="hidden md:block fixed top-6 left-1/2 z-50"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translateX(-50%) translateY(${
            isVisible ? "0px" : "-20px"
          })`,
          transition: "all 0.6s ease-out",
        }}
      >
        <div
          className={`relative transition-all duration-300 ${
            isScrolled && !isHovered ? "scale-90" : "scale-100"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Desktop Navigation Container */}
          <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-700/50 rounded-full px-6 py-3 shadow-2xl shadow-black/20 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-6">
              {[
                { href: "#about", text: "Sobre Mí" },
                { href: "#projects", text: "Proyectos" },
                { href: "#experience", text: "Experiencia" },
                { href: "#contact", text: "Contacto" },
              ].map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-cyan-400 transition-all duration-200 text-sm font-medium px-3 py-1 rounded-full hover:bg-slate-800/50 hover:scale-110"
                  style={{
                    animationDelay: `${0.6 + i * 0.1}s`,
                    animation: isVisible
                      ? "fadeInUp 0.5s ease-out forwards"
                      : "none",
                  }}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
