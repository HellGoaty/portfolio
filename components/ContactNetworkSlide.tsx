"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactNetworkSlides() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const inView1 = useInView(ref1, { once: true });
  const inView2 = useInView(ref2, { once: true });
  const inView3 = useInView(ref3, { once: true });

  const lineVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col justify-center relative z-10 bg-[#0b1120]">
      <motion.div
        ref={ref3}
        variants={lineVariants}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        className="flex-1 w-full flex items-center justify-end border-t border-[#0b1120] bg-[#fff6ec] text-[#0b1120]"
      >
        <a
          href="mailto:etienne.gagniere@gmail.com"
          className="uppercase text-5xl tracking-wide font-medium mr-[5%] text-right transition-transform duration-200 ease-in-out hover:-translate-x-2.5 cursor-pointer"
        >
          E-mail
        </a>
      </motion.div>

      <motion.div
        ref={ref2}
        variants={lineVariants}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        className="flex-1 w-full flex items-center justify-end border-t border-[#0b1120] bg-[#fff6ec] text-[#0b1120]"
      >
        <a
          href="https://www.linkedin.com/in/etienne-gagniere/"
          className="uppercase text-5xl tracking-wide font-medium mr-[5%] text-right transition-transform duration-200 ease-in-out hover:-translate-x-2.5 cursor-pointer"
        >
          LinkedIn
        </a>
      </motion.div>

      <motion.div
        ref={ref1}
        variants={lineVariants}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        className="flex-1 w-full flex items-center justify-end border-t border-[#0b1120] bg-[#fff6ec] text-[#0b1120]"
      >
        <a
          href="https://github.com/HellGoaty"
          className="uppercase text-5xl tracking-wide font-medium mr-[5%] text-right transition-transform duration-200 ease-in-out hover:-translate-x-2.5 cursor-pointer"
        >
          GitHub
        </a>
      </motion.div>
    </div>
  );
}
