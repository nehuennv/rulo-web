"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { CheckCheck, Phone, Video, ChevronLeft, RefreshCw } from "lucide-react";

const CHAT_FONT = `var(--font-sans), sans-serif`;

const NO_SCROLLBAR_CSS = `
  .no-scrollbar::-webkit-scrollbar { display: none !important; }
  .no-scrollbar { -ms-overflow-style: none !important; scrollbar-width: none !important; }
`;

const NOMBRES = ["Lucía", "Martín", "Valentina", "Facundo", "Camila", "Rodrigo", "Sofía", "Matías", "Agustina", "Nicolás", "Florencia", "Tomás", "Julieta", "Ignacio", "Micaela"];
const APELLIDOS = ["González", "Fernández", "López", "Martínez", "Rodríguez", "García", "Pérez", "Sánchez", "Romero", "Torres", "Flores", "Díaz", "Morales", "Jiménez", "Ruiz"];

const getRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomExcept = <T,>(arr: T[], excludeIdx: number): { item: T; idx: number } => {
  let idx = excludeIdx;
  while (idx === excludeIdx) idx = Math.floor(Math.random() * arr.length);
  return { item: arr[idx], idx };
};
const getInitials = (n: string, a: string) => `${n[0]}${a[0]}`;
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Render text with *bold* and \n support
const renderText = (text: string) => {
  const parts = text.split(/(\*[^*]+\*|\n)/g);
  return parts.map((part, i) => {
    if (part === "\n") return <br key={i} />;
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2)
      return <strong key={i} style={{ fontWeight: 700 }}>{part.slice(1, -1)}</strong>;
    return part;
  });
};

interface Msg {
  text: string;
  isAgent: boolean;
  time: string;
}

