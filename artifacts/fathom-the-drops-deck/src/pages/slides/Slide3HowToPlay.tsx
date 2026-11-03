const base = import.meta.env.BASE_URL;

export default function Slide3HowToPlay() {
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

        <div>
          <h2 style={{ fontFamily: "var(--font-display-family)", color: "#D0E8F0", fontSize: "4.5vw", fontWeight: 400, margin: 0, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            How to Play
          </h2>
          <div style={{ width: "8vw", height: "1px", background: "#D0E8F0", marginTop: "3vh", marginBottom: "5vh", opacity: 0.35 }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5vh 5vw" }}>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ color: "#4A7A8C", fontFamily: "var(--font-display-family)", fontSize: "2.5vw", fontWeight: 400, lineHeight: 1, flexShrink: 0, marginTop: "0.3vh" }}>01</div>
              <div>
                <div style={{ color: "#D0E8F0", fontSize: "1.4vw", fontWeight: 500, marginBottom: "1vh" }}>Move the jerry can</div>
                <div style={{ color: "#D0E8F0", fontSize: "1.15vw", opacity: 0.7, lineHeight: 1.55 }}>Left and right to catch falling blue droplets</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ color: "#4A7A8C", fontFamily: "var(--font-display-family)", fontSize: "2.5vw", fontWeight: 400, lineHeight: 1, flexShrink: 0, marginTop: "0.3vh" }}>02</div>
              <div>
                <div style={{ color: "#D0E8F0", fontSize: "1.4vw", fontWeight: 500, marginBottom: "1vh" }}>Catch 20 clean drops</div>
                <div style={{ color: "#D0E8F0", fontSize: "1.15vw", opacity: 0.7, lineHeight: 1.55 }}>Fill the can to complete each level</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ color: "#4A7A8C", fontFamily: "var(--font-display-family)", fontSize: "2.5vw", fontWeight: 400, lineHeight: 1, flexShrink: 0, marginTop: "0.3vh" }}>03</div>
              <div>
                <div style={{ color: "#D0E8F0", fontSize: "1.4vw", fontWeight: 500, marginBottom: "1vh" }}>Avoid the bad droplets</div>
                <div style={{ color: "#D0E8F0", fontSize: "1.15vw", opacity: 0.7, lineHeight: 1.55 }}>Gray drops reset your count to zero</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ color: "#4A7A8C", fontFamily: "var(--font-display-family)", fontSize: "2.5vw", fontWeight: 400, lineHeight: 1, flexShrink: 0, marginTop: "0.3vh" }}>04</div>
              <div>
                <div style={{ color: "#D0E8F0", fontSize: "1.4vw", fontWeight: 500, marginBottom: "1vh" }}>7 levels to beat</div>
                <div style={{ color: "#D0E8F0", fontSize: "1.15vw", opacity: 0.7, lineHeight: 1.55 }}>Each faster than the last</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ color: "#4A7A8C", fontSize: "0.85vw", fontStyle: "italic", fontFamily: "var(--font-display-family)", opacity: 0.8 }}>Gameplay</div>
          <div style={{ color: "#4A7A8C", fontSize: "1vw", fontFamily: "var(--font-display-family)", opacity: 0.7 }}>03</div>
        </div>
      </div>
    </div>
  );
}
