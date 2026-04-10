# 🎨 rulo. - Sistema de Diseño & Manifiesto Visual

Este documento es el **Single Source of Truth** para la dirección de arte, sistema tipográfico y patrones de UI de **rulo**. Define una estética **Editorial Premium / Boutique** que se aleja del minimalismo SaaS genérico para transmitir autoridad, sofisticación y la sensación de un sistema avanzado de inteligencia artificial.

---

## 1. ✒️ Ecosistema Tipográfico
El diseño utiliza una dualidad tipográfica agresiva para crear jerarquía y carácter.

### Fuentes Principales
*   **Sans (`--font-sans`): Google Sans**
    *   **Uso:** Cuerpo de texto, micro-features, botones, estructuras regulares y explicaciones.
    *   **Estilo:** Limpio, tecnológico, altamente legible en bloques densos.
*   **Accent (`--font-accent`): Fraunces**
    *   **Uso:** Títulos (H1, H2), encabezados de tarjetas conceptuales y palabras clave críticas.
    *   **Regla de Oro:** Se usa predominantemente en su versión **Itálica (`italic`)** combinada con pesos gruesos (`font-bold`, `font-black`) para dar un toque editorial, prestigioso y contrastar con la modernidad de la UI.
*   **Brand (`--font-brand`): Lexend**
    *   **Uso:** Logotipo masivo ("rulo.") y menciones de marca integradas en el texto.
    *   **Carácter:** Geometría amigable pero ultra-profesional. Tracking estrecho (`tracking-tighter`).
*   **Mono (`--font-mono`): Geist Mono**
    *   **Uso:** Labels técnicos, badges de estado (ej: "VENDEDOR IA · 24/7"), indicadores de protocolo y sub-párrafos de Micro-Trust.
    *   **Estilo:** Textos minúsculos (`text-[10px]` a `text-xs`) con tracking invertido extremadamente amplio (`tracking-[0.15em]` a `tracking-[0.2em]`) y `uppercase`.

### Reglas de Énfasis Editorial
1.  **Bold Underline:** Uso de `<strong className="text-white font-bold underline decoration-brand-terracotta decoration-2 underline-offset-4">`. Sirve para clavar conceptos comerciales clave en la mente del usuario (ej: *"es ingreso que antes se iba solo."*).
2.  **Italic Quotes & Emphasized UI:** Las palabras de los leads o los gatillos de venta (ej: *¿Te lo separo para mañana?*) usan `<em className="tracking-wide text-brand-bone/90">` para destacar diálogos en el mundo real.

---

## 2. 🎨 Paleta de Colores
Diseñada con tonos orgánicos y térmicos que eliminan la fatiga visual de los monitores, aportando madurez industrial y minimalismo premium.

