"use client";
import BundleCard from "./BundleCard";
import { NAVY, BEIGE } from "@/lib/translations";

export default function Bundles({ t }) {
  return (
    <section id="bundles" style={{ background: BEIGE }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: NAVY, fontFamily: "Poppins, sans-serif", textAlign: "center", marginBottom: 12 }}>{t.bundles.title}</h2>
        <p style={{ fontSize: 16, color: "#666", fontFamily: "Nunito, sans-serif", textAlign: "center", marginBottom: 60, maxWidth: 560, margin: "0 auto 60px" }}>{t.bundles.sub}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, alignItems: "start" }}>
          {t.bundles.plans.map((plan, i) => (
            <BundleCard key={i} plan={plan} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
