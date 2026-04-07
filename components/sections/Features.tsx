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
    <section id="features" className="relative w-full py-16 sm:py-20 lg:py-36">

      {/* Luz ambiental terracota central — responsive */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,800px)] h-[clamp(200px,40vh,500px)] bg-brand-terracotta/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-14 lg:gap-24">

        {/* ----- ENCABEZADO (Header) ----- */}
        <div className="flex flex-col items-center text-center w-full max-w-3xl mx-auto">
          {/* Pre-título Tech */}
          <motion.div
            variants={fadeUpVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full bg-brand-terracotta opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 bg-brand-terracotta"></span>
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-brand-bone/30"></span>
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-brand-bone/60 uppercase">
              La Infraestructura Trabajando
            </span>
          </motion.div>

          {/* H2 Principal — escala progresiva */}
          <motion.h2
            variants={fadeUpVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="font-sans text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold sm:font-black tracking-tight text-white leading-[1.05] mb-4 sm:mb-6"
          >
            Un sistema de recuperación <br className="hidden sm:block" />
            <span className="font-accent italic text-brand-terracotta tracking-normal pr-2 sm:pr-4">que corre solo.</span>
          </motion.h2>
        </div>

        {/* ----- BENTO GRID DE FEATURES ----- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">

          {/* Feature 1: Reacción Táctica */}
          <motion.div
            variants={fadeUpVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="group relative flex flex-col justify-between p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm overflow-hidden transition-all duration-300 transform-gpu lg:hover:bg-white/[0.03] lg:hover:-translate-y-1.5 lg:hover:shadow-2xl lg:hover:border-white/10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-terracotta/5 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Adorno Visible */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-60 lg:group-hover:opacity-100 transition-all duration-500 pointer-events-none transform-gpu lg:group-hover:scale-105">
              <div className="bg-brand-terracotta/15 border border-brand-terracotta/30 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 backdrop-blur-md shadow-[0_0_15px_rgba(201,82,59,0.1)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-terracotta opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-terracotta"></span>
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-terracotta">FOMO ACTIVO</span>
              </div>
            </div>

            <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 mb-5 sm:mb-8 flex items-center justify-center rounded-lg sm:rounded-xl border border-brand-bone/10 bg-brand-bone/5 text-brand-bone transition-transform duration-300 transform-gpu lg:group-hover:scale-110 lg:group-hover:text-brand-terracotta lg:group-hover:border-brand-terracotta/20 lg:group-hover:bg-brand-terracotta/10">
              <Clock className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h3 className="font-accent italic text-white font-bold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 tracking-wide">
                Reacción Táctica.
              </h3>
              <p className="font-sans text-brand-bone/70 leading-relaxed text-sm sm:text-base md:text-lg">
                Sin disparos al azar. <span className="font-brand font-medium tracking-tighter text-brand-bone text-xl ">rulo</span> lee tu horario comercial y activa protocolos de escasez calibrados: <em className="text-white italic">&quot;Cerramos la caja, ¿te separo el equipo para mañana?&quot;</em>.
              </p>
            </div>
          </motion.div>

          {/* Feature 2: Tráfico Físico */}
          <motion.div
            variants={fadeUpVariants} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="group relative flex flex-col justify-between p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm overflow-hidden transition-all duration-300 transform-gpu lg:hover:bg-white/[0.03] lg:hover:-translate-y-1.5 lg:hover:shadow-2xl lg:hover:border-white/10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-bone/5 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Adorno Visible */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-60 lg:group-hover:opacity-100 transition-all duration-500 pointer-events-none transform-gpu lg:group-hover:scale-105">
              <div className="bg-brand-bone/10 border border-brand-bone/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl rounded-tr-sm flex items-center gap-1.5 sm:gap-2 backdrop-blur-md shadow-sm">
                <span className="font-sans text-[10px] sm:text-[11px] font-medium text-brand-bone">¿Te lo separo hoy?</span>
                <MessageSquareText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-terracotta" />
              </div>
            </div>

            <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 mb-5 sm:mb-8 flex items-center justify-center rounded-lg sm:rounded-xl border border-brand-bone/10 bg-brand-bone/5 text-brand-bone transition-transform duration-300 transform-gpu lg:group-hover:scale-110 lg:group-hover:text-brand-terracotta lg:group-hover:border-brand-terracotta/20 lg:group-hover:bg-brand-terracotta/10">
              <Store className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div className="relative z-10">
              <h3 className="font-accent italic text-white font-bold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 tracking-wide">
                Tráfico Físico.
              </h3>
              <p className="font-sans text-brand-bone/70 leading-relaxed text-sm sm:text-base md:text-lg">
                No procesamos pagos online para blindar tu operación. El agente usa <strong className="text-white font-medium">sesgo de escasez</strong> (&quot;<em className="tracking-wide text-brand-bone/90">¿Te lo separo hoy?</em>&quot;) para convertir leads digitales en visitas al local.
              </p>
            </div>
          </motion.div>

          {/* Feature 3: Sin Comisiones */}
          <motion.div
            variants={fadeUpVariants} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="group relative flex flex-col justify-between p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm overflow-hidden transition-all duration-300 transform-gpu lg:hover:bg-white/[0.03] lg:hover:-translate-y-1.5 lg:hover:shadow-2xl lg:hover:border-white/10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-bone/5 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Adorno Visible */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-60 lg:group-hover:opacity-100 transition-all duration-500 pointer-events-none transform-gpu lg:group-hover:scale-105">
              <div className="bg-brand-bone/10 border border-brand-bone/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 backdrop-blur-md shadow-sm">
                <Infinity className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-bone" />
                <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-bone">Tarifa Plana</span>
              </div>
            </div>

            <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 mb-5 sm:mb-8 flex items-center justify-center rounded-lg sm:rounded-xl border border-brand-bone/10 bg-brand-bone/5 text-brand-bone transition-transform duration-300 transform-gpu lg:group-hover:scale-110 lg:group-hover:text-brand-terracotta lg:group-hover:border-brand-terracotta/20 lg:group-hover:bg-brand-terracotta/10">
              <Infinity className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h3 className="font-accent italic text-white font-bold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 tracking-wide transition-colors duration-300 lg:group-hover:text-brand-bone">
                Tarifa Fija. Sin Comisiones.
              </h3>
              <p className="font-sans text-brand-bone/70 leading-relaxed text-sm sm:text-base md:text-lg">
                Modelo de abono plano. Si recuperamos 5 clientes o 50 en un día táctico, el costo es <strong className="text-white font-medium">exactamente el mismo</strong>. Tu upside es ilimitado.
              </p>
            </div>
          </motion.div>

          {/* Feature 4: El Mejor Amigo de tu Empleado */}
          <motion.div
            variants={fadeUpVariants} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="group relative flex flex-col justify-between p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm overflow-hidden transition-all duration-300 transform-gpu lg:hover:bg-white/[0.03] lg:hover:-translate-y-1.5 lg:hover:shadow-2xl lg:hover:border-white/10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-terracotta/5 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Adorno Visible */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-60 lg:group-hover:opacity-100 transition-all duration-500 pointer-events-none transform-gpu lg:group-hover:scale-105">
              <div className="bg-brand-terracotta/15 border border-brand-terracotta/30 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-2xl rounded-tl-sm flex items-center gap-1.5 sm:gap-2 backdrop-blur-md shadow-[0_0_15px_rgba(201,82,59,0.1)]">
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-brand-terracotta/20 flex items-center justify-center">
                  <Users className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-brand-terracotta" />
                </div>
                <span className="font-sans text-[10px] sm:text-[11px] font-medium text-white/90">Viene &quot;X&quot; persona</span>
              </div>
            </div>

            <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 mb-5 sm:mb-8 flex items-center justify-center rounded-lg sm:rounded-xl border border-brand-bone/10 bg-brand-bone/5 text-brand-bone transition-transform duration-300 transform-gpu lg:group-hover:scale-110 lg:group-hover:text-brand-terracotta lg:group-hover:border-brand-terracotta/20 lg:group-hover:bg-brand-terracotta/10">
              <Users className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div className="relative z-10">
              <h3 className="font-accent italic text-white font-bold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 tracking-wide">
                El Mejor Aliado de tu Vendedor.
              </h3>
              <p className="font-sans text-brand-bone/70 leading-relaxed text-sm sm:text-base md:text-lg">
                No tocamos comisiones. Hacemos el trabajo sucio. Cuando hay visita confirmada, <span className="font-brand font-medium tracking-tighter text-brand-bone text-xl ">rulo</span> alerta al equipo por privado. Ellos solo cobran.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};