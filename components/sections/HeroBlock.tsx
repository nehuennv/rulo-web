"use client";

import { Bot, TrendingUp, ShieldCheck, ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useSplashDone } from "@/components/SplashScreen";
import { useCallback, useEffect, useRef, useState } from "react";

import { getCalApi } from "@calcom/embed-react";

// ─── Constantes de Cal.com ────────────────────────────────────────────────────
const CAL_NAMESPACE = "primer-reunion";
const CAL_LINK = "somosrulo/primer-reunion";

// ─── Variantes de animación ───────────────────────────────────────────────────
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

const floatEnterLeft = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.6, duration: 1 },
  },
};

const floatEnterRight = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.8, duration: 1 },
  },
};

const floatLoopLeft = {
  y: [0, -10, 0],
  transition: { repeat: Infinity, duration: 6, ease: "easeInOut" as const },
};

const floatLoopRight = {
  y: [0, 10, 0],
  transition: { repeat: Infinity, duration: 5, ease: "easeInOut" as const },
};

// ─── Trust indicators data ────────────────────────────────────────────────────
const TRUST_ITEMS = [
  { icon: <Bot className="w-5 h-5 shrink-0" aria-hidden="true" />, title: "Agente Autónomo", desc: "Opera 100% en solitario" },
  { icon: <TrendingUp className="w-5 h-5 shrink-0" aria-hidden="true" />, title: "Cero Riesgo", desc: "Setup bonificado, sin permanencia" },
  { icon: <ShieldCheck className="w-5 h-5 shrink-0" aria-hidden="true" />, title: "API Oficial Meta", desc: "Integración de grado empresarial" },
];

