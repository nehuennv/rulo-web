"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

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
          className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] transform-gpu w-[95%] md:w-auto max-w-4xl flex justify-center"
        >
          {/* Contenedor Principal: 
            p-1.5 es el "abrazo" general. 
            justify-between para mobile, justify-start para PC 
          */}
          <div className="flex items-center justify-between md:justify-start p-1.5 rounded-full transition-all w-full md:w-auto bg-[#231F1E]/85 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">

            {/* 1. Sector Izquierdo (Logo) */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center pl-3 sm:pl-4 md:pl-6 pr-2 md:pr-4 text-lg sm:text-xl md:text-2xl font-brand font-bold text-brand-bone hover:text-white transition-colors focus:outline-none tracking-tight"
            >
              rulo<span className="text-brand-terracotta">.</span>
            </button>

            {/* 2. Primer Separador */}
            <div className="hidden md:block w-[1px] h-5 bg-white/10 mx-1" />

            {/* 3. Sector Central (Links) */}
            <div className="hidden md:flex items-center gap-1 px-4">
              <Link
                href="#problem-agitation"
                className="px-4 py-2 rounded-full text-sm font-sans font-medium text-brand-bone/80 hover:text-white hover:bg-white/5 transition-all"
              >
                Sistema
              </Link>
              <Link
                href="#roi"
                className="px-4 py-2 rounded-full text-sm font-sans font-medium text-brand-bone/80 hover:text-white hover:bg-white/5 transition-all"
              >
                Rentabilidad
              </Link>
              <Link
                href="#faq"
                className="px-4 py-2 rounded-full text-sm font-sans font-medium text-brand-bone/80 hover:text-white hover:bg-white/5 transition-all"
              >
                FAQ
              </Link>
            </div>

            {/* 4. Segundo Separador */}
            <div className="hidden md:block w-[1px] h-5 bg-white/10 mx-1" />

            {/* 5. Sector Derecho (CTA) */}
            <Link
              href="#final-cta"
              className="ml-2 bg-brand-terracotta text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-sans font-bold text-[11px] sm:text-sm transition-all transform-gpu hover:scale-[1.02] hover:bg-brand-terracotta-hover shadow-[0_0_15px_rgba(201,82,59,0.3)] hover:shadow-[0_0_25px_rgba(201,82,59,0.5)] whitespace-nowrap"
            >
              Recuperar Ventas
            </Link>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};