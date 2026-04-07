import type { Metadata } from "next";
import { Geist_Mono, Poppins, Playfair_Display, Lexend } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScrolling } from "@/components/SmoothScrolling";
import { FloatingNav } from "@/components/FloatingNav";
import { FloatingContact } from "@/components/FloatingContact";
import { SplashScreen } from "@/components/SplashScreen";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
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
  title: "rulo - Recuperá ventas perdidas con IA",
  description:
    "Rulo convierte visitas en clientes con mensajes automáticos de WhatsApp. El carrito abandonado para tiendas físicas.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("h-full", "antialiased", poppins.variable, playfair.variable, lexend.variable, geistMono.variable)}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SplashScreen>
          <SmoothScrolling>
            {children}
            <FloatingNav />
            <FloatingContact />
          </SmoothScrolling>
        </SplashScreen>
      </body>
    </html>
  );
}
