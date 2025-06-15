"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true); // Contrôle de visibilité logique
  const [shouldRender, setShouldRender] = useState(true); // Contrôle réel du DOM

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Optionnel : définir si le curseur doit s'afficher uniquement dans la 1re section
      const section2 = document.getElementById("section-2");
      if (section2) {
        const rect = section2.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          setIsVisible(false); // dans la section 2 : cacher
        } else {
          setIsVisible(true); // hors section 2 : afficher
        }
      }
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Delay unmount for fade-out
  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      const timeout = setTimeout(() => setShouldRender(false), 300); // transition duration
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 w-14 h-14 rounded-full bg-white mix-blend-difference transition-opacity duration-300 ease-out`}
      style={{
        transform: "translate3d(0, 0, 0)",
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
}
