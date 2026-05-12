import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LOCS = [
  { city: "Bangalore, KA", addr: "Brigade Triumph, Hebbal Kempapura" },
  { city: "Mangalore, KA", addr: "Vertex Quad, Bhandary Heights" },
  { city: "Noida, UP", addr: "Worcozz Co-working, Sector 63" },
];

const SERVICES = [
  { name: "Audio", path: "/audio" },
  { name: "Video", path: "/video" },
  { name: "Robotics", path: "/robotics" },
  { name: "Image", path: "/image" },
];
const INDUSTRIES = [
  { name: "Med-Tech", path: "/medtech" },
  { name: "Automobile", path: "/automobile" },
  { name: "Insurance", path: "/insurance" },
  { name: "Banking & Payment", path: "/banking" },
];
const COMPANY = [
  { name: "Cultures & Values", path: "/cultures-values-esg" },
  { name: "Diversity by Young Minds", path: "/diversity-young-minds" },
  { name: "Awards & Recognition", path: "/recent-awards-recognition" },
  { name: "Our Partners", path: "/our-partners" },
  { name: "Press", path: "/contact" },
  { name: "Careers", path: "/hiring_Innotern" },
];
const INTELLIGENCE = [
  { name: "XTMX Intelligence", path: "/xtmx-intelligence" },
  { name: "Events", path: "/events" },
  { name: "Case Studies", path: "/case-studies" },
];
const PLATFORM = [
  { name: "VeriLabel", path: "/tour" },
];

const LogoGrid = ({ size = 4 }: { size?: number }) => (
  <img src="/images/logo.png" alt="xTransmatrix" style={{ width: size * 4, height: size * 4, objectFit: "contain" }} />
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="footer-nav-link"
    style={{
      display: "block",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12,
      color: "#A0A8BC",
      textDecoration: "none",
      marginBottom: 10,
      letterSpacing: ".06em",
      padding: "8px 0",
      minHeight: 44,
      cursor: "pointer",
      touchAction: "manipulation",
      WebkitTapHighlightColor: "rgba(26,107,255,0.3)",
    }}
  >
    {children}
  </Link>
);

const FooterColLabel = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div
    style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: ".22em",
      textTransform: "uppercase",
      color: "#5A6278",
      marginBottom: 18,
      ...style,
    }}
  >
    {children}
  </div>
);

const FooterLinks = ({ links }: { links: { name: string; path: string }[] }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    {links.map((link) => (
      <FooterLink key={link.name} to={link.path}>{link.name}</FooterLink>
    ))}
  </div>
);

