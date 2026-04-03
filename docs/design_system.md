# 🎨 Rulo - Sistema de Diseño y Estilos Core

Este documento sirve como la única fuente de verdad (Single Source of Truth) para la dirección de arte, sistema tipográfico y paleta de colores de la Landing Page de **rulo**, originados a partir del diseño del bloque principal (Hero).

---

## 1. ✒️ Ecosistema Tipográfico
El diseño abandonó la típica estética "SaaS plana" integrando una dualidad tipográfica de alto impacto, enfocada en un público High-Ticket. Las fuentes se cargan estáticamente vía `next/font/google` en `layout.tsx`.

*   **Tipografía Base (`--font-sans`): Poppins**
    *   **Uso:** Párrafos, descripciones, micro-features, botones principales, textos estructurales.
    *   **Personalidad:** Geométrica, limpia, tecnológica y altamente legible. Da soporte estructural para que la jerarquía principal descanse.
*   **Tipografía de Acento (`--font-accent`): Playfair Display**
    *   **Uso:** Exclusivamente en Títulos Principales (H1), palabras clave críticas y títulos de micro-features. Se utiliza fuertemente en su versión **Itálica (`italic`)**.
    *   **Personalidad:** Literaria, editorial, lujosa. Otorga ese toque "arriesgado y boutique" que contrasta violentamente (de buena manera) con la solidez de Poppins.
*   **Tipografía de Marca (`--font-brand`): Lexend**
    *   **Uso:** Replicación estricta del isotipo/logo ("rulo.").
*   **Tipografía Técnica (`--font-mono`): Geist Mono**
    *   **Uso:** Indicadores de estado del sistema (ej: "SYSTEM ONLINE", logs, status de terminal).
    *   **Personalidad:** Backend, cruda, programática.

---

## 2. 🎨 Paleta de Colores (`app/globals.css`)
Los colores se definen mediante el bloque de Tailwind CSS nativo v4 `@theme inline`.

### Primarios y Fondos (Brand Purple)
*   `--color-brand-purple` (`#2D0B45`): Color de fondo base de la sección principal. Un morado profundo que simula el vacío oscuro necesario para los contrastes.
*   `--color-brand-purple-light` (`#6B21A8`): Tono saturado usado para *Radial Glows* ambientales en pantalla.
*   `--color-brand-purple-lightest` (`#9D4EDD`): Variación brillante y electrónica para iluminaciones secundarias (usado abajo a la izquierda en el hero para rebotar la luz).

### Acentos de Tensión y Marca (Brand Yellow)
*   `--color-brand-yellow` (`#F4B400`): El amarillo icónico del logo. Usado para CTAs (botones), textos con gradientes y puntos parpadeantes (`animate-ping`).
*   `--color-brand-yellow-light` (`#ffdf70`): Un amarillo casi blanco. Fundamental para los efectos de gradiente de texto en movimiento (`bg-gradient-to-r`).
*   `--color-brand-yellow-hover` (`#ffc633`): Oscurecimiento mínimo de hover en botones interactivos.

### Neutros y Texto (Brand Cream & White)
*   `--color-brand-cream` (`#F5E6BE`): Todo texto secundario, opacado a /80, /60 o /50. Otorga un aura cálida que el clásico texto gris o blanco puro no tiene. Da lujo en vez de simpleza.
*   `text-white`: El texto en blanco (#FFFFFF) se reserva **puramente** para los enunciados primarios y elementos que deben leerse a golpe de vista.

### Status Colors (Neones)
*   `#a0ff6a`: Verde neón / fósforo puro usado exclusivamente en paneles de sistema asíncronos para comunicar **éxito o ganancias financieras** (Ej: "Cobro Exitoso + $1,250.00 USD").

---

## 3. 🧩 Estructuras Visuales & Patrones de UI

### A. Elementos Flotantes (Asynchronous Glassmorphism)
Para evitar pantallas vacías en ordenadores (Desktop) y dar narrativa visual sin sobrexcitar con textos largos, se utilizan placas de cristal flotantes:
*   **Construcción:** `bg-white/[0.015] backdrop-blur-xl border border-white/10`. Crea una ilusión de esmerilado que deja penetrar el gradiente del fondo sin obstruirlo.
*   **Animación:** Estas placas rotan en ángulos aleatorios sutiles (`rotate-[2deg]`) e interactúan con Framer Motion haciendo un "hover vertical" infinito tipo flotación en y `[0, -10, 0]` utilizando una duración asimétrica de 5 o 6 segundos para que parezca aleatorio y orgánico.

### B. El "System Indicator" (Evolución del Badge)
*   En vez del aburrido badge genérico redondeado, se emplea un formato "terminal de sistema".
*   Tiene un pequeño punto parpadeante (`w-1.5 h-1.5 rounded-full flex`) en amarillo puro que respira constantemente usando `animate-ping`.
*   Fuente siempre en mayúsculas `tracking-[0.2em] uppercase`.

### C. Estilos de Botones (Cero Curvas Infantiles)
1.  **Botón Primario (Action CTA):**
    *   Forma: Rectangular y agresivo (`rounded-none`).
    *   Color: `bg-brand-yellow text-brand-purple font-extrabold`.
    *   Interacción Fuerte: Hover state que añade Sombra exterior de Neón (`shadow-[0_0_40px_rgba(244,180,0,0.5)]`), eleva el elemento (`-translate-y-1`) y un brillo en diagonal "Skew Effect" que cruza rápidamente la pantalla dando efecto de vidrio cruzando luz.
2.  **Botón Secundario (Discovery CTA):**
    *   Forma: Tipográfico puro con soporte visual `bg-transparent`.
    *   Interacción Discreta: Carece de márgenes invasivos, delineado únicamente por debajo (`border-b border-brand-cream/30`) coloreándose lentamente a amarillo puro al interactuar en Hover.

### D. Fondo de Arquitectura (Mesh Grid)
*   **Base:** Malla semitransparente con repetición infinita compuesta por una grilla mínima: `bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]`.
*   **Máscara (Fade Out):** Para no recargar, este fondo desaparece dinámicamente en los bordes gracias a una máscara radial de elipse `[mask-image:radial-gradient(...)]` que hace invisible la grilla a medida que se aleja del centro focal de enfoque de lectura.

### E. Entorno Ambienta (Ambient Glows)
En vez de usar fondos radiales genéricos o fondos totalmente vacíos oscuros, se construyen bolas gigantes que pierden enfoque para dar un gradiente etéreo hiper-personalizado que reacciona a las pantallas.
*   `w-[500px] h-[500px] blur-[150px] mix-blend-screen bg-brand-purple-light/30`. Estas entidades son inclickeables (`pointer-events-none`) y conviven atrás de toda interacción.
