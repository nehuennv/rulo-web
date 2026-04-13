"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";

/* 1. OPTIMIZACIÓN: Los datos estáticos VAN FUERA del componente. 
  Si los dejas adentro, en cada re-render de React se vuelve a crear el array en memoria.
  Además, tenías dos arrays distintos (uno en una constante sin usar y otro en el map). Los unifiqué.
*/
const faqsData = [
  {
    question: "¿Cuánto tiempo lleva realmente la puesta en marcha?",
    answer: "No es de un día para el otro. Lleva entre 5 y 10 días hábiles porque entrenamos a la IA con tu catálogo real, tus precios y tu forma de vender. Prefiero tardar una semana y que el Agente responda perfecto, a instalarlo rápido y que le pase info incorrecta a un cliente."
  },
  {
    question: "¿El Agente puede \"inventar\" respuestas o prometer cosas que no son?",
    answer: "No. rulo opera bajo reglas rígidas que definimos con vos. Solo responde en base a la información oficial de tu negocio (stock, precios, horarios). Si un cliente pregunta algo que no está en su \"cerebro\", el Agente está entrenado para no improvisar y derivar la consulta de forma profesional."
  },
  {
    question: "¿Qué capacidad de respuesta tiene si me entran muchos mensajes juntos?",
    answer: "Es ilimitada. A diferencia de un vendedor humano, rulo puede mantener 100 conversaciones simultáneas con la misma velocidad y calidad de atención. Tu capacidad de ventas deja de depender de cuántas manos tenés disponibles para escribir."
  },
  {
    question: "¿El objetivo del bot es solo informar o realmente cierra la venta?",
    answer: "Está diseñado para vender. No es un chatbot que solo da precios; rulo detecta la intención de compra y usa gatillos de cierre (como ofrecer separar el producto o coordinar la visita al local) para que el interés del cliente se transforme en una transacción real."
  },
  {
    question: "¿Para qué me sirve el informe que me mandan a fin de mes?",
    answer: "Para dejar de adivinar y tomar decisiones con datos. Te decimos exactamente cuántos clientes perdieron el interés porque no tenías stock, cuántos se quejaron del precio y qué producto te están pidiendo que hoy no tenés. Es la información que necesitás para saber qué comprar y cómo invertir mejor en publicidad."
  }
];

/* Animaciones del listado */
const motionVariants = {
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
      variants={motionVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      className={`group relative overflow-visible rounded-xl border transition-all duration-300 transform-gpu ${isOpen

        ? "bg-white/[0.03] border-brand-terracotta/30 shadow-[0_0_30px_rgba(201,82,59,0.05)]"
        : "bg-white/[0.015] border-white/5 lg:hover:bg-white/[0.02] lg:hover:border-white/10"
        }`}
    >
      <button
        id={`faq-button-${index}`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        onClick={onClick}
        /* 2. ACCESIBILIDAD: Eliminé el 'focus:outline-none' puro. Eso rompe la navegación por teclado. 
           Agregué 'focus-visible' para que mantenga estética con mouse pero sea accesible con Tab. */
        className="w-full flex items-center justify-between p-5 sm:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta rounded-xl"
      >
        <span className={`font-sans text-base sm:text-lg md:text-xl font-medium transition-colors duration-300 pr-4 sm:pr-6 ${isOpen ? "text-brand-terracotta" : "text-white group-hover:text-brand-bone"}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? "bg-brand-terracotta border-brand-terracotta text-white rotate-180" : "bg-transparent border-white/20 text-brand-bone/70 group-hover:border-brand-terracotta/50 group-hover:text-brand-terracotta"}`}>
          {isOpen ? <Minus className="w-3.5 h-3.5" aria-hidden="true" /> : <Plus className="w-3.5 h-3.5" aria-hidden="true" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-button-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="overflow-hidden"
          >
            <div className="pb-5 sm:pb-8 px-5 sm:px-8 border-t border-white/5">
              <p className="font-sans text-brand-bone/80 leading-relaxed text-sm sm:text-base md:text-lg mt-3 sm:mt-4">
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  /* 3. SEO: Generamos el JSON-LD dinámicamente para inyectarlo en el DOM.
     Esto es obligatorio para que Google muestre las Rich Snippets de Preguntas Frecuentes. */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof faq.answer === 'string' ? faq.answer : "Visita nuestra web para más detalles."
      }
    }))
  };

  return (
    <section id="faq" className="relative w-full py-16 sm:py-20 lg:py-36 overflow-visible">


      {/* Inyección de Schema Markup para Google (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background ambient light — responsive */}
      <div className="absolute top-0 right-1/4 w-[clamp(200px,35vw,400px)] h-[clamp(200px,35vw,400px)] bg-brand-terracotta/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[clamp(250px,40vw,500px)] h-[clamp(250px,40vw,500px)] bg-brand-dark-lightest/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ----- HEADING ----- */}
        <div className="flex flex-col items-center text-center w-full mb-10 sm:mb-14 lg:mb-16">
          <motion.div
            variants={motionVariants} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px" }}
            className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6"
          >
            <span className="w-6 sm:w-8 h-[1px] bg-brand-terracotta/50"></span>
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-brand-terracotta uppercase flex items-center gap-1.5 sm:gap-2">
              <MessageCircleQuestion className="w-3 sm:w-3.5 h-3 sm:h-3.5" aria-hidden="true" />
              Seguridad Técnica y Operativa
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-brand-terracotta/50"></span>
          </motion.div>

          <motion.h2
            variants={motionVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px" }}
            className="font-sans text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold sm:font-black tracking-tight text-white leading-[1.05] mb-6 sm:mb-8"
          >
            Preguntas <span className="font-accent italic text-brand-terracotta tracking-normal pr-2 sm:pr-4">Frecuentes.</span>
          </motion.h2>
        </div>

        {/* ----- ACORDEÓN DE PREGUNTAS ----- */}
        <div className="flex flex-col gap-4">
          {faqsData.map((faq, index) => (
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