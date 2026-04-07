"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const FloatingContact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const checkOverlap = useCallback(() => {
    const footer = document.querySelector("footer");
    if (!footer || !buttonRef.current) return;

    const footerRect = footer.getBoundingClientRect();
    const btnRect = buttonRef.current.getBoundingClientRect();

    // Si el centro vertical del botón está dentro del footer, activamos estilo oscuro.
    const btnCenter = btnRect.top + btnRect.height / 2;
    setIsOverFooter(btnCenter >= footerRect.top && btnCenter <= footerRect.bottom);
  }, []);

  useEffect(() => {
    // Animación de entrada inicial tras el splash/Hero.
    const initTimer = setTimeout(() => setIsVisible(true), 1200);

    window.addEventListener("scroll", checkOverlap, { passive: true });
    window.addEventListener("resize", checkOverlap, { passive: true });
    checkOverlap();

    const handleMenuState = (e: any) => setIsMenuOpen(e.detail);
    window.addEventListener("rulo-menu-state", handleMenuState);

    return () => {
      window.removeEventListener("scroll", checkOverlap);
      window.removeEventListener("resize", checkOverlap);
      window.removeEventListener("rulo-menu-state", handleMenuState);
      clearTimeout(initTimer);
    };
  }, [checkOverlap]);

  const handleClick = () => {
    window.open("https://wa.me/5492644881787?text=Hola,%20quisiera%20más%20información.", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={buttonRef}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex justify-end pointer-events-none"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 30 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
        >
          <div className="relative flex items-center justify-end h-14">

            {/* Placa Flotante (Desktop ONLY) */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-[4.5rem] hidden md:flex items-center shrink-0 pr-3 pointer-events-auto cursor-pointer"
                  onClick={handleClick}
                >
                  <div className="bg-[#1A1816] border border-white/10 px-5 py-3 rounded-2xl flex flex-col gap-0.5 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                    <span className="font-sans text-sm text-white font-semibold tracking-wide whitespace-nowrap">
                      Chateá con nosotros
                    </span>
                    <span className="font-sans text-[11px] text-brand-bone/80 whitespace-nowrap">
                      Respuesta inmediata de nuestro equipo.
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>


            {/* Pulso detrás del botón — cambia de color según zona */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className={`absolute w-full h-full rounded-full animate-[ping_2.25s_cubic-bezier(0,0,0.2,1)_infinite] transition-colors duration-500 ${isOverFooter && !isMenuOpen
                  ? "border border-white/40"
                  : "border border-brand-terracotta/30"
                  }`}
              />
            </div>

            {/* Botón Flotante — cambia a oscuro cuando está sobre el footer terracotta */}
            <button
              onClick={handleClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`pointer-events-auto group relative w-14 h-14 text-white flex items-center justify-center rounded-full transition-all duration-500 lg:hover:scale-[1.05] cursor-pointer overflow-hidden shrink-0 ${isOverFooter && !isMenuOpen
                ? "bg-[#231F1E] shadow-[0_4px_25px_rgba(0,0,0,0.5)] ring-1 ring-white/15"
                : "bg-brand-terracotta shadow-[0_4px_20px_rgba(201,82,59,0.3)]"
                }`}
            >
              {/* Brillo diagonal en hover (Desktop only) */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full lg:group-hover:animate-[shimmer_0.6s_ease-in-out_forwards]" />
              <MessageCircle
                className="w-6 h-6 text-white relative z-10 transition-transform duration-300 lg:group-hover:scale-110"
                strokeWidth={2.5}
              />

            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
