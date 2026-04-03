"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";

/* Animaciones del listado */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9] as const,
    },
  }),
};

/* Componente Interno para cada FAQ */
const AccordionItem = ({
  question,
  answer,
  index,
  isOpen,
  onClick
}: {
  question: string;
  answer: string | React.ReactNode;
  index: number;
  isOpen: boolean;
  onClick: () => void
}) => {
  return (
    <motion.div
      variants={fadeUpVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative overflow-hidden rounded-xl border transition-all duration-300 transform-gpu ${isOpen
          ? "bg-white/[0.03] border-brand-yellow/30 shadow-[0_0_30px_rgba(244,180,0,0.05)]"
          : "bg-white/[0.015] border-white/5 lg:hover:bg-white/[0.02] lg:hover:border-white/10"
        }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
      >
        <span className={`font-sans text-lg sm:text-xl font-medium transition-colors duration-300 pr-6 ${isOpen ? "text-brand-yellow" : "text-white group-hover:text-brand-cream"}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? "bg-brand-yellow border-brand-yellow text-brand-purple rotate-180" : "bg-transparent border-white/20 text-brand-cream/70 group-hover:border-brand-yellow/50 group-hover:text-brand-yellow"}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="overflow-hidden"
          >
            <div className="pb-6 sm:pb-8 px-6 sm:px-8 border-t border-white/5">
              <p className="font-sans text-brand-cream/80 leading-relaxed text-base sm:text-lg mt-4">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // El primero abierto por defecto

  const faqs = [
    {
      question: "¿Le tengo que dar mi número a ustedes?",
      answer: "Sí, el sistema se conecta a tu línea de WhatsApp Business a través de Meta API. Nosotros armamos la infraestructura, pero la línea sigue siendo completamente tuya."
    },
    {
      question: "¿El bot va a responder estupideces a mis clientes?",
      answer: (
        <>
          No es un bot conversacional abierto estilo ChatGPT libre. Es un agente de recuperación con <strong className="text-white font-medium">reglas estrictas</strong>. Si el cliente pregunta algo fuera del guion de reserva, el bot se detiene y avisa: <em className="text-brand-yellow not-italic">"Te paso con un vendedor humano del local"</em>.
        </>
      )
    },
    {
      question: "¿Cómo saben si la venta se cerró?",
      answer: (
        <>
          A nosotros no nos importa tu caja final. Nuestro KPI (y lo que vos pagás) es <strong className="text-white font-medium">la cantidad de clientes muertos que el bot logra volver a sentar en tu mostrador</strong> o re-interesar legítimamente en la compra.
        </>
      )
    }
  ];

  return (
    <section id="faq" className="relative w-full py-24 lg:py-36  ">

      {/* Background ambient light */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-yellow/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-brand-purple-lightest/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ----- HEADING ----- */}
        <div className="flex flex-col items-center text-center w-full mb-16">
          <motion.div
            variants={fadeUpVariants} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-brand-yellow/50"></span>
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-brand-yellow uppercase flex items-center gap-2">
              <MessageCircleQuestion className="w-3.5 h-3.5" />
              Matando objeciones
            </span>
            <span className="w-8 h-[1px] bg-brand-yellow/50"></span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-8"
          >
            Preguntas <span className="font-accent italic text-brand-yellow tracking-normal pr-4">Frecuentes.</span>
          </motion.h2>
        </div>

        {/* ----- ACORDEÓN DE PREGUNTAS ----- */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
