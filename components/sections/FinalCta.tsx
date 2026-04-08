"use client";

/**
 * FinalCta — Sección de cierre y conversión
 *
 * SEO / Semántica:
 * - <section> con id y aria-labelledby apuntando al h2
 * - h2 con id referenciado
 * - Botón Cal.com programático (openCalModal) en vez de data-cal-* attributes
 * - aria-hidden en todos los decorativos
 * - rel="noopener noreferrer" en el link externo (ya estaba)
 * - useRef guard para evitar doble init de Cal en strict mode
 *
 * Estética:
 * - Mantiene el glassmorphism/bóveda — funciona bien
 * - "O ganás plata o no pagás." separado en línea propia para más punch
 * - <br> forzado en párrafo removido — rompía el flujo en mobile
 * - Micro-trust: separadores como bullet unicode + tercero añadido
 * - Shimmer con will-change-transform + relative en íconos para no quedar tapados
 *
 * Responsividad:
 * - overflow-x-hidden en la section
 * - Botones: items-stretch → items-center para alineación correcta
 * - Padding interno de la bóveda: p-6 sm:p-12 lg:p-20 (igual, funciona bien)
 * - pr-2 sm:pr-4 removido del span italic (innecesario con bg-clip)
 *
 * Performance:
 * - useReducedMotion
 * - will-change-transform en botón primario
 * - useCallback en openCalModal
 * - useRef guard en init de Cal
 */

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, CalendarDays } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useCallback, useEffect, useRef, useState } from "react";


// ─── Cal.com ──────────────────────────────────────────────────────────────────
const CAL_NAMESPACE = "primer-reunion";
const CAL_LINK = "somosrulo/primer-reunion";

// ─── Variantes ────────────────────────────────────────────────────────────────
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

// ─── Componente ───────────────────────────────────────────────────────────────
export const FinalCta = () => {
  const [mounted, setMounted] = useState(false);
  const calInitialized = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  // Inicialización con guard — evita doble init en strict mode / hot reload
  useEffect(() => {
    if (calInitialized.current) return;
    calInitialized.current = true;

    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#C9523B" },
          dark: { "cal-brand": "#C9523B" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  // Apertura programática del modal — más nativa que data-attributes
  const openCalModal = useCallback(() => {
    (window as Window & { Cal?: Function }).Cal?.("modal", {
      calLink: CAL_LINK,
      config: {
        layout: "month_view",
        // useSlotsViewOnSmallScreen: true,
        theme: "light"
      },
    });
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="relative w-full py-16 sm:py-24 lg:py-32 overflow-visible"

    >
      {/* ── Glow ambiental central ── */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,1400px)] h-[clamp(300px,60vh,800px)] bg-brand-terracotta/10 blur-[120px] md:blur-[200px] rounded-[100%] pointer-events-none mix-blend-screen"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ── Bóveda de cristal ── */}
        <div className="relative flex flex-col items-center text-center p-6 sm:p-12 lg:p-20 rounded-xl sm:rounded-2xl border border-brand-terracotta/20 bg-[#1A1816]/60 backdrop-blur-3xl shadow-[0_0_100px_rgba(201,82,59,0.08)] overflow-visible">


          {/* Glow interior radial */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-terracotta/5 via-transparent to-transparent pointer-events-none"
          />

          {/* Línea superior decorativa */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand-terracotta/30 to-transparent"
          />

          <div className="relative z-20 flex flex-col items-center w-full">

            {/* ── Badge ── */}
            <motion.div
              variants={motionVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8"
            >
              <span aria-hidden="true" className="w-6 sm:w-8 h-[1px] bg-brand-success/60" />
              <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-brand-success uppercase flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                Garantía de Retorno
              </span>
              <span aria-hidden="true" className="w-6 sm:w-8 h-[1px] bg-brand-success/60" />
            </motion.div>

            {/* ── H2 ── */}
            <motion.h2
              id="final-cta-heading"
              variants={motionVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="font-sans text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-6 sm:mb-8 w-full max-w-4xl mx-auto"
            >
              Garantía total.{" "}
              {/* Salto solo en sm+ para no romper en 320px */}
              <span className="hidden sm:inline"><br /></span>
              <span className="font-accent italic text-brand-terracotta tracking-normal">
                O ganás plata o no pagás.
              </span>
            </motion.h2>

            {/* ── Párrafo ── */}
            <motion.div
              variants={motionVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="mb-10 sm:mb-14 max-w-3xl px-2"
            >
              <p className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-brand-bone/80 leading-relaxed font-light">
                Asumimos el riesgo de integración con una{" "}
                <strong className="text-white font-bold underline decoration-brand-terracotta decoration-2 underline-offset-4">
                  garantía contractual de retorno.
                </strong>
              </p>
              <p className="mt-4 sm:mt-5 font-sans text-brand-bone/55 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Pagás el setup para armar la infraestructura. Si en 30 días no recuperamos
                el valor de tu inversión, te reintegramos el 100%. Un software que no se
                paga solo no sirve.
              </p>
            </motion.div>

            {/* ── Botones ── */}
            <motion.div
              variants={motionVariants}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
            >
              {/* CTA primario — Cal.com programático */}
              <motion.button
                type="button"
                onClick={openCalModal}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Agendar Sesión Estratégica"
                className="group relative flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-7 sm:px-10 py-5 sm:py-6 bg-brand-terracotta text-white font-black rounded-[2px] text-lg sm:text-xl transition-all duration-300 shadow-[0_0_20px_rgba(201,82,59,0.2)] lg:hover:bg-brand-terracotta-hover lg:hover:shadow-[0_0_60px_rgba(201,82,59,0.5)] overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1816]"
              >
                {/* Shimmer */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-[150%] skew-x-[-15deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out will-change-transform"
                />
                <CalendarDays className="relative w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                <span className="relative font-sans tracking-tight font-extrabold">Solicitar Auditoría</span>
                <ArrowRight
                  className="relative w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 transform-gpu lg:group-hover:translate-x-2"
                  aria-hidden="true"
                />
              </motion.button>

              {/* CTA secundario — WhatsApp */}
              <motion.a
                href="https://wa.me/5492644881787?text=Hola,%20quisiera%20más%20información."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Consultar por WhatsApp (abre en nueva pestaña)"
                className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 sm:px-8 py-5 sm:py-6 border border-brand-terracotta/30 text-brand-bone/70 font-sans font-semibold rounded-[2px] text-base sm:text-lg transition-all duration-300 lg:hover:border-brand-terracotta/60 lg:hover:text-brand-bone lg:hover:bg-brand-terracotta/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A1816]"
              >
                <span>Consultar por WhatsApp</span>
                <ArrowRight
                  className="w-4 h-4 opacity-50 transition-all duration-300 lg:group-hover:opacity-100 lg:group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>

            {/* ── Micro-trust ── */}
            <motion.div
              variants={motionVariants}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6"
              aria-label="Detalles de la reunión"
            >
              {[
                "Sesión Estratégica",
                "Respuesta en 24 h",
                "Sin compromiso",
              ].map((item, i, arr) => (
                <span
                  key={item}
                  className={`items-center gap-4 sm:gap-5 ${item === "Respuesta en 24 h" ? "hidden sm:flex" : "flex"
                    }`}
                >
                  <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-brand-bone/35">
                    {item}
                  </span>
                  {i < arr.length - 1 && (
                    <span
                      aria-hidden="true"
                      className={`w-1 h-1 rounded-full bg-brand-bone/20 ${item === "Respuesta en 24 h" ? "hidden sm:block" : "hidden sm:block"
                        }`}
                    />
                  )}
                </span>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};