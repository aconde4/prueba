"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ImageSlideProps {
  image: string;
  caption: string;
  onNext: () => void;
}

export default function ImageSlide({ image, caption, onNext }: ImageSlideProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowButton(false);
    const timer = setTimeout(() => setShowButton(true), 3000);
    return () => clearTimeout(timer);
  }, [image]);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      {/* Ken Burns image */}
      <div
        className="absolute inset-0"
        style={{
          animation: "ken-burns 20s ease-in-out forwards",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="relative z-10 max-w-xl px-8 text-center font-[family-name:var(--font-playfair)] text-xl italic leading-relaxed sm:text-2xl md:text-3xl"
        style={{
          color: "var(--color-cream)",
          textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 1px 6px rgba(0,0,0,0.5)",
        }}
      >
        {caption}
      </motion.p>

      {/* Continue button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showButton ? 0.7 : 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        onClick={onNext}
        className="fixed bottom-8 right-8 z-10 cursor-pointer bg-transparent font-[family-name:var(--font-playfair)] text-sm tracking-wider sm:bottom-10 sm:right-12"
        style={{
          color: "var(--color-cream)",
          border: "none",
          padding: 0,
          textShadow: "0 1px 8px rgba(0,0,0,0.6)",
        }}
      >
        Continuar &rarr;
      </motion.button>
    </div>
  );
}
