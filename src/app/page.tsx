"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slides } from "@/data/slides";
import CoverSlide from "@/components/CoverSlide";
import TextSlide from "@/components/TextSlide";
import ImageSlide from "@/components/ImageSlide";
import EndSlide from "@/components/EndSlide";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const slide = slides[currentSlide];

  return (
    <main className="h-screen w-screen overflow-hidden" style={{ backgroundColor: "var(--color-bg)" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {slide.type === "cover" && <CoverSlide onNext={goNext} />}

          {slide.type === "text" && (
            <TextSlide
              text={slide.text!}
              act={slide.act}
              onNext={goNext}
            />
          )}

          {slide.type === "image" && (
            <ImageSlide
              image={slide.image!}
              caption={slide.imageCaption!}
              onNext={goNext}
            />
          )}

          {slide.type === "end" && <EndSlide />}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
