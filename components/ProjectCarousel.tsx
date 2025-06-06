"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Handle navigation
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Initial
  }, [emblaApi]);

  return (
    <div className="relative mt-10 px-4 max-w-[90%] mx-auto">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-x-4">
          {projects.map((project) => (
            <div
              className="min-w-0 px-2"
              style={{
                flex: "0 0 30%", // 1 slide par vue
                height: "300px",
              }}
              key={project.id}
            >
              <Link
                href={`/projects/${project.id}`}
                className="block group h-full"
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={`/projects/${project.id}/screenshot1.png`}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-center mt-2 text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:scale-110 transition cursor-pointer"
      >
        <BsChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:scale-110 transition cursor-pointer"
      >
        <BsChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-neutral-800 dark:bg-white scale-110"
                : "bg-neutral-400 dark:bg-neutral-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
