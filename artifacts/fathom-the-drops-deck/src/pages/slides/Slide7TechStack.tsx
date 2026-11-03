const base = import.meta.env.BASE_URL;

export default function Slide7TechStack() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ fontFamily: "var(--font-body-family)" }}>
      <img
        src={`${base}bio_waves.png`}
        crossOrigin="anonymous"
        alt="Bioluminescent waves"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,15,0.82)", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2, padding: "5vh 6vw", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "#4A7A8C", fontSize: "0.85vw", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: 600 }}>
            FATHOM THE DROPS
          </div>
          <img src={`${base}cw_logo.png`} crossOrigin="anonymous" alt="charity: water" style={{ height: "3.5vh", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.6 }} />
        </div>

        <div style={{ display: "flex", gap: "6vw", alignItems: "flex-start" }}>
          <div style={{ flex: "0 0 32vw" }}>
            <h2 style={{ fontFamily: "var(--font-display-family)", color: "#D0E8F0", fontSize: "4.2vw", fontWeight: 400, margin: 0, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
              Tech Stack
            </h2>
            <div style={{ width: "8vw", height: "1px", background: "#D0E8F0", marginTop: "3vh", marginBottom: "3.5vh", opacity: 0.35 }} />
            <p style={{ color: "#D0E8F0", fontSize: "1.3vw", lineHeight: 1.65, fontWeight: 300, opacity: 0.8 }}>
              Pure client-side architecture — no backend, no database, no server costs.
            </p>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vh 3vw" }}>
              <div style={{ padding: "2.5vh 2vw", background: "rgba(208,232,240,0.05)", border: "1px solid rgba(208,232,240,0.1)" }}>
                <div style={{ color: "#4A7A8C", fontSize: "0.8vw", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1vh", fontWeight: 600 }}>Frontend</div>
                <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontFamily: "var(--font-display-family)", fontWeight: 400, lineHeight: 1.4 }}>React + Vite</div>
                <div style={{ color: "#D0E8F0", fontSize: "1vw", opacity: 0.6, marginTop: "0.5vh" }}>TypeScript 5.9</div>
              </div>
              <div style={{ padding: "2.5vh 2vw", background: "rgba(208,232,240,0.05)", border: "1px solid rgba(208,232,240,0.1)" }}>
                <div style={{ color: "#4A7A8C", fontSize: "0.8vw", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1vh", fontWeight: 600 }}>Rendering</div>
                <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontFamily: "var(--font-display-family)", fontWeight: 400, lineHeight: 1.4 }}>HTML5 Canvas</div>
                <div style={{ color: "#D0E8F0", fontSize: "1vw", opacity: 0.6, marginTop: "0.5vh" }}>60fps game loop</div>
              </div>
              <div style={{ padding: "2.5vh 2vw", background: "rgba(208,232,240,0.05)", border: "1px solid rgba(208,232,240,0.1)" }}>
                <div style={{ color: "#4A7A8C", fontSize: "0.8vw", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1vh", fontWeight: 600 }}>Audio</div>
                <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontFamily: "var(--font-display-family)", fontWeight: 400, lineHeight: 1.4 }}>Web Audio API</div>
                <div style={{ color: "#D0E8F0", fontSize: "1vw", opacity: 0.6, marginTop: "0.5vh" }}>Synthesized in real-time</div>
              </div>
              <div style={{ padding: "2.5vh 2vw", background: "rgba(208,232,240,0.05)", border: "1px solid rgba(208,232,240,0.1)" }}>
                <div style={{ color: "#4A7A8C", fontSize: "0.8vw", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1vh", fontWeight: 600 }}>Workspace</div>
                <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontFamily: "var(--font-display-family)", fontWeight: 400, lineHeight: 1.4 }}>pnpm monorepo</div>
                <div style={{ color: "#D0E8F0", fontSize: "1vw", opacity: 0.6, marginTop: "0.5vh" }}>Node.js 24</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ color: "#4A7A8C", fontSize: "0.85vw", fontStyle: "italic", fontFamily: "var(--font-display-family)", opacity: 0.8 }}>Technology</div>
          <div style={{ color: "#4A7A8C", fontSize: "1vw", fontFamily: "var(--font-display-family)", opacity: 0.7 }}>07</div>
        </div>
      </div>
    </div>
  );
}
