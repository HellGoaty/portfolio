// components/Header.js
"use client";

import Link from "next/link";
// import { BsMoonFill } from "react-icons/bs";
// import { useTheme } from "../context/ThemeContext";
import { Anim } from "./Anim";

export default function Header() {
  // const { toggleDarkMode } = useTheme();

  return (
    <header className="flex w-[90%] max-w-[1300px] m-auto justify-between items-center py-8 relative z-10©">
      <span className="text-3xl">
        {/* <BsMoonFill onClick={toggleDarkMode} /> */}
        <Anim />
      </span>
      <nav>
        <ul className="flex gap-10 uppercase font-medium">
          <li>
            <Link href={"../"}>Accueil</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projets</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/about"}>A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
