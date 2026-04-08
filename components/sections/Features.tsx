"use client";


import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import { Clock, Store, Infinity, Users, MessageSquareText } from "lucide-react";

import type { ReactNode } from "react";

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface FeatureCard {
  id: string;
  icon: ReactNode;
  title: string;
  body: ReactNode;
  badge: ReactNode;
  glowColor: "terracotta" | "bone";
}

// ─── Variantes ────────────────────────────────────────────────────────────────
const motionVariants = {
  hidden: { opacity: 0, y: 20 }, // Reducimos de 30 a 20 para que no sea tan brusco
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

// ─── Data de features ─────────────────────────────────────────────────────────
const FEATURES: FeatureCard[] = [
  {
    id: "reaccion-tactica",
    icon: <Clock className="w-5 h-5 sm:w-7 sm:h-7" aria-hidden="true" />,
    title: "Reacción Táctica.",
    glowColor: "terracotta",
    badge: (
      <div className="bg-brand-terracotta/15 border border-brand-terracotta/30 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 backdrop-blur-md shadow-[0_0_15px_rgba(201,82,59,0.1)]">
        <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-terracotta opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-terracotta" />
        </span>
        <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-terracotta">
          FOMO ACTIVO
        </span>
      </div>
    ),
    body: (
      <p className="font-sans text-brand-bone/70 leading-relaxed text-sm sm:text-base md:text-lg">
        Sin disparos al azar.{" "}
        <span className="font-brand font-medium tracking-tighter text-brand-bone text-xl">rulo</span>{" "}
        lee tu horario comercial y activa protocolos de escasez calibrados:{" "}
        <em className="text-white italic">
          &quot;Cerramos la caja, ¿te separo el equipo para mañana?&quot;
        </em>
      </p>
    ),
  },
  {
    id: "trafico-fisico",
    icon: <Store className="w-5 h-5 sm:w-7 sm:h-7" aria-hidden="true" />,
    title: "Tráfico Físico.",
    glowColor: "bone",
    badge: (
      <div className="bg-brand-bone/10 border border-brand-bone/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl rounded-tr-sm flex items-center gap-1.5 sm:gap-2 backdrop-blur-md shadow-sm">
        <span className="font-sans text-[10px] sm:text-[11px] font-medium text-brand-bone">
          ¿Te lo separo hoy?
        </span>
        <MessageSquareText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-terracotta" aria-hidden="true" />
      </div>
    ),
    body: (
      <p className="font-sans text-brand-bone/70 leading-relaxed text-sm sm:text-base md:text-lg">
        No procesamos pagos online para blindar tu operación. El agente usa{" "}
        <strong className="text-white font-medium">sesgo de escasez</strong>{" "}
        (<em className="tracking-wide text-brand-bone/90">¿Te lo separo hoy?</em>) para
        convertir leads digitales en visitas al local.
      </p>
    ),
  },
  {
    id: "tarifa-fija",
    icon: <Infinity className="w-5 h-5 sm:w-7 sm:h-7" aria-hidden="true" />,
    title: "Tarifa Fija. Sin Comisiones.",
    glowColor: "bone",
    badge: (
      <div className="bg-brand-bone/10 border border-brand-bone/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 backdrop-blur-md shadow-sm">
        <Infinity className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-bone" aria-hidden="true" />
        <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-bone">
          Tarifa Plana
        </span>
      </div>
    ),
    body: (
      <p className="font-sans text-brand-bone/70 leading-relaxed text-sm sm:text-base md:text-lg">
        Modelo de abono plano. Si recuperamos 5 clientes o 50 en un día táctico, el
        costo es{" "}
        <strong className="text-white font-medium">exactamente el mismo</strong>. Tu
        upside es ilimitado.
      </p>
    ),
  },
  {
    id: "aliado-vendedor",
    icon: <Users className="w-5 h-5 sm:w-7 sm:h-7" aria-hidden="true" />,
    title: "El Mejor Aliado de tu Vendedor.",
    glowColor: "terracotta",
    badge: (
      <div className="bg-brand-terracotta/15 border border-brand-terracotta/30 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl rounded-tl-sm flex items-center gap-1.5 sm:gap-2 backdrop-blur-md shadow-[0_0_15px_rgba(201,82,59,0.1)]">
        <div
          aria-hidden="true"
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-brand-terracotta/20 flex items-center justify-center"
        >
          <Users className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-brand-terracotta" aria-hidden="true" />
        </div>
        <span className="font-sans text-[10px] sm:text-[11px] font-medium text-white/90">
          Viene &quot;X&quot; persona
        </span>
      </div>
    ),
    body: (
      <p className="font-sans text-brand-bone/70 leading-relaxed text-sm sm:text-base md:text-lg">
        No tocamos comisiones. Hacemos el trabajo sucio. Cuando hay visita confirmada,{" "}
        <span className="font-brand font-medium tracking-tighter text-brand-bone text-xl">rulo</span>{" "}
        alerta al equipo por privado. Ellos solo cobran.
      </p>
    ),
  },
];

// ─── Sub-componente: Feature Card ─────────────────────────────────────────────
function FeatureCard({
  feature,
  customIndex,
}: {
  feature: FeatureCard;
  customIndex: number;
}) {
  const glowClass =
    feature.glowColor === "terracotta"
      ? "from-brand-terracotta/5"
      : "from-brand-bone/5";

  return (
    <motion.article
      variants={motionVariants}
      custom={customIndex}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }} // Triggers individuales finos
      whileHover={{ y: -4 }} // Más sutil
      aria-label={`Característica: ${feature.title}`}
      className="group relative flex flex-col justify-between p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm overflow-visible transition-colors transition-shadow duration-300 lg:hover:bg-white/[0.03] lg:hover:shadow-2xl lg:hover:border-white/10"
    >
      {/* Glow interno en hover */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${glowClass} via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Badge decorativo */}
      <div
        aria-hidden="true"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-60 lg:group-hover:opacity-100 transition-all duration-500 pointer-events-none transform-gpu lg:group-hover:scale-105"
      >
        {feature.badge}
      </div>

      {/* Ícono */}
      <div
        aria-hidden="true"
        className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 mb-5 sm:mb-8 flex items-center justify-center rounded-lg sm:rounded-xl border border-brand-bone/10 bg-brand-bone/5 text-brand-bone transition-all duration-300 transform-gpu lg:group-hover:scale-110 lg:group-hover:text-brand-terracotta lg:group-hover:border-brand-terracotta/20 lg:group-hover:bg-brand-terracotta/10"
      >
        {feature.icon}
      </div>

      {/* Texto */}
      <div className="relative z-10">
        <h3 className="font-accent italic text-white font-bold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 tracking-wide">
          {feature.title}
        </h3>
        {feature.body}
      </div>
    </motion.article>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export const Features = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevenimos flash de contenido sin animar


  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative w-full py-16 sm:py-24 lg:py-36 overflow-visible"

    >
      {/* Glow central decorativo */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,800px)] h-[clamp(200px,40vh,500px)] bg-brand-terracotta/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-14 lg:gap-20">

        {/* ── Encabezado ── */}
        <div className="flex flex-col items-center text-center w-full max-w-3xl mx-auto">

          {/* Pre-título */}
          <motion.div
            variants={motionVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6"
          >
            <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full bg-brand-terracotta opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 bg-brand-terracotta" />
            </span>
            <span aria-hidden="true" className="w-6 sm:w-8 h-[1px] bg-brand-bone/30" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-brand-bone/60 uppercase">
              La Infraestructura Trabajando
            </span>
          </motion.div>

          {/* H2 */}
          <motion.h2
            id="features-heading"
            variants={motionVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="font-sans text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-4 sm:mb-6"
          >
            Rescate de facturación.{" "}
            {/* <br> solo en sm+ para no partir raro en mobile muy angosto */}
            <span className="hidden sm:inline"><br /></span>
            <span className="font-accent italic text-brand-terracotta tracking-normal">
              100% en automático.
            </span>
          </motion.h2>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-7 w-full">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              customIndex={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};