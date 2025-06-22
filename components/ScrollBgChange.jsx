"use client";
import { useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";

const ScrollBackgroundColor = () => {
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [200, 300],
    ["#0b1120", "#fff6ec"]
  );

  const textColor = useTransform(scrollY, [200, 300], ["#fff", "#1a1a1a"]);

  useEffect(() => {
    const updateBackgroundColor = (latest) => {
      document.body.style.backgroundColor = latest;
    };

    const unsubscribe = backgroundColor.on("change", updateBackgroundColor);

    return () => {
      unsubscribe();
      document.body.style.backgroundColor = "";
    };
  }, [backgroundColor]);

  useEffect(() => {
    const updateTextColor = (latest) => {
      document.body.style.color = latest;
    };

    const unsubscribe = textColor.on("change", updateTextColor);

    return () => {
      unsubscribe();
      document.body.style.color = "";
    };
  }, [textColor]);

  return null;
};

export default ScrollBackgroundColor;
