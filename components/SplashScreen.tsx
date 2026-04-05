"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Context para que el Hero sepa cuándo arrancó el fade-out del splash
const SplashContext = createContext(false);
export const useSplashDone = () => useContext(SplashContext);

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashDone(true);
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SplashContext.Provider value={splashDone}>
      {/* Contenido real — siempre renderizado, el splash es solo un overlay encima */}
      {children}

      {/* Overlay del splash */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-dark overflow-hidden"
          >
            {/* ===== MESH GRID (fondo arquitectónico) ===== */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none" />

            {/* ===== AMBIENT GLOWS ===== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-terracotta/12 blur-[180px] rounded-full pointer-events-none mix-blend-screen"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="absolute top-[10%] right-[15%] w-[300px] h-[300px] bg-brand-dark-light/30 blur-[120px] rounded-full pointer-events-none mix-blend-screen"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-brand-dark-lightest/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"
            />

            {/* ===== CONTENIDO CENTRAL ===== */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-6">

              {/* Logo Mark animado */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="relative"
              >
                {/* Glow detrás del logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 0.6, 0.3], scale: [0.5, 1.2, 1] }}
                  transition={{ delay: 0.4, duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-0 bg-brand-terracotta/20 blur-[60px] rounded-full pointer-events-none"
                />

                {/* Logo "rulo." con fuente de marca */}
                <h1 className="relative font-brand text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-white select-none">
                  rulo
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.4, type: "spring", stiffness: 400, damping: 15 }}
                    className="text-brand-terracotta"
                  >
                    .
                  </motion.span>
                </h1>
              </motion.div>

              {/* Barra de progreso estilizada */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="w-48 sm:w-56 h-[2px] bg-brand-dark-lightest/50 rounded-full overflow-hidden"
              >
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.4, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                  className="h-full bg-gradient-to-r from-brand-terracotta via-brand-terracotta-light to-brand-terracotta rounded-full"
                />
              </motion.div>

              {/* Tagline sutil */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="font-sans text-xs sm:text-sm text-brand-bone/30 tracking-widest uppercase font-light"
              >
                Recuperación Inteligente de Ventas
              </motion.p>
            </div>

            {/* ===== BORDE INFERIOR DECORATIVO ===== */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
              className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-terracotta/40 to-transparent origin-center"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </SplashContext.Provider>
  );
}
