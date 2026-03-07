"use client";
import { useState } from "react";
import { NAVY, ORANGE } from "@/lib/translations";

export default function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(8,8,68,0.08)", overflow: "hidden" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", background: "none", border: "none", padding: "18px 0", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "inherit" }}
      >
        <span style={{ fontSize: 14, fontWeight: 700, color: NAVY, fontFamily: "Poppins, sans-serif", flex: 1, textAlign: "inherit" }}>{item.q}</span>
        <span style={{ color: ORANGE, fontWeight: 700, fontSize: 18, transition: "transform 0.2s", transform: open ? "rotate(45deg)" : "rotate(0deg)", marginLeft: 12, marginRight: 12 }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height 0.3s ease" }}>
        <p style={{ fontSize: 13, color: "#555", fontFamily: "Nunito, sans-serif", paddingBottom: 18, margin: 0, lineHeight: 1.7 }}>{item.a}</p>
      </div>
    </div>
  );
}
