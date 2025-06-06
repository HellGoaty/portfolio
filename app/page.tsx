"use client";

// import { useTheme } from "../context/ThemeContext";
// import { BsMoonFill } from "react-icons/bs";
import Link from "next/link";
import CustomCursor from "@/components/CustomCursor";
import GrainEffect from "@/components/GrainEffect";

export default function Home() {
  // const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div
      id="heading"
      className="flex justify-center items-center h-screen w-screen"
    >
      <div className="p-10 relative flex w-full max-w-[90%] min-h-[80%] flex-col justify-between border transition-colors duration-300 z-10">
        <div className="top-container flex justify-between">
          <h1 className="text-4xl font-bold uppercase tracking-widest">
            Etienne Gagniere
          </h1>

          <nav>
            <ul className="flex flex-col gap-10 text-7xl font-medium uppercase tracking-wide text-right">
              <li className="transition-transform duration-200 cursor-pointer hover:-translate-x-2.5">
                <Link href="/projects">Projets</Link>
              </li>
              <li className="transition-transform duration-200 cursor-pointer hover:-translate-x-2.5">
                <Link href="/about">A propos</Link>
              </li>
              <li className="transition-transform duration-200 cursor-pointer hover:-translate-x-2.5">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* <span
          className="flex justify-end text-5xl cursor-pointer transition-transform duration-200"
          onClick={toggleDarkMode}
        >
          <BsMoonFill />
        </span> */}
        <h2 className="absolute bottom-5 left-10 -rotate-90 w-max font-semibold uppercase tracking-widest origin-top-left">
          Front End Developer
        </h2>
      </div>
      <CustomCursor />
      <GrainEffect elementId="heading" />
    </div>
  );
}
