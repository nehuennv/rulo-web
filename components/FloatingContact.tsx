"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const FloatingContact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animación de entrada inicial: aparece después de terminar la carga del Hero (1.2 segundos) para encajar con el flow.
    const initTimer = setTimeout(() => setIsVisible(true), 1200);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const distanceFromBottom = documentHeight - scrollPosition;
      
      // Se oculta mucho antes (1100px) para que desaparezca totalmente antes de entrar al tramo final del sitio (Final CTA y Footer).
      if (distanceFromBottom < 1100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Verificar estado inicial
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(initTimer);
    };
  }, []);

  const handleClick = () => {
    window.open("https://wa.me/5491173599964?text=Hola,%20quisiera%20más%20información.", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex justify-end pointer-events-none"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 30 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
        >
          <div className="relative flex items-center justify-end h-14">
            
            {/* Placa Flotante (Color sólido #160B29 para encajar 100% con la estética de la web) */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-[4.5rem] flex items-center shrink-0 pr-3 pointer-events-auto cursor-pointer"
                  onClick={handleClick}
                >
                  <div className="bg-[#160B29] border border-white/10 px-5 py-3 rounded-2xl flex flex-col gap-0.5 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                    <span className="font-sans text-sm text-white font-semibold tracking-wide whitespace-nowrap">
                      Chateá con nosotros
                    </span>
                    <span className="font-sans text-[11px] text-brand-cream/80 whitespace-nowrap">
                      Respuesta inmediata de nuestro equipo.
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulso súper suave detrás del botón */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-full h-full rounded-full border border-brand-yellow/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            </div>

            {/* Botón Flotante Redondeado Original */}
            <button
              onClick={handleClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="pointer-events-auto group relative w-14 h-14 bg-brand-yellow text-brand-purple flex items-center justify-center rounded-full transition-all duration-300 hover:scale-[1.05] overflow-hidden shrink-0 shadow-[0_4px_20px_rgba(244,180,0,0.3)]"
            >
              {/* Brillo en diagonal "Skew Effect" en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shimmer_0.6s_ease-in-out_forwards]" />
              
              <MessageCircle 
                className="w-6 h-6 text-brand-purple relative z-10 transition-transform duration-300 group-hover:scale-110" 
                strokeWidth={2.5}
              />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
