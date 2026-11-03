const base = import.meta.env.BASE_URL;

export default function Slide1Title() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ fontFamily: "var(--font-body-family)" }}>
      <img
        src={`${base}bio_waves.png`}
        crossOrigin="anonymous"
        alt="Bioluminescent waves"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,5,15,0.55) 0%, transparent 45%)", zIndex: 1 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(5,5,15,0.4) 0%, transparent 40%)", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2, padding: "5vh 6vw", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "2.5vh" }}>
              <div style={{ color: "#4A7A8C", fontSize: "0.85vw", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: 600 }}>
                FATHOM THE DROPS
              </div>
              <div style={{ color: "#4A7A8C", fontSize: "0.85vw", fontStyle: "italic", fontFamily: "var(--font-display-family)", opacity: 0.8 }}>
                A charity: water project
              </div>
            </div>

            <h1 style={{ fontFamily: "var(--font-display-family)", color: "#D0E8F0", fontSize: "7vw", fontWeight: 400, margin: 0, lineHeight: 1.05, letterSpacing: "-0.02em", textWrap: "balance" }}>
              Fathom the Drops
            </h1>

            <div style={{ width: "16vw", height: "1px", background: "#D0E8F0", marginTop: "3vh", marginBottom: "3vh", opacity: 0.35 }} />

            <p style={{ color: "#D0E8F0", fontSize: "1.5vw", maxWidth: "46vw", lineHeight: 1.6, fontWeight: 300, opacity: 0.85 }}>
              A charity: water branded browser game about catching clean water — built in React + HTML5 Canvas.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1vh", paddingTop: "0.5vh" }}>
            <img
              src={`${base}cw_logo.png`}
              crossOrigin="anonymous"
              alt="charity: water"
              style={{ height: "4vh", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.85 }}
            />
          </div>
        </div>

        <div />
      </div>
    </div>
  );
}