const CONVERSACIONES: { msgs: Msg[] }[] = [
  {
    msgs: [
      { text: "hola! cuanto sale el combo clasica con papas y una gaseosa?", isAgent: false, time: "13:04" },
      { text: "Hola! la clásica $4500, papas $1800 y gaseosa $1200. Todo junto $7500 pero hoy hay 10% off, te quedaría en *$6.750* 🔥", isAgent: true, time: "13:04" },
      { text: "re bien! puedo pagar con mp?", isAgent: false, time: "13:06" },
      { text: "Dale, alias *rulo.burger*. Cuando transferís me avisás y en 30 min está listo 🙌", isAgent: true, time: "13:06" },
      { text: "si va, ya te mando la plata", isAgent: false, time: "13:08" },
      { text: "Buenísimo! Mandame el comprobante y te confirmo el pedido 🎉 Buen provecho!", isAgent: true, time: "13:08" },
    ],
  },
  {
    msgs: [
      { text: "hola tienen el iphone 15 pro 256gb en titanio natural?", isAgent: false, time: "11:21" },
      { text: "Hola! sí, lo tenemos. En efectivo o transfe sale *$1.334.000* (8% de descuento). Con tarjeta lo podés hacer en 12 cuotas sin interés 📦", isAgent: true, time: "11:21" },
      { text: "con transferencia me quedo. puedo pasarlo a buscar hoy?", isAgent: false, time: "11:23" },
      { text: "Sí, hoy lo tenés. Lo anoto a tu nombre para que nadie más lo lleve, ¿cómo te llamas?", isAgent: true, time: "11:24" },
      { text: "González, gracias!", isAgent: false, time: "11:25" },
      { text: "¡Listo González! Ya está apartado, estamos hasta las 20hs. Te esperamos 🤙", isAgent: true, time: "11:25" },
    ],
  },
  {
    msgs: [
      { text: "hola vi la campera de cuero en el reel, la tienen en M?", isAgent: false, time: "16:42" },
      { text: "Hola! sí, la tenemos en M en negro y marrón, $95.000. El negro M está quedando poco, fue muy pedida esta semana 🖤", isAgent: true, time: "16:42" },
      { text: "normalmente uso entre S y M, cuál me recomendás?", isAgent: false, time: "16:44" },
      { text: "La M, tiene corte entallado y para ese rango queda perfecto. En negro queda espectacular.", isAgent: true, time: "16:44" },
      { text: "el negro! podés apartármela hasta mañana?", isAgent: false, time: "16:46" },
      { text: "¡Ya está! La M negra apartada a tu nombre hasta mañana a las 18hs, sin seña. Avisame cuando venís 🙌", isAgent: true, time: "16:47" },
    ],
  },
  {
    msgs: [
      { text: "buenas! hacen precio por cantidad? necesito 50 remeras básicas", isAgent: false, time: "10:15" },
      { text: "Buenas! sí. Para 50 piezas te sale *$8.500 c/u* (precio lista $12.000), $425.000 el lote. Envío a CABA y GBA incluido.", isAgent: true, time: "10:15" },
      { text: "puedo mezclar colores o es todo del mismo?", isAgent: false, time: "10:17" },
      { text: "Mezclás como quieras entre blanco, negro, gris, verde y arena, sin cambio de precio 💪 ¿Para cuándo las necesitás?", isAgent: true, time: "10:17" },
      { text: "viernes de la semana que viene estaría bien", isAgent: false, time: "10:19" },
      { text: "El viernes lo tenemos 🟢 Con una seña del 30% al alias *rulo.ropa* arranco la producción hoy. ¿Cerramos?", isAgent: true, time: "10:20" },
    ],
  },
  {
    msgs: [
      { text: "hola! a que hora cierran hoy? quería ir a cenar con mi familia, somos 5", isAgent: false, time: "18:03" },
      { text: "Hola! cerramos a las 23:30. Para 5 personas te conviene reservar porque los viernes se llena bastante. ¿A qué hora pensaban venir?", isAgent: true, time: "18:03" },
      { text: "tipo 21hs estaría bien", isAgent: false, time: "18:05" },
      { text: "21hs perfecto, mesa para 5 disponible 👌 ¿A nombre de quién la anoto?", isAgent: true, time: "18:05" },
      { text: "a nombre de Pereyra, gracias!", isAgent: false, time: "18:06" },
      { text: "¡Listo Pereyra! Mesa confirmada a las 21hs 🎉 Si tienen algún festejo o preferencia de lugar avisame. ¡Los esperamos!", isAgent: true, time: "18:06" },
    ],
  },
  {
    msgs: [
      { text: "buenas! tienen el sillón de 3 cuerpos que pusieron en stories?", isAgent: false, time: "15:30" },
      { text: "Buenas! sí, el *Oslo* en 3 cuerpos, $380.000. Lo tenés en arena, gris y verde oliva. Esta semana ya van 2 reservadas de las 4 que entraron 🛋️", isAgent: true, time: "15:31" },
      { text: "tienen financiación?", isAgent: false, time: "15:33" },
      { text: "Sí! hasta 12 cuotas sin interés con tarjeta, $31.667 por mes. O en efectivo/transfe tiene 15% off, quedaría en *$323.000*.", isAgent: true, time: "15:33" },
      { text: "me quedo con tarjeta en 12. lo entregan a domicilio?", isAgent: false, time: "15:35" },
      { text: "¡Dale! Envío a domicilio incluido, coordinamos la fecha que mejor te quede. Lo separo a tu nombre ahora 🚚", isAgent: true, time: "15:35" },
    ],
  },
  {
    msgs: [
      { text: "hola! me pueden dar info del depto en belgrano que publicaron?", isAgent: false, time: "11:10" },
      { text: "Hola! claro, es un 3 ambientes en piso 8, vista despejada, cocina integrada y balcón. Alquiler $320.000 más $45.000 de expensas 🏠", isAgent: true, time: "11:10" },
      { text: "podría visitar el jueves a la tarde?", isAgent: false, time: "11:12" },
      { text: "Jueves a la tarde perfecto. Hoy ya hubo otra consulta por esa unidad, te conviene confirmar. ¿A las 16 o 18hs te queda mejor?", isAgent: true, time: "11:12" },
      { text: "a las 16hs me viene bien", isAgent: false, time: "11:14" },
      { text: "¡Confirmado! Jueves 16hs en Belgrano. Te mando la dirección exacta antes del jueves 📍 ¡Hasta el jueves!", isAgent: true, time: "11:14" },
    ],
  },
];

interface Activa {
  nombre: string;
  apellido: string;
  initials: string;
  msgs: Msg[];
}

// Sequence timings: [show_delay_after_prev, typing_duration]
// For 6 messages alternating customer/agent
const SEQUENCE: Array<{ showDelay: number; typingDuration: number; dir: "left" | "right" }> = [
  { showDelay: 900,  typingDuration: 0,    dir: "left"  }, // msg[0] customer - no typing, just appears
  { showDelay: 1000, typingDuration: 1800, dir: "right" }, // msg[1] agent typing
  { showDelay: 2200, typingDuration: 1100, dir: "left"  }, // msg[2] customer typing (reading pause + typing)
  { showDelay: 800,  typingDuration: 2000, dir: "right" }, // msg[3] agent typing
  { showDelay: 2800, typingDuration: 1000, dir: "left"  }, // msg[4] customer typing
  { showDelay: 700,  typingDuration: 1600, dir: "right" }, // msg[5] agent typing
];

