"use client";

/**
 * ProblemAgitation — Sección de agitación del problema
 *
 * SEO / Semántica:
 * - <section> con id y aria-labelledby apuntando al h2
 * - h2 visible como encabezado de sección (no oculto)
 * - Cards de dolor como <article> con role implícito
 * - Texto fuerte semánticamente relevante con <strong>
 * - aria-hidden en elementos puramente decorativos
 *
 * Responsividad:
 * - Mobile-first: columna única → dos columnas en lg
 * - clamp() en tamaños de glows para escala fluida
 * - Tipografía escalonada: xs → sm → md → lg → xl
 * - Gap y padding escalonados por breakpoint
 * - whitespace-nowrap removido en mobile para evitar overflow horizontal
 * - Cards: gap y padding fluidos en cada breakpoint
 *
 * Performance:
 * - whileInView con once:true para no re-animar al volver a subir
 * - margin negativo en viewport para triggear antes del borde
 * - will-change en elementos con transform animado
 * - key por título (estable) en vez de index
 *
 * Accesibilidad:
 * - aria-hidden en decorativos
 * - Contraste mínimo /60 en texto secundario (vs /40 anterior)
 * - focus-visible en interactivos si los hubiera
 */

import { AlertTriangle, Wallet, Activity } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

import type { ReactNode } from "react";

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface PainCard {
  icon: ReactNode;
  title: string;
  desc: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const PAIN_CARDS: PainCard[] = [
  {
    icon: <Wallet className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
    title: "CAC infinito",
    desc: "Cuando un lead de $80.000 en pauta no cierra, tu costo de adquisición no es cero: es infinito.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
    title: "Ceguera financiera",
    desc: "Tu competencia de e-commerce mide todo. Vos operás a oscuras en el canal que más vende.",
  },
  {
    icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
    title: "Cero trazabilidad",
    desc: "No sabés cuánta demanda ni facturación real estás perdiendo exactamente por día.",
  },
];

// ─── Variantes de animación ───────────────────────────────────────────────────
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9] as const,
    },
  }),
};

// Variante estática para usuarios con prefers-reduced-motion
const staticVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

// ─── Componente ───────────────────────────────────────────────────────────────
export const ProblemAgitation = () => {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const motionVariants = mounted && shouldReduceMotion ? staticVariants : fadeUpVariants;


  return (
    <section
      id="problem-agitation"
      aria-labelledby="problem-heading"
      className="relative w-full py-16 sm:py-24 lg:py-36 overflow-visible"

    >
      {/* ── Glows decorativos ── */}
      <div
        aria-hidden="true"
        className="absolute top-[20%] right-0 w-[clamp(250px,50vw,600px)] h-[clamp(250px,50vw,600px)] bg-brand-terracotta/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[clamp(200px,40vw,500px)] h-[clamp(200px,40vw,500px)] bg-brand-dark-lightest/15 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen"
      />

      {/* ── Layout principal ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-20 xl:gap-28 items-start lg:items-center">

        {/* ── Columna izquierda: texto narrativo ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full lg:w-[45%] flex flex-col gap-4 sm:gap-6"
        >
          {/* Pre-título */}
          <motion.div
            variants={motionVariants}
            custom={0}
            className="flex items-center gap-2.5 sm:gap-3"
          >
            <span aria-hidden="true" className="w-6 sm:w-8 h-[1px] bg-brand-terracotta/80 shrink-0" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-brand-terracotta uppercase">
              El Agujero Negro{" "}
              <span aria-hidden="true">//</span>{" "}
              Tu Mayor Pérdida
            </span>
          </motion.div>

          {/* H2 principal — id referenciado por aria-labelledby de la section */}
          <motion.h2
            id="problem-heading"
            variants={motionVariants}
            custom={1}
            className="font-sans text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-black tracking-tight text-white leading-[1.05]"
          >
            {/* 
              Fix responsividad: removido whitespace-nowrap en mobile.
              En lg+ se puede usar nowrap porque hay espacio suficiente.
            */}
            <span className="block lg:whitespace-nowrap">70% de tu pauta</span>
            <span className="block font-accent italic tracking-normal text-brand-terracotta lg:whitespace-nowrap">
              muere en silencio.
            </span>
          </motion.h2>

          {/* Párrafo explicativo */}
          <motion.div
            variants={motionVariants}
            custom={2}
            className="font-sans text-base sm:text-lg lg:text-xl text-brand-bone/80 leading-relaxed font-light mt-1 sm:mt-2 max-w-none sm:max-w-lg lg:max-w-none"
          >
            <p>
              En e-commerce, cada peso se mide: clicks, conversiones, ROAS. Pero en tu
              WhatsApp hay un agujero negro. Invertís en Meta Ads para que el lead llegue,
              pregunta el precio, y desaparece.{" "}
              <strong className="text-white font-bold underline decoration-brand-terracotta decoration-2 underline-offset-4">
                Eso es demanda oscura.
              </strong>
            </p>
            <p className="mt-3 sm:mt-4 text-brand-bone/60 text-sm sm:text-base">
              Capital que ya pagaste y nunca pudiste cobrar. Sin trazabilidad. Sin datos.
              Millones evaporándose por día.
            </p>
          </motion.div>
        </motion.div>

        {/* ── Columna derecha: tarjetas de dolor ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="w-full lg:w-[55%] flex flex-col gap-3 sm:gap-4"
        >
          {PAIN_CARDS.map((dolor, index) => (
            <motion.article
              key={dolor.title}
              variants={motionVariants}
              custom={index + 2}
              className="group relative flex items-start gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm overflow-visible transition-all duration-300 transform-gpu will-change-transform lg:hover:bg-white/[0.03] lg:hover:-translate-y-1.5 lg:hover:shadow-2xl lg:hover:border-white/10"

              // aria-label explícito para screen readers que anuncien el article
              aria-label={`Problema: ${dolor.title}`}
            >
              {/* Glow interno en hover */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-terracotta/5 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />

              {/* Icono */}
              <div
                aria-hidden="true"
                className="mt-0.5 sm:mt-1 flex-shrink-0 p-2.5 sm:p-3 md:p-4 rounded-lg border border-brand-bone/10 bg-brand-bone/5 text-brand-bone transition-all duration-300 transform-gpu lg:group-hover:scale-110 lg:group-hover:text-brand-terracotta lg:group-hover:border-brand-terracotta/20 lg:group-hover:bg-brand-terracotta/10"
              >
                {dolor.icon}
              </div>

              {/* Texto */}
              <div className="flex flex-col pt-0.5 sm:pt-1 min-w-0">
                <h3 className="font-accent italic text-white font-bold text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 tracking-wide">
                  {dolor.title}
                </h3>
                {/* /60 → cumple contraste WCAG AA sobre fondos oscuros (era /60 en doc, ok) */}
                <p className="font-sans text-brand-bone/60 leading-relaxed text-sm sm:text-base font-medium">
                  {dolor.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
};