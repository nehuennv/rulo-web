import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "rulo. | Monetizá la Demanda Oscura";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Decorative Element */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "20%",
            width: "600px",
            height: "600px",
            background: "rgba(201, 82, 59, 0.15)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          {/* Logo / Brand Name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.05em",
              marginBottom: 40,
              display: "flex",
            }}
          >
            rulo<span style={{ color: "#C9523B" }}>.</span>
          </div>

          {/* Main Title */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: 24,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Monetizá la</span>
            <span style={{ color: "#C9523B", fontStyle: "italic" }}>Demanda Oscura.</span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              color: "rgba(255, 239, 230, 0.7)",
              fontWeight: 400,
              maxWidth: 800,
            }}
          >
            Recuperación de capital y ventas por WhatsApp con Inteligencia Artificial.
          </div>
        </div>

        {/* Footer info */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.4)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}
        >
          <span>somosrulo.com</span>
          <div style={{ width: 4, height: 4, borderRadius: 2, background: "rgba(255, 255, 255, 0.2)" }} />
          <span>ROI Garantizado</span>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
