const base = import.meta.env.BASE_URL;

export default function Slide9Closing() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{ fontFamily: "var(--font-body-family)" }}>
      <img
        src={`${base}bio_waves.png`}
        crossOrigin="anonymous"
        alt="Bioluminescent waves"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,5,15,0.45) 0%, rgba(5,5,15,0.92) 100%)", zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2, padding: "5vh 6vw", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "#4A7A8C", fontSize: "0.85vw", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: 600 }}>
            FATHOM THE DROPS
          </div>
          <img src={`${base}cw_logo.png`} crossOrigin="anonymous" alt="charity: water" style={{ height: "3.5vh", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.7 }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flex: 1 }}>
          <h2 style={{ fontFamily: "var(--font-display-family)", color: "#D0E8F0", fontSize: "8vw", fontWeight: 400, margin: 0, lineHeight: 1.0, letterSpacing: "-0.02em" }}>
            Play. Learn. Give.
          </h2>

          <div style={{ width: "6vw", height: "1px", background: "#D0E8F0", margin: "4vh auto", opacity: 0.35 }} />

          <p style={{ color: "#D0E8F0", fontSize: "1.6vw", maxWidth: "38vw", lineHeight: 1.65, fontWeight: 300, opacity: 0.85, marginBottom: "4vh" }}>
            100% of public donations go directly to water projects.
          </p>

          <a
            href="https://www.charitywater.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#7AAABB", fontSize: "1.4vw", letterSpacing: "0.08em", fontWeight: 300, opacity: 0.9, textDecoration: "underline", textUnderlineOffset: "4px" }}
          >
            charitywater.org
          </a>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ color: "#4A7A8C", fontSize: "0.85vw", fontStyle: "italic", fontFamily: "var(--font-display-family)", opacity: 0.8 }}>Fin</div>
          <div style={{ color: "#4A7A8C", fontSize: "1vw", fontFamily: "var(--font-display-family)", opacity: 0.7 }}>09</div>
        </div>
      </div>
    </div>
  );
}
