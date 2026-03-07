"use client";
import { NAVY, ORANGE, WHATSAPP_LINK } from "@/lib/translations";
import {
  Linkedin,
  Instagram,
  Facebook,
  Music,
  Mail,
  MessageCircle
} from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer style={{ background: "#03031a", color: "rgba(255,255,255,0.6)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "52px 24px 32px" }}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 40
          }}
        >

          {/* Brand */}
          <div>
            <img
              src="/zuccess_logo.png"
              alt="Zuccess Logo"
              style={{
                height: 150,
                width: "auto",
                objectFit: "contain",
                marginBottom: 14
              }}
            />

            <p style={{ fontSize: 13, lineHeight: 1.7, fontFamily: "Nunito, sans-serif" }}>
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                color: "white",
                fontFamily: "Poppins, sans-serif",
                fontSize: 13,
                fontWeight: 700,
                marginBottom: 16
              }}
            >
              Quick Links
            </h4>

            {t.footer.links.map((l, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <a
                  href="#"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    fontSize: 13,
                    fontFamily: "Nunito, sans-serif",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = ORANGE)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                  }
                >
                  {l}
                </a>
              </div>
            ))}
          </div>

          {/* Social */}
          <div>
            <h4
              style={{
                color: "white",
                fontFamily: "Poppins, sans-serif",
                fontSize: 13,
                fontWeight: 700,
                marginBottom: 16
              }}
            >
              {t.footer.followUs}
            </h4>

            <div style={{ display: "flex", gap: 12 }}>

              <a
                href="https://www.linkedin.com/company/zuccess/"
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/zuccess.ai"
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/share/1AeJ1enAfw/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.tiktok.com/@zuccess.ai"
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <Music size={18} />
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                color: "white",
                fontFamily: "Poppins, sans-serif",
                fontSize: 13,
                fontWeight: 700,
                marginBottom: 16
              }}
            >
              Contact
            </h4>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#25D366",
                color: "white",
                padding: "10px 18px",
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 700,
                textDecoration: "none",
                fontFamily: "Poppins, sans-serif"
              }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>

            <p
              style={{
                marginTop: 14,
                fontSize: 12,
                fontFamily: "Nunito, sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 6
              }}
            >
              <Mail size={14} />
              info@zuccess.net
            </p>
          </div>

        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            textAlign: "center"
          }}
        >
          <p style={{ fontSize: 12, fontFamily: "Nunito, sans-serif" }}>
            {t.footer.copy}
          </p>
        </div>
      </div>
    </footer>
  );
}

const iconStyle = {
  width: 36,
  height: 36,
  borderRadius: 8,
  background: "rgba(255,255,255,0.06)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(255,255,255,0.7)",
  border: "1px solid rgba(255,255,255,0.08)",
  transition: "all 0.2s"
};