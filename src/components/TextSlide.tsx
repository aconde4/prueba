"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TextSlideProps {
  text: string;
  act?: string;
  onNext: () => void;
}

export default function TextSlide({ text, act, onNext }: TextSlideProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowButton(false);
    const timer = setTimeout(() => setShowButton(true), 1500);
    return () => clearTimeout(timer);
  }, [text]);

  const paragraphs = text.split("\n\n");

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center px-6 sm:px-12 md:px-24 lg:px-48">
      <div className="max-w-2xl">
        {act && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 text-center font-[family-name:var(--font-playfair)] text-xs tracking-[0.4em] uppercase sm:text-sm"
            style={{ color: "var(--color-cream)" }}
          >
            {act}
          </motion.p>
        )}

        {paragraphs.map((paragraph, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: act ? 0.4 + i * 0.2 : i * 0.2,
              ease: "easeOut",
            }}
            className="mb-6 text-center text-lg leading-relaxed sm:text-xl md:text-[1.35rem] md:leading-[1.9]"
            style={{ color: "var(--color-cream)" }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showButton ? 0.6 : 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        onClick={onNext}
        className="fixed bottom-8 right-8 cursor-pointer bg-transparent font-[family-name:var(--font-playfair)] text-sm tracking-wider sm:bottom-10 sm:right-12"
        style={{
          color: "var(--color-cream)",
          border: "none",
          padding: 0,
        }}
      >
        Siguiente &rarr;
      </motion.button>
    </div>
  );
}
