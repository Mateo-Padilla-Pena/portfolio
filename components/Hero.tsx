"use client";

import React from "react";
import { Code } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

interface HeroProps {
  name: string;
  role: string;
  bio: string;
}

const Hero: React.FC<HeroProps> = ({ name, role, bio }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollAnimation direction="left" delay={0.3} distance={50}>
            <div className="hidden lg:flex justify-center items-center">
              <div className="w-96 h-[35rem] rounded-lg overflow-hidden shadow-2xl shadow-cyan-400/20">
                <img
                  src="/portfolio-image.jpeg"
                  alt="Mateo Padilla Peña"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Text content */}
          <div className="text-center lg:text-left">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-100">
                  {name}
                </h1>
                <p className="text-2xl md:text-3xl mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {role}
                  </span>
                </p>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 text-slate-400">
                  {bio}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-105"
                >
                  Ver Proyectos
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-slate-800 text-slate-100 rounded-lg font-semibold border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                >
                  Contactar
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
