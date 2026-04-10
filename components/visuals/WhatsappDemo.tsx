"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { CheckCheck, Phone, Video, ChevronLeft, RefreshCw } from "lucide-react";

// ── Tipografía Google Sans ──────────────────────────────────────────────────
const CHAT_FONT = `var(--font-sans), sans-serif`;

// ── CSS Scoped para ocultar scrollbars (UX Mobile) ──────────────────────────
const NO_SCROLLBAR_CSS = `
  .no-scrollbar::-webkit-scrollbar {
    display: none !important;
  }
  .no-scrollbar {
    -ms-overflow-style: none !important;
    scrollbar-width: none !important;
  }
`;

// ── Nombres y Apellidos Aleatorios ─────────────────────────────────────────
const NOMBRES = ["Lucía", "Martín", "Valentina", "Facundo", "Camila", "Rodrigo", "Sofía", "Matías", "Agustina", "Nicolás", "Florencia", "Tomás", "Julieta", "Ignacio", "Micaela"];
const APELLIDOS = ["González", "Fernández", "López", "Martínez", "Rodríguez", "García", "Pérez", "Sánchez", "Romero", "Torres", "Flores", "Díaz", "Morales", "Jiménez", "Ruiz"];

const getRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getInitials = (n: string, a: string) => `${n[0]}${a[0]}`;
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

const CONVERSACIONES = [
  {
    msgs: [
      "Hola! Tienen el Samsung A55 disponible?",
      "Sí! Lo tenemos en negro y azul noche. ¿Querés que te mande las fotos?",
      "Mirá, hoy vino más gente a preguntar por ese modelo que por cualquier otro. Si querés te anoto el nombre y cuando quede uno reservado sos la primera en saberlo.",
      "Sí, anotame! Me interesa el azul. ¿Cuándo estaría?",
    ],
  },
  {
    msgs: [
      "Buenas, busco un Cronos 0km. Qué opciones manejan?",
      "Buenas! Tenemos el GNC y el nafta en azul, blanco y gris. ¿Querés que te arme una cotización?",
      "Por lo que me contás calificás para la tasa diferencial que tenemos este mes, no todos acceden. Te paso los números así lo analizás tranquilo.",
      "Dale, mandame todo. Me interesa la tasa especial.",
    ],
  },
  {
    msgs: [
      "Hola! Vi la campera del reel, la tienen en talle M?",
      "Hola! Sí, está disponible en M. Es una de las más pedidas de esta temporada.",
      "La M la reservaron un par de veces esta semana. Todavía hay una, si querés la aparto hasta mañana sin necesidad de pagar nada ahora.",
      "Sí, me la apartás? No la quiero perder. Cómo pago?",
    ],
  },
  {
    msgs: [
      "Hola, vi el depto en Belgrano. Me pueden dar info?",
      "Hola! Es un 3 ambientes en piso 8 con muy buena vista. ¿Cuándo podrías visitarlo?",
      "Justo hoy hubo otra consulta por esa unidad. Si querés coordinamos la visita primero para vos, así la conocés con calma antes que otros avancen.",
      "Me interesa! Podría ser el jueves a la tarde?",
    ],
  },
];

interface Activa {
  nombre: string;
  apellido: string;
  initials: string;
  msgs: string[];
}

