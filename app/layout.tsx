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
  title: "rulo. | Monetizá la Demanda Oscura y Recuperá tu Capital con IA",
  description:
    "rulo es la IA que ilumina los leads que pagaste y nunca cerraste. Recuperación automática de ventas por WhatsApp con ROI garantizado y auditoría 24/7.",
  keywords: [
    "Demanda Oscura",
    "Recuperación de Capital",
    "IA para ventas",
    "WhatsApp Marketing",
    "Meta Ads ROI",
    "Auditoría de Ventas",
    "rulo",
    "somosrulo",
  ],
  authors: [{ name: "rulo Team" }],
  openGraph: {
    title: "rulo. | Monetizá la Demanda Oscura",
    description: "Recuperación automática de ventas con IA. Dejá de perder capital en WhatsApp hoy.",
    url: "https://somosrulo.com",
    siteName: "rulo.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "rulo. | Monetizá la Demanda Oscura",
    description: "Recuperación automática de ventas con IA. ROI garantizado.",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  appleWebApp: {
    title: "rulo.",
  },
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
