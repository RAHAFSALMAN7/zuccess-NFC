"use client";
import { NAVY, ORANGE } from "@/lib/translations";

export default function Solutions({ t }) {
  return (
    <section id="solutions" style={{ background: NAVY }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "white", fontFamily: "Poppins, sans-serif", textAlign: "center", marginBottom: 12 }}>{t.solutions.title}</h2>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", fontFamily: "Nunito, sans-serif", textAlign: "center", marginBottom: 52, maxWidth: 560, margin: "0 auto 52px" }}>{t.solutions.sub}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {t.solutions.segments.map((seg, i) => (
            <div key={i}
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "28px 22px", cursor: "pointer", transition: "all 0.3s ease" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(234,121,70,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{seg.icon}</div>
              <h3 style={{ color: "white", fontFamily: "Poppins, sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{seg.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Nunito, sans-serif", fontSize: 13, lineHeight: 1.6, marginBottom: 18 }}>{seg.desc}</p>
              <span style={{ color: ORANGE, fontSize: 12, fontWeight: 700, fontFamily: "Poppins, sans-serif" }}>{t.solutions.learnMore} →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
