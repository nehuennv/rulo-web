import React from "react";

export const Footer = () => {
  /* 1. SEO TÉCNICO (JSON-LD): Esto le dice a Google exactamente qué es RULO, 
     cuáles son sus canales de contacto oficiales y sus redes. 
     Es obligatorio para posicionamiento de marca B2B. */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SISTEMAS RULO",
    "description": "El vendedor de IA que cierra cuando tu equipo descansa. Agente de ventas 24/7.",
    "email": "somosrulo.soporte@gmail.com",
    "sameAs": [
      "https://www.instagram.com/somosrulo"
    ]
  };

  return (
    <footer className="relative w-full bg-brand-terracotta-hover text-white z-50 overflow-hidden">

      {/* Inyección Silenciosa de Metadatos para Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Textura sutil en el fondo del bloque terracota */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:2rem_2rem]" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">

        {/* BLOQUE IZQUIERDO: LOGO MASIVO — Fluido y responsivo */}
        <div className="flex items-center justify-center relative md:top-[-4px]">
          {/* 2. SEMÁNTICA Y UX: El logo de un footer siempre debe redirigir al home y tener un aria-label descriptivo */}
          <a
            href="/"
            aria-label="Volver a la página principal de rulo"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl"
          >
            <span className="text-[clamp(4.5rem,18vw,8.5rem)] sm:text-7xl lg:text-[9rem] font-brand font-bold text-brand-bone tracking-tighter leading-none select-none transform-gpu transition-all duration-500">
              rulo<span className="text-brand-terracotta-light">.</span>
            </span>
          </a>
        </div>

        {/* BLOQUE DERECHO: ESLOGAN Y LEGALES */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right w-full md:w-auto">
          <p className="font-sans text-white/80 font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight max-w-[25ch] sm:max-w-[35ch] leading-[1.2] mb-6 sm:mb-8">
            El vendedor de IA que cierra <br /> cuando tu equipo descansa.
          </p>

          <div className="w-12 sm:w-16 h-[2px] bg-white/20 mb-6 sm:mb-8" aria-hidden="true" />

          <div className="flex flex-col items-center md:items-end gap-3 font-mono text-[10px] sm:text-xs text-white/60 font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            <a
              href="mailto:somosrulo.soporte@gmail.com"
              aria-label="Enviar un correo a soporte de Rulo"
              /* 3. ACCESIBILIDAD: focus-visible agregado a todos los enlaces interactivos */
              className="hover:text-white transition-colors duration-300 flex items-center gap-2 group mb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
              </svg>
              <span className="opacity-70 group-hover:opacity-100 lowercase font-sans font-medium tracking-tight text-sm sm:text-base">
                somosrulo.soporte@gmail.com
              </span>
            </a>

            <a
              href="https://www.instagram.com/somosrulo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el Instagram oficial de Rulo"
              className="hover:text-white transition-colors duration-300 flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="opacity-70 group-hover:opacity-100">Instagram</span>
            </a>

            <div className="flex flex-col items-center md:items-end gap-1 mt-2">
              <span className="whitespace-nowrap">© {new Date().getFullYear()} SISTEMAS RULO</span>
              <span className="opacity-70">Todos los derechos reservados.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Sub-footer extra chiquito */}
      <div className="w-full border-t border-white/5 py-4 bg-black/10">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-90 text-brand-bone font-bold">
            Hecho en Argentina
          </span>
        </div>
      </div>
    </footer>
  );
};