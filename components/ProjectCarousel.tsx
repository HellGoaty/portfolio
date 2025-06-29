"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  // Handle navigation
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="relative mt-10 sm:max-w-[90%] max-w-[75%] mx-auto min-w-[200px]">
        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project) => (
              <div
                className="embla__slide px-2 box-border w-full sm:w-1/3 flex-shrink-0"
                key={project.id}
              >
                <Link
                  href={`/projets/${project.id}`}
                  className="block group h-full"
                >
                  <div className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={`/projects/${project.id}/screenshot1.png`}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-center mt-2 text-xl font-semibold text-[#fff6ec] truncate">
                    {project.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Prev / Next buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-2 sm:scale-100 scale-90 transform -translate-y-1/2 bg-[#fff6ec] text-primary rounded-full p-2 shadow-md z-10 hover:scale-110 transition cursor-pointer"
      >
        <BsChevronLeft size={24} color="#0b1120" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-2 sm:scale-100 scale-90 transform -translate-y-1/2 bg-[#fff6ec] rounded-full p-2 shadow-md z-10 hover:scale-110 transition cursor-pointer"
      >
        <BsChevronRight size={24} color="#0b1120" />
      </button>
    </div>
  );
}
