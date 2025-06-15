"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function BubbleReveal({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [showText, setShowText] = useState(false);
  const [hideText, setHideText] = useState(false); // nouvel état
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 1000);

    // On commence à cacher le texte un peu avant le rideau (ex: 300ms avant)
    const hideTextTimeout = setTimeout(() => {
      setHideText(true);
    }, 3000);

    const closeTimeout = setTimeout(() => {
      setClosing(true);
    }, 3700);

    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 4700);

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(hideTextTimeout);
      clearTimeout(closeTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!closing && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[100] bg-[#0b1120]"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: "circle(150% at 50% 50%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
        >
          {showText && (
            <motion.div
              className="flex flex-col gap-4 text-center items-center"
              animate={hideText ? { opacity: 0 } : { opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.h1
                className="text-white text-4xl font-bold uppercase tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                Etienne Gagniere
              </motion.h1>

              <motion.h2
                className="text-white text-3xl font-bold tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
              >
                Portfolio
              </motion.h2>
            </motion.div>
          )}
        </motion.div>
      )}

      {closing && (
        <motion.div
          className="fixed top-0 left-0 z-[110] bg-[#0b1120] w-full h-full"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      )}
    </AnimatePresence>
  );
}
