"use client";

/**
 * RoiCalculator — Sección de justificación financiera
 *
 * SEO / Semántica:
 * - <section> con id y aria-labelledby apuntando al h2
 * - Cards de variables como <article> con aria-label
 * - Operadores matemáticos con role="presentation" y aria-hidden
 * - Resultado como <article> con su propio aria-label
 *
 * Tipografía / Visual:
 * - Números en blanco puro (text-white) + peso black — máximo contraste
 * - Label de variable en terracotta, número en blanco: jerarquía clara
 * - Operadores (+, =) agrandados y con texto como fallback accesible
 * - Card de resultado: verde #52B788 tokenizado como brand-success
 *
 * Responsividad:
 * - overflow-x-hidden para contener glows
 * - Variables: stack vertical en mobile → horizontal en md+
 * - Operadores: chevron down en mobile → circle en md+
 * - Números: escalan suavemente por breakpoint
 *
 * Performance:
 * - useReducedMotion
 * - will-change-transform en cards hover
 * - aria-hidden en todos los decorativos
 */

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import { Package, RefreshCcwDot, CircleDollarSign, ChevronDown } from "lucide-react";

import type { ReactNode } from "react";

// ─── Variantes ────────────────────────────────────────────────────────────────
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

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface VariableCardProps {
  icon: ReactNode;
  label: string;       // "Variable A"
  description: string; // texto explicativo
  value: string;       // número grande: "$80.000"
  unit: string;        // "por lead"
  custom: number;
}

