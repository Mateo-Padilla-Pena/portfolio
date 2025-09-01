"use client";

import React from "react";

import portfolioData from "../data/portfolio.json";
import type { PortfolioData } from "../types/portfolio";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Portfolio = () => {
  const data = portfolioData as PortfolioData;

  return (
    <div className="min-h-screen transition-colors duration-300 bg-slate-900">
      <Navigation name={data.personal.name} />

      <Hero
        name={data.personal.name}
        role={data.personal.role}
        bio={data.personal.bio}
      />

      <About story={data.about.story} skills={data.about.skills} />

      <Projects projects={data.projects} />

      <Experience experience={data.experience} />

      <Contact personal={data.personal} />

      <Footer name={data.personal.name} />
    </div>
  );
};

export default Portfolio;
