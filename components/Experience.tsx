import React from "react";
import { Download } from "lucide-react";
import type { Experience as ExperienceType } from "../types/portfolio";

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-100">
          Mi <span className="text-cyan-400">Experiencia</span>
        </h2>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative"
            >
              <div className="absolute left-0 top-6 w-1 h-16 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-r"></div>

              <div className="ml-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-100">
                    {job.position}
                  </h3>
                  <span className="text-slate-400 text-sm">{job.period}</span>
                </div>
                <p className="text-cyan-400 font-medium mb-2">{job.company}</p>
                <p className="text-slate-500 text-sm mb-3 italic">
                  {job.location}
                </p>
                <p className="text-slate-400 mb-4">{job.description}</p>

                <div className="space-y-1">
                  {job.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm text-slate-100">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/Mateo-Padilla-Peña-CV-ES.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800 text-slate-100 rounded-lg border border-slate-600 hover:border-cyan-400 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            <span>Descargar CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
