"use client";

import { motion } from "framer-motion";

export default function EndSlide() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center px-8">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fondo-texto.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

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
