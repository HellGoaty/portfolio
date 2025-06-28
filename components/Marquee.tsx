"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-10"
    >
      <Marquee
        gradient={true}
        gradientColor="#fff6ec"
        gradientWidth={60}
        speed={100}
        pauseOnHover={true}
        loop={0} // infini
      >
        <span className="text-2xl sm:text-4xl font-semibold mx-6">
          Travaillons Ensemble
        </span>
        <span className="text-2xl sm:text-4xl font-semibold mx-6">
          Work Together
        </span>
        <span className="text-2xl sm:text-4xl font-semibold mx-6">
          Open to Work
        </span>
        <span className="text-2xl sm:text-4xl font-semibold mx-6">
          Travaillons Ensemble
        </span>
        <span className="text-2xl sm:text-4xl font-semibold mx-6">
          Work Together
        </span>
        <span className="text-2xl sm:text-4xl font-semibold mx-6">
          Open to Work
        </span>
      </Marquee>
    </motion.div>
  );
}
