"use client";

import ScrollBackgroundColor from "./ScrollBgChange";
import TechnoIcons from "./TechnoIcons";
import VideoComponent from "./VideoComponent";
import { Project } from "@/types";
// import { BsChevronDoubleDown } from "react-icons/bs";

export default function ProjectPage({ project }: { project: Project }) {
  if (!project) {
    return <div className="text-center text-2xl mt-20">No project found</div>;
  }

  return (
    <div id="project-container" className="relative z-0 ">
      <ScrollBackgroundColor />
      <div className="container mx-auto p-4">
        <h1 className="text-6xl font-semibold text-center mt-10 mb-16 uppercase tracking-wider">
          {project.title}
        </h1>
        <p className="p-10 rounded-md mx-auto mt-24 max-w-[700px] text-center drop-shadow-[0_10px_5px_rgba(105,68,0,0.16)]">
          {project.description}
        </p>
        <VideoComponent projectId={project.id} />

        {/* <span className="flex justify-center text-4xl mt-5">
          <BsChevronDoubleDown />
        </span> */}

        <div className="techno-icons text-accent dark:text-primary mt-10">
          <h3 className="text-center mb-6 mt-4 text-2xl text-white">
            Technos utilisées
          </h3>
          <TechnoIcons technos={project.technos} />
        </div>
      </div>
    </div>
  );
}
