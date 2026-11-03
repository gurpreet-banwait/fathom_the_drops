const base = import.meta.env.BASE_URL;

export default function Slide5Mechanics() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ fontFamily: "var(--font-body-family)" }}>
      <img
        src={`${base}bio_waves.png`}
        crossOrigin="anonymous"
        alt="Bioluminescent waves"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,15,0.8)", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2, padding: "5vh 6vw", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "#4A7A8C", fontSize: "0.85vw", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: 600 }}>
            FATHOM THE DROPS
          </div>
          <img src={`${base}cw_logo.png`} crossOrigin="anonymous" alt="charity: water" style={{ height: "3.5vh", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.6 }} />
        </div>

        <div style={{ display: "flex", gap: "6vw", alignItems: "center" }}>
          <div style={{ flex: "0 0 36vw" }}>
            <h2 style={{ fontFamily: "var(--font-display-family)", color: "#D0E8F0", fontSize: "4.2vw", fontWeight: 400, margin: 0, lineHeight: 1.1, letterSpacing: "-0.01em", textWrap: "balance" }}>
              Game Mechanics
            </h2>
            <div style={{ width: "8vw", height: "1px", background: "#D0E8F0", marginTop: "3vh", marginBottom: "3.5vh", opacity: 0.35 }} />
            <p style={{ color: "#D0E8F0", fontSize: "1.3vw", lineHeight: 1.65, fontWeight: 300, opacity: 0.8 }}>
              Every interaction is crafted to feel responsive and rewarding — from the wobbling droplets to the wave that sweeps the screen on completion.
            </p>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.2vh" }}>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.3vw", height: "5vh", background: "#4A7A8C", flexShrink: 0, marginTop: "0.5vh" }} />
              <div>
                <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontWeight: 500, marginBottom: "0.6vh" }}>Canvas rendering</div>
                <div style={{ color: "#D0E8F0", fontSize: "1.1vw", opacity: 0.65, lineHeight: 1.5 }}>Particle effects and screen shake on every catch</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.3vw", height: "5vh", background: "#4A7A8C", flexShrink: 0, marginTop: "0.5vh" }} />
              <div>
                <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontWeight: 500, marginBottom: "0.6vh" }}>Web Audio API</div>
                <div style={{ color: "#D0E8F0", fontSize: "1.1vw", opacity: 0.65, lineHeight: 1.5 }}>Sound effects generated in real-time — no audio files</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.3vw", height: "5vh", background: "#4A7A8C", flexShrink: 0, marginTop: "0.5vh" }} />
              <div>
                <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontWeight: 500, marginBottom: "0.6vh" }}>Wave swipe animation</div>
                <div style={{ color: "#D0E8F0", fontSize: "1.1vw", opacity: 0.65, lineHeight: 1.5 }}>Sweeps the screen with a compliment on level complete</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ width: "0.3vw", height: "5vh", background: "#4A7A8C", flexShrink: 0, marginTop: "0.5vh" }} />
              <div>
                <div style={{ color: "#D0E8F0", fontSize: "1.3vw", fontWeight: 500, marginBottom: "0.6vh" }}>Fill indicator</div>
                <div style={{ color: "#D0E8F0", fontSize: "1.1vw", opacity: 0.65, lineHeight: 1.5 }}>Jerry can visualizes water level progress in-game</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ color: "#4A7A8C", fontSize: "0.85vw", fontStyle: "italic", fontFamily: "var(--font-display-family)", opacity: 0.8 }}>Under the Hood</div>
          <div style={{ color: "#4A7A8C", fontSize: "1vw", fontFamily: "var(--font-display-family)", opacity: 0.7 }}>05</div>
        </div>
      </div>
    </div>
  );
}
