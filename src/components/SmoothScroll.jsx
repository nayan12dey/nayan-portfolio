"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, // স্ক্রোল কতক্ষণ ধরে চলবে (সেকেন্ডে)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // অ্যানিমেশন কার্ভ
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}