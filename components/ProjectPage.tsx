"use client";
import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import ScrollBackgroundColor from "./ScrollBgChange";
import TechnoIcons, { Techno } from "./TechnoIcons";
import VideoComponent from "./VideoComponent";
import { Project } from "@/types";
import projects from "@/data/projets.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

const projectIds: string[] = projects.map((p) => p.id.toString());

export default function ProjectPage({ project }: { project: Project }) {
  const router = useRouter();
  const isMobile = useIsMobile();

  // Fonction de navigation vers un projet par index
  const navigateToProject = useCallback(
    (index: number) => {
      if (index >= 0 && index < projectIds.length) {
        router.push(`/projets/${projectIds[index]}`);
        router.refresh();
      }
    },
    [router] // router en dépendance car il vient du hook useRouter
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = projectIds.indexOf(project.id.toString());
      if (e.key === "ArrowRight" && currentIndex < projectIds.length - 1) {
        navigateToProject(currentIndex + 1);
      }
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        navigateToProject(currentIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project.id, navigateToProject]);

  if (!project)
    return <div className="text-center text-2xl mt-20">No project found</div>;

  const currentIndex = projectIds.indexOf(project.id.toString());

  return (
    <div key={project.id} id="project-container" className="relative z-0">
      {!isMobile && <ScrollBackgroundColor />}
      <div className="container mx-auto p-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="sm:text-6xl text-4xl font-semibold text-center mt-10 mb-16 uppercase tracking-wider"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
          className="p-10 rounded-md mx-auto sm:mt-24 mt-8 max-w-[700px] text-center drop-shadow-[0_10px_5px_rgba(105,68,0,0.16)]"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          <VideoComponent projectId={project.id} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          className="techno-icons text-accent dark:text-primary mt-10"
        >
          <h3 className="text-center mb-6 mt-4 text-2xl font-medium text-[#0b1120]">
            Technos utilisées
          </h3>
          <TechnoIcons technos={project.technos as Techno[]} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 text-sm text-muted-foreground z-50"
      >
        {/* Flèche gauche — navigation vers projet précédent */}
        <button
          onClick={() => navigateToProject(currentIndex - 1)}
          disabled={currentIndex <= 0}
          aria-label="Projet précédent"
          className="flex items-center gap-1 px-2 py-1 border rounded backdrop-blur-md shadow disabled:opacity-30 cursor-pointer"
        >
          <FaArrowLeft className="w-4 h-4" />
        </button>

        <span className="text-xs select-none">Naviguez entre les projets</span>

        {/* Flèche droite — navigation vers projet suivant */}
        <button
          onClick={() => navigateToProject(currentIndex + 1)}
          disabled={currentIndex >= projectIds.length - 1}
          aria-label="Projet suivant"
          className="flex items-center gap-1 px-2 py-1 border rounded backdrop-blur-md shadow disabled:opacity-30 cursor-pointer"
        >
          <FaArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </div>
  );
}
