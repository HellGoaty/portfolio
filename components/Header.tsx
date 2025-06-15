"use client";

import { useState } from "react";
import BubbleReveal from "@/components/BubbleReveal";
import Link from "next/link";
import GrainEffect from "@/components/GrainEffect";
import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";

export default function Header() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <header className="relative overflow-hidden">
      {/* Toujours rendre la page principale */}
      <motion.div
        id="heading"
        className="flex justify-center items-center h-screen w-screen bg-[#fff6ec]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isRevealed ? 1 : 0, y: isRevealed ? 0 : 30 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        style={{ pointerEvents: isRevealed ? "auto" : "none" }} // Désactive interactions avant révélation
      >
        <div className="p-10 relative flex w-full max-w-[90%] min-h-[80%] flex-col justify-between border border-[#0b1120] transition-colors duration-300 z-10">
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
          <h2 className="absolute bottom-5 left-10 -rotate-90 w-max font-semibold uppercase tracking-widest origin-top-left">
            Developpeur front end
          </h2>
        </div>
        <GrainEffect elementId="heading" />
        <CustomCursor />
      </motion.div>

      {!isRevealed && <BubbleReveal onComplete={() => setIsRevealed(true)} />}
    </header>
  );
}
