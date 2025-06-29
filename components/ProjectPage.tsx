"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ScrollBackgroundColor from "./ScrollBgChange";
import TechnoIcons, { Techno } from "./TechnoIcons";
import VideoComponent from "./VideoComponent";
import { Project } from "@/types";
import projects from "@/data/projets.json";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const projectIds: string[] = projects.map((p) => p.id.toString());

export default function ProjectPage({ project }: { project: Project }) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = projectIds.indexOf(project.id.toString());

      if (e.key === "ArrowRight" && currentIndex < projectIds.length - 1) {
        const nextId = projectIds[currentIndex + 1];
        router.push(`/projets/${nextId}`);
      }

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        const prevId = projectIds[currentIndex - 1];
        router.push(`/projets/${prevId}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project.id, router]);

  if (!project) {
    return <div className="text-center text-2xl mt-20">No project found</div>;
  }

  return (
    <div id="project-container" className="relative z-0">
      <ScrollBackgroundColor />
      <div className="container mx-auto p-4">
        <h1 className="text-6xl font-semibold text-center mt-10 mb-16 uppercase tracking-wider">
          {project.title}
        </h1>
        <p className="p-10 rounded-md mx-auto mt-24 max-w-[700px] text-center drop-shadow-[0_10px_5px_rgba(105,68,0,0.16)]">
          {project.description}
        </p>
        <VideoComponent projectId={project.id} />
        <div className="techno-icons text-accent dark:text-primary mt-10">
          <h3 className="text-center mb-6 mt-4 text-2xl font-medium text-[#0b1120]">
            Technos utilisées
          </h3>
          <TechnoIcons technos={project.technos as Techno[]} />
        </div>
      </div>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 text-sm text-muted-foreground animate-fade-in z-50">
        <div className="flex items-center gap-1 px-2 py-1 border rounded backdrop-blur-md shadow">
          <FaArrowLeft className="w-4 h-4" />
        </div>
        <span className="text-xs">Naviguez entre les projets</span>
        <div className="flex items-center gap-1 px-2 py-1 border rounded backdrop-blur-md shadow">
          <FaArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
