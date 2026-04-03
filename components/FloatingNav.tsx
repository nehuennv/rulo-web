"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Aparece recién al pasar los primeros 150px (cuando y dejas el Hero)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Validación inicial por si recarga la página a la mitad
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-[100] transform-gpu w-[95%] sm:w-auto max-w-4xl flex justify-center"
        >
          {/* Píldora de Cristal - Top Nav (Pill Aesthetic) */}
          <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-6 px-3 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 w-full sm:w-auto bg-[#160b29]/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">

            {/* Logo Link (Izquierda) */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl sm:text-2xl font-brand font-bold text-brand-cream px-2 hover:opacity-80 transition-opacity focus:outline-none tracking-tighter leading-none"
            >
              rulo<span className="text-brand-yellow">.</span>
            </button>

            {/* Divider vertical en Desktop */}
            <div className="hidden md:block w-[1px] h-6 bg-white/10 mx-1" />

            {/* Nav Links (Centro - Textos Familiares) */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="#problem-agitation"
                className="text-sm font-sans font-medium text-brand-cream/80 hover:text-brand-yellow transition-colors"
              >
                Sistema
              </Link>
              <Link
                href="#roi"
                className="text-sm font-sans font-medium text-brand-cream/80 hover:text-brand-yellow transition-colors"
              >
                Rentabilidad
              </Link>
              <Link
                href="#faq"
                className="text-sm font-sans font-medium text-brand-cream/80 hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </div>

            {/* Divider vertical en Desktop antes del botón */}
            <div className="hidden md:block w-[1px] h-6 bg-white/10 mx-1" />

            {/* CTA Embebido (Derecha) */}
            <Link
              href="#final-cta"
              className="ml-auto bg-brand-yellow text-brand-purple px-5 sm:px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm hover:bg-brand-yellow-hover hover:-translate-y-0.5 transition-all transform-gpu shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
            >
              Agendar Demo
            </Link>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
