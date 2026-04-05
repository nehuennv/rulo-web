"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
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

export const FinalCta = () => {
  return (
    <section id="final-cta" className="relative w-full py-16 sm:py-24 lg:py-32">

      {/* ----- LUZ AMBIENTAL DE CIERRE ----- */}
      {/* Luz terracota masiva — responsive sin causar overflow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,1400px)] h-[clamp(300px,60vh,800px)] bg-brand-terracotta/10 blur-[120px] md:blur-[200px] rounded-[100%] pointer-events-none mix-blend-screen" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* CAJA DE CRISTAL GIGANTE DE ALTO IMPACTO (Vault / Bóveda) */}
        <div className="relative flex flex-col items-center text-center p-6 sm:p-12 lg:p-20 rounded-xl sm:rounded-2xl border border-brand-terracotta/20 bg-[#1A1816]/60 backdrop-blur-3xl shadow-[0_0_100px_rgba(201,82,59,0.1)] overflow-hidden">

          {/* Brillo radial interno exclusivo de la caja — Corregido utility */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-terracotta/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-20 flex flex-col items-center w-full">
            {/* Badge Tech */}
            <motion.div
              variants={fadeUpVariants} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8"
            >
              <span className="w-6 sm:w-8 h-[1px] bg-[#52B788]/60"></span>
              <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-[#52B788] uppercase flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Riesgo Invertido
              </span>
              <span className="w-6 sm:w-8 h-[1px] bg-[#52B788]/60"></span>
            </motion.div>

            {/* H2 TITULAR DE ALTO IMPACTO — Progresivo y sin font-black en mobile */}
            <motion.h2
              variants={fadeUpVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              className="font-sans text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold sm:font-black tracking-tight text-white leading-[1.05] mb-6 sm:mb-8 w-full max-w-4xl mx-auto"
            >
              Dejá de perder plata hoy.{" "}
              <span className="font-accent italic text-brand-terracotta tracking-normal pr-2 sm:pr-4">
                Probá rulo a riesgo cero.
              </span>
            </motion.h2>

            {/* Párrafo / Promesa */}
            <motion.p
              variants={fadeUpVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-brand-bone/80 max-w-3xl mb-10 sm:mb-14 leading-relaxed font-light px-2"
            >
              Implementamos <span className="font-sans font-bold text-brand-bone tracking-tighter">rulo</span> en tu negocio. Te damos <strong className="text-white font-bold border-b-2 border-brand-terracotta pb-0.5">15 días de prueba 100% gratuita.</strong>
              <span className="block mt-5 sm:mt-6 text-brand-bone/60 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                Si en dos semanas el sistema no logró mandar a un cliente reactivado a tu local, lo damos de baja y no pagás absolutamente nada. Ni siquiera el Setup.
              </span>
            </motion.p>

            {/* Action Button Gigante */}
            <motion.div
              variants={fadeUpVariants} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              className="w-full sm:w-auto"
            >
              <Link
                href="https://wa.me/TUNUMERODEWHATSAPP"
                target="_blank"
                className="group relative flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-6 sm:px-10 py-5 sm:py-7 lg:py-8 bg-brand-terracotta text-white font-bold sm:font-black rounded-[2px] text-lg sm:text-xl md:text-2xl transition-all duration-300 transform-gpu lg:hover:bg-brand-terracotta-hover lg:hover:-translate-y-2 lg:hover:shadow-[0_0_60px_rgba(201,82,59,0.6)] active:translate-y-0 overflow-hidden"
              >
                {/* Brillo dinámico tipo láser en Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 -translate-x-[150%] skew-x-[-15deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />

                <span className="font-sans tracking-tight">Solicitar Prueba<span className="hidden sm:inline"> (15 Días)</span></span>
                <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 transition-transform duration-300 transform-gpu lg:group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

