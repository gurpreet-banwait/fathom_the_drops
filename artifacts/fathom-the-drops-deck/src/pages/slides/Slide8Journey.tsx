const base = import.meta.env.BASE_URL;

export default function Slide8Journey() {
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

        <div>
          <h2 style={{ fontFamily: "var(--font-display-family)", color: "#D0E8F0", fontSize: "4.2vw", fontWeight: 400, margin: 0, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            The Journey
          </h2>
          <div style={{ width: "8vw", height: "1px", background: "#D0E8F0", marginTop: "3vh", marginBottom: "5vh", opacity: 0.35 }} />

          <div style={{ display: "flex", gap: "0", alignItems: "stretch", position: "relative" }}>
            <div style={{ position: "absolute", top: "50%", left: "12vw", right: "12vw", height: "1px", background: "rgba(74,122,140,0.4)", zIndex: 0 }} />

            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5vh", position: "relative", zIndex: 1 }}>
              <div style={{ width: "5vw", height: "5vw", border: "1px solid #4A7A8C", background: "rgba(5,5,15,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#D0E8F0", fontSize: "1.5vw", fontFamily: "var(--font-display-family)", fontWeight: 400 }}>01</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "#D0E8F0", fontSize: "1.2vw", fontWeight: 500, marginBottom: "0.8vh" }}>Home Screen</div>
                <div style={{ color: "#D0E8F0", fontSize: "1vw", opacity: 0.6, lineHeight: 1.5 }}>charity: water branding, how-to-play guide</div>
              </div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5vh", position: "relative", zIndex: 1 }}>
              <div style={{ width: "5vw", height: "5vw", border: "1px solid #4A7A8C", background: "rgba(5,5,15,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#D0E8F0", fontSize: "1.5vw", fontFamily: "var(--font-display-family)", fontWeight: 400 }}>02</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "#D0E8F0", fontSize: "1.2vw", fontWeight: 500, marginBottom: "0.8vh" }}>Level Map</div>
                <div style={{ color: "#D0E8F0", fontSize: "1vw", opacity: 0.6, lineHeight: 1.5 }}>7 worlds, locked until unlocked</div>
              </div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5vh", position: "relative", zIndex: 1 }}>
              <div style={{ width: "5vw", height: "5vw", border: "1px solid #4A7A8C", background: "rgba(5,5,15,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#D0E8F0", fontSize: "1.5vw", fontFamily: "var(--font-display-family)", fontWeight: 400 }}>03</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "#D0E8F0", fontSize: "1.2vw", fontWeight: 500, marginBottom: "0.8vh" }}>Gameplay</div>
                <div style={{ color: "#D0E8F0", fontSize: "1vw", opacity: 0.6, lineHeight: 1.5 }}>Catch drops, beat the level</div>
              </div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5vh", position: "relative", zIndex: 1 }}>
              <div style={{ width: "5vw", height: "5vw", border: "1px solid rgba(208,232,240,0.5)", background: "rgba(74,122,140,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#D0E8F0", fontSize: "1.5vw", fontFamily: "var(--font-display-family)", fontWeight: 400 }}>04</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "#D0E8F0", fontSize: "1.2vw", fontWeight: 500, marginBottom: "0.8vh" }}>Win Screen</div>
                <div style={{ color: "#D0E8F0", fontSize: "1vw", opacity: 0.6, lineHeight: 1.5 }}>charity: water mission message</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ color: "#4A7A8C", fontSize: "0.85vw", fontStyle: "italic", fontFamily: "var(--font-display-family)", opacity: 0.8 }}>Player Flow</div>
          <div style={{ color: "#4A7A8C", fontSize: "1vw", fontFamily: "var(--font-display-family)", opacity: 0.7 }}>08</div>
        </div>
      </div>
    </div>
  );
}
