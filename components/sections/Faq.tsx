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
    question: "¿Qué riesgo hay de que me baneen el número de WhatsApp?",
    answer: "Cero riesgo operando con nosotros. rulo usa exclusivamente la Meta API Oficial, la misma infraestructura que usan las empresas Fortune 500. A diferencia de apps de terceros o extensiones de Chrome, tu número opera bajo el ecosistema de Meta directamente. El proceso incluye validación de identidad (CUIT y documentación legal), lo que convierte tu operación en un canal empresarial certificado."
  },
  {
    question: "¿Cómo garantizan que la IA no da información errónea?",
    answer: "rulo no es un chat de texto libre que \"alucina\" respuestas. Es una Máquina de Estados Finita (FSM) con reglas rígidas: el agente solo puede ejecutar acciones predefinidas dentro de un flujo de recuperación. Si el cliente pregunta algo fuera del protocolo de reserva, el sistema se detiene automáticamente y transfiere: \"Te paso con un asesor del local\". No hay improvisación posible."
  },
  {
    question: "¿Esto va a reemplazar a mis vendedores?",
    answer: "Al revés. rulo hace el trabajo que destruye la productividad de tu equipo: el seguimiento de leads fríos. El agente recupera al cliente y confirma la visita. Tu vendedor recibe una notificación privada con el cliente listo para pagar. Eliminamos el trabajo sucio y le devolvemos al equipo solo los momentos de cobro."
  },
  {
    question: "¿Cómo miden si el sistema funcionó?",
    answer: "Nuestro KPI es la cantidad de demanda oscura que el sistema convierte en visitas confirmadas o re-interés legítimo en la compra. El tracking es inmutable: cada interacción queda registrada en el sistema. Vos podés ver exactamente qué leads fueron recuperados, cuándo y con qué protocolo."
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