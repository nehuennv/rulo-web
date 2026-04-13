"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, Package, MessageCircle, Clock, Flame, ArrowDown, ArrowUp } from "lucide-react";
import type { LucideProps } from "lucide-react";

// ─── Variantes de sección ─────────────────────────────────────────────────────
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] as const },
  }),
};

type LucideIcon = React.FC<LucideProps>;

interface Row {
  Icon: LucideIcon;
  tag: string;
  text: string;
  iconColor: string;
  delta?: string | null;
  deltaOk?: boolean;
}

interface Report {
  month: string;
  year: string;
  short: string;
  note: string;
  badge?: string;
  rows: Row[];
}

const REPORTS: Report[] = [
  {
    month: "Enero", year: "2026", short: "Ene",
    note: "Primer informe — esto estaba pasando en tus chats sin que lo supieras.",
    rows: [
      { Icon: Package,       tag: "STOCK",     iconColor: "#C9523B", delta: null, deltaOk: false,
        text: "31 clientes se fueron sin comprar porque no tenías talle XS" },
      { Icon: MessageCircle, tag: "MERCADO",   iconColor: "#E8E3D9", delta: null, deltaOk: false,
        text: "19 personas dijeron que la competencia tenía mejor precio" },
      { Icon: Clock,         tag: "HORARIOS",  iconColor: "#E8E3D9", delta: null, deltaOk: false,
        text: "47 preguntas sobre horarios que no aparecen en ningún lado" },
      { Icon: Flame,         tag: "DEMANDA",   iconColor: "#E8E3D9", delta: null, deltaOk: false,
        text: "La campera negra M fue lo más pedido, pero casi no la mostraste" },
    ],
  },
  {
    month: "Febrero", year: "2026", short: "Feb",
    note: "Reponés el XS y actualizás la bio. Los números ya lo reflejan.",
    rows: [
      { Icon: Package,       tag: "STOCK",     iconColor: "#E2A86A", delta: "−42%", deltaOk: true,
        text: "18 clientes sin stock — bajando desde que reponés XS" },
      { Icon: MessageCircle, tag: "MERCADO",   iconColor: "#E8E3D9", delta: "−42%", deltaOk: true,
        text: "11 menciones de la competencia, menos que el mes pasado" },
      { Icon: Clock,         tag: "HORARIOS",  iconColor: "#52B788", delta: "−74%", deltaOk: true,
        text: "12 preguntas de horarios — la bio actualizada funcionó" },
      { Icon: Flame,         tag: "DEMANDA",   iconColor: "#52B788", delta: "+150%", deltaOk: true,
        text: "La campera negra M explotó: 8 veces más consultas que en enero" },
    ],
  },
  {
    month: "Marzo", year: "2026", short: "Mar",
    badge: "Más reciente",
    note: "Mínimos históricos en fricción. Demanda en su pico.",
    rows: [
      { Icon: Package,       tag: "STOCK",     iconColor: "#52B788", delta: "−78%", deltaOk: true,
        text: "Solo 4 casos sin stock — prácticamente resuelto" },
      { Icon: MessageCircle, tag: "MERCADO",   iconColor: "#52B788", delta: "−45%", deltaOk: true,
        text: "6 menciones de competidores, el mínimo del trimestre" },
      { Icon: Clock,         tag: "HORARIOS",  iconColor: "#52B788", delta: "−75%", deltaOk: true,
        text: "Solo 3 preguntas de horarios, casi nadie lo pregunta ya" },
      { Icon: Flame,         tag: "DEMANDA",   iconColor: "#52B788", delta: null, deltaOk: true,
        text: "🔥 La campera negra M se agotó en 8 días — récord del trimestre" },
    ],
  },
];

const CARD_BG = "#232020";

