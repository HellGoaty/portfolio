// TechnoIcons.js
import React from "react";
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

const TechnoIcons = ({ technos }) => {
  const iconComponents = {
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

  return (
    <div className="techno-icons text-white flex items-center text-6xl justify-center gap-5 mb-[50px]">
      {technos.map((techno, index) => (
        <span key={index} className="techno-icon">
          {iconComponents[techno]}
        </span>
      ))}
    </div>
  );
};

export default TechnoIcons;
