"use client";

import { motion } from "framer-motion";
import { Clock, Store, Infinity, Users, MessageSquareText } from "lucide-react";

/* Animaciones */
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

export const Features = () => {
  return (
    <section id="features" className="relative w-full py-24 lg:py-36">

      {/* Luz ambiental dorada central que se cuela por atrás */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[500px] bg-brand-yellow/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 lg:gap-24">

        {/* ----- ENCABEZADO (Header) ----- */}
        <div className="flex flex-col items-center text-center w-full max-w-3xl mx-auto">
          {/* Pre-título Tech */}
          <motion.div
            variants={fadeUpVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full bg-[#a0ff6a] opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 bg-[#a0ff6a]"></span>
            </span>
            <span className="w-8 h-[1px] bg-brand-cream/30"></span>
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-brand-cream/60 uppercase">
              El Sistema Trabajando
            </span>
          </motion.div>

          {/* H2 Principal */}
          <motion.h2
            variants={fadeUpVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-6"
          >
            Un loop de recuperación <br />
            <span className="font-accent italic text-brand-yellow tracking-normal pr-4">que corre solo.</span>
          </motion.h2>
        </div>

        {/* ----- BENTO GRID DE FEATURES ----- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">

          {/* Feature 1: Timing Quirúrgico */}
          <motion.div
            variants={fadeUpVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm overflow-hidden transition-all duration-300 transform-gpu lg:hover:bg-white/[0.03] lg:hover:-translate-y-1.5 lg:hover:shadow-2xl lg:hover:border-white/10"
          >
            {/* Glow Interno */}
            <div className="absolute inset-0 bg-radial-gradient from-brand-yellow/5 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Decoración Visual Absoluta */}
            <div className="absolute top-6 right-6 opacity-20 lg:group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
              <div className="bg-brand-yellow/10 border border-brand-yellow/20 px-3 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-yellow"></span>
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-brand-yellow">FOMO INSTANTÁNEO</span>
              </div>
            </div>

            <div className="flex-shrink-0 w-14 h-14 mb-8 flex items-center justify-center rounded-xl border border-brand-yellow/20 bg-brand-yellow/10 text-brand-yellow transition-transform duration-300 transform-gpu lg:group-hover:scale-110 lg:group-hover:bg-brand-yellow/20">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-accent italic text-white font-bold text-3xl mb-3 tracking-wide">
                Reacción Táctica.
              </h3>
              <p className="font-sans text-brand-cream/70 leading-relaxed text-base sm:text-lg">
                Cero alarmas al azar. <span className="font-brand font-bold tracking-tighter text-brand-yellow">rulo<span className="text-brand-cream">.</span></span> lee tu horario comercial y ataca usando escasez: <em className="text-white italic">"Cerramos la caja, ¿te separo el equipo para mañana temprano?"</em>.
              </p>
            </div>
          </motion.div>

          {/* Feature 2: Tráfico Físico */}
          <motion.div
            variants={fadeUpVariants} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm overflow-hidden transition-all duration-300 transform-gpu lg:hover:bg-white/[0.03] lg:hover:-translate-y-1.5 lg:hover:shadow-2xl lg:hover:border-white/10"
          >
            {/* Decoración Visual Absoluta (Chat simulado) */}
            <div className="absolute top-6 right-6 opacity-20 lg:group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
              <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-2xl rounded-tr-sm flex items-center gap-2 backdrop-blur-md">
                <span className="font-sans text-[11px] font-medium text-white">¿Te lo separo para hoy?</span>
                <MessageSquareText className="w-3.5 h-3.5 text-[#a0ff6a]" />
              </div>
            </div>

            <div className="flex-shrink-0 w-14 h-14 mb-8 flex items-center justify-center rounded-xl border border-brand-cream/10 bg-brand-cream/5 text-brand-cream transition-transform duration-300 transform-gpu lg:group-hover:scale-110">
              <Store className="w-7 h-7" />
            </div>
            <div className="relative z-10">
              <h3 className="font-accent italic text-white font-bold text-3xl mb-3 tracking-wide">
                Tráfico Físico.
              </h3>
              <p className="font-sans text-brand-cream/70 leading-relaxed text-base sm:text-lg">
                No cerramos pagos online para evitar estafas. El bot usa <strong className="text-white font-medium">sesgos de escasez</strong> ("<em className="font-serif italic tracking-wide text-brand-cream/90">¿Te lo separo para hoy?</em>") para llevar físicamente al cliente a tu local.
              </p>
            </div>
          </motion.div>

          {/* Feature 3: Sin Comisiones */}
          <motion.div
            variants={fadeUpVariants} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm overflow-hidden transition-all duration-300 transform-gpu lg:hover:bg-white/[0.03] lg:hover:-translate-y-1.5 lg:hover:shadow-2xl lg:hover:border-white/10"
          >
            {/* Decoración Visual Absoluta */}
            <div className="absolute top-6 right-6 opacity-20 lg:group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
              <div className="bg-[#a0ff6a]/10 border border-[#a0ff6a]/20 px-3 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-md">
                <Infinity className="w-3.5 h-3.5 text-[#a0ff6a]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#a0ff6a]">Tarifa Plana</span>
              </div>
            </div>

            <div className="flex-shrink-0 w-14 h-14 mb-8 flex items-center justify-center rounded-xl border border-brand-cream/10 bg-brand-cream/5 text-brand-cream transition-transform duration-300 transform-gpu lg:group-hover:scale-110">
              <Infinity className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-accent italic text-[#a0ff6a] font-bold text-3xl mb-3 tracking-wide transition-colors duration-300 lg:group-hover:text-[#b4ff87]">
                Sin Comisiones.
              </h3>
              <p className="font-sans text-brand-cream/70 leading-relaxed text-base sm:text-lg">
                Nuestro modelo es de tarifa plana. Si el bot te recupera 5 clientes o te recupera 100 en un día táctico, nos pagás <strong className="text-white font-medium">exactamente el mismo abono</strong> mensual.
              </p>
            </div>
          </motion.div>

          {/* Feature 4: El Mejor Amigo de tu Empleado */}
          <motion.div
            variants={fadeUpVariants} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm overflow-hidden transition-all duration-300 transform-gpu lg:hover:bg-white/[0.03] lg:hover:-translate-y-1.5 lg:hover:shadow-2xl lg:hover:border-white/10"
          >
            {/* Decoración Visual Absoluta */}
            <div className="absolute top-6 right-6 opacity-20 lg:group-hover:opacity-50 transition-opacity duration-500 pointer-events-none">
              <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-2xl rounded-tl-sm flex items-center gap-2 backdrop-blur-md">
                <div className="w-4 h-4 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                  <Users className="w-2.5 h-2.5 text-brand-yellow" />
                </div>
                <span className="font-sans text-[11px] font-medium text-white/90">Viene "X" persona</span>
              </div>
            </div>

            <div className="flex-shrink-0 w-14 h-14 mb-8 flex items-center justify-center rounded-xl border border-brand-yellow/20 bg-brand-yellow/10 text-brand-yellow transition-transform duration-300 transform-gpu lg:group-hover:scale-110 lg:group-hover:bg-brand-yellow/20">
              <Users className="w-7 h-7" />
            </div>
            <div className="relative z-10">
              <h3 className="font-accent italic text-white font-bold text-3xl mb-3 tracking-wide">
                El Mejor Aliado de tu Vendedor.
              </h3>
              <p className="font-sans text-brand-cream/70 leading-relaxed text-base sm:text-lg">
                No robamos comisiones, hacemos el trabajo sucio. Cuando hay visita confirmada, <span className="font-brand font-bold tracking-tighter text-brand-yellow">rulo<span className="text-brand-cream">.</span></span> le avisa a tu equipo por privado. Ellos solo se dedican a cobrar.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
