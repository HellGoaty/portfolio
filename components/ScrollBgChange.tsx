"use client";

import { useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";

const ScrollBackgroundColor = () => {
  const { scrollY } = useScroll();

  // Valeurs interpolées en fonction de scrollY
  const backgroundColor = useTransform(
    scrollY,
    [200, 300],
    ["#0b1120", "#fff6ec"]
  );
  const textColor = useTransform(scrollY, [200, 300], ["#ffffff", "#1a1a1a"]);

  useEffect(() => {
    // Fonction pour mettre à jour la couleur de fond
    const updateBackgroundColor = (latest: string) => {
      document.body.style.backgroundColor = latest;
    };

    // Met à jour immédiatement à l’arrivée sur la page
    updateBackgroundColor(backgroundColor.get());

    const unsubscribe = backgroundColor.on("change", updateBackgroundColor);
    return () => {
      unsubscribe();
      document.body.style.backgroundColor = "";
    };
  }, [backgroundColor]);

  useEffect(() => {
    // Fonction pour mettre à jour la couleur du texte
    const updateTextColor = (latest: string) => {
      document.body.style.color = latest;
    };

    // Met à jour immédiatement à l’arrivée
    updateTextColor(textColor.get());

    const unsubscribe = textColor.on("change", updateTextColor);
    return () => {
      unsubscribe();
      document.body.style.color = "";
    };
  }, [textColor]);

  return null;
};

export default ScrollBackgroundColor;
