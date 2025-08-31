import React from "react";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types/portfolio";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-100">
          Mis <span className="text-cyan-400">Proyectos</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 card-hover"
            >
              {/* <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <a
                      href={project.demo}
                      className="p-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.code}
                      className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div> */}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-100">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-700 rounded text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-sm font-medium text-purple-500">
                  📈 {project.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
