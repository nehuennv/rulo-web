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
    <section id="final-cta" className="relative w-full pb-32 pt-20">

      {/* ----- LUZ AMBIENTAL DE CIERRE ----- */}
      {/* Luz dorada masiva emanando detrás del componente para conectarlo estéticamente al fondo global sin cortarse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[800px] bg-brand-yellow/10 blur-[200px] rounded-[100%] pointer-events-none mix-blend-screen" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CAJA DE CRISTAL GIGANTE DE ALTO IMPACTO (Vault / Bóveda) */}
        <div className="relative flex flex-col items-center text-center p-10 sm:p-16 lg:p-24 rounded-2xl border border-brand-yellow/20 bg-[#160B29]/60 backdrop-blur-3xl shadow-[0_0_100px_rgba(244,180,0,0.1)] overflow-hidden">

          {/* Brillo radial interno exclusivo de la caja */}
          <div className="absolute inset-0 bg-radial-gradient from-brand-yellow/5 to-transparent pointer-events-none" />

          <div className="relative z-20 flex flex-col items-center w-full">
            {/* Badge Tech */}
            <motion.div
              variants={fadeUpVariants} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-8 h-[1px] bg-[#a0ff6a]/60"></span>
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#a0ff6a] uppercase flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Riesgo Invertido
              </span>
              <span className="w-8 h-[1px] bg-[#a0ff6a]/60"></span>
            </motion.div>

            {/* H2 TITULAR DE ALTO IMPACTO */}
            <motion.h2
              variants={fadeUpVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className="font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-8 w-full max-w-4xl mx-auto"
            >
              Dejá de perder plata hoy.{" "}
              <span className="font-accent italic text-brand-yellow tracking-normal pr-4">
                Probá rulo. a riesgo cero.
              </span>
            </motion.h2>

            {/* Párrafo / Promesa */}
            <motion.p
              variants={fadeUpVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className="font-sans text-lg sm:text-xl lg:text-2xl text-brand-cream/80 max-w-3xl mb-14 leading-relaxed font-light"
            >
              Implementamos <strong className="font-brand font-bold text-brand-yellow tracking-tighter">rulo<span className="text-brand-cream">.</span></strong> en tu negocio. Te damos <strong className="text-white font-bold border-b-2 border-brand-yellow pb-0.5">15 días de prueba 100% gratuita.</strong>
              <span className="block mt-6 text-brand-cream/60 text-base lg:text-lg max-w-2xl mx-auto">
                Si en dos semanas el sistema no logró mandar a un cliente reactivado a tu local, lo damos de baja y no pagás absolutamente nada. Ni siquiera el Setup.
              </span>
            </motion.p>

            {/* Action Button Gigante */}
            <motion.div
              variants={fadeUpVariants} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              className="w-full sm:w-auto"
            >
              <Link
                href="https://wa.me/TUNUMERODEWHATSAPP"
                target="_blank"
                className="group relative flex items-center justify-center gap-4 w-full sm:w-auto px-10 py-6 sm:py-8 bg-brand-yellow text-brand-purple font-black rounded-[2px] text-xl sm:text-2xl transition-all duration-300 transform-gpu lg:hover:bg-brand-yellow-hover lg:hover:-translate-y-2 lg:hover:shadow-[0_0_60px_rgba(244,180,0,0.6)] active:translate-y-0 overflow-hidden"
              >
                {/* Brillo dinámico tipo láser en Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 -translate-x-[150%] skew-x-[-15deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />

                <span className="font-sans tracking-tight">Solicitar Prueba (15 Días)</span>
                <ArrowRight className="w-7 h-7 transition-transform duration-300 transform-gpu lg:group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
