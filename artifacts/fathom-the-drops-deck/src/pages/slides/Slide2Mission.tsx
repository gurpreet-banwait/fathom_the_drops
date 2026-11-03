const base = import.meta.env.BASE_URL;

export default function Slide2Mission() {
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

        <div style={{ display: "flex", gap: "6vw", alignItems: "center" }}>
          <div style={{ flex: "0 0 38vw" }}>
            <h2 style={{ fontFamily: "var(--font-display-family)", color: "#D0E8F0", fontSize: "4.2vw", fontWeight: 400, margin: 0, lineHeight: 1.1, letterSpacing: "-0.01em", textWrap: "balance" }}>
              The Mission Behind the Game
            </h2>
            <div style={{ width: "8vw", height: "1px", background: "#D0E8F0", marginTop: "3vh", marginBottom: "3.5vh", opacity: 0.35 }} />
            <p style={{ color: "#D0E8F0", fontSize: "1.3vw", lineHeight: 1.65, fontWeight: 300, opacity: 0.8 }}>
              Clean water changes everything — health, education, livelihood. Fathom the Drops brings this truth to life through play.
            </p>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
            <div style={{ padding: "2.5vh 2vw", background: "rgba(74,122,140,0.12)", borderLeft: "2px solid #4A7A8C" }}>
              <div style={{ color: "#D0E8F0", fontSize: "1.4vw", fontFamily: "var(--font-display-family)", fontWeight: 400, marginBottom: "0.8vh" }}>703 million people</div>
              <div style={{ color: "#D0E8F0", fontSize: "1.1vw", opacity: 0.7, lineHeight: 1.5 }}>lack access to clean water today</div>
            </div>
            <div style={{ padding: "2.5vh 2vw", background: "rgba(74,122,140,0.12)", borderLeft: "2px solid #4A7A8C" }}>
              <div style={{ color: "#D0E8F0", fontSize: "1.4vw", fontFamily: "var(--font-display-family)", fontWeight: 400, marginBottom: "0.8vh" }}>170,000+ water projects</div>
              <div style={{ color: "#D0E8F0", fontSize: "1.1vw", opacity: 0.7, lineHeight: 1.5 }}>funded by charity: water worldwide</div>
            </div>
            <div style={{ padding: "2.5vh 2vw", background: "rgba(74,122,140,0.12)", borderLeft: "2px solid #4A7A8C" }}>
              <div style={{ color: "#D0E8F0", fontSize: "1.4vw", fontFamily: "var(--font-display-family)", fontWeight: 400, marginBottom: "0.8vh" }}>100% of public donations</div>
              <div style={{ color: "#D0E8F0", fontSize: "1.1vw", opacity: 0.7, lineHeight: 1.5 }}>go directly to water projects</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ color: "#4A7A8C", fontSize: "0.85vw", fontStyle: "italic", fontFamily: "var(--font-display-family)", opacity: 0.8 }}>The Mission</div>
          <div style={{ color: "#4A7A8C", fontSize: "1vw", fontFamily: "var(--font-display-family)", opacity: 0.7 }}>02</div>
        </div>
      </div>
    </div>
  );
}
