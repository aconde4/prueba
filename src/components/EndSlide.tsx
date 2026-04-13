"use client";

import { motion } from "framer-motion";

export default function EndSlide() {
  return (
    <div className="flex h-screen w-screen items-center justify-center px-8">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="text-center font-[family-name:var(--font-playfair)] text-4xl leading-tight tracking-wide sm:text-5xl md:text-6xl"
        style={{ color: "var(--color-cream)" }}
      >
        La leyenda de Alerio y Myrina
      </motion.h1>
    </div>
  );
}
