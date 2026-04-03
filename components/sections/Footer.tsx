export const Footer = () => {
  return (
    <footer className="relative w-full bg-brand-yellow text-brand-purple z-50 overflow-hidden">
      
      {/* Textura sutil en el fondo del bloque amarillo para que no sea un vector plano */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:2rem_2rem]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* BLOQUE IZQUIERDO: LOGO MASIVO */}
        <div className="flex items-center justify-center relative top-[-4px]">
          <span className="text-6xl sm:text-7xl lg:text-[7rem] font-brand font-bold text-brand-purple tracking-tighter leading-none select-none drop-shadow-md">
            rulo.
          </span>
        </div>

        {/* BLOQUE DERECHO: ESLOGAN Y LEGALES */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right m-0 p-0">
          <p className="font-sans text-brand-purple/70 font-semibold text-lg sm:text-xl lg:text-2xl tracking-tight max-w-sm leading-snug">
            El eslabón de IA perdido entre tu pauta y el mostrador.
          </p>
          
          <div className="w-16 h-[2px] bg-brand-purple/20 my-5" />

          <div className="flex flex-col items-center md:items-end gap-1 font-mono text-xs sm:text-sm text-brand-purple/50 font-bold uppercase tracking-widest">
            <span>© {new Date().getFullYear()} SISTEMAS RULO</span>
            <span>Todos los derechos reservados.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
