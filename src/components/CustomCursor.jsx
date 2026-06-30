"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth fluid tracking pipeline
  const springConfig = { damping: 28, stiffness: 450, mass: 0.3 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[99999] hidden md:block"
    >
      {/* Permanent Theme-Consistent Tech Arrow */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: "rotate(-10deg)", // Ergonomic pointer angle
        }}
        className="drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" // Fixed subtle cyan glow
      >
        {/* Main Sharp Cyber Arrow Path */}
        <path
          d="M2 2V18L7.5 13.5L12 21L15 19.5L10.5 12L17 11L2 2Z"
          fill="#050816" // Pure dark blue-black core
          stroke="#06b6d4" // Permanent Cyan border line
          strokeWidth="1.8"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
        />
        
        {/* Inner Core Cyber Accent */}
        <path 
          d="M4.5 5.5L12.5 11L8.5 11.5L4.5 15V5.5Z" 
          fill="rgba(6, 182, 212, 0.2)" // Fixed soft internal mesh fill
        />
      </svg>
    </motion.div>
  );
}