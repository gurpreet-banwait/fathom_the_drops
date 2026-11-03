const base = import.meta.env.BASE_URL;

export default function Slide6Accessibility() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ fontFamily: "var(--font-body-family)" }}>
      <img
        src={`${base}bio_waves.png`}
        crossOrigin="anonymous"
        alt="Bioluminescent waves"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,15,0.78)", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2, padding: "5vh 6vw", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "#4A7A8C", fontSize: "0.85vw", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: 600 }}>
            FATHOM THE DROPS
          </div>
          <img src={`${base}cw_logo.png`} crossOrigin="anonymous" alt="charity: water" style={{ height: "3.5vh", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.6 }} />
        </div>

        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display-family)", color: "#D0E8F0", fontSize: "4.5vw", fontWeight: 400, margin: 0, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            Built For Everyone
          </h2>
          <div style={{ width: "6vw", height: "1px", background: "#D0E8F0", margin: "2.5vh auto 5vh", opacity: 0.35 }} />

          <div style={{ display: "flex", gap: "3vw", justifyContent: "center" }}>
            <div style={{ flex: 1, padding: "4vh 2.5vw", background: "rgba(74,122,140,0.1)", border: "1px solid rgba(74,122,140,0.25)", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5vh" }}>
              <div style={{ color: "#D0E8F0", fontSize: "3vw", fontFamily: "var(--font-display-family)", fontWeight: 400 }}>Desktop</div>
              <div style={{ width: "4vw", height: "1px", background: "#4A7A8C", opacity: 0.6 }} />
              <div style={{ color: "#D0E8F0", fontSize: "1.15vw", opacity: 0.75, lineHeight: 1.6, textAlign: "center" }}>Left and right arrow keys — tap to nudge, hold to move continuously</div>
            </div>
            <div style={{ flex: 1, padding: "4vh 2.5vw", background: "rgba(74,122,140,0.1)", border: "1px solid rgba(74,122,140,0.25)", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5vh" }}>
              <div style={{ color: "#D0E8F0", fontSize: "3vw", fontFamily: "var(--font-display-family)", fontWeight: 400 }}>Mobile</div>
              <div style={{ width: "4vw", height: "1px", background: "#4A7A8C", opacity: 0.6 }} />
              <div style={{ color: "#D0E8F0", fontSize: "1.15vw", opacity: 0.75, lineHeight: 1.6, textAlign: "center" }}>Drag anywhere on screen — the can follows your finger smoothly</div>
            </div>
            <div style={{ flex: 1, padding: "4vh 2.5vw", background: "rgba(74,122,140,0.1)", border: "1px solid rgba(74,122,140,0.25)", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5vh" }}>
              <div style={{ color: "#D0E8F0", fontSize: "3vw", fontFamily: "var(--font-display-family)", fontWeight: 400 }}>Any device</div>
              <div style={{ width: "4vw", height: "1px", background: "#4A7A8C", opacity: 0.6 }} />
              <div style={{ color: "#D0E8F0", fontSize: "1.15vw", opacity: 0.75, lineHeight: 1.6, textAlign: "center" }}>Fully responsive — no install, no account, no download required</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ color: "#4A7A8C", fontSize: "0.85vw", fontStyle: "italic", fontFamily: "var(--font-display-family)", opacity: 0.8 }}>Accessibility</div>
          <div style={{ color: "#4A7A8C", fontSize: "1vw", fontFamily: "var(--font-display-family)", opacity: 0.7 }}>06</div>
        </div>
      </div>
    </div>
  );
}