const Footer: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width <= 768;

  return (
    <footer style={{ background: "#0C0F1A", borderTop: "1px solid rgba(26,107,255,0.12)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, zIndex: 2, background: "linear-gradient(90deg,transparent,rgba(26,107,255,0.45),transparent)" }} />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 50% 65% at 0% 50%,rgba(13,71,200,0.06),transparent 55%)" }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="footer-locs" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", borderBottom: "1px solid rgba(26,107,255,0.12)" }}>
          {LOCS.map((loc, i) => (
            <div key={loc.city} style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 40px", borderRight: i < 2 ? "1px solid rgba(26,107,255,0.12)" : "none" }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#1A6BFF", flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#E8EBF4", letterSpacing: "-.01em", marginBottom: 2 }}>{loc.city}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: ".03em", color: "#5A6278" }}>{loc.addr}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-links" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.7fr 1fr 1fr 1fr", borderBottom: "1px solid rgba(26,107,255,0.12)", gap: isMobile ? "0" : "none" }}>
          <div style={{ padding: "48px 40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 18 }}>
              <LogoGrid size={14} />
              <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-.02em" }}>
                x<em style={{ fontStyle: "normal", color: "#1A6BFF" }}>Trans</em>matrix
              </span>
            </div>
            <div style={{ fontSize: "clamp(14px,1.3vw,18px)", fontWeight: 700, letterSpacing: "-.02em", color: "#E8EBF4", lineHeight: 1.3, marginBottom: 16, maxWidth: 220 }}>
              Better data.<br /><span style={{ color: "#1A6BFF" }}>Better models.</span><br />Better outcomes.
            </div>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9.5, color: "#5A6278", lineHeight: 1.9, letterSpacing: ".05em", textTransform: "uppercase", maxWidth: 245, marginBottom: 24 }}>
              Multimodal data infrastructure for physical AI. Powering production-grade autonomous systems worldwide.
            </p>
            <a
              href="https://calendly.com/vishal-patil-xtransmatrix/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#fff",
                transition: "color .2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#1A6BFF"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}
            >
              <span style={{ color: "#1A6BFF", fontSize: 14 }}>⌐</span>
              <span style={{ borderTop: "1px solid rgba(26,107,255,0.22)", borderBottom: "1px solid rgba(26,107,255,0.22)", padding: "10px 16px" }}>Book Demo</span>
              <span style={{ color: "#1A6BFF", fontSize: 14 }}>¬</span>
            </a>
            <div style={{ display: "flex", gap: 7, marginTop: 20 }}>
              {["ISO 27001", "ISO 9001"].map(cert => (
                <div key={cert} style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: "'JetBrains Mono', monospace", fontSize: 7, letterSpacing: ".11em", textTransform: "uppercase", color: "#5A6278", border: "1px solid rgba(26,107,255,0.12)", padding: "4px 9px" }}>
                  <span style={{ color: "#1A6BFF", fontSize: 8 }}>✓</span>{cert}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 18 }}>
              {[["IG", "Instagram"], ["YT", "YouTube"], ["in", "LinkedIn"]].map(([label, _title]) => (
                <Link
                  key={label}
                  to="#"
                  title={_title[1]}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    border: "1px solid rgba(26,107,255,0.22)",
                    color: "#5A6278",
                    textDecoration: "none",
                    fontSize: 12,
                    fontWeight: 700,
                    borderRadius: 3,
                    fontFamily: "'JetBrains Mono', monospace",
                    transition: "background .2s,border-color .2s,color .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#1A6BFF";
                    e.currentTarget.style.borderColor = "#1A6BFF";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(26,107,255,0.22)";
                    e.currentTarget.style.color = "#5A6278";
                  }}
                >{label}</Link>
              ))}
            </div>
          </div>

          <div style={{ padding: isMobile ? "32px 20px" : "48px 40px", borderTop: isMobile ? "1px solid rgba(26,107,255,0.12)" : "none", borderLeft: isMobile ? "none" : "1px solid rgba(26,107,255,0.12)" }}>
            <FooterColLabel>Services</FooterColLabel>
            <FooterLinks links={SERVICES} />
            <FooterColLabel style={{ marginTop: 26 }}>Industries</FooterColLabel>
            <FooterLinks links={INDUSTRIES} />
          </div>

          <div style={{ padding: isMobile ? "32px 20px" : "48px 40px", borderTop: isMobile ? "1px solid rgba(26,107,255,0.12)" : "none", borderLeft: isMobile ? "none" : "1px solid rgba(26,107,255,0.12)" }}>
            <FooterColLabel>Company</FooterColLabel>
            <FooterLinks links={COMPANY} />
            <FooterColLabel style={{ marginTop: 26 }}>Intelligence</FooterColLabel>
            <FooterLinks links={INTELLIGENCE} />
          </div>

          <div style={{ padding: isMobile ? "32px 20px" : "48px 40px", borderTop: isMobile ? "1px solid rgba(26,107,255,0.12)" : "none", borderLeft: isMobile ? "none" : "1px solid rgba(26,107,255,0.12)" }}>
            <FooterColLabel>Platform</FooterColLabel>
            <FooterLinks links={PLATFORM} />
            <div style={{ marginTop: 24 }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: ".18em", textTransform: "uppercase", color: "#5A6278", marginBottom: 9 }}>Also by x<span style={{ color: "#1A6BFF" }}>Trans</span>matrix</div>
              <a
                href="https://aitank.ai/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#FF7A5C", border: "1px solid rgba(255,122,92,.2)", padding: "3px 9px", textDecoration: "none" }}
              >
                AI Tank ↗
              </a>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, padding: "16px 40px" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#5A6278", letterSpacing: ".1em", textTransform: "uppercase" }}>
            © 2026 xTransMatrix Inc. &nbsp;·&nbsp; All rights reserved.
          </div>
          <div style={{ display: "flex" }}>
            {["Terms of Service", "Privacy Policy", "Cookies"].map((link, i, arr) => (
              <Link
                key={link}
                to="#"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: "#5A6278",
                  textDecoration: "none",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  padding: `0 ${i === arr.length - 1 ? 0 : 13}px 0 ${i === 0 ? 0 : 13}px`,
                  borderRight: i < arr.length - 1 ? "1px solid rgba(26,107,255,0.12)" : "none",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#E2E5EF"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#5A6278"}
              >{link}</Link>
            ))}
          </div>
        </div>
      </div>

      <div style={{ height: 4, background: "linear-gradient(90deg,#7C3AED,#9D5FF5,#7C3AED)" }} />
    </footer>
  );
};

export default Footer;