### Base (Dark Earth / Warm Stone)
*   **Background (`#231F1E` // `#1A1816` en bóvedas):** Grafito y ébano cálidos. No existe el negro puro ni el gris azulado en fondos.
*   **Bone (`#E8E3D9`):** El color primario de texto. Se evita el blanco puro excepto para enfatizar. Actúa con distintas opacidades:
    *   **/80:** Lectura principal (párrafos).
    *   **/60 o /50:** Metadatos, descripciones secundarias de cards.
    *   **/30:** Separadores sutiles y micro-trust items de opacidad progresiva.

### Acentos Funcionales
*   **Terracotta (`#C9523B`):** El color de la **Tensión Comercial y la Acción**. Domina botones interactivos primarios, badges de alerta de ventas y líneas separadoras.
*   **Success (`#52B788`):** Verde salvia apagado exclusivo para **resultados financieros y ROI (Capital Recuperado, facturación nueva)**. Transmite éxito monetario sin estridencia agresiva de neón.

---

## 3. 🧩 Patterns de UI & Detalles de Componentes

### A. Superficies Glassmorphism Asíncrono
Todos los contenedores de features, ROI o dolores siguen el patrón "Cristal Esmerilado Premium":
*   **Base:** `bg-white/[0.015] backdrop-blur-sm border border-white/5`
*   **Inner Core ("La Bóveda"):** El Final CTA tiene su fondo súper concentrado para elevar jerarquía (`bg-[#1A1816]/60 backdrop-blur-3xl shadow-[0_0_100px_rgba(201,82,59,0.08)] border-brand-terracotta/20`).
*   **Hover State Dinámico:** En lg/desktop, `hover:bg-white/[0.03] hover:border-white/10 hover:shadow-2xl hover:translate-y-[-4px]`. Además, incorporan destellos o glows internos en el top-right o centro mediante máscaras de degradado radial: `bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]`.

### B. El Ecosistema de Íconos
No flotan solitarios, viven encerrados y protegidos por un marco que se expande:
*   **Estructura:** Background del mismo tono del color (`bg-brand-bone/5`, `bg-brand-success/10`), borde 10% más fuerte del color, `rounded-lg` o `rounded-xl`.
*   **Interacción Recreativa:** `transform-gpu transition-all hover:scale-110`; el ícono mismo suele teñirse del color secundario en hover (ej. de Bone a Terracotta).

### C. Shimmer & Botones Afilados
*   **CTAs Principales:** Agresivos pero sutiles en sus bordes (`rounded-[2px]` o `rounded-sm`). Usan una animación intensa internamente ("Shimmer effect"): un div posicionado absoluto con sesgo `skew-x-[-15deg] bg-gradient-to-r`-
*   **Botones Secundarios:** Estilo fantasma (border bottom/transparent bg) o con contornos suaves, pero con feedback constante de traslación en el ícono de flecha (`group-hover:translate-x-1.5`).

### D. Ambient Glows (Iluminación Topológica)
El espacio nunca es plano. Se ilumina con "orbes" gigantes y difusos situados detrás del contenido:
*   **Glows Centrales/Radiales:** Elementos posicionados con `absolute`, `blur-[100px]` o `blur-[150px]`, aplicando `mix-blend-screen` para fusionar color con el grafito y dar la ilusión óptica de luz ambiental de servidor.

---

## 4. 🧠 UX Editorial & Tone of Voice

*   **Vendedor IA 24/7:** El concepto central mutó de la "demanda oscura" a un pitch altamente pragmático: **Tu negocio vende, aunque no estés. El cliente no espera y rulo atiende 24/7.**
*   **Pulsos de Vida (Status Indicators):** Elementos decorativos animados como `animate-ping absolute bg-brand-terracotta opacity-75` en bolitas rojas o verdes para validar visualmente que el protocolo está "Live", corriendo asíncronamente mientras el usuario lee.
*   **Micro-Trust Indicators:** Pequeños detalles intercalados como `. · .` o mini badges (`Cerrado · 00:02 AM`, `Sin riesgo de bloqueo`) para aumentar la sensación de veracidad, trazabilidad inmutable y confianza operativa.

---

## 5. 📏 Secciones, Sistema de Grado & Ritmo

*   **Vertical Padding:** Estructura modular constante. Márgenes y paddings verticales amplios (`py-16 sm:py-24 lg:py-36`) para permitir que la información respire y el scroll fluya.
*   **Headers Consistentes:** Encabezados compuestos por:
    1.  Badge Mono con línea transversal: `w-6 sm:w-8 h-[1px] bg-brand-terracotta/50/60`
    2.  H2 principal que mezcla Sans + Accent Italic.
*   **Responsive Fluidity:** El tamaño de textos e interfaces escale progresivamente a través de clases responsivas de tailwind y valores variables como `clamp()`. No hay saltos abruptos.
*   **Max Width:** El cuerpo de la UI queda sujeto a contenedores de máxima expansión para asegurar densidades correctas (`max-w-5xl`, `max-w-7xl` según peso de información).