// ─── Sub-componente: Variable Card ───────────────────────────────────────────
function VariableCard({ icon, label, description, value, unit, custom }: VariableCardProps) {
  return (
    <motion.article
      variants={motionVariants}
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      whileHover={{ y: -4 }} // Sutil
      aria-label={`${label}: ${description} — ${value} ${unit}`}
      className="group relative flex-1 w-full flex flex-col items-center text-center p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm transition-colors transition-shadow duration-300 lg:hover:bg-white/[0.03]  lg:hover:shadow-2xl lg:hover:border-white/10 overflow-visible"

    >
      {/* Glow interno */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-terracotta/5 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />

      {/* Ícono */}
      <div
        aria-hidden="true"
        className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 mb-5 sm:mb-7 flex items-center justify-center rounded-lg sm:rounded-xl border border-brand-bone/10 bg-brand-bone/5 text-brand-bone transition-all duration-300 transform-gpu lg:group-hover:scale-110 lg:group-hover:text-brand-terracotta lg:group-hover:border-brand-terracotta/20 lg:group-hover:bg-brand-terracotta/10"
      >
        {icon}
      </div>

      {/* Label de variable */}
      <p className="font-mono text-[10px] sm:text-xs text-brand-terracotta font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-2">
        {label}
      </p>

      {/* Descripción */}
      <p className="font-sans text-brand-bone/60 text-sm sm:text-base font-light leading-snug mb-4 sm:mb-5 px-1">
        {description}
      </p>

      {/* Separador */}
      <div aria-hidden="true" className="w-10 h-[1px] bg-brand-bone/10 mb-4 sm:mb-5" />

      {/* Valor numérico — blanco puro, peso extrabold */}
      <p className="font-sans text-white font-extrabold text-3xl sm:text-4xl md:text-[2.75rem] tracking-tight leading-none">
        {value}
      </p>
      <p className="font-sans text-brand-bone/50 text-xs sm:text-sm font-medium uppercase tracking-widest mt-2">
        {unit}
      </p>
    </motion.article>
  );
}

// ─── Operador mobile (flecha abajo) + desktop (círculo con símbolo) ───────────
function Operator({
  symbol,
  custom,
  isResult = false,
}: {
  symbol: "+" | "=";
  custom: number;
  isResult?: boolean;
}) {
  return (
    <motion.div
      variants={motionVariants}
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      aria-hidden="true"
      className="flex-shrink-0 flex items-center justify-center z-10"
    >
      {/* Mobile: flecha vertical para el = (resultado), signo para el + */}
      <div className={`md:hidden flex items-center justify-center ${isResult ? "w-9 h-9" : "w-9 h-9"} rounded-full border ${isResult ? "border-brand-success/20 bg-brand-dark text-brand-success shadow-[0_0_20px_rgba(82,183,136,0.15)]" : "border-white/10 bg-brand-dark text-brand-bone/40"}`}>
        {isResult
          ? <ChevronDown className="w-4 h-4" />
          : <span className="font-sans text-lg font-light leading-none">{symbol}</span>
        }
      </div>
      {/* Desktop: círculo con símbolo */}
      <div className={`hidden md:flex items-center justify-center w-11 h-11 rounded-full border ${isResult ? "border-brand-success/20 bg-brand-dark text-brand-success shadow-[0_0_20px_rgba(82,183,136,0.15)]" : "border-white/10 bg-brand-dark text-brand-bone/40"}`}>
        <span className="font-sans text-xl font-light leading-none">{symbol}</span>
      </div>
    </motion.div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export const RoiCalculator = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;


  return (
    <section
      id="roi"
      aria-labelledby="roi-heading"
      className="relative w-full py-16 sm:py-24 lg:py-36 overflow-visible"

    >
      {/* ── Ambient glows ── */}
      <div aria-hidden="true" className="absolute top-1/4 left-0 w-[clamp(250px,40vw,500px)] h-[clamp(250px,40vw,500px)] bg-brand-terracotta/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div aria-hidden="true" className="absolute bottom-1/4 right-0 w-[clamp(300px,50vw,600px)] h-[clamp(300px,50vw,600px)] bg-brand-terracotta/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(150px,25vw,300px)] h-[clamp(150px,25vw,300px)] bg-brand-success/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 lg:mb-16 max-w-3xl mx-auto">
          <motion.div
            variants={motionVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6"
          >
            <span aria-hidden="true" className="w-6 sm:w-8 h-[1px] bg-brand-terracotta/60" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-brand-terracotta uppercase">
              La Justificación Financiera
            </span>
            <span aria-hidden="true" className="w-6 sm:w-8 h-[1px] bg-brand-terracotta/60" />
          </motion.div>

          <motion.h2
            id="roi-heading"
            variants={motionVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="font-sans text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-4 sm:mb-6"
          >
            Una decisión financiera{" "}
            <span className="hidden sm:inline"><br /></span>
            <span className="font-accent italic tracking-normal text-brand-terracotta">
              puramente matemática.
            </span>
          </motion.h2>

          <motion.p
            variants={motionVariants}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            className="font-sans text-base sm:text-lg lg:text-xl text-brand-bone/80 font-light leading-relaxed px-2"
          >
            No vendemos tecnología. Vendemos ventas que hoy no estás cerrando. Cada cliente que{" "}
            <strong className="text-white font-medium">
              rulo convierte es ingreso que antes se iba solo.
            </strong>
          </motion.p>
        </div>

        {/* ── Ecuación ── */}
        {/*
          Layout:
          - Mobile: columna, operadores como flechas verticales
          - md+: fila con operadores en círculo entre variables
        */}
        <div className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-4xl mx-auto gap-3 sm:gap-4 md:gap-0">
          {/* Variable A */}
          <VariableCard
            icon={<Package className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />}
            label="Variable A"
            description="Leads que no cerrás fuera de horario por semana"
            value="15"
            unit="consultas sin respuesta"
            custom={3}
          />

          {/* Operador + */}
          <div className="flex items-center justify-center md:px-3 lg:px-5">
            <Operator symbol="+" custom={4} />
          </div>

          {/* Variable B */}
          <VariableCard
            icon={<RefreshCcwDot className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />}
            label="Variable B"
            description="rulo convierte el 30% en visitas confirmadas"
            value="4 cierres"
            unit="adicionales"
            custom={5}
          />
        </div>

        {/* Operador = */}
        <div className="flex justify-center my-4 sm:my-5">
          <Operator symbol="=" custom={6} isResult />
        </div>

        {/* ── Card resultado ── */}
        <motion.article
          variants={motionVariants}
          custom={7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          whileHover={{ y: -4 }} // Sutil
          aria-label="Resultado: $3.000.000 de capital recuperado sobre inversión publicitaria previa"
          className="group relative w-full flex flex-col items-center justify-center text-center p-7 sm:p-10 md:p-14 rounded-xl sm:rounded-2xl border border-brand-success/25 bg-white/[0.015] backdrop-blur-md overflow-visible transition-all duration-500 transform-gpu will-change-transform lg:hover:-translate-y-2 lg:hover:shadow-[0_0_80px_rgba(82,183,136,0.12)] lg:hover:bg-white/[0.03]"

        >
          {/* Inner green glow */}
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-success/8 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          {/* Top accent line */}
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 sm:w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-success/40 to-transparent opacity-60 lg:group-hover:opacity-100 transition-opacity" />

          {/* Ícono */}
          <div
            aria-hidden="true"
            className="flex-shrink-0 w-14 h-14 sm:w-18 sm:h-18 mb-5 sm:mb-6 flex items-center justify-center rounded-lg sm:rounded-xl border border-brand-success/30 bg-brand-success/10 text-brand-success shadow-[0_0_30px_rgba(82,183,136,0.1)] transition-all duration-500 transform-gpu lg:group-hover:scale-110 lg:group-hover:shadow-[0_0_40px_rgba(82,183,136,0.25)]"
          >
            <CircleDollarSign className="w-7 h-7 sm:w-10 sm:h-10" aria-hidden="true" />
          </div>

          {/* Label */}
          <p className="font-mono text-xs sm:text-sm text-brand-success font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4">
            Facturación nueva
          </p>

          {/* Número resultado — máximo peso visual */}
          <h3 className="font-accent italic text-white font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-none mb-1 sm:mb-2">
            4 ventas
          </h3>
          <p className="font-sans text-brand-bone/50 text-sm sm:text-base font-semibold uppercase tracking-widest mb-4 sm:mb-5">
            que antes no existían
          </p>

          {/* Separador */}
          <div aria-hidden="true" className="w-12 h-[1px] bg-brand-success/20 mb-4 sm:mb-5" />

          <p className="font-sans text-brand-bone/80 text-base sm:text-lg md:text-xl font-light max-w-md">
            Sobre el mismo volumen de tráfico que ya tenés.
          </p>
        </motion.article>

        {/* ── Cierre ── */}
        <motion.div
          variants={motionVariants}
          custom={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-8 sm:mt-12 lg:mt-14 flex justify-center"
        >
          <div className="max-w-2xl text-center px-4 sm:px-8 py-5 sm:py-6 rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
            <p className="font-sans text-sm sm:text-base md:text-lg leading-relaxed">
              <span className="text-brand-bone/60 font-light">El abono mensual fijo no varía.</span>
              {" "}
              <span className="text-white font-semibold">Cada venta adicional es margen neto directo.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};