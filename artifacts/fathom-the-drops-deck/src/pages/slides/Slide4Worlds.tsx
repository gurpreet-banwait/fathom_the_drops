const base = import.meta.env.BASE_URL;

export default function Slide4Worlds() {
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
            7 Worlds, 7 Levels
          </h2>
          <div style={{ width: "6vw", height: "1px", background: "#D0E8F0", margin: "2.5vh auto 5vh", opacity: 0.35 }} />

          <div style={{ display: "flex", gap: "1.8vw", justifyContent: "center" }}>
            <div style={{ flex: 1, padding: "3vh 1.2vw", background: "rgba(74,122,140,0.1)", border: "1px solid rgba(74,122,140,0.25)" }}>
              <div style={{ color: "#4A7A8C", fontSize: "0.75vw", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5vh", fontWeight: 600 }}>Level 1</div>
              <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontFamily: "var(--font-display-family)", fontWeight: 400 }}>Mountains</div>
            </div>
            <div style={{ flex: 1, padding: "3vh 1.2vw", background: "rgba(74,122,140,0.1)", border: "1px solid rgba(74,122,140,0.25)" }}>
              <div style={{ color: "#4A7A8C", fontSize: "0.75vw", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5vh", fontWeight: 600 }}>Level 2</div>
              <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontFamily: "var(--font-display-family)", fontWeight: 400 }}>Forest</div>
            </div>
            <div style={{ flex: 1, padding: "3vh 1.2vw", background: "rgba(74,122,140,0.1)", border: "1px solid rgba(74,122,140,0.25)" }}>
              <div style={{ color: "#4A7A8C", fontSize: "0.75vw", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5vh", fontWeight: 600 }}>Level 3</div>
              <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontFamily: "var(--font-display-family)", fontWeight: 400 }}>Desert</div>
            </div>
            <div style={{ flex: 1, padding: "3vh 1.2vw", background: "rgba(74,122,140,0.1)", border: "1px solid rgba(74,122,140,0.25)" }}>
              <div style={{ color: "#4A7A8C", fontSize: "0.75vw", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5vh", fontWeight: 600 }}>Level 4</div>
              <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontFamily: "var(--font-display-family)", fontWeight: 400 }}>Beach</div>
            </div>
            <div style={{ flex: 1, padding: "3vh 1.2vw", background: "rgba(74,122,140,0.1)", border: "1px solid rgba(74,122,140,0.25)" }}>
              <div style={{ color: "#4A7A8C", fontSize: "0.75vw", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5vh", fontWeight: 600 }}>Level 5</div>
              <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontFamily: "var(--font-display-family)", fontWeight: 400 }}>Savanna</div>
            </div>
            <div style={{ flex: 1, padding: "3vh 1.2vw", background: "rgba(74,122,140,0.1)", border: "1px solid rgba(74,122,140,0.25)" }}>
              <div style={{ color: "#4A7A8C", fontSize: "0.75vw", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5vh", fontWeight: 600 }}>Level 6</div>
              <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontFamily: "var(--font-display-family)", fontWeight: 400 }}>Arctic</div>
            </div>
            <div style={{ flex: 1, padding: "3vh 1.2vw", background: "rgba(74,122,140,0.15)", border: "1px solid rgba(74,122,140,0.5)" }}>
              <div style={{ color: "#4A7A8C", fontSize: "0.75vw", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.5vh", fontWeight: 600 }}>Level 7</div>
              <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontFamily: "var(--font-display-family)", fontWeight: 400 }}>City</div>
            </div>
          </div>

          <p style={{ color: "#D0E8F0", fontSize: "1.2vw", opacity: 0.65, marginTop: "4vh", lineHeight: 1.6, fontWeight: 300 }}>
            Each level features a hand-drawn canvas background — drop speed increases with every world.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ color: "#4A7A8C", fontSize: "0.85vw", fontStyle: "italic", fontFamily: "var(--font-display-family)", opacity: 0.8 }}>Level Design</div>
          <div style={{ color: "#4A7A8C", fontSize: "1vw", fontFamily: "var(--font-display-family)", opacity: 0.7 }}>04</div>
        </div>
      </div>
    </div>
  );
}