export const IntelligenceSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState(0);
  const prevTab = useRef(0);

  const handleTab = (idx: number) => {
    if (idx === activeTab) return;
    prevTab.current = activeTab;
    setActiveTab(idx);
  };

  const direction = activeTab >= prevTab.current ? 1 : -1;
  const report = REPORTS[activeTab];
  const isLatest = activeTab === REPORTS.length - 1;
  const cardBorder = isLatest ? "rgba(82,183,136,0.2)" : "rgba(232,227,217,0.08)";

  return (
    <section
      id="inteligencia"
      aria-labelledby="inteligencia-heading"
      style={{ colorScheme: "dark" }}
      className="relative w-full overflow-x-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{ background: `radial-gradient(ellipse 55% 45% at 75% 55%, rgba(82,183,136,${isLatest ? "0.06" : "0.025"}) 0%, transparent 70%)` }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Copy ──────────────────────────────────────────────────────── */}
          <div>
            <motion.div variants={sectionVariants} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px" }} className="mb-5 sm:mb-7">
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#52B788" }}>
                Inteligencia de negocio
              </span>
            </motion.div>

            <motion.h2
              id="inteligencia-heading"
              variants={sectionVariants} custom={1} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              className="font-sans text-white font-black text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6 sm:mb-8"
            >
              La pauta que no convertís{" "}
              <span className="font-accent italic text-brand-terracotta tracking-normal">
                no es plata tirada.
              </span>
            </motion.h2>

            <motion.p variants={sectionVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px" }} className="font-sans text-brand-bone/65 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg">
              Es investigación de mercado que ya pagaste.{" "}
              <strong className="font-medium" style={{ color: "#E8E3D9" }}>Cada conversación que rulo maneja extrae señales reales</strong>{" "}
              sobre tu stock, tus precios y lo que buscan tus clientes. A fin de mes, te llega un informe que ninguna agencia de publicidad te da.
            </motion.p>

            <motion.ul variants={sectionVariants} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px" }} className="space-y-3 sm:space-y-4">
              {[
                "Qué productos consultaron que no tenías en stock",
                "Cuándo y por qué mencionaron a la competencia",
                "Qué información buscan que vos no publicás",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#52B788" }} />
                  <span className="font-sans text-brand-bone/65 text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ── Card visual ───────────────────────────────────────────────── */}
          <motion.div variants={sectionVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10% 0px" }} className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 transition-opacity duration-700"
              style={{ background: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(82,183,136,${isLatest ? "0.08" : "0.03"}) 0%, transparent 70%)` }}
            />

            <div style={{
              background: CARD_BG,
              border: `1px solid ${cardBorder}`,
              borderRadius: "18px",
              boxShadow: isLatest ? "0 24px 56px rgba(0,0,0,0.5)" : "0 20px 48px rgba(0,0,0,0.35)",
              transition: "border-color 0.4s, box-shadow 0.4s",
              overflow: "hidden",
            }}>

              {/* ── Header ── */}
              <div style={{
                padding: "16px 18px 14px",
                borderBottom: "1px solid rgba(232,227,217,0.06)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <div>
                  <p style={{ fontFamily: "var(--font-geist-mono, monospace)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52B788", marginBottom: "3px" }}>
                    rulo · inteligencia
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.p key={activeTab} initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -3 }} transition={{ duration: 0.16 }}
                      style={{ fontSize: "13.5px", fontWeight: 600, color: "#E8E3D9" }}>
                      Informe — {report.month} {report.year}
                    </motion.p>
                  </AnimatePresence>
                </div>
                <div style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(82,183,136,0.1)", border: "1px solid rgba(82,183,136,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <TrendingUp size={13} color="#52B788" aria-hidden="true" />
                </div>
              </div>

              {/* ── Segmented control tabs ── */}
              <div style={{ padding: "12px 14px 0" }}>
                <div
                  role="tablist"
                  aria-label="Seleccionar mes"
                  style={{
                    display: "flex",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(232,227,217,0.07)",
                    borderRadius: "10px",
                    padding: "3px",
                    gap: "2px",
                  }}
                >
                  {REPORTS.map((r, i) => {
                    const isActive = i === activeTab;
                    return (
                      <motion.button
                        key={r.short}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="informe-panel"
                        onClick={() => handleTab(i)}
                        whileHover={!isActive && !shouldReduceMotion ? { color: "rgba(232,227,217,0.8)" } : {}}
                        whileTap={!isActive && !shouldReduceMotion ? { scale: 0.97 } : {}}
                        style={{
                          flex: 1,
                          position: "relative",
                          padding: "6px 0",
                          border: "none",
                          borderRadius: "7px",
                          background: "transparent",
                          color: isActive ? "#E8E3D9" : "rgba(232,227,217,0.32)",
                          fontSize: "12px",
                          fontWeight: isActive ? 600 : 400,
                          cursor: isActive ? "default" : "pointer",
                          display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
                          outline: "none",
                          zIndex: 1,
                          transition: "color 0.18s",
                        }}
                      >
                        {/* Pill activa que se desliza */}
                        {isActive && (
                          <motion.span
                            layoutId="active-pill"
                            style={{
                              position: "absolute", inset: 0,
                              borderRadius: "7px",
                              background: "rgba(255,255,255,0.09)",
                              border: "1px solid rgba(232,227,217,0.1)",
                              boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                            }}
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span style={{ position: "relative", zIndex: 1 }}>{r.short}</span>
                        {r.badge && (
                          <span style={{
                            position: "relative", zIndex: 1,
                            fontSize: "7px", fontWeight: 700, letterSpacing: "0.1em",
                            textTransform: "uppercase", color: "#52B788",
                            background: "rgba(82,183,136,0.15)",
                            border: "1px solid rgba(82,183,136,0.3)",
                            borderRadius: "4px", padding: "1px 4px",
                          }}>
                            ★
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* ── Panel con altura fija ── */}
              <div
                id="informe-panel"
                role="tabpanel"
                style={{ padding: "12px 14px 16px", height: "340px", overflow: "hidden" }}
              >
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.div
                    key={activeTab}
                    custom={direction}
                    variants={{
                      enter: (dir: number) => ({ opacity: 0, x: dir * 16 }),
                      center: { opacity: 1, x: 0 },
                      exit: (dir: number) => ({ opacity: 0, x: dir * -16 }),
                    }}
                    initial={shouldReduceMotion ? { opacity: 0 } : "enter"}
                    animate="center"
                    exit={shouldReduceMotion ? { opacity: 0 } : "exit"}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    style={{ height: "100%", display: "flex", flexDirection: "column" }}
                  >
                    {/* Nota del mes */}
                    <p style={{ fontSize: "11px", fontStyle: "italic", color: "rgba(232,227,217,0.35)", lineHeight: 1.4, flexShrink: 0, marginBottom: "10px" }}>
                      {report.note}
                    </p>

                    {/* Filas de insights */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
                      {report.rows.map(({ Icon, tag, text, iconColor, delta, deltaOk }, i) => (
                        <motion.div
                          key={`${activeTab}-${i}`}
                          initial={shouldReduceMotion ? {} : { opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07, duration: 0.22, ease: "easeOut" }}
                          whileHover={shouldReduceMotion ? {} : {
                            backgroundColor: "rgba(255,255,255,0.055)",
                            x: 3,
                            boxShadow: "inset 2.5px 0 0 rgba(201,82,59,0.5)",
                            transition: { duration: 0.12 },
                          }}
                          style={{
                            padding: "9px 12px",
                            borderRadius: "10px",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(232,227,217,0.05)",
                            cursor: "default",
                          }}
                        >
                          {/* Label + delta */}
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                              <Icon size={10} color={iconColor} aria-hidden="true" />
                              <span style={{ fontSize: "8px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: iconColor, opacity: 0.65, fontFamily: "var(--font-geist-mono, monospace)" }}>
                                {tag}
                              </span>
                            </div>
                            {delta && (
                              <div style={{ display: "flex", alignItems: "center", gap: "2px", fontSize: "9.5px", fontWeight: 700, color: deltaOk ? "#52B788" : "#C9523B" }}>
                                {delta.startsWith("+") ? <ArrowUp size={8} /> : <ArrowDown size={8} />}
                                <span>{delta.replace("−", "").replace("+", "")}</span>
                              </div>
                            )}
                          </div>
                          {/* Texto del insight */}
                          <p style={{ fontSize: "12px", color: "rgba(232,227,217,0.82)", lineHeight: 1.4, fontWeight: 400 }}>
                            {text}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div style={{ flexShrink: 0, marginTop: "10px", paddingTop: "10px", borderTop: "1px solid rgba(232,227,217,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <p style={{ fontFamily: "var(--font-geist-mono, monospace)", fontSize: "9px", color: "rgba(232,227,217,0.2)" }}>
                        {report.month} {report.year} · generado por rulo
                      </p>
                      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-50" style={{ background: "#52B788" }} />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#52B788" }} />
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
