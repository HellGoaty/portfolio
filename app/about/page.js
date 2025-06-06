import CustomCursor from "@/components/CustomCursor";
import GrainEffect from "@/components/GrainEffect";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div id="about-container" className="h-full relative min-h-screen">
      <Header />

      <div className="relative z-10 flex gap-10 bg-white p-7 max-w-[60%] items-center mx-auto rounded-md text-justify text-black dark:text-primary">
        <p className="text-justify">
          Je suis Etienne Gagniere, 21 ans et je sors de trois années de BUT
          Métiers du Multimédia et de l&apos;Internet à l&apos;IUT de Chambéry.
          J&apos;ai travaillé 1 an et demi avec un escape game en developpeur
          front-end et j&apos;ai fait un stage de 3 mois chez Evolutive Group.
          Je continue à me former en parallèle et m&apos;intéresse aux dernières
          technologies. En dehors de ça, je suis passionné de musique ainsi que
          de cinéma et d&apos;expériences vidéoludiques.
        </p>
        <Image
          src="/photo.png"
          alt="Ma photo"
          width={350}
          height={600}
          className=" object-cover z-[-1] rounded-2xl"
        />
      </div>

      <CustomCursor />
      <GrainEffect elementId="about-container" />
    </div>
  );
}
