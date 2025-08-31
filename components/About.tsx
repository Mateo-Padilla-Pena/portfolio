import React from "react";
import type { About as AboutType } from "../types/portfolio";
import TechLogo from "./TechLogo";

interface AboutProps {
  story: string;
  skills: AboutType["skills"];
}

const About: React.FC<AboutProps> = ({ story, skills }) => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-100">
          Sobre <span className="text-cyan-400">Mí</span>
        </h2>

        {/* Story */}
        <div className="mb-16">
          <p className="text-lg text-slate-400 leading-relaxed max-w-4xl mx-auto text-center">
            {story}
          </p>
        </div>

        {/* Technologies */}
        <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
          <h3 className="text-2xl font-semibold mb-8 text-center text-slate-100">
            Stack <span className="text-cyan-400">Tecnológico</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Backend */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-100 flex items-center justify-start">
                <span className="text-xl mr-2">⚙️</span>
                Backend
              </h4>
              <div className="space-y-3">
                {skills.backend.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <TechLogo
                      logo={skill.logo}
                      name={skill.name}
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-slate-100">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-100 flex items-center justify-start">
                <span className="text-xl mr-2">🎨</span>
                Frontend
              </h4>
              <div className="space-y-3">
                {skills.frontend.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <TechLogo
                      logo={skill.logo}
                      name={skill.name}
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-slate-100">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-100 flex items-center justify-start">
                <span className="text-xl mr-2">☁️</span>
                Servicios & Cloud
              </h4>
              <div className="space-y-3">
                {skills.services.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <TechLogo
                      logo={skill.logo}
                      name={skill.name}
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-slate-100">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
