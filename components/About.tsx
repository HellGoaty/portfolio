"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  return (
    <div
      id="about-container"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-[#0b1120] px-4 py-20 z-10 relative"
    >
      <div className="relative flex flex-col sm:flex-col-reverse md:flex-row items-center -space-x-5 -space-y-5 max-w-5xl w-full justify-center">
        {/* TEXTE */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          whileInView={{ x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="bg-[#fff6ec] text-[#0b1120] p-6 rounded-md shadow-md w-full md:max-w-md flex flex-col justify-center gap-4 md:items-start md:text-left items-center text-center relative z-100"
        >
          <h2 className="text-2xl font-bold uppercase tracking-wider">
            À propos de moi
          </h2>

          <p className="leading-relaxed">
            Je m&apos;appelle Etienne Gagniere, j&apos;ai 21 ans et suis diplômé
            d&apos;un BUT Métiers du Multimédia et de l&apos;Internet à
            l&apos;IUT de Chambéry. J&apos;ai travaillé de 2024 à 2025 en tant
            que développeur front-end pour un escape game, puis effectué un
            stage de trois mois chez Evolutive Group. Je continue à me
            perfectionner en parallèle, en explorant les dernières technologies
            web et les bonnes pratiques du développement. En dehors du code, je
            suis passionné de musique, de cinéma et d&apos;expériences jeux
            vidéoludiques.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <Image
            src="/photo.png"
            alt="Ma photo"
            width={350}
            height={400}
            className="object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
