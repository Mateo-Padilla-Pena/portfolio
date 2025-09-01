"use client";

import React from "react";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types/portfolio";
import ScrollAnimation from "./ScrollAnimation";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation direction="down" delay={0.1}>
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-100">
            Mis <span className="text-cyan-400">Proyectos</span>
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation
              key={project.id}
              direction="up"
              delay={0.2 + index * 0.1}
            >
              <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 card-hover">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, techIndex) => (
                      <ScrollAnimation
                        key={techIndex}
                        direction="left"
                        delay={0.3 + index * 0.1 + techIndex * 0.05}
                        distance={20}
                      >
                        <span className="px-2 py-1 bg-slate-700 rounded text-xs text-cyan-400">
                          {tech}
                        </span>
                      </ScrollAnimation>
                    ))}
                  </div>

                  <ScrollAnimation
                    direction="right"
                    delay={0.4 + index * 0.1}
                    distance={20}
                  >
                    <div className="text-sm font-medium text-purple-500">
                      {project.impact}
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
