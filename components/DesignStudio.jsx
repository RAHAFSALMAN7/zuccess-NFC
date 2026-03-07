"use client";
import { NAVY, BEIGE, ORANGE } from "@/lib/translations";

export default function DesignStudio({ t, locale }) {
  const ctaPrimary = { display: "inline-flex", alignItems: "center", gap: 8, background: ORANGE, color: "white", padding: "14px 28px", borderRadius: 14, fontSize: 15, fontWeight: 700, fontFamily: "Poppins, sans-serif", textDecoration: "none", border: "none", cursor: "pointer", transition: "all 0.2s ease", boxShadow: "0 4px 20px rgba(234,121,70,0.4)", justifyContent: "center" };

  return (
    <section style={{ background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ background: `linear-gradient(135deg, ${BEIGE}, white)`, borderRadius: 28, padding: "52px 40px", border: "1px solid rgba(8,8,68,0.08)", maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}></div>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: NAVY, fontFamily: "Poppins, sans-serif", textAlign: "center", marginBottom: 12 }}>{t.designStudio}</h2>
          <p style={{ fontSize: 16, color: "#666", fontFamily: "Nunito, sans-serif", textAlign: "center", marginBottom: 32, maxWidth: 560, margin: "0 auto 32px" }}>{t.designStudioSub}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, textAlign: t.dir === "rtl" ? "right" : "left" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <input placeholder={locale === "en" ? "Your Name" : "الاسم"} style={{ border: "1px solid rgba(8,8,68,0.15)", borderRadius: 10, padding: "12px 16px", fontFamily: "Nunito, sans-serif", fontSize: 14, outline: "none", background: "white" }} />
              <input placeholder={locale === "en" ? "WhatsApp Number" : "رقم واتساب"} style={{ border: "1px solid rgba(8,8,68,0.15)", borderRadius: 10, padding: "12px 16px", fontFamily: "Nunito, sans-serif", fontSize: 14, outline: "none", background: "white" }} />
            </div>
            <select style={{ border: "1px solid rgba(8,8,68,0.15)", borderRadius: 10, padding: "12px 16px", fontFamily: "Nunito, sans-serif", fontSize: 14, outline: "none", background: "white", color: NAVY }}>
              <option>{locale === "en" ? "Product Type" : "نوع المنتج"}</option>
              <option>{locale === "en" ? "NFC Business Card" : "بطاقة أعمال NFC"}</option>
              <option>{locale === "en" ? "NFC Keychain" : "سلسلة مفاتيح NFC"}</option>
              <option>{locale === "en" ? "Google Review Board" : "لوحة مراجعات جوجل"}</option>
              <option>{locale === "en" ? "Car Showroom Card" : "بطاقة معرض السيارات"}</option>
            </select>
            <textarea rows={4} placeholder={locale === "en" ? "Describe your brand, colors, style preferences..." : "صف علامتك التجارية وألوانك وتفضيلات أسلوبك..."} style={{ border: "1px solid rgba(8,8,68,0.15)", borderRadius: 10, padding: "12px 16px", fontFamily: "Nunito, sans-serif", fontSize: 14, outline: "none", background: "white", resize: "vertical" }} />
            <button
              onClick={() => alert("Design brief submitted! We'll contact you on WhatsApp.")}
              style={ctaPrimary}
            >{t.submitBrief}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
