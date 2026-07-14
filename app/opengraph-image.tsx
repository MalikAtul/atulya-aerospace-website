import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="60" height="40" viewBox="0 0 46 30">
            <path d="M10 0 L34 0 L28 7.5 L4 7.5 Z" fill="#C8102E" />
            <path d="M18 10.5 L42 10.5 L36 18 L12 18 Z" fill="#1E6FD9" />
            <path d="M10 21 L34 21 L28 28.5 L4 28.5 Z" fill="#00843D" />
          </svg>
          <div
            style={{
              color: "#0B3D91",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 8,
              textTransform: "uppercase",
            }}
          >
            Atulya Aerospace
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#0B3D91",
              fontSize: 96,
              fontWeight: 800,
              fontStyle: "italic",
              lineHeight: 1.02,
              textTransform: "uppercase",
              letterSpacing: -2,
            }}
          >
            Atulya Aerospace
          </div>
          <div
            style={{
              color: "#C8102E",
              fontSize: 52,
              fontWeight: 800,
              fontStyle: "italic",
              lineHeight: 1.05,
              marginTop: 16,
            }}
          >
            Peerless. By Design.
          </div>
          <div style={{ color: "#49535E", fontSize: 30, marginTop: 26 }}>
            One Platform. Three National Missions.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", gap: 18 }}>
            <span style={{ color: "#C8102E" }}>Defense</span>
            <span style={{ color: "#1E6FD9" }}>Delhiver</span>
            <span style={{ color: "#00843D" }}>MedFly</span>
          </div>
          <div style={{ color: "#49535E" }}>Built in India</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
