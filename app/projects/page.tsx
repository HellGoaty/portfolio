"use client";
import { useState, useEffect } from "react";

import GrainEffect from "@/components/GrainEffect";
import { Project } from "@/types";
import ProjectCarousel from "@/components/ProjectCarousel";

const ProjectsSliderPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Erreur lors du fetch des projets :", err);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div id="projects-container" className="min-h-screen relative z-10">
      <h1 className="text-center text-6xl my-10 font-bold uppercase tracking-wide relative z-10">
        Mes projets
      </h1>
      <ProjectCarousel projects={projects} />
      <GrainEffect elementId="projects-container" />
    </div>
  );
};

export default ProjectsSliderPage;
