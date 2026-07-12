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
          background: "#06070a",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="44" height="44" viewBox="0 0 32 32">
            <path d="M16 2 L30 30 L16 23 L2 30 Z" fill="#ff8e1f" />
            <path d="M16 10 L23.5 26 L16 22.2 L8.5 26 Z" fill="#06070a" />
          </svg>
          <div
            style={{
              color: "#edeff2",
              fontSize: 26,
              letterSpacing: 10,
              textTransform: "uppercase",
            }}
          >
            Atulya Aerospace
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#edeff2",
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.02,
              textTransform: "uppercase",
              letterSpacing: -2,
            }}
          >
            One stack.
          </div>
          <div
            style={{
              color: "#ff8e1f",
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.02,
              textTransform: "uppercase",
              letterSpacing: -2,
            }}
          >
            Three missions.
          </div>
          <div style={{ color: "#99a1ad", fontSize: 30, marginTop: 28 }}>
            India&apos;s unified autonomous drone platform — defense, delivery, lifeline.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#5d6572",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div>Defense · Delhiver · MedFly</div>
          <div>Gohana · Haryana · Bharat</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
