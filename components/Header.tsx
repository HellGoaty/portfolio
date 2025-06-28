"use client";

import { useState } from "react";
import BubbleReveal from "@/components/BubbleReveal";
import Link from "next/link";
import GrainEffect from "@/components/GrainEffect";
import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Header() {
  const [isRevealed, setIsRevealed] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="relative overflow-hidden">
      <motion.div
        id="heading"
        className="flex justify-center items-center h-screen w-screen bg-[#fff6ec]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isRevealed ? 1 : 0, y: isRevealed ? 0 : 30 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        style={{ pointerEvents: isRevealed ? "auto" : "none" }} // Désactive interactions avant révélation
      >
        <div className="sm:p-10 p-5 relative flex w-full max-w-[90%] sm:h-[80%] h-[90%] flex-col justify-between border border-[#0b1120] transition-colors duration-300 z-10">
          <div className="top-container flex flex-col sm:flex-row justify-between h-full">
            <h1 className="text-2xl font-bold uppercase tracking-widest sm:text-4xl text-center sm:text-left">
              Etienne Gagniere
            </h1>

            <nav className="flex justify-end sm:justify-normal items-end sm:items-start">
              <ul className=" flex flex-col gap-10 sm:text-7xl text-3xl font-medium uppercase tracking-wide text-right">
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
          <h2 className="absolute sm:bottom-5 sm:left-10 bottom-0 left-3 -rotate-90 w-max font-semibold uppercase tracking-widest origin-top-left">
            Developpeur front end
          </h2>
        </div>
        <GrainEffect elementId="heading" />
        {!isMobile && <CustomCursor />}
      </motion.div>

      {!isRevealed && <BubbleReveal onComplete={() => setIsRevealed(true)} />}
    </header>
  );
}
