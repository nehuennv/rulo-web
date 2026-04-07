"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#problem-agitation", label: "Sistema" },
  { href: "#roi", label: "Rentabilidad" },
  { href: "#faq", label: "FAQ" },
] as const;

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

/* ─── Overlay Menu (Mobile) ─────────────────────────────────────────── */
const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  /* Lock body scroll when menu is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={onClose}
            className="fixed inset-0 z-[98] bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[99] w-[calc(100%-2rem)] max-w-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            <div className="rounded-2xl bg-[#2C2826] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">

              {/* Status indicator */}
              <div className="flex items-center gap-2 px-5 pt-5 pb-4 border-b border-white/[0.07]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-yellow-400" />
                </span>
                <span
                  style={{ letterSpacing: "0.2em" }}
                  className="font-mono text-[9px] uppercase text-white/30"
                >
                  SYSTEM ONLINE
                </span>
              </div>

              {/* Links */}
              <nav className="flex flex-col px-3 py-3">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.06,
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="group flex items-center justify-between px-4 py-3.5 rounded-xl text-brand-bone/70 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                    >
                      <span className="font-sans font-medium text-base">
                        {link.label}
                      </span>
                      {/* Arrow indicator */}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-brand-terracotta"
                      >
                        <path
                          d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <div className="px-3 pb-3">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href="#final-cta"
                    onClick={handleLinkClick}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-hover text-white font-sans font-bold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(201,82,59,0.25)] hover:shadow-[0_0_30px_rgba(201,82,59,0.4)]"
                  >
                    Recuperar Ventas
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="shrink-0"
                    >
                      <path
                        d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

/* ─── Hamburger Icon ─────────────────────────────────────────────────── */
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
  >
    <motion.line
      x1="3" y1="5" x2="15" y2="5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      animate={isOpen ? { y1: 9, y2: 9, x1: 4.5, x2: 13.5, rotate: 45 } : { y1: 5, y2: 5, x1: 3, x2: 15, rotate: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      style={{ originX: "50%", originY: "50%" }}
    />
    <motion.line
      x1="3" y1="9" x2="15" y2="9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.15 }}
    />
    <motion.line
      x1="3" y1="13" x2="15" y2="13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      animate={isOpen ? { y1: 9, y2: 9, x1: 4.5, x2: 13.5, rotate: -45 } : { y1: 13, y2: 13, x1: 3, x2: 15, rotate: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      style={{ originX: "50%", originY: "50%" }}
    />
  </svg>
);

/* ─── Main Component ─────────────────────────────────────────────────── */
export const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 120);
    /* Auto-close menu if user scrolled */
    if (window.scrollY <= 120) setMenuOpen(false);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* Close menu on Escape */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            /* 
              - w-[calc(100%-2rem)] ensures 1rem margin on each side on mobile
              - max-w-4xl caps it on large screens
              - transform-gpu prevents paint jank during blur/scroll
            */
            className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] transform-gpu w-[calc(100%-2rem)] md:w-auto max-w-4xl"
          >
            <div
              className={`
                flex items-center justify-between md:justify-start
                pl-1 pr-1 py-1
                md:pl-1.5 md:pr-1.5 md:py-1.5
                rounded-full transition-all duration-300
                bg-[#231F1E]/85 backdrop-blur-2xl
                border border-white/10
                shadow-[0_10px_40px_rgba(0,0,0,0.5)]
              `}
            >
              {/* ── Logo ─────────────────────────── */}
              <button
                onClick={scrollToTop}
                className="
                  flex items-center
                  pl-4 pr-3 md:pl-6 md:pr-4
                  py-1.5
                  font-brand font-bold text-xl md:text-2xl
                  text-brand-bone hover:text-white
                  transition-colors focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-brand-terracotta/50
                  rounded-full tracking-tight shrink-0
                "
                aria-label="Ir al inicio"
              >
                rulo<span className="text-brand-terracotta">.</span>
              </button>

              {/* ── Desktop: Divider + Links ──────── */}
              <div className="hidden md:flex items-center">
                <div className="w-px h-5 bg-white/10 mx-1" aria-hidden="true" />
                <nav className="flex items-center gap-1 px-4" aria-label="Navegación principal">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-2 rounded-full text-sm font-sans font-medium text-brand-bone/80 hover:text-white hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="w-px h-5 bg-white/10 mx-1" aria-hidden="true" />
              </div>

              {/* ── CTA (desktop only — en mobile vive en el menú desplegable) ── */}
              <Link
                href="#final-cta"
                className="
                  hidden md:inline-flex ml-2
                  bg-brand-terracotta hover:bg-brand-terracotta-hover
                  text-white
                  px-6
                  py-2.5
                  rounded-full
                  font-sans font-bold
                  text-sm
                  whitespace-nowrap
                  transition-all duration-200 transform-gpu
                  hover:scale-[1.02]
                  shadow-[0_0_15px_rgba(201,82,59,0.3)]
                  hover:shadow-[0_0_25px_rgba(201,82,59,0.5)]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/70
                  shrink-0
                "
              >
                Recuperar Ventas
              </Link>

              {/* ── Hamburger (mobile only) ───────── */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                className="
                  md:hidden
                  ml-1 mr-1
                  flex items-center justify-center
                  w-9 h-9
                  rounded-full
                  text-brand-bone/70 hover:text-white
                  hover:bg-white/[0.08]
                  transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50
                  shrink-0
                "
              >
                <HamburgerIcon isOpen={menuOpen} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Portal */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};