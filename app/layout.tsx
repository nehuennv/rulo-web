import type { Metadata } from "next";
import { Geist_Mono, Google_Sans, Fraunces, Lexend } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScrolling } from "@/components/SmoothScrolling";
import { FloatingNav } from "@/components/FloatingNav";
import { FloatingContact } from "@/components/FloatingContact";
import { SplashScreen } from "@/components/SplashScreen";

const googleSans = Google_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-accent",
  style: ["normal", "italic"],
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://somosrulo.com"),
  title: "rulo. | Agente de IA para WhatsApp — Vendé 24/7 y conocé tu negocio",
  description:
    "rulo responde, convierte y aprende de cada conversación de WhatsApp. Vendé las 24hs sin contratar más vendedores, y recibí cada mes un informe con datos reales: qué productos te piden, qué no tenés en stock y qué dice tu cliente de la competencia.",
  keywords: [
    "agente de IA WhatsApp",
    "ventas por WhatsApp 24/7",
    "inteligencia de negocio WhatsApp",
    "automatización de ventas IA",
    "chatbot WhatsApp Argentina",
    "análisis de conversaciones WhatsApp",
    "WhatsApp Business API",
    "rulo",
    "somosrulo",
    "vendedor IA WhatsApp",
  ],
  authors: [{ name: "rulo" }],
  openGraph: {
    title: "rulo. | Tu negocio vende aunque no estés. Y cada mes te dice por qué.",
    description:
      "rulo es el agente de IA que responde por WhatsApp las 24hs, cierra ventas y te entrega un informe mensual con inteligencia real de tu negocio. Sin sueldo, sin comisiones, con ROI garantizado.",
    url: "https://somosrulo.com",
    siteName: "rulo.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "rulo. | Agente de IA para WhatsApp — Vendé 24/7",
    description:
      "Responde, convierte y aprende de cada chat. A fin de mes te dice qué está fallando en tu negocio. ROI garantizado.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico",                   sizes: "48x48"           },
      { url: "/favicon/favicon.svg",            type:  "image/svg+xml"   },
      { url: "/favicon/favicon-96x96.png",      sizes: "96x96",  type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple:    [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/favicon/site.webmanifest",
  appleWebApp: { title: "rulo." },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("h-full", "antialiased", googleSans.variable, fraunces.variable, lexend.variable, geistMono.variable)}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SplashScreen>
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </SplashScreen>
      </body>
    </html>
  );
}