export const WhatsappDemo = () => {
  const [activa, setActiva] = useState<Activa | null>(null);
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);
  const [typingDir, setTypingDir] = useState<"right" | "left">("right");
  const [inputText, setInputText] = useState("");
  const [isWaitingForReset, setIsWaitingForReset] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<boolean>(true);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startScrollTop = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startY.current = e.pageY - (scrollRef.current?.offsetTop || 0);
    startScrollTop.current = scrollRef.current?.scrollTop || 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const y = e.pageY - (scrollRef.current.offsetTop || 0);
    const walk = (y - startY.current) * 1.5;
    scrollRef.current.scrollTop = startScrollTop.current - walk;
  };

  const onStopDragging = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    if (scrollRef.current && !isDragging.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [visible, typing]);

  const playSequence = useCallback(async () => {
    sequenceRef.current = true;
    setIsWaitingForReset(false);
    setInputText("");

    const nombre = getRandom(NOMBRES);
    const apellido = getRandom(APELLIDOS);
    const conv = getRandom(CONVERSACIONES);

    setActiva({
      nombre,
      apellido,
      initials: getInitials(nombre, apellido),
      msgs: conv.msgs
    });

    setVisible(0);
    setTyping(false);

    await delay(1000);
    if (!sequenceRef.current) return;
    setVisible(1);

    await delay(1600);
    if (!sequenceRef.current) return;
    setTypingDir("right");
    setTyping(true);
    await delay(2000);
    if (!sequenceRef.current) return;
    setTyping(false);
    setVisible(2);

    await delay(3500);
    if (!sequenceRef.current) return;
    setTypingDir("right");
    setTyping(true);
    await delay(2200);
    if (!sequenceRef.current) return;
    setTyping(false);
    setVisible(3);

    await delay(1400);
    if (!sequenceRef.current) return;
    setTypingDir("left");
    setTyping(true);
    await delay(1800);
    if (!sequenceRef.current) return;
    setTyping(false);
    setVisible(4);

    await delay(1200);
    if (!sequenceRef.current) return;
    
    const textToType = "Probar de nuevo";
    for (let i = 0; i < textToType.length; i++) {
      await delay(80);
      if (!sequenceRef.current) return;
      setInputText(textToType.substring(0, i + 1));
    }
    setIsWaitingForReset(true);
  }, []);

  useEffect(() => {
    playSequence();
    return () => { sequenceRef.current = false; };
  }, [playSequence]);

  const msgs = activa?.msgs ?? [];

  return (
    <div
      className="relative mx-auto select-none"
      style={{
        width: "min(380px, 92vw)",
        filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.6))",
        fontFamily: CHAT_FONT,
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: NO_SCROLLBAR_CSS }} />
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #3A3331 0%, #231F1E 100%)",
          borderRadius: "32px",
          padding: "2.5px",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none z-40"
          style={{
            borderRadius: "32px",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.3)",
          }}
        />

        <div
          className="relative overflow-hidden flex flex-col"
          style={{
            borderRadius: "30px",
            background: "#231F1E",
            height: "680px",
          }}
        >
          {/* Status Bar */}
          <div className="relative flex items-center justify-between px-7" style={{ height: "34px" }}>
            <span className="text-[#E8E3D9]/60 font-medium" style={{ fontSize: "11px" }}>9:41</span>
            <div className="flex items-center gap-[5px] opacity-40">
              <div className="flex items-baseline gap-[1px]">
                {[3, 5, 7, 9].map((h, i) => (
                  <div key={i} style={{ width: "2px", height: `${h}px`, background: "#E8E3D9", borderRadius: "0.5px" }} />
                ))}
              </div>
              <div style={{ width: "14px", height: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E8E3D9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" />
                </svg>
              </div>
              <div style={{ width: "18px", height: "9px", border: "1px solid #E8E3D9", borderRadius: "2px", padding: "1px" }}>
                <div style={{ width: "70%", height: "100%", background: "#E8E3D9", borderRadius: "0.5px" }} />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="flex items-center px-4 py-2 gap-3" style={{ borderBottom: "1px solid rgba(232,227,217,0.05)" }}>
            <ChevronLeft className="w-5 h-5 text-[#E8E3D9]/40" />
            <div className="w-9 h-9 flex items-center justify-center rounded-full" style={{ background: "rgba(232,227,217,0.08)", color: "#E8E3D9", fontSize: "13px", fontWeight: 600 }}>
              <AnimatePresence mode="wait">
                <motion.span key={activa?.initials} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {activa?.initials ?? "??"}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.p key={activa?.nombre} initial={{ opacity: 0, x: 5 }} animate={{ opacity: 1, x: 0 }} className="text-[#E8E3D9] font-bold text-sm truncate leading-tight">
                  {activa ? `${activa.nombre} ${activa.apellido}` : "—"}
                </motion.p>
              </AnimatePresence>
              <span className="text-[#E8E3D9]/30 text-[10px] uppercase tracking-widest font-bold">En línea</span>
            </div>
            <div className="flex items-center gap-2 opacity-30">
              <Video className="w-4 h-4 text-[#E8E3D9]" /> <Phone className="w-3.5 h-3.5 text-[#E8E3D9]" />
            </div>
          </div>

          {/* Chat Content */}
          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onStopDragging}
            onMouseLeave={onStopDragging}
            className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col gap-3 px-4 py-4"
            style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
          >
            <div className="flex flex-col gap-3">
              <AnimatePresence>
                {([0, 1, 2, 3] as const).map((i) => {
                  if (i >= visible) return null;
                  const isMe = i === 1 || i === 2;
                  const timestamps = ["14:02", "14:05", "18:45", "18:46"];

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ alignSelf: isMe ? "flex-end" : "flex-start", maxWidth: "85%" }}
                    >
                      {i === 2 && (
                        <div className="text-[10px] font-mono text-[#C9523B] uppercase tracking-[0.25em] mb-1 font-black">
                          rulo
                        </div>
                      )}
                      <div
                        style={{
                          padding: "10px 14px",
                          fontSize: "13px",
                          lineHeight: "1.5",
                          color: "#E8E3D9",
                          background: isMe ? "#C9523B" : "#3A3331",
                          borderRadius: isMe ? "18px 4px 18px 18px" : "4px 18px 18px 18px",
                          border: "1px solid rgba(232,227,217,0.05)",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      >
                        <p className="opacity-90">{msgs[i]}</p>
                        <div className="flex items-center justify-end gap-1.5 mt-1.5 opacity-30">
                          <span className="text-[9px]">{timestamps[i]}</span>
                          {isMe && <CheckCheck className="w-3 h-3" />}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {typing && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ alignSelf: typingDir === "right" ? "flex-end" : "flex-start" }}
                >
                  <div className="flex gap-1 px-3 py-3 bg-[#3A3331] rounded-2xl border border-white/5">
                    {[0, 0.15, 0.3].map((d, idx) => (
                      <motion.div
                        key={idx}
                        className="w-1.5 h-1.5 rounded-full bg-[#E8E3D9]/40"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Footer Input */}
          <div className="p-4" style={{ borderTop: "1px solid rgba(232,227,217,0.05)" }}>
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center px-4 h-10 rounded-full border border-white/5" style={{ background: "#3A3331" }}>
                <div className="flex-1 text-[#E8E3D9]/30 text-xs truncate">
                  {inputText || (isWaitingForReset ? "" : "Escribir mensaje...")}
                  {inputText && !isWaitingForReset && (
                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-0.5 h-3.5 bg-[#C9523B] ml-1 align-middle" />
                  )}
                </div>
              </div>
              <motion.button
                onClick={() => isWaitingForReset && playSequence()}
                whileHover={isWaitingForReset ? { scale: 1.05, backgroundColor: "#D9664F" } : {}}
                whileTap={isWaitingForReset ? { scale: 0.95 } : {}}
                className="relative w-10 h-10 flex items-center justify-center rounded-full transition-shadow duration-300"
                style={{ 
                  background: "#C9523B",
                  boxShadow: isWaitingForReset ? "0 0 20px rgba(201,82,59,0.4)" : "none",
                  cursor: isWaitingForReset ? "pointer" : "default"
                }}
              >
                <AnimatePresence mode="wait">
                  {isWaitingForReset ? (
                    <motion.div 
                      key="r" 
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      whileHover={{ rotate: 180 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <RefreshCw className="w-4 h-4 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div key="s" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};