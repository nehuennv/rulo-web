"use client";

import { motion } from "framer-motion";
import { WhatsappDemo } from "@/components/visuals/WhatsappDemo";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { useCallback } from "react";

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

export const InterventionSection = () => {
  const openCalModal = useCallback(() => {
    (window as Window & { Cal?: Function }).Cal?.("modal", {
      calLink: "somosrulo/primer-reunion",
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "light",
      },
    });
  }, []);

  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-32 overflow-visible">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-brand-terracotta/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12 lg:gap-20">

          {/* ── Content Column (Clean Left Alignment) ── */}
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-start text-left lg:text-left gap-6 sm:gap-8">

            {/* Pre-título */}
            <motion.div
              variants={motionVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-start lg:justify-start gap-3"
            >
              <span className="w-8 h-[1px] bg-brand-terracotta" />
              <span className="font-mono text-xs font-bold tracking-widest text-brand-terracotta uppercase">
                Cómo cierra rulo
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={motionVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight"
            >
              <span className="sm:hidden">
                Tu equipo se rinde. <br />
                <span className="font-accent italic text-brand-terracotta">
                  rulo recién empieza.
                </span>
              </span>
              <span className="hidden sm:inline">
                Donde el humano se desconecta, <br />
                <span className="font-accent italic text-brand-terracotta">
                  rulo entra en acción.
                </span>
              </span>
            </motion.h2>

            {/* Párrafo + feature items */}
            <motion.div
              variants={motionVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 flex flex-col items-start"
            >
              <p className="font-sans text-lg text-brand-bone/70 leading-relaxed max-w-xl mx-0">
                No es un chatbot con respuestas enlatadas. Es un agente que lee el momento, detecta la objeción y activa el protocolo correcto para que el cliente tome la decisión ahora.
              </p>

              {/* ── Feature Items: Clean Horizontal List ── */}
              <div className="flex flex-col gap-4 w-full">

                {/* Item 1 */}
                <div className="group flex flex-row items-start gap-4 sm:gap-6 py-2 text-left">
                  {/* Icono: Naked on mobile, Boxed on desktop */}
                  <div className="flex-shrink-0 w-8 h-8 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-transparent sm:bg-brand-terracotta/10 border-none sm:border sm:border-brand-terracotta/20 transition-all duration-300">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-brand-terracotta transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-white font-bold text-base leading-tight">Detección de intención</h4>
                    <p className="text-sm text-brand-bone/50 leading-relaxed">
                      rulo entiende qué quiere el cliente desde el primer mensaje y adapta la conversación para llevarlo al cierre, no al abandono.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="group flex flex-row items-start gap-4 sm:gap-6 py-2 text-left">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-transparent sm:bg-brand-terracotta/10 border-none sm:border sm:border-brand-terracotta/20 transition-all duration-300">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-brand-terracotta transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-white font-bold text-base leading-tight">Urgencia real, no fabricada</h4>
                    <p className="text-sm text-brand-bone/50 leading-relaxed">
                      Los protocolos de cierre están calibrados para el contexto de tu negocio. Sin presión artificial. Con resultados medibles.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* ── CTA ── */}
            <motion.div
              variants={motionVariants}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <button 
                onClick={openCalModal}
                className="group relative flex items-center justify-center gap-3 px-6 py-4 bg-brand-terracotta/10 border border-brand-terracotta/30 text-brand-bone font-bold text-base overflow-hidden transition-all duration-300 rounded-sm hover:border-brand-terracotta hover:text-white cursor-pointer w-full sm:w-auto min-w-[240px]"
              >
                <span className="absolute inset-0 bg-brand-terracotta translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 uppercase tracking-wider">
                  <span className="sm:hidden">Reservar Auditoría</span>
                  <span className="hidden sm:inline">Reservar Auditoría de Ventas</span>
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>

          </div>

          {/* ── Visual Column ── */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center relative">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] aspect-square bg-brand-terracotta/20 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative z-10 w-full flex justify-center"
            >
              <WhatsappDemo />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};