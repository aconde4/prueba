"use client";

import { motion } from "framer-motion";

interface CoverSlideProps {
  onNext: () => void;
}

export default function CoverSlide({ onNext }: CoverSlideProps) {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center px-8">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fondo-texto.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mb-6 text-center font-[family-name:var(--font-playfair)] text-5xl leading-tight tracking-wide sm:text-6xl md:text-7xl"
        style={{ color: "var(--color-cream)" }}
      >
        La leyenda de Alerio y Myrina
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        className="mb-16 text-center font-[family-name:var(--font-playfair)] text-lg tracking-[0.25em] uppercase sm:text-xl"
        style={{ color: "var(--color-cream)" }}
      >
        Una historia escrita por el destino
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
        onClick={onNext}
        className="cursor-pointer border px-8 py-3 font-[family-name:var(--font-playfair)] text-sm tracking-[0.3em] uppercase transition-colors duration-300 hover:bg-[#f0ead6] hover:text-[#0a0a0f]"
        style={{
          color: "var(--color-cream)",
          borderColor: "var(--color-cream-dim)",
        }}
      >
        Comenzar
      </motion.button>
    </div>
  );
}
