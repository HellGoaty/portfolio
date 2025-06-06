"use client";

import { useEffect } from "react";

const GrainEffect = ({ elementId }: { elementId: string }) => {
  useEffect(() => {
    const loadGrained = async () => {
      const grainedModule = await import("../public/grained-master/grained");
      const grained = grainedModule.default || grainedModule;

      grained(`#${elementId}`, {
        animate: true,
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.05,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1,
      });
    };

    if (typeof window !== "undefined") {
      loadGrained();
    }
  }, [elementId]);

  return null; // Pas besoin d'un div
};

export default GrainEffect;
