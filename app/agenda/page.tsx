"use client";

import { useEffect, useRef, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Footer } from "@/components/sections/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const CAL_NAMESPACE = "primer-reunion";
const CAL_LINK = "somosrulo/primer-reunion";

export default function AgendaPage() {
  const [mounted, setMounted] = useState(false);
  const calInitialized = useRef(false);

  const motionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as const,
      },
    }),
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (calInitialized.current) return;
    calInitialized.current = true;

    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#C9523B" },
          dark: { "cal-brand": "#C9523B" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative w-full bg-brand-dark overflow-x-hidden flex flex-col">
      
      {/* FONDO ARQUITECTÓNICO */}
      <div className="fixed top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_40%,#000_100%,transparent_110%)] pointer-events-none z-0" />
      
      {/* Ambient Glows */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-brand-terracotta/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen z-0"
      />

      {/* Hero Section: Exactly 100dvh */}
      <div className="relative z-10 w-full h-[100dvh] flex flex-col items-center px-5 sm:px-6">
        
        {/* Minimal Header */}
        <header className="w-full max-w-7xl py-10 sm:py-12 flex justify-start items-center">
          <Link 
            href="/" 
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 hover:border-brand-terracotta/30"
          >
            <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-bone/60 group-hover:text-white transition-colors">
              Ir al inicio
            </span>
          </Link>
        </header>

        {/* Center Content Content */}
        <div className="w-full max-w-4xl flex-1 flex flex-col items-center justify-center text-center pb-10 sm:pb-20">
          <motion.div
            variants={motionVariants}
            custom={0}
            initial="hidden"
            animate="visible"
            className="mb-8 sm:mb-12"
          >
            <h1 className="font-sans text-[1.75rem] sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
              Agendá tu Auditoría de <br />
              <span className="font-accent italic text-brand-terracotta tracking-normal">
                Capital Recuperado.
              </span>
            </h1>
            <p className="font-sans text-brand-bone/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Analizaremos tu <strong className="text-white font-medium underline decoration-brand-terracotta decoration-2 underline-offset-4">&quot;demanda oscura&quot;</strong> y calcularemos cuánto capital estás dejando sobre la mesa. 
              <br className="hidden md:block" />
              <strong className="text-brand-terracotta font-semibold uppercase tracking-widest text-sm mt-4 block">ROI garantizado o te devolvemos el setup.</strong>
            </p>
          </motion.div>

          <motion.div
            variants={motionVariants}
            custom={1}
            initial="hidden"
            animate="visible"
            className="w-full flex flex-col items-center gap-6 sm:gap-8"
          >
            {/* Main CTA Button — Modal Trigger */}
            <motion.button
              onClick={() => {
                (window as any).Cal?.("modal", {
                  calLink: CAL_LINK,
                  config: { layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "light" }
                });
              }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center justify-center gap-3 sm:gap-4 px-10 sm:px-16 py-6 sm:py-8 bg-brand-terracotta text-white font-black rounded-[2px] text-xl sm:text-2xl md:text-[2.75rem] transition-all shadow-[0_0_30px_rgba(201,82,59,0.3)] hover:bg-brand-terracotta-hover hover:shadow-[0_0_60px_rgba(201,82,59,0.6)] overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta focus-visible:ring-offset-4 focus-visible:ring-offset-brand-dark"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-[150%] skew-x-[-15deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out will-change-transform"
              />
              <span className="relative font-sans tracking-tight">RESERVAR MI TURNO.</span>
            </motion.button>

            {/* Optional support text */}
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-brand-bone/35">
              Protocolo de Reserva // Respuesta en {"<"} 24h
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer Below the Hero Viewport */}
      <div className="relative z-10 w-full border-t border-white/5 bg-brand-dark">
        <Footer />
      </div>
    </main>
  );
}
