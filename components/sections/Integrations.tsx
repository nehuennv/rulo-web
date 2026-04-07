"use client";
 
import { motion } from "framer-motion";
import { Link, Cloud, Globe, Smartphone, ShoppingCart, MessageSquare } from "lucide-react";
 
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
 
export const Integrations = () => {
  return (
    <section id="integrations" className="relative w-full py-16 sm:py-20 lg:py-36">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-[clamp(300px,60vw,600px)] h-[clamp(300px,60vw,600px)] bg-brand-terracotta/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
 
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            variants={fadeUpVariants} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="flex items-center gap-2.5 sm:gap-3 mb-6"
          >
            <span className="w-6 sm:w-8 h-[1px] bg-brand-bone/30"></span>
            <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-brand-bone/60 uppercase">
              Omnicanalidad Real
            </span>
            <span className="w-6 sm:w-8 h-[1px] bg-brand-bone/30"></span>
          </motion.div>
 
          <motion.h2
            variants={fadeUpVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="font-sans text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold sm:font-black tracking-tight text-white leading-[1.05] mb-6"
          >
            Interceptamos tu demanda <br className="hidden sm:block" />
            <span className="font-accent italic text-brand-terracotta tracking-normal pr-2 sm:pr-4">en cada canal.</span>
          </motion.h2>
 
          <motion.p
            variants={fadeUpVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="font-sans text-base sm:text-lg lg:text-xl text-brand-bone/70 leading-relaxed font-light"
          >
            <strong className="font-brand font-bold tracking-tighter text-brand-bone">rulo<span className="text-brand-terracotta-light">.</span></strong> no es un bot de Instagram. Es una capa de infraestructura que conecta tu operación completa: el chat de WhatsApp y el checkout abandonado de tu tienda digital.
          </motion.p>
        </div>
 
        {/* Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          
          {/* Card 1: WhatsApp API */}
          <motion.div
            variants={fadeUpVariants} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="group relative p-8 lg:p-12 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm transition-all duration-500 lg:hover:bg-white/[0.03] lg:hover:-translate-y-2 lg:hover:border-white/10"
          >
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-brand-terracotta/10 border border-brand-terracotta/20 px-3 py-1 rounded-full">
              <Cloud className="w-3 h-3 text-brand-terracotta" />
              <span className="font-mono text-[9px] font-bold text-brand-terracotta uppercase">Meta API Oficial</span>
            </div>
            
            <div className="w-14 h-14 rounded-2xl bg-brand-bone/5 border border-brand-bone/10 flex items-center justify-center mb-8 transition-transform duration-500 lg:group-hover:scale-110 lg:group-hover:text-brand-terracotta lg:group-hover:border-brand-terracotta/30">
              <MessageSquare className="w-7 h-7" />
            </div>
            
            <h3 className="font-accent italic text-white font-bold text-2xl lg:text-3xl mb-4 tracking-wide">WhatsApp Business API</h3>
            <p className="font-sans text-brand-bone/60 leading-relaxed text-sm lg:text-base">
              Conectamos tu línea a través de la Meta API Oficial. Sin apps de terceros. Sin riesgo de bloqueo. Tu número, blindado bajo la infraestructura de Meta.
            </p>
          </motion.div>
 
          {/* Card 2: Tiendanube */}
          <motion.div
            variants={fadeUpVariants} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="group relative p-8 lg:p-12 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm transition-all duration-500 lg:hover:bg-white/[0.03] lg:hover:-translate-y-2 lg:hover:border-white/10"
          >
             <div className="absolute top-6 right-6 flex items-center gap-2 bg-brand-bone/10 border border-brand-bone/20 px-3 py-1 rounded-full">
              <ShoppingCart className="w-3 h-3 text-brand-bone" />
              <span className="font-mono text-[9px] font-bold text-brand-bone uppercase">Checkout → Mostrador</span>
            </div>
            
            <div className="w-14 h-14 rounded-2xl bg-brand-bone/5 border border-brand-bone/10 flex items-center justify-center mb-8 transition-transform duration-500 lg:group-hover:scale-110 lg:group-hover:text-brand-terracotta lg:group-hover:border-brand-terracotta/30">
              <ShoppingBagIcon />
            </div>
            
            <h3 className="font-accent italic text-white font-bold text-2xl lg:text-3xl mb-4 tracking-wide">Tiendanube</h3>
            <p className="font-sans text-brand-bone/60 leading-relaxed text-sm lg:text-base">
              Interceptamos checkouts abandonados y los convertimos en visitas al mostrador. Unificamos tu canal digital y físico en un solo flujo de recuperación.
            </p>
          </motion.div>
 
        </div>
      </div>
    </section>
  );
};
 
function ShoppingBagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
  )
}
