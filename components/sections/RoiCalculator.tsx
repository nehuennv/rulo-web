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
    <section id="roi" className="relative w-full py-16 sm:py-20 lg:py-36">

      {/* ----- AMBIENT LIGHTS — responsive, sin posiciones negativas ----- */}
      <div className="absolute top-1/4 left-0 w-[clamp(250px,40vw,500px)] h-[clamp(250px,40vw,500px)] bg-brand-terracotta/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-0 w-[clamp(300px,50vw,600px)] h-[clamp(300px,50vw,600px)] bg-[#C9523B]/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(150px,25vw,300px)] h-[clamp(150px,25vw,300px)] bg-[#52B788]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ----- HEADING ----- */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 lg:mb-16 max-w-3xl mx-auto">
          <motion.div variants={fadeUpVariants} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
            <span className="w-6 sm:w-8 h-[1px] bg-brand-terracotta/60"></span>
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-brand-terracotta uppercase">
              La Justificación Financiera
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-brand-terracotta/60"></span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="font-sans text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold sm:font-black tracking-tight text-white leading-[1.05] mb-4 sm:mb-6"
          >
            Una decisión financiera <br className="hidden sm:block" />
            <span className="font-accent italic tracking-normal text-brand-terracotta">puramente matemática.</span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="font-sans text-base sm:text-lg lg:text-xl text-brand-bone/80 font-light leading-relaxed px-2"
          >
            No vendemos tecnología. Optimizamos el CAC que ya pagaste. Cada lead recuperado no es venta nueva: <strong className="text-white font-medium">es ganancia sobre inversión previa.</strong>
          </motion.p>
        </div>

        {/* ----- DESGLOSE DEL CÁLCULO (LA ECUACIÓN) ----- */}
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">

          {/* FILA SUPERIOR: VARIABLE A + VARIABLE B */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 sm:gap-6">

            {/* Paso 1: Ticket Alto */}
            <motion.div
              variants={fadeUpVariants} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              className="group relative flex-1 w-full flex flex-col items-center text-center p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm transition-all duration-300 transform-gpu lg:hover:bg-white/[0.03] lg:hover:-translate-y-1.5 lg:hover:shadow-2xl lg:hover:border-white/10 h-full overflow-hidden"
            >
              {/* Glow sutil — sincronizado */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-terracotta/5 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 flex items-center justify-center rounded-lg sm:rounded-xl border border-brand-bone/10 bg-brand-bone/5 text-brand-bone transition-all duration-300 transform-gpu lg:group-hover:scale-110 lg:group-hover:text-brand-terracotta lg:group-hover:border-brand-terracotta/20 lg:group-hover:bg-brand-terracotta/10">
                <Package className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <p className="font-sans text-brand-bone/60 text-xs sm:text-sm uppercase tracking-widest font-semibold mb-1.5 sm:mb-2">Variable A</p>
              <h3 className="font-sans text-lg sm:text-xl text-brand-bone/90 font-light leading-snug px-1">
                CAC pagado en Meta Ads: <br className="hidden md:block" />
                <strong className="font-sans text-brand-terracotta-light font-bold text-2xl sm:text-3xl tracking-tight block mt-1.5 sm:mt-2">
                  $80.000 por lead
                </strong>
              </h3>
            </motion.div>

            {/* Operador (+) */}
            <motion.div
              variants={fadeUpVariants} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              className="flex-shrink-0 z-10 my-1 md:my-0"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-white/10 bg-[#231F1E] shadow-[0_0_20px_rgba(0,0,0,0.5)] text-brand-bone/50">
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </motion.div>

            {/* Paso 2: Reactivación */}
            <motion.div
              variants={fadeUpVariants} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              className="group relative flex-1 w-full flex flex-col items-center text-center p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm transition-all duration-300 transform-gpu lg:hover:bg-white/[0.03] lg:hover:-translate-y-1.5 lg:hover:shadow-2xl lg:hover:border-white/10 h-full overflow-hidden"
            >
              {/* Glow sutil — sincronizado */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-terracotta/5 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 flex items-center justify-center rounded-lg sm:rounded-xl border border-brand-bone/10 bg-brand-bone/5 text-brand-bone transition-all duration-300 transform-gpu lg:group-hover:scale-110 lg:group-hover:text-brand-terracotta lg:group-hover:border-brand-terracotta/20 lg:group-hover:bg-brand-terracotta/10">
                <RefreshCcwDot className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <p className="font-sans text-brand-bone/60 text-xs sm:text-sm uppercase tracking-widest font-semibold mb-1.5 sm:mb-2">Variable B</p>
              <h3 className="font-sans text-lg sm:text-xl text-brand-bone/90 font-light leading-snug px-1">
                <span className="font-brand font-medium tracking-tighter text-brand-bone text-xl ">rulo</span> reactiva <br className="hidden md:block" />
                <strong className="font-sans text-brand-terracotta-light font-bold text-2xl sm:text-3xl tracking-tight block mt-1.5 sm:mt-2">
                  2 leads de $1.500.000
                </strong>
              </h3>
            </motion.div>

          </div>

          {/* Operador (=) */}
          <motion.div
            variants={fadeUpVariants} custom={6} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="z-10 -my-1 sm:-my-2 relative"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-[#52B788]/20 bg-[#231F1E] shadow-[0_0_20px_rgba(82,183,136,0.15)] text-[#52B788]">
              <Equal className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </motion.div>

          {/* RESULTADO (El ROI) */}
          <motion.div
            variants={fadeUpVariants} custom={7} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="group relative w-full flex flex-col items-center justify-center text-center p-6 sm:p-10 md:p-14 rounded-xl sm:rounded-2xl border border-[#52B788]/30 bg-white/[0.015] backdrop-blur-md overflow-hidden transition-all duration-500 transform-gpu lg:hover:-translate-y-2 lg:hover:shadow-[0_0_80px_rgba(82,183,136,0.15)] lg:hover:bg-white/[0.03]"
          >
            {/* Inner Green Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#52B788]/10 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Glowing Top Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#52B788]/50 to-transparent opacity-50 lg:group-hover:opacity-100 transition-opacity" />

            <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 mb-4 sm:mb-6 flex items-center justify-center rounded-lg sm:rounded-xl border border-[#52B788]/30 bg-[#52B788]/10 text-[#52B788] shadow-[0_0_30px_rgba(82,183,136,0.1)] transition-all duration-500 transform-gpu lg:group-hover:scale-110 lg:group-hover:shadow-[0_0_40px_rgba(82,183,136,0.3)]">
              <CircleDollarSign className="w-7 h-7 sm:w-10 sm:h-10" />
            </div>

            <p className="font-mono text-xs sm:text-sm text-[#52B788] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-1.5 sm:mb-2">Capital Recuperado</p>
            <h3 className="font-accent italic text-white font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] tracking-tight leading-none mb-3 sm:mb-4">
              $3.000.000<span className="text-xl sm:text-3xl text-brand-bone/60 ml-0.5 sm:tracking-normal">extra</span>
            </h3>
            <p className="font-sans text-brand-bone/80 text-base sm:text-lg md:text-xl font-light">
              Sobre inversión publicitaria que ya estaba perdida.
            </p>
          </motion.div>

        </div>

        {/* ----- CIERRE DEL BLOQUE ----- */}
        <motion.div
          variants={fadeUpVariants} custom={8} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          className="mt-10 sm:mt-14 lg:mt-16 pt-6 sm:pt-8 flex justify-center"
        >
          <div className="max-w-2xl text-center px-5 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-lg">
            <p className="font-sans text-brand-bone text-sm sm:text-base md:text-lg font-medium leading-relaxed">
              El abono mensual fijo no varía.<br className="hidden sm:block" />
              <span className="text-white font-bold border-b-2 border-[#52B788] pb-0.5 sm:ml-2 mt-2 sm:mt-0 inline-block">
                Cada recuperación adicional es margen neto directo.
              </span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};