"use client";

import { motion } from "framer-motion";
import { Package, RefreshCcwDot, CircleDollarSign, Plus, Equal } from "lucide-react";

/* Animaciones Performantes */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
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

export const RoiCalculator = () => {
  return (
    <section id="roi" className="relative w-full py-24 lg:py-36 ">

      {/* ----- AMBIENT LIGHTS (Terracotta / Amber Shift) ----- */}
      {/* Este bloque usa iluminación cálida/terracota simulando "oro/inversión" pero respeta la grilla maestra */}
      <div className="absolute top-1/4 left-[-5%] w-[500px] h-[500px] bg-[#E85D04]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-[#DC2F02]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#a0ff6a]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ----- HEADING ----- */}
        <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
          <motion.div variants={fadeUpVariants} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#E85D04]/60"></span>
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#FFBA08] uppercase">
              La Justificación Financiera
            </span>
            <span className="w-8 h-[1px] bg-[#E85D04]/60"></span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-6"
          >
            Es una decisión financiera <br className="hidden sm:block" />
            <span className="font-accent italic tracking-normal text-brand-yellow">puramente matemática.</span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="font-sans text-lg lg:text-xl text-brand-cream/80 font-light leading-relaxed"
          >
            Nuestro abono mensual fijo cuesta <strong className="text-white font-medium">menos que la ganancia</strong> que te deja un solo ticket alto.
          </motion.p>
        </div>

        {/* ----- DESGLOSE DEL CÁLCULO (LA ECUACIÓN) ----- */}
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-6 lg:space-y-8">

          {/* Paso 1: Ticket Alto */}
          <motion.div
            variants={fadeUpVariants} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="w-full sm:w-[80%] flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm lg:hover:bg-white/[0.03] transition-colors duration-300 transform-gpu"
          >
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl border border-brand-cream/10 bg-brand-cream/5 text-brand-cream">
              <Package className="w-8 h-8 opacity-80" />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-sans text-brand-cream/60 text-sm uppercase tracking-widest font-semibold mb-1">Variable A</p>
              <h3 className="font-sans text-xl sm:text-2xl text-brand-cream/90 font-light">Si vendés equipos de <strong className="font-accent italic text-brand-yellow font-bold text-2xl sm:text-3xl tracking-wide ml-1">$1.500.000</strong>...</h3>
            </div>
          </motion.div>

          {/* Operador (+) */}
          <motion.div variants={fadeUpVariants} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 bg-black/50 shadow-[0_0_15px_rgba(255,255,255,0.05)] text-brand-cream/50">
              <Plus className="w-5 h-5" />
            </div>
          </motion.div>

          {/* Paso 2: Reactivación */}
          <motion.div
            variants={fadeUpVariants} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="w-full sm:w-[80%] flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm lg:hover:bg-white/[0.03] transition-colors duration-300 transform-gpu"
          >
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-xl border border-[#E85D04]/20 bg-[#E85D04]/10 text-[#E85D04]">
              <RefreshCcwDot className="w-8 h-8 opacity-90" />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-sans text-brand-cream/60 text-sm uppercase tracking-widest font-semibold mb-1">Variable B</p>
              <h3 className="font-sans text-xl sm:text-2xl text-brand-cream/90 font-light">Y <strong className="font-brand font-bold tracking-tighter text-brand-yellow">rulo<span className="text-brand-cream">.</span></strong> te reactiva <strong className="font-accent italic text-[#FFBA08] font-bold text-2xl sm:text-3xl tracking-wide">solo 2 clientes</strong> al mes...</h3>
            </div>
          </motion.div>

          {/* Operador (=) */}
          <motion.div variants={fadeUpVariants} custom={6} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#a0ff6a]/20 bg-[#a0ff6a]/5 shadow-[0_0_20px_rgba(160,255,106,0.1)] text-[#a0ff6a]">
              <Equal className="w-5 h-5" />
            </div>
          </motion.div>

          {/* RESULTADO (El ROI) */}
          <motion.div
            variants={fadeUpVariants} custom={7} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="group relative w-full sm:w-[90%] flex flex-col items-center justify-center text-center p-10 sm:p-14 rounded-2xl border border-brand-yellow/30 bg-white/[0.015] backdrop-blur-md overflow-hidden transition-all duration-500 transform-gpu lg:hover:-translate-y-2 lg:hover:shadow-[0_0_80px_rgba(255,186,8,0.15)] lg:hover:bg-white/[0.03]"
          >
            {/* Inner Gold Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-brand-yellow/10 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Glowing Top Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent opacity-50 lg:group-hover:opacity-100 transition-opacity" />

            <div className="flex-shrink-0 w-20 h-20 mb-6 flex items-center justify-center rounded-xl border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow shadow-[0_0_30px_rgba(255,186,8,0.1)] transition-transform duration-500 lg:group-hover:scale-110">
              <CircleDollarSign className="w-10 h-10" />
            </div>

            <p className="font-mono text-sm text-brand-yellow font-semibold uppercase tracking-[0.2em] mb-2">Retorno Generado</p>
            <h3 className="font-accent italic text-white font-bold text-5xl md:text-6xl lg:text-[5rem] tracking-tight leading-none mb-4">
              $3.000.000 <span className="text-3xl text-brand-cream/50 ml-1">extra</span>
            </h3>
            <p className="font-sans text-brand-cream/80 text-lg sm:text-xl font-light">
              Que literalmente ya dabas por muertos.
            </p>
          </motion.div>

        </div>

        {/* ----- CIERRE DEL BLOQUE ----- */}
        <motion.div
          variants={fadeUpVariants} custom={8} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          className="mt-16 pt-10 flex justify-center"
        >
          <div className="max-w-2xl text-center px-6 py-4 rounded-xl border border-white/5 bg-white/[0.015] backdrop-blur-md">
            <p className="font-sans text-brand-cream/90 text-sm md:text-base font-medium">
              Nuestro costo sigue siendo el mismo abono fijo.              <br />

              <span className="text-white font-bold border-b-2 border-brand-yellow pb-0.5 ml-2">El retorno de inversión es automático.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
