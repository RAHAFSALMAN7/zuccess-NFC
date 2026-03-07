"use client";
import FAQItem from "./FAQItem";
import { NAVY } from "@/lib/translations";

export default function FAQ({ t }) {
  return (
    <section style={{ background: "white" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: NAVY, fontFamily: "Poppins, sans-serif", textAlign: "center", marginBottom: 12 }}>{t.faq.title}</h2>
        <p style={{ fontSize: 16, color: "#666", fontFamily: "Nunito, sans-serif", textAlign: "center", marginBottom: 44, maxWidth: 560, margin: "0 auto 44px" }}>{t.faq.sub}</p>
        <div>
          {t.faq.items.map((item, i) => <FAQItem key={i} item={item} />)}
        </div>
      </div>
    </section>
  );
}
