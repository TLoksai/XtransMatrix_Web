import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { label: "About", links: ["/cultures-values-esg", "/diversity-young-minds", "/recent-awards-recognition", "/our-partners", "/employees"] },
  { label: "Services", links: ["/audio", "/video", "/robotics", "/image"] },
  { label: "Industries", links: ["/medtech", "/automobile", "/insurance", "/banking"] },
  { label: "Intelligence", links: ["/xtmx-intelligence", "/events", "/case-studies"] },
  { label: "Careers", links: ["/hiring_Innotern", "/experienced_hired", "/team", "/futureofwork"] },
];

const LABELS: Record<string, string[]> = {
  About: ["Cultures, Values and ESG", "Diversity by Young Minds", "Recent Awards and Recognition", "Our Partners", "Humans Behind the Intelligence"],
  Services: ["Audio", "Video", "Robotics", "Image"],
  Industries: ["MEDTECH", "Automobile", "Insurance", "Banking"],
  Intelligence: ["XTMX Intelligence", "Events", "Case Studies"],
  Careers: ["Hiring / Innotern", "Experienced Hire", "Meet Our Team", "Future of Work"],
};

const SVGLogo = ({ size = 60 }: { size?: number }) => (
  <img src="/images/logo.png" alt="xTransmatrix" style={{ width: size, height: size, objectFit: "contain" }} />
);

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setHidden(currentScrollY > lastScrollY.current && currentScrollY > 100);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !Object.values(dropdownRefs.current).some(
          (ref) => ref && ref.contains(event.target as Node)
        )
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenDropdown(label);
  };

const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 900, padding: "0 16px", transform: hidden ? "translateY(-100%)" : "translateY(0)", transition: "transform .3s ease" }}>
      <div
        style={{
          maxWidth: 1120,
          margin: "12px auto 0",
          background: "rgba(12,10,28,0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 6px",
          height: 52,
          transition: "box-shadow .3s",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", gap: 0, textDecoration: "none", padding: "0 12px 0 8px", flexShrink: 0 }}
        >
          <SVGLogo size={60} />
          <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-.01em", color: "#fff" }}>
            x<em style={{ fontStyle: "normal", color: "#1A6BFF" }}>Trans</em>Matrix
          </span>
        </Link>

        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileMenuOpen ? (
                <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        )}

        <nav style={{ display: isMobile ? (mobileMenuOpen ? "flex" : "none") : "flex", alignItems: "center", flex: 1, flexDirection: isMobile ? "column" : "row", position: isMobile ? "absolute" : "relative", top: isMobile ? 52 : "auto", left: isMobile ? 0 : "auto", right: isMobile ? 0 : "auto", background: isMobile ? "rgba(12,10,28,0.98)" : "transparent", padding: isMobile ? "16px" : 0, borderRadius: isMobile ? "0 0 14px 14px" : 0, zIndex: isMobile ? 999 : 1, marginLeft: isMobile ? 0 : 100 }}>
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              style={{ position: "relative" }}
              ref={(el) => (dropdownRefs.current[item.label] = el)}
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => { if (isMobile) { setOpenDropdown(openDropdown === item.label ? null : item.label); } else { setOpenDropdown(openDropdown === item.label ? null : item.label); } }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isMobile ? "space-between" : "center",
                  gap: 5,
                  fontSize: 15,
                  fontWeight: 500,
                  color: openDropdown === item.label ? "#fff" : "rgba(255,255,255,0.65)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Inter,sans-serif",
                  padding: isMobile ? "0 16px" : "0 13px",
                  height: isMobile ? 48 : 52,
                  width: "100%",
                  transition: "color .2s",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{
                    opacity: 0.35,
                    transition: "transform .2s",
                    transform: openDropdown === item.label ? "rotate(180deg)" : "rotate(0)",
                  }}
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: 0,
                  minWidth: 210,
                  background: "rgba(12,10,28,0.97)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 10,
                  padding: 8,
                  opacity: openDropdown === item.label ? 1 : 0,
                  transform: openDropdown === item.label ? "translateY(0)" : "translateY(-8px)",
                  pointerEvents: openDropdown === item.label ? "auto" : "none",
                  transition: "opacity .18s,transform .18s",
                  zIndex: 10,
                }}
              >
                {(LABELS[item.label] || []).map((link, i) => (
                  <Link
                    key={i}
                    to={item.links[i]}
                    style={{
                      display: "block",
                fontSize: 14,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      padding: "7px 12px",
                      borderRadius: 6,
                      transition: "background .15s,color .15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 6, padding: isMobile ? "16px 16px 0" : "0 6px", marginLeft: isMobile ? 0 : "auto", flexShrink: 0, flexDirection: isMobile ? "column" : "row", width: isMobile ? "100%" : "auto" }}>
            <Link
              to="/pricing"
              style={{
                background: "#1A6BFF",
                color: "#fff",
                border: "none",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 600,
                padding: "7px 18px",
                textDecoration: "none",
                fontFamily: "Inter,sans-serif",
                transition: "background .2s",
                display: "flex",
                alignItems: "center",
                gap: 4,
                width: isMobile ? "100%" : "auto",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#4B8AFF")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1A6BFF")}
            >
              Pricing
            </Link>
            <Link
              to="/tour"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                fontSize: 15,
                fontWeight: 600,
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                padding: "6px 12px",
                transition: "color .2s",
                width: isMobile ? "100%" : "auto",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              Let's Connect <sup style={{ fontSize: 10, opacity: 0.5 }}>↗</sup>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;