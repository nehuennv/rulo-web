"use client";

import { AlertTriangle, Wallet, Activity } from "lucide-react";
import { motion } from "framer-motion";

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

export const ProblemAgitation = () => {
  return (
    <section id="problem-agitation" className="relative w-full py-24 lg:py-36">
      
      {/* Background ambient light */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-yellow/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple-lightest/15 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Main Grid Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* ----- LADO IZQUIERDO: TEXTOS NARRATIVOS ----- */}
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="w-full lg:w-[45%] flex flex-col gap-6"
        >
          {/* Pre-título Tech */}
          <motion.div variants={fadeUpVariants} custom={0} className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-brand-yellow/80"></span>
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-brand-yellow uppercase">
              System Error // Cuello de Botella
            </span>
          </motion.div>

          {/* Heading Principal */}
          <motion.h2 variants={fadeUpVariants} custom={1} className="font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
            El 60% de tus consultas <br className="hidden sm:block" />
            <span className="font-accent italic tracking-normal text-brand-yellow pr-4">
              mueren en la meta.
            </span>
          </motion.h2>

          {/* Párrafo / Explicación */}
          <motion.p variants={fadeUpVariants} custom={2} className="font-sans text-lg lg:text-xl text-brand-cream/80 leading-relaxed font-light mt-2 max-w-lg">
            Invertís fortuna en mercadería y en pauta para que el cliente llegue a tu WhatsApp. Pero cuando tu equipo pasa el precio y el cliente clava el visto, <strong className="text-white font-bold border-b-2 border-brand-yellow pb-0.5">el seguimiento manual es imposible.</strong>
            <span className="block mt-4 text-brand-cream/50 text-base">
              El vendedor se olvida, la charla baja en la bandeja, y perdiste la venta.
            </span>
          </motion.p>
        </motion.div>

        {/* ----- LADO DERECHO: TARJETAS DE DOLOR ----- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-[55%] flex flex-col gap-5"
        >
          {[
            {
              icon: <Wallet className="w-6 h-6" />,
              title: "Capital estancado",
              desc: "Cada 'visto' en un ticket de $1.000.000 es ganancia neta que le regalaste al olvido.",
              color: "text-brand-yellow",
              bg: "bg-brand-yellow/10 border-brand-yellow/20"
            },
            {
              icon: <AlertTriangle className="w-6 h-6" />,
              title: "Empleados colapsados",
              desc: "Tu equipo está para cerrar a los que están calientes, no para rogarle al que dejó de responder.",
              color: "text-[#fe6b6b]",
              bg: "bg-[#fe6b6b]/10 border-[#fe6b6b]/20"
            },
            {
              icon: <Activity className="w-6 h-6" />,
              title: "Cero trazabilidad",
              desc: "No sabés cuánta demanda ni facturación real estás perdiendo exactamente por día.",
              color: "text-brand-cream",
              bg: "bg-brand-cream/5 border-brand-cream/10"
            }
          ].map((dolor, index) => (
             <motion.div 
                key={index}
                variants={fadeUpVariants}
                custom={index + 2}
                className="group relative flex items-start gap-6 p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-sm overflow-hidden transition-all duration-300 transform-gpu lg:hover:bg-white/[0.03] lg:hover:-translate-y-1.5 lg:hover:shadow-2xl lg:hover:border-white/10"
             >
                {/* Glow interno radial sutil al fondo en desktop */}
                <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className={`mt-1 flex-shrink-0 p-3 sm:p-4 rounded-lg border ${dolor.bg} ${dolor.color} transition-transform duration-300 transform-gpu lg:group-hover:scale-110`}>
                  {dolor.icon}
                </div>
                <div className="flex flex-col pt-1">
                  <h3 className="font-accent italic text-white font-bold text-2xl sm:text-3xl mb-2 tracking-wide">
                    {dolor.title}
                  </h3>
                  <p className="font-sans text-brand-cream/60 leading-relaxed text-sm sm:text-base font-medium">
                    {dolor.desc}
                  </p>
                </div>
             </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
