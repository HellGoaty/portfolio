"use client";
import { useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const ScrollBackgroundColor = () => {
  const { scrollY } = useScroll();
  const { isDarkMode } = useTheme();

  const backgroundColor = useTransform(
    scrollY,
    [200, 300],
    isDarkMode ? ["#0b1120", "#fff6ec"] : ["#fff6ec", "#0b1120"]
  );

  const textColor = useTransform(
    scrollY,
    [200, 300],
    isDarkMode ? ["#fff", "#1a1a1a"] : ["#1a1a1a", "#fff"]
  );

  useEffect(() => {
    const updateBackgroundColor = (latest) => {
      document.body.style.backgroundColor = latest;
    };

    const unsubscribe = backgroundColor.on("change", updateBackgroundColor);

    return () => {
      unsubscribe();
      document.body.style.backgroundColor = "";
    };
  }, [backgroundColor, isDarkMode]);

  useEffect(() => {
    const updateTextColor = (latest) => {
      document.body.style.color = latest;
    };

    const unsubscribe = textColor.on("change", updateTextColor);

    return () => {
      unsubscribe();
      document.body.style.color = "";
    };
  }, [textColor, isDarkMode]);

  return null;
};

export default ScrollBackgroundColor;
