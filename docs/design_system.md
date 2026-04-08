# 🎨 rulo - Sistema de Diseño & Manifiesto Visual

Este documento es el **Single Source of Truth** para la dirección de arte, sistema tipográfico y patrones de UI de **rulo**. Define una estética **Editorial Premium / Boutique** que se aleja del minimalismo SaaS genérico para transmitir autoridad, sofisticación y alto valor estratégico.

---

## 1. ✒️ Ecosistema Tipográfico
El diseño utiliza una dualidad tipográfica agresiva para crear jerarquía y carácter.

### Fuentes Principales
*   **Sans (`--font-sans`): Poppins**
    *   **Uso:** Cuerpo de texto, micro-features, botones, estructuras.
    *   **Estilo:** Limpio, tecnológico, legible.
*   **Accent (`--font-accent`): Playfair Display**
    *   **Uso:** Títulos (H1, H2), títulos de tarjetas y palabras clave críticas.
    *   **Regla de Oro:** Se usa predominantemente en su versión **Itálica (`italic`)** para dar ese toque editorial y lujoso.
*   **Brand (`--font-brand`): Lexend**
    *   **Uso:** Logotipo ("rulo.") y menciones de marca integradas en el texto.
    *   **Carácter:** Geometría amigable pero ultra-profesional.
*   **Mono (`--font-mono`): Geist Mono**
    *   **Uso:** Labels de sistema, indicadores técnicos (ej: "SYSTEM ONLINE"), pre-títulos de sección.

### Reglas de Énfasis Editorial
Para mantener la autoridad en la lectura:
1.  **Bold Underline:** Uso de `<strong className="text-white font-bold underline decoration-brand-terracotta/brand-success decoration-2 underline-offset-4">`. Se usa para conceptos clave como "Demanda Oscura" o "Margen Neto".
2.  **Italic Quotes:** Las citas de usuarios o ejemplos de conversación usan `em className="text-white italic"` para separarlas de la narrativa técnica.

---

## 2. 🎨 Paleta de Colores
Basada en tonos orgánicos y térmicos que eliminan la fatiga visual y transmiten madurez.

### Base (Warm Stone / Dark Earth)
*   **Background (`#231F1E`):** Tonos ébano/grafito cálidos.
*   **Bone (`#E8E3D9`):** El color hueso reemplaza al blanco para el texto secundario y descriptivo (usualmente al 80% o 60% de opacidad).

### Acentos Funcionales
*   **Terracotta (`#C9523B`):** El color de la "Tensión Comercial". Usado para CTAs principales y puntos de dolor.
*   **Success (`#52B788`):** Verde salvia/mate para **resultados financieros y ROI**. Representa el dinero recuperado sin la estridencia del verde neón.

### Jerarquía de Opacidad (Tailwind Classes)
*   **/80:** Lectura principal (párrafos).
*   **/60:** Metadatos, descripciones secundarias, sub-párrafos.
*   **/40:** Separadores, detalles decorativos mínimos.

---

## 3. 🧩 Patterns de UI & Componentes

### A. Glassmorphism Asíncrono
Los contenedores (tarjetas de Features, ROI, Pain points) siguen un patrón de cristal esmerilado:
*   **Estilo:** `bg-white/[0.015] backdrop-blur-sm border border-white/5`.
*   **Hover State:** `lg:hover:bg-white/[0.03] lg:hover:border-white/10 lg:hover:shadow-2xl`. Los elementos se elevan sutilmente (`y-[-4px]`).

### B. El Contenedor de Íconos
Los íconos no flotan solos; viven en un ecosistema protegido:
*   **Estructura:** Fondo `bg-brand-bone/5` (o `brand-success/10`), borde `border-brand-bone/10` y esquinas `rounded-lg`.
*   **Reacción:** En hover, el ícono escala (`scale-110`) y cambia hacia el color de acento de la tarjeta.

### C. Botones: Contradicción Estética
*   **CTAs Principales:** Rectangulares y agresivos (`rounded-none`). Transmiten solidez y decisión.
*   **Navegación / Floating UI:** Orgánicos y circulares (`rounded-full`). Transmiten fluidez y comodidad de uso.

### D. Ambient Glows (Depth)
Para evitar el "vacío digital", se utilizan orbes desenfocados en el fondo:
*   **Glows:** `blur-[100px]` o `blur-[150px]`, `mix-blend-screen`.
*   **Mesh Grid:** Una malla mínima de 1px (`#ffffff0a`) con máscara radial para que desaparezca suavemente hacia los bordes.

---

## 4. 🧠 UX Editorial & Naming (Tone of Voice)

*   **Lowercase Branding:** La marca siempre se escribe en minúsculas: **rulo**. Se siente como una herramienta, una utilidad técnica integrada, no un gran corporativo.
*   **Demanda Oscura:** Concepto central de la narrativa. Se trata con seriedad técnica.
*   **Pulsos de Vida:** Uso de `animate-ping` en indicadores de "SYSTEM ONLINE" o "LIVE" para demostrar que la infraestructura es asíncrona y está activa 24/7.

---

## 5. 📏 Secciones & Ritmo
Para mantener la sensación de "Sitio Premium de una sola página":
*   **Vertical Padding:** Estándar de `py-16 sm:py-24 lg:py-36`.
*   **Section Headers:** Siempre incluyen un pre-título en `font-mono` con una línea decorativa lateral (`w-8 h-[1px] bg-brand-terracotta`).
*   **Max Width:** Contenedores limitados a `max-w-7xl` para asegurar legibilidad en monitores Ultra-Wide.
