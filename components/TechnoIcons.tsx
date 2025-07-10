// TechnoIcons.tsx
import React from "react";
import type { JSX } from "react";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

import {
  FaWordpress,
  FaPhp,
  FaHtml5,
  FaSass,
  FaReact,
  FaJs,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

export type Techno =
  | "Wordpress"
  | "Php"
  | "Html5"
  | "Sass"
  | "React"
  | "Js"
  | "Css3Alt"
  | "NodeJs"
  | "Database"
  | "Typescript"
  | "Tailwind";

interface TechnoIconsProps {
  technos: Techno[];
}

const iconComponents: Record<Techno, JSX.Element> = {
  Wordpress: <FaWordpress />,
  Php: <FaPhp />,
  Html5: <FaHtml5 />,
  Sass: <FaSass />,
  React: <FaReact />,
  Js: <FaJs />,
  Css3Alt: <FaCss3Alt />,
  NodeJs: <FaNodeJs />,
  Database: <FaDatabase />,
  Typescript: <SiTypescript />,
  Tailwind: <SiTailwindcss />,
};

const TechnoIcons = ({ technos }: TechnoIconsProps) => {
  return (
    <div className="techno-icons text-white flex items-center text-6xl justify-center gap-5 mb-[50px]">
      {technos.map((techno, index) => (
        <div
          key={index}
          className="relative group flex flex-col items-center cursor-pointer"
        >
          <span className="text-[#0b1120]">{iconComponents[techno]}</span>
          <span className="absolute bottom-[-30px] text-sm bg-[#0b1120] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10000">
            {techno}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechnoIcons;
