"use client";

import { Bot, TrendingUp, ShieldCheck, ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSplashDone } from "@/components/SplashScreen";

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

export function HeroBlock() {
  const splashDone = useSplashDone();
  const animState = splashDone ? "visible" : "hidden";

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center">

      {/* ----- FONDO AMBIENTE ----- */}
      {/* Ambient glows — sin overflow-hidden para que se derramen entre secciones */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(80vw,1000px)] h-[clamp(200px,40vh,500px)] bg-brand-terracotta/15 blur-[80px] md:blur-[120px] rounded-[100%] pointer-events-none mix-blend-screen" />
      <div className="absolute top-[20%] right-0 w-[clamp(150px,30vw,400px)] h-[clamp(150px,30vw,400px)] bg-brand-dark-light/25 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[clamp(200px,40vw,600px)] h-[clamp(200px,35vw,500px)] bg-brand-dark-lightest/15 blur-[100px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      {/* ----- FLOATING UI ELEMENTS (Solo visible en pantallas grandes donde no se superponen) ----- */}
      {/* Tarjeta izquierda: "Interceptando" — solo en 2xl+ (1536px) para pantallas realmente anchas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={splashDone ? { opacity: 1, y: [0, -10, 0] } : { opacity: 0, y: 20 }}
        transition={{ opacity: { delay: 0.6, duration: 1 }, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
        className="hidden 2xl:flex absolute top-[28%] left-[4%] max-w-[260px] flex-col gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.015] backdrop-blur-xl rotate-[-3deg] shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-1">
          <Bot className="w-4 h-4 text-brand-terracotta" />
          <span className="font-mono text-[10px] text-brand-terracotta uppercase tracking-widest">Interceptando #0482</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-sans text-xs text-brand-bone/50">Cliente en Visto:</span>
          <p className="font-sans text-sm text-brand-bone/90 font-medium">&quot;Hola, dejé mi carrito ayer...&quot;</p>
        </div>
        <div className="w-full h-[1px] bg-brand-bone/10 my-1" />
        <p className="font-sans text-xs text-[#52B788] font-medium tracking-wide">→ Procesando respuesta comercial</p>
      </motion.div>

      {/* Tarjeta derecha: "Cobro Exitoso" — solo en xl+ (1280px) para no superponerse con botones */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={splashDone ? { opacity: 1, y: [0, 10, 0] } : { opacity: 0, y: -20 }}
        transition={{ opacity: { delay: 0.8, duration: 1 }, y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 } }}
        className="hidden xl:flex absolute bottom-[28%] right-[4%] max-w-[240px] flex-col gap-3 p-4 rounded-2xl border border-white/10 bg-white/[0.015] backdrop-blur-xl rotate-[2deg] shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp className="w-4 h-4 text-[#52B788]" />
          <span className="font-mono text-[10px] text-[#52B788] uppercase tracking-widest">Cobro Exitoso</span>
        </div>
        <p className="font-sans text-xl text-white font-bold tracking-tight">+$1.200.000 ARS</p>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse" />
          <p className="font-sans text-xs text-brand-bone/50 uppercase tracking-widest">Acreditado 03:41 AM</p>
        </div>
      </motion.div>

      {/* ----- CONTENIDO PRINCIPAL ----- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 xl:py-32 flex flex-col items-center text-center">

        {/* Tecnical Status / No-Badge Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={animState}
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-8 sm:mb-10 px-2"
        >
          <div className="flex items-center gap-2 bg-brand-terracotta/10 border border-brand-terracotta/20 px-3 py-1 rounded-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full bg-brand-terracotta opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 bg-brand-terracotta"></span>
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-brand-terracotta uppercase">
              Auditoría 24/7
            </span>
          </div>
          <span className="hidden sm:block w-8 h-[1px] bg-brand-bone/20"></span>
          <span className="font-sans text-[10px] sm:text-xs font-medium tracking-widest text-brand-bone/50 uppercase text-center">
            Recuperando clientes que te clavaron el visto
          </span>
        </motion.div>

        {/* Título Principal — escala progresiva: 4xl → 5xl → 6xl → 7xl → 5.5rem */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate={animState}
          variants={fadeUpVariants}
          className="font-accent text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium tracking-normal text-white leading-[1.1] mb-6 sm:mb-8 w-full"
        >
          <span className="block text-white mb-1">Automatizá el rescate</span>
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-brand-terracotta opacity-10 blur-2xl rounded-full"></span>
            <span className="relative italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-terracotta via-brand-terracotta-light to-brand-terracotta bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite] pr-2 sm:pr-4">
              de ventas estancadas.
            </span>
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          custom={2}
          initial="hidden"
          animate={animState}
          variants={fadeUpVariants}
          className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-brand-bone/80 max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed font-light px-2"
        >
          <strong className="font-brand font-bold tracking-tighter text-brand-bone">rulo<span className="text-brand-terracotta-light">.</span></strong> es la IA que audita tus chats abandonados y cierra a los clientes que dabas por muertos.
        </motion.p>

        {/* Botones de Acción — tamaños responsivos */}
        <motion.div
          custom={3}
          initial="hidden"
          animate={animState}
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto z-20"
        >
          {/* Botón Primario */}
          <Link
            href="https://wa.me/TUNUMERODEWHATSAPP"
            target="_blank"
            className="group relative flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-brand-terracotta text-white font-extrabold rounded-[2px] text-base sm:text-lg lg:text-xl transition-all hover:bg-brand-terracotta-hover hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(201,82,59,0.5)] active:translate-y-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-[150%] skew-x-[-15deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
            <span className="font-sans">Agendar Demo en Vivo</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1.5" />
          </Link>

          {/* Botón Secundario */}
          <Link
            href="#roi"
            className="group flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-transparent backdrop-blur-sm text-brand-bone font-bold rounded-none text-base sm:text-lg lg:text-xl border-b border-brand-bone/30 hover:border-brand-terracotta hover:text-white transition-all overflow-hidden"
          >
            <span className="font-sans">Ver la matemática</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 transition-transform group-hover:translate-y-1.5 group-hover:text-brand-terracotta" />
          </Link>
        </motion.div>

        {/* Trust Indicators / Micro Features — responsive: col en mobile, row en md+ */}
        <motion.div
          custom={4}
          initial="hidden"
          animate={animState}
          variants={fadeUpVariants}
          className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-12 w-full max-w-4xl"
        >
          {[
            { icon: <Bot className="w-5 h-5" />, title: "Agente Autónomo", desc: "Opera 100% en solitario" },
            { icon: <TrendingUp className="w-5 h-5" />, title: "Más Rentabilidad", desc: "Aumenta 35% tu conversión" },
            { icon: <ShieldCheck className="w-5 h-5" />, title: "Fácil Integración", desc: "Listo en < 5 minutos" },
          ].map((item, index) => (
            <div key={index} className="flex flex-row md:flex-col items-center md:justify-center gap-3 md:gap-2 group cursor-default transition-transform duration-300 transform-gpu lg:hover:-translate-y-1.5 py-3 md:py-0 border-b border-brand-bone/10 md:border-b-0 last:border-b-0">
              <div className="text-brand-terracotta/60 transition-all duration-300 transform-gpu lg:group-hover:text-brand-terracotta lg:group-hover:scale-110 lg:group-hover:drop-shadow-[0_0_8px_rgba(201,82,59,0.8)] shrink-0">
                {item.icon}
              </div>
              <div className="text-left md:text-center">
                <h3 className="font-accent italic text-white font-medium text-base md:text-lg mb-0 md:mb-0.5 transition-colors duration-300 lg:group-hover:text-brand-terracotta">{item.title}</h3>
                <p className="font-sans text-brand-bone/40 text-[11px] md:text-xs font-semibold uppercase tracking-wider">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

