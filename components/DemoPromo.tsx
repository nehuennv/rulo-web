"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Zap } from "lucide-react";
import { useSplashDone } from "@/components/SplashScreen";

const STORAGE_KEY = "rulo-demo-promo-seen";
const WHATSAPP_DEMO_URL =
  "https://wa.me/5492644881787?text=Hola";

export function DemoPromo() {
  const [show, setShow] = useState(false);
  const splashDone = useSplashDone();

  useEffect(() => {
    if (!splashDone) return;

    // Don't show if already seen this session
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // sessionStorage not available (SSR / privacy mode), skip
      return;
    }

    const timer = setTimeout(() => {
      setShow(true);
    }, 5000); // 5s after splash completes (~8s total)

    return () => clearTimeout(timer);
  }, [splashDone]);

  const handleDismiss = useCallback(() => {
    setShow(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }, []);

  const handleCta = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    window.open(WHATSAPP_DEMO_URL, "_blank", "noopener");
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop sutil */}
          <motion.div
            key="promo-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-[2px]"
            onClick={handleDismiss}
          />

          {/* Card slide-in */}
          <motion.div
            key="promo-card"
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
            className="fixed z-[201] bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-8 sm:max-w-[420px] pointer-events-auto"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1A1816]/80 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(201,82,59,0.08)]">
              {/* Glow decorativo top */}
              <div
                aria-hidden="true"
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[120px] bg-brand-terracotta/15 blur-[80px] rounded-full pointer-events-none"
              />

              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/5 border border-white/10 text-brand-bone/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative z-[1] p-5 sm:p-6 flex flex-col gap-4">
                {/* Badge */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-brand-terracotta/10 border border-brand-terracotta/20 px-3 py-1 rounded-sm">
                    <Zap className="w-3.5 h-3.5 text-brand-terracotta" aria-hidden="true" />
                    <span className="font-mono text-[10px] font-semibold tracking-[0.15em] text-brand-terracotta uppercase">
                      Demo en vivo
                    </span>
                  </div>
                </div>

                {/* Headline */}
                <h2 className="font-accent italic text-2xl sm:text-[1.7rem] font-bold text-white leading-tight tracking-tight">
                  Intentá romper{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-terracotta via-brand-terracotta-light to-brand-terracotta">
                    nuestro agente.
                  </span>
                </h2>

                {/* Body */}
                <p className="font-sans text-sm text-brand-bone/70 leading-relaxed">
                  Probalo{" "}
                  <strong className="text-white font-medium">vos mismo</strong>{" "}
                  ahora. Hablale por WhatsApp a nuestra demo y comprobá cómo
                  responde un agente de IA entrenado para vender.
                </p>

                {/* CTA WhatsApp */}
                <button
                  onClick={handleCta}
                  className="group relative flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#25D366] text-white font-extrabold rounded-xl text-base transition-all hover:bg-[#20BD5A] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,211,102,0.3)] active:translate-y-0 cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1816]"
                >
                  {/* Shimmer */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-[150%] skew-x-[-15deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out will-change-transform"
                  />
                  <MessageCircle className="w-5 h-5 relative z-[1] transition-transform group-hover:scale-110" />
                  <span className="relative z-[1] font-sans">Probar demo por WhatsApp</span>
                </button>

                {/* Micro-trust */}
                <p className="font-mono text-[10px] text-brand-bone/30 tracking-widest uppercase text-center">
                  Gratis · Sin registro · Responde al instante
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
