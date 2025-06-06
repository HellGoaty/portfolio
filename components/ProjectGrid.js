import Image from "next/image";
import React from "react";

const ProjectGrid = ({ project }) => {
  return (
    <div className="grid-project grid grid-cols-12 gap-10">
      <div className="col-span-5 h-60 bg-gray-200">
        <Image
          key={project.id}
          src={`/screenshots/${project.id}/screenshot1.png`}
          alt={`${project.title} screenshot`}
          width={400}
          height={300}
          className="w-full h-full rounded shadow-md"
        />
      </div>
      <div className="col-span-7 h-60 bg-gray-200">
        <Image
          key={project.id}
          src={`/screenshots/${project.id}/screenshot2.png`}
          alt={`${project.title} screenshot`}
          width={400}
          height={300}
          className="w-full h-full rounded shadow-md"
        />
      </div>
      <div className="col-span-7 h-60 bg-gray-200">
        <Image
          key={project.id}
          src={`/screenshots/${project.id}/screenshot3.png`}
          alt={`${project.title} screenshot`}
          width={400}
          height={300}
          className="w-full h-full rounded shadow-md"
        />
      </div>
      <div className="col-span-5 h-60 bg-gray-200">
        <Image
          key={project.id}
          src={`/screenshots/${project.id}/screenshot4.png`}
          alt={`${project.title} screenshot`}
          width={400}
          height={300}
          className="w-full h-full rounded shadow-md"
        />
      </div>
    </div>
  );
};

export default ProjectGrid;
