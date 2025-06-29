// TechnoIcons.tsx
import React from "react";
import type { JSX } from "react";

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
  | "Database";

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
};

const TechnoIcons = ({ technos }: TechnoIconsProps) => {
  return (
    <div className="techno-icons text-white flex items-center text-6xl justify-center gap-5 mb-[50px]">
      {technos.map((techno, index) => (
        <span key={index} className="techno-icon text-[#0b1120]">
          {iconComponents[techno]}
        </span>
      ))}
    </div>
  );
};

export default TechnoIcons;
