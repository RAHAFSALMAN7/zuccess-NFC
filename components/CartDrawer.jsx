"use client";
import { NAVY, ORANGE } from "@/lib/translations";

export default function CartDrawer({ t, cartItems, cartOpen, setCartOpen, totalPrice }) {
  if (!cartOpen) return null;
  return (
    <div style={{ position: "fixed", top: 0, right: t.dir === "rtl" ? "auto" : 0, left: t.dir === "rtl" ? 0 : "auto", bottom: 0, width: 320, background: "white", zIndex: 2000, boxShadow: "-10px 0 40px rgba(0,0,0,0.15)", padding: 24, overflowY: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h3 style={{ fontFamily: "Poppins, sans-serif", color: NAVY, fontWeight: 800 }}>{t.nav.cart}</h3>
        <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: NAVY }}>✕</button>
      </div>
      {cartItems.length === 0 ? (
        <p style={{ color: "#888", fontFamily: "Nunito, sans-serif", fontSize: 14 }}>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
              <div>
                <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 700, color: NAVY }}>{item.name}</div>
                <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 12, color: "#888" }}>×{item.qty}</div>
              </div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 800, color: NAVY }}>{item.price}</div>
            </div>
          ))}
          <div style={{ marginTop: 20, padding: "16px 0", borderTop: "2px solid rgba(8,8,68,0.1)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: NAVY }}>Total</span>
              <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, color: NAVY, fontSize: 18 }}>{totalPrice} SAR</span>
            </div>
            <input
              placeholder="Promo code"
              style={{ width: "100%", border: "1px solid rgba(8,8,68,0.15)", borderRadius: 8, padding: "8px 12px", fontFamily: "Nunito, sans-serif", fontSize: 13, marginBottom: 10, outline: "none" }}
            />
            <button style={{ width: "100%", background: ORANGE, color: "white", border: "none", borderRadius: 10, padding: 14, fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
              Checkout → {/* PAYMENT_LINK placeholder */}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
