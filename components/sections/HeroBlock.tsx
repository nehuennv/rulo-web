"use client";

import { Bot, TrendingUp, ShieldCheck, ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
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

export function HeroBlock() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">

      {/* ----- FONDO AMBIENTE (La grilla ahora es global en page.tsx) ----- */}

      {/* Ambient Glows Dinámicos (luces de fondo) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[500px] bg-brand-yellow/15 blur-[120px] rounded-[100%] pointer-events-none mix-blend-screen" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-purple-light/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[500px] bg-brand-purple-lightest/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      {/* ----- FLOATING UI ELEMENTS (Llenar el espacio y dar narrativa visual) ----- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ opacity: { delay: 1, duration: 1 }, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
        className="hidden xl:flex absolute top-[25%] left-[8%] flex-col gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.015] backdrop-blur-xl rotate-[-3deg] shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-1">
          <Bot className="w-4 h-4 text-brand-yellow" />
          <span className="font-mono text-[10px] text-brand-yellow uppercase tracking-widest">Interceptando #0482</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-sans text-xs text-brand-cream/50">Cliente en Visto:</span>
          <p className="font-sans text-sm text-brand-cream/90 font-medium">"Hola, dejé mi carrito ayer..."</p>
        </div>
        <div className="w-full h-[1px] bg-brand-cream/10 my-1" />
        <p className="font-sans text-xs text-[#a0ff6a] font-medium tracking-wide">→ Procesando respuesta comercial</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.3, duration: 1 }, y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 } }}
        className="hidden md:flex absolute bottom-[30%] lg:bottom-[25%] right-[5%] lg:right-[8%] flex-col gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.015] backdrop-blur-xl rotate-[2deg] shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-1">
          <TrendingUp className="w-4 h-4 text-[#a0ff6a]" />
          <span className="font-mono text-[10px] text-[#a0ff6a] uppercase tracking-widest">Cobro Exitoso</span>
        </div>
        <p className="font-sans text-xl text-white font-bold tracking-tight">+ $1,250.00 USD</p>
        <div className="flex items-center gap-2 mt-1">
          <div className="w-2 h-2 rounded-full bg-[#a0ff6a] animate-pulse" />
          <p className="font-sans text-xs text-brand-cream/50 uppercase tracking-widest">Acreditado 03:41 AM</p>
        </div>
      </motion.div>

      {/* ----- CONTENIDO PRINCIPAL ----- */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center text-center">

        {/* Tecnical Status / No-Badge Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-10 px-2"
        >
          <div className="flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/20 px-3 py-1 rounded-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full bg-brand-yellow opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 bg-brand-yellow"></span>
            </span>
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-brand-yellow uppercase">
              Auditoría 24/7
            </span>
          </div>
          <span className="hidden sm:block w-8 h-[1px] bg-brand-cream/20"></span>
          <span className="font-sans text-xs font-medium tracking-widest text-brand-cream/50 uppercase">
            Recuperando clientes que te clavaron el visto
          </span>
        </motion.div>

        {/* Título Principal Fuerte */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="font-accent text-5xl sm:text-7xl lg:text-[5.5rem] font-medium tracking-normal text-white leading-[1.1] mb-8 w-full"
        >
          <span className="block text-white mb-1">Automatizá el rescate</span>
          <span className="relative inline-block">
            {/* Sombra detrás del texto resaltado para darle volumen */}
            <span className="absolute inset-0 bg-brand-yellow opacity-10 blur-2xl rounded-full"></span>
            <span className="relative italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-yellow-light to-brand-yellow bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite] pr-4">
              de ventas estancadas.
            </span>
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="font-sans text-lg sm:text-xl lg:text-2xl text-brand-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          <strong className="font-brand font-bold tracking-tighter text-brand-yellow">rulo<span className="text-brand-cream">.</span></strong> es la IA que audita tus chats abandonados y cierra a los clientes que dabas por muertos.
        </motion.p>

        {/* Botones de Acción */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto z-20"
        >
          {/* Botón Primario */}
          <Link
            href="https://wa.me/TUNUMERODEWHATSAPP"
            target="_blank"
            className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 bg-brand-yellow text-brand-purple font-extrabold rounded-[2px] text-lg sm:text-xl transition-all hover:bg-brand-yellow-hover hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(244,180,0,0.5)] active:translate-y-0 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-[150%] skew-x-[-15deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
            <span className="font-sans">Agendar Demo en Vivo</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1.5" />
          </Link>

          {/* Botón Secundario */}
          <Link
            href="#roi"
            className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 bg-transparent backdrop-blur-sm text-brand-cream font-bold rounded-none text-lg sm:text-xl border-b border-brand-cream/30 hover:border-brand-yellow hover:text-white transition-all overflow-hidden"
          >
            <span className="font-sans">Ver la matemática</span>
            <ArrowDown className="w-5 h-5 opacity-70 transition-transform group-hover:translate-y-1.5 group-hover:text-brand-yellow" />
          </Link>
        </motion.div>

        {/* Trust Indicators / Micro Features */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          className="mt-20 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full max-w-4xl"
        >
          {[
            { icon: <Bot className="w-5 h-5" />, title: "Agente Autónomo", desc: "Opera 100% en solitario" },
            { icon: <TrendingUp className="w-5 h-5" />, title: "Más Rentabilidad", desc: "Aumenta 35% tu conversión" },
            { icon: <ShieldCheck className="w-5 h-5" />, title: "Fácil Integración", desc: "Listo en < 5 minutos" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-2 group cursor-default transition-transform duration-300 transform-gpu lg:hover:-translate-y-1.5">
              <div className="text-brand-yellow/60 transition-all duration-300 transform-gpu lg:group-hover:text-brand-yellow lg:group-hover:scale-110 lg:group-hover:drop-shadow-[0_0_8px_rgba(244,180,0,0.8)]">
                {item.icon}
              </div>
              <div className="text-center">
                <h3 className="font-accent italic text-white font-medium text-lg mb-0.5 transition-colors duration-300 lg:group-hover:text-brand-yellow">{item.title}</h3>
                <p className="font-sans text-brand-cream/40 text-xs font-semibold uppercase tracking-wider">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
