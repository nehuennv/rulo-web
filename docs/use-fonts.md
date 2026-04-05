# 🏺 Rulo - Manifiesto de Identidad Visual (Full Design System)

Este documento es la **Única Fuente de Verdad** para la dirección de arte de **rulo.**. Define cómo el color, la tipografía y la estructura conviven para crear una experiencia "Editorial Premium / Boutique", alejándose de la estética genérica de las startups de Silicon Valley.

---

## 🏛️ 1. Filosofía de Diseño: "Editorial Boutique"

Rulo no es una herramienta de software cualquiera; es una boutique de recuperación de ventas. Su diseño debe respirar:
*   **Autoridad:** A través de tipografías serif clásicas.
*   **Tecnología:** A través de fondos dinámicos y micro-interacciones.
*   **Valor High-Ticket:** A través de una paleta de colores orgánica y oscura que transmite madurez.

---

## 🎨 2. La Alquimia del Color (The Stone & Clay Palette)

Abandonamos el negro puro (`#000`) y el blanco puro (`#FFF`) para evitar la fatiga visual y el look "barato".

### A. La Base: "Dark Earth / Stone" (Fondos)
| Color | HEX | Propósito |
| :--- | :--- | :--- |
| ![#231F1E](https://via.placeholder.com/15/231F1E/231F1E.png) | `#231F1E` | **Fondo Maestro:** Un ébano cálido. Absorbe la luz y da un lienzo sofisticado. |
| ![#3A3331](https://via.placeholder.com/15/3A3331/3A3331.png) | `#3A3331` | **Profundidad:** Usado para resplandores ambientales y el "relleno" de cristales. |
| ![#4F4643](https://via.placeholder.com/15/4F4643/4F4643.png) | `#4F4643` | **Luz Estructural:** Usado exclusivamente para bordes (`white/10`) y reflejos ínfimos. |

### B. El Fuego: "Brand Terracotta" (Acción)
| Color | HEX | Propósito |
| :--- | :--- | :--- |
| ![#C9523B](https://via.placeholder.com/15/C9523B/C9523B.png) | `#C9523B` | **Conversión:** Botones primarios y puntos de tensión visual. |
| ![#E2735E](https://via.placeholder.com/15/E2735E/E2735E.png) | `#E2735E` | **Energía:** Usado en gradientes de texto y "glows" suaves. |

### C. La Luz: "Bone & Ivory" (Lectura)
| Color | HEX | Propósito |
| :--- | :--- | :--- |
| ![#FCFBF8](https://via.placeholder.com/15/FCFBF8/FCFBF8.png) | `#FCFBF8` | **Ivory:** Blanco marfil para H1/H2. Máximo contraste, cero fatiga. |
| ![#E8E3D9](https://via.placeholder.com/15/E8E3D9/E8E3D9.png) | `#E8E3D9` | **Bone:** Color para párrafos. Siempre opacado a un 80% o 60%. |

---

## ✒️ 3. Ecosistema Tipográfico (La Dualidad)

### **Playfair Display** (Acento / Serif)
*   **Uso:** H1, Negritas de impacto, Citas.
*   **Estilo:** Itálica por defecto.
*   **Significado:** Es el "lado humano", editorial y de lujo del producto. Utiliza la minúscula de doble piso (double-story 'a'), la base de nuestra elegancia.

### **Montserrat** (Base / Sans)
*   **Uso:** Todo el texto estructural, botones y dashboards.
*   **Estilo:** `Light (300)` para descripciones largas; `Extrabold (800)` para acciones.
*   **Por qué Montserrat:** Elegida por su **"a" clásica de doble piso**, que rompe con la estética geométrica infantil de otras fuentes sans. Aporta ritmo literario y madurez visual, alineándose perfectamente con Playfair.

### **Geist Mono** (Técnico)
*   **Uso:** Badges, estados del sistema ("SCANNING...").
*   **Estilo:** `Uppercase` + `Tracking-[0.2em]`.

---

## 🏗️ 4. Estructuras Continentales (Background Architecture)

El fondo de Rulo no es plano, es una "atmósfera en capas":

1.  **Capa 0 (Base):** Color `#231F1E`.
2.  **Capa 1 (Mesh Grid):** Una grilla milimétrica (`#ffffff0a`) con máscara radial central que desaparece hacia los bordes.
3.  **Capa 2 (Ambient Glows):** Grandes esferas desenfocadas (`blur-150px`) en Terracotta y Dark-Light que flotan detrás del contenido.
4.  **Capa 3 (Glassmorphism):** Placas con `backdrop-blur-xl` y `bg-white/[0.015]`.

---

## 🧩 5. Patrones de UI (Component Rules)

### **A. El Botón "Sharp"**
*   **Regla:** Cero curvas. El borde es radio `2px` o `none`.
*   **Sombra:** No usar sombras difusas negras. Usar resplandor del color de marca (`shadow-terracotta/50`).
*   **Interacción:** Hover con desplazamiento hacia arriba (`-translate-y-1`) y efecto de brillo cruzado ("Skew light effect").

### **B. El "System Indicator"**
*   En lugar de badges redondeados tipo iOS, usamos etiquetas cuadradas con un punto parpadeante (`animate-ping`) en Amarillo o Terracotta. Transmite que el sistema está "vivo" y auditando chats.

### **C. Placas Flotantes**
*   Inclinación de `2deg` a `4deg` para romper la linealidad.
*   Animación infinita de flotación ("Floating effect") con Framer Motion: `y: [0, -10, 0]` en 5-6 segundos.

---

## 📸 6. Blueprint para Instagram Carousels

Para replicar esta identidad en Instagram, sigue este orden de lectura:

### 📱 Slide 1 (Hook)
*   **Fondo:** `#231F1E` puro.
*   **Título:** Gigante en **Playfair Italic** con color **Ivory**.
*   **Foco:** Una palabra subrayada en **Terracotta**.

### 📱 Slides de Contenido
*   **Fondos:** Usar formas circulares desenfocadas en los bordes para guiar la mirada.
*   **Tipografía:** **Montserrat** regular para explicar, Playfair para resaltar "Insights".
*   **Ritmo:** Alternar un slide oscuro con un slide que tenga un "Ambient Glow" más fuerte para mantener el engagement.

### 📱 Slide Final (Call to Action)
*   **Fondo:** `#3A3331` (un tono más claro para "iluminar" el final).
*   **Acción:** Botón Terracotta gigante con tipografía **Montserrat** Extrabold.

---

> [!CAUTION]
> **Prohibido:** No uses bordes de colores sólidos. Los bordes siempre deben ser blancos o crema con opacidad máxima del 20% (`border-white/20`).

> [!TIP]
> **Regla del 60-30-10:**
> *   60% de `#231F1E` (Inmersión)
> *   30% de `#E8E3D9` (Lectura)
> *   10% de `#C9523B` (Conversión)