// ─── Componente principal ─────────────────────────────────────────────────────
export function HeroBlock() {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const splashDone = useSplashDone();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 1536);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const animState = splashDone ? "visible" : "hidden";
  const calInitialized = useRef(false);

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
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  const openCalModal = useCallback(() => {
    (window as Window & { Cal?: Function }).Cal?.("modal", {
      calLink: CAL_LINK,
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "light",
      },
    });
  }, []);

  if (!mounted) return null;

  return (
    <section
      className="relative w-full min-h-[100svh] flex items-center justify-center pt-24 pb-12 sm:pt-0 sm:pb-0"
      aria-label="Hero — rulo"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(80vw,1000px)] h-[clamp(200px,40vh,500px)] bg-brand-terracotta/15 blur-[80px] md:blur-[120px] rounded-[100%] pointer-events-none mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="absolute top-[20%] right-0 w-[clamp(150px,30vw,400px)] h-[clamp(150px,30vw,400px)] bg-brand-dark-light/25 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[clamp(200px,40vw,600px)] h-[clamp(200px,35vw,500px)] bg-brand-dark-lightest/15 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen"
      />

      {isDesktop && (
        <>
          {/* ── Bento izquierda ── */}
          <motion.div
            aria-hidden="true"
            initial="hidden"
            animate={animState}
            variants={floatEnterLeft}
            className="absolute top-[28%] left-[4%] z-20 pointer-events-none hidden 2xl:block"
          >
            <motion.div
              animate={floatLoopLeft}
              className="max-w-[260px] flex flex-col gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl rotate-[-3deg] shadow-2xl cursor-default transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(201,82,59,0.12)] hover:border-brand-terracotta/20"
              style={{ pointerEvents: "auto" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <Bot className="w-4 h-4 text-brand-terracotta" aria-hidden="true" />
                <span className="font-mono text-[10px] text-brand-terracotta uppercase tracking-widest">
                  Lead entrante · 23:47
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-xs text-brand-bone/50">Lead:</span>
                <p className="font-sans text-sm text-brand-bone/90 font-medium">
                  &quot;Hola, ¿tienen stock en negro?&quot;
                </p>
              </div>
              <div className="w-full h-[1px] bg-brand-bone/10 my-1" />
              <p className="font-sans text-xs text-brand-success font-medium tracking-wide">
                → rulo respondió en 4 segundos
              </p>
            </motion.div>
          </motion.div>

          {/* ── Bento derecha ── */}
          <motion.div
            aria-hidden="true"
            initial="hidden"
            animate={animState}
            variants={floatEnterRight}
            className="absolute bottom-[28%] right-[4%] z-20 pointer-events-none hidden 2xl:block"
          >
            <motion.div
              animate={floatLoopRight}
              className="max-w-[240px] flex flex-col gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl rotate-[2deg] shadow-2xl cursor-default transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(201,82,59,0.12)] hover:border-brand-terracotta/20"
              style={{ pointerEvents: "auto" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-brand-success" aria-hidden="true" />
                <span className="font-mono text-[10px] text-brand-success uppercase tracking-widest">
                  Visita confirmada
                </span>
              </div>
              <p className="font-sans text-xl text-white font-bold tracking-tight">&quot;Paso mañana a las 11&quot;</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-brand-success animate-pulse" aria-hidden="true" />
                <p className="font-sans text-xs text-brand-bone/50 uppercase tracking-widest">
                  Cerrado · 00:02 AM
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate={animState}
          variants={motionVariants}
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-6 sm:mb-10 px-2"
        >
          <div
            className="flex items-center gap-2 bg-brand-terracotta/10 border border-brand-terracotta/20 px-3 py-1 rounded-sm"
            role="status"
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full bg-brand-terracotta opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 bg-brand-terracotta" />
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-brand-terracotta uppercase">
              Vendedor IA · 24/7
            </span>
          </div>
          <span className="hidden sm:block w-8 h-[1px] bg-brand-bone/20" aria-hidden="true" />
          <span className="hidden sm:block font-sans text-[10px] sm:text-xs font-medium tracking-widest text-brand-bone/60 uppercase text-center text-balance">
            Auditoría de Ventas incluída
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate={animState}
          variants={motionVariants}
          className="font-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium tracking-normal text-white leading-[1.1] mb-5 sm:mb-8 w-full text-balance"
        >
          <span className="block">Tu negocio vende.</span>
          <span className="relative inline-block">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-brand-terracotta opacity-10 blur-2xl rounded-full"
            />
            <span className="relative italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-terracotta via-brand-terracotta-light to-brand-terracotta bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite]">
              Aunque no estés.
            </span>
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate={animState}
          variants={motionVariants}
          className="font-sans text-sm sm:text-lg md:text-xl lg:text-2xl text-brand-bone/80 max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed font-light px-0 sm:px-2 md:text-balance"
        >
          <span className="font-brand font-medium tracking-tighter text-brand-bone text-[1.05em]">
            rulo
          </span>{" "}
          es el agente de IA que responde, convence y confirma visitas por WhatsApp las{" "}
          <span className="text-white font-medium underline decoration-brand-terracotta decoration-2 underline-offset-4">
            24 horas
          </span>
          . Sin sueldo, sin pausas, sin leads perdidos a las 11 de la noche.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate={animState}
          variants={motionVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={openCalModal}
            className="group relative flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-brand-terracotta text-white font-extrabold rounded-[2px] text-base sm:text-lg lg:text-xl transition-all hover:bg-brand-terracotta-hover hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(201,82,59,0.5)] active:translate-y-0 overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-[150%] skew-x-[-15deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out will-change-transform"
            />
            <span className="font-sans relative">Solicitar Auditoría</span>
            <ArrowRight
              className="w-5 h-5 sm:w-6 sm:h-6 relative transition-transform group-hover:translate-x-1.5"
              aria-hidden="true"
            />
          </button>

          <Link
            href="#roi"
            className="group flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-transparent backdrop-blur-sm text-brand-bone font-bold text-base sm:text-lg lg:text-xl border-b border-brand-bone/30 hover:border-brand-terracotta hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="font-sans">Ver cómo funciona</span>
            <ArrowDown
              className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 transition-transform group-hover:translate-y-1.5 group-hover:text-brand-terracotta"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate={animState}
          variants={motionVariants}
          className="mt-10 sm:mt-16 lg:mt-20 pt-6 sm:pt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 lg:gap-12 w-full max-w-4xl"
          role="list"
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.title}
              role="listitem"
              className="flex flex-row md:flex-col items-center justify-start md:justify-center gap-4 md:gap-2 group cursor-default transition-transform duration-300 transform-gpu  py-3 px-2 md:p-0 border-b border-brand-bone/10 md:border-b-0 last:border-b-0"
            >
              <div className="text-brand-terracotta/60 transition-all duration-300 transform-gpu lg:group-hover:text-brand-terracotta lg:group-hover:scale-110 shrink-0 flex-none">
                {item.icon}
              </div>
              <div className="text-left md:text-center flex-1">
                <h3 className="font-accent italic text-white font-medium text-base md:text-lg mb-0.5 transition-colors duration-300 lg:group-hover:text-brand-terracotta">
                  {item.title}
                </h3>
                <p className="font-sans text-brand-bone/60 text-[11px] md:text-xs font-semibold uppercase tracking-wider text-balance">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}