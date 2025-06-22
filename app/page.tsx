"use client";

import About from "@/components/About";
import Header from "@/components/Header";
import ProjectsPresentation from "@/components/ProjectsPresentation";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <ProjectsPresentation />
      <About />
      <Contact />
    </div>
  );
}