export const WhatsappDemo = () => {
  const [activa, setActiva] = useState<Activa | null>(null);
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);
  const [typingDir, setTypingDir] = useState<"right" | "left">("right");
  const [inputText, setInputText] = useState("");
  const [isWaitingForReset, setIsWaitingForReset] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<boolean>(true);
  const lastConvIdx = useRef<number>(-1);
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
    scrollRef.current.scrollTop = startScrollTop.current - (y - startY.current) * 1.5;
  };
  const onStopDragging = () => { isDragging.current = false; };

  useEffect(() => {
    if (scrollRef.current && !isDragging.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [visible, typing]);

  const playSequence = useCallback(async () => {
    sequenceRef.current = true;
    setIsWaitingForReset(false);
    setInputText("");
    setVisible(0);
    setTyping(false);

    const nombre = getRandom(NOMBRES);
    const apellido = getRandom(APELLIDOS);
    const { item: conv, idx } = getRandomExcept(CONVERSACIONES, lastConvIdx.current);
    lastConvIdx.current = idx;

    setActiva({ nombre, apellido, initials: getInitials(nombre, apellido), msgs: conv.msgs });

    for (let i = 0; i < SEQUENCE.length; i++) {
      const step = SEQUENCE[i];

      await delay(step.showDelay);
      if (!sequenceRef.current) return;

      if (step.typingDuration > 0) {
        setTypingDir(step.dir);
        setTyping(true);
        await delay(step.typingDuration);
        if (!sequenceRef.current) return;
        setTyping(false);
      }

      setVisible(i + 1);
    }

    await delay(1800);
    if (!sequenceRef.current) return;

    const textToType = "Probar de nuevo";
    for (let i = 0; i < textToType.length; i++) {
      await delay(75);
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
          style={{ borderRadius: "30px", background: "#231F1E", height: "680px" }}
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
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E8E3D9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" />
              </svg>
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
              <Video className="w-4 h-4 text-[#E8E3D9]" />
              <Phone className="w-3.5 h-3.5 text-[#E8E3D9]" />
            </div>
          </div>

          {/* Chat Content */}
          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onStopDragging}
            onMouseLeave={onStopDragging}
            className="flex-1 overflow-y-auto no-scrollbar px-4 py-4"
            style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
          >
            <div className="flex flex-col gap-2.5">
              <AnimatePresence>
                {([0, 1, 2, 3, 4, 5] as const).map((i) => {
                  if (i >= visible) return null;
                  const msg = msgs[i];
                  if (!msg) return null;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{ alignSelf: msg.isAgent ? "flex-end" : "flex-start", maxWidth: "86%" }}
                    >
                      {msg.isAgent && (
                        <div className="text-[9px] font-mono text-[#C9523B] uppercase tracking-[0.25em] mb-1 font-black text-right pr-1">
                          rulo
                        </div>
                      )}
                      <div
                        style={{
                          padding: "9px 13px 8px",
                          fontSize: "13px",
                          lineHeight: "1.55",
                          color: "#E8E3D9",
                          background: msg.isAgent ? "#C9523B" : "#3A3331",
                          borderRadius: msg.isAgent ? "18px 4px 18px 18px" : "4px 18px 18px 18px",
                          border: "1px solid rgba(232,227,217,0.04)",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                        }}
                      >
                        <p className="opacity-90">{renderText(msg.text)}</p>
                        <div className="flex items-center justify-end gap-1 mt-1.5" style={{ opacity: 0.45 }}>
                          <span style={{ fontSize: "10px" }}>{msg.time}</span>
                          {msg.isAgent && <CheckCheck style={{ width: "12px", height: "12px" }} />}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {typing && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.2 }}
                  style={{ alignSelf: typingDir === "right" ? "flex-end" : "flex-start" }}
                >
                  <div className="flex gap-1 px-3.5 py-3 bg-[#3A3331] rounded-2xl border border-white/5">
                    {[0, 0.16, 0.32].map((d, idx) => (
                      <motion.div
                        key={idx}
                        className="rounded-full bg-[#E8E3D9]/50"
                        style={{ width: "6px", height: "6px" }}
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: d }}
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
              <div
                className="flex-1 flex items-center px-4 h-10 rounded-full border border-white/5"
                style={{ background: "#3A3331" }}
              >
                <div className="flex-1 text-[#E8E3D9]/35 text-[12.5px] truncate">
                  {inputText || (!isWaitingForReset && "Escribir mensaje...")}
                  {inputText && !isWaitingForReset && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                      className="inline-block bg-[#C9523B] ml-0.5 align-middle"
                      style={{ width: "1.5px", height: "13px" }}
                    />
                  )}
                </div>
              </div>
              <motion.button
                onClick={() => isWaitingForReset && playSequence()}
                whileHover={isWaitingForReset ? { scale: 1.06 } : {}}
                whileTap={isWaitingForReset ? { scale: 0.94 } : {}}
                className="relative w-10 h-10 flex items-center justify-center rounded-full"
                style={{
                  background: "#C9523B",
                  boxShadow: isWaitingForReset ? "0 0 20px rgba(201,82,59,0.45)" : "none",
                  cursor: isWaitingForReset ? "pointer" : "default",
                  transition: "box-shadow 0.3s",
                }}
              >
                <AnimatePresence mode="wait">
                  {isWaitingForReset ? (
                    <motion.div
                      key="r"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      whileHover={{ rotate: 180 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}
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
