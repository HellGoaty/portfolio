"use client";
import { useState, useEffect } from "react";
import { Project } from "@/types";
import ProjectCarousel from "@/components/ProjectCarousel";
import { motion } from "framer-motion";

export default function ProjectsPresentation() {
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
    <div
      id="projects-container"
      className="min-h-screen relative z-10 bg-[#0b1120] text-[#fff6ec]"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-center text-6xl pt-10 mb-10 font-bold uppercase tracking-wide relative z-10">
          Mes projets
        </h1>
        <ProjectCarousel projects={projects} />
      </motion.div>
    </div>
  );
}
