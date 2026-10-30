import { useState, useEffect, useRef } from "react";

const TEAM = [
  { name: "Vikas Uppal", role: "Chief Executive Officer (CEO)", domain: "Revenue architecture · GTM leadership", img: "https://ik.imagekit.io/lrxrnuqog/Employess/Founders/Vikas.png" },
  { name: "Anupam Kharbanda", role: "Chief Operating Officer (COO)", domain: "Operations · Pipeline integrity", img: "https://ik.imagekit.io/lrxrnuqog/Employess/Founders/Anupam.png" },
  { name: "Prasanna Patel", role: "Chief Financial Officer (CFO)", domain: "Financial architecture · Business ops", img: "https://ik.imagekit.io/lrxrnuqog/Employess/Founders/Prasanna.png" },
  { name: "Shivaram KR", role: "Chief Technology Officer (CTO)", domain: "Growth · Partnership development", img: "https://ik.imagekit.io/lrxrnuqog/Team/shivaram.png" },
  { name: "Akhilesh Kunhi Raman", role: "Head of Design & Ops", domain: "Systems design · Operations scale", img: "https://ik.imagekit.io/lrxrnuqog/Team/Akhilesh.png" },
  { name: "Shashank L K", role: "Head of Technology", domain: "Platform engineering · Scalability", img: "https://ik.imagekit.io/lrxrnuqog/Team/Shashank.png" },
  { name: "Dr Akshay S P", role: "AI Strategy & Governance", domain: "Ethical AI · Policy architecture", img: "https://ik.imagekit.io/lrxrnuqog/Team/Akshay.png" },
];

const TeamCard = ({ member, idx }: { member: typeof TEAM[0]; idx: number }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cardStyle: React.CSSProperties = {
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(28px)",
    transition: `opacity .75s ease ${idx * 60}ms, transform .75s ease ${idx * 60}ms`,
    position: "relative",
    overflow: "hidden",
    border: hovered ? "1px solid rgba(26,107,255,0.35)" : "1px solid rgba(26,107,255,0.12)",
    background: "#0C0F1A",
    cursor: "default",
    boxShadow: hovered ? "0 18px 50px rgba(26,107,255,0.10)" : "none",
  };

  return (
    <div ref={ref} style={cardStyle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "#1A6BFF", transform: "scaleX(0)", transformOrigin: "left", transition: "transform .5s cubic-bezier(.16,1,.3,1)", zIndex: 10 }} />
      <div style={{ position: "relative", overflow: "hidden", aspectRatio: "1/1.18", background: "#111626" }}>
        <img src={member.img} alt={member.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", filter: hovered ? "grayscale(0%) contrast(1.05)" : "grayscale(35%) contrast(1.05)", transform: hovered ? "scale(1.04)" : "scale(1)", transition: "filter .5s,transform .5s" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "38%", background: "linear-gradient(to top,rgba(12,15,26,0.65),transparent)", pointerEvents: "none" }} />
      </div>
      <div style={{ padding: "14px 16px 18px", background: "#0C0F1A" }}>
        <div style={{ fontSize: 13.5, fontWeight: 800, letterSpacing: "-.015em", color: "#fff", marginBottom: 4 }}>{member.name}</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: ".15em", textTransform: "uppercase", color: "#1A6BFF" }}>{member.role}</div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: ".07em", textTransform: "uppercase", color: "rgba(255,255,255,.26)", marginTop: 5, opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(4px)", transition: "opacity .28s,transform .28s" }}>{member.domain}</div>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const row1 = TEAM.slice(0, 4);
  const row2 = TEAM.slice(4, 8);

  return (
    <section id="catalysts" className="team-section" style={{ padding: "96px 48px", position: "relative", overflow: "hidden" }}>
      <style>{`
        @media (max-width: 768px) {
          .team-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .team-section .team-row > div {
            display: block !important;
            width: 100% !important;
          }
          .team-section {
            padding: 48px 16px !important;
          }
        }
      `}</style>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 55% 50% at 100% 30%,rgba(26,107,255,0.06),transparent 60%)" }} />
      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", color: "#1A6BFF", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-block", width: 20, height: 1, background: "#1A6BFF" }} />People
          </div>
          <h2 style={{ fontSize: "clamp(34px,3.8vw,60px)", fontWeight: 900, letterSpacing: "-.045em", lineHeight: 0.92, textTransform: "uppercase", marginBottom: 12 }}>
            Meet our<br /><span style={{ color: "#1A6BFF" }}>Catalysts.</span>
          </h2>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#A0A8BC", lineHeight: 1.9, letterSpacing: ".04em", textTransform: "uppercase", maxWidth: 480, marginTop: 14 }}>
            The individuals who architect, build, and deploy intelligence infrastructure for the world's most demanding autonomous systems.
          </p>
        </div>
        <div className="team-row" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 14 }}>
          {row1.map((m, i) => <TeamCard key={m.name} member={m} idx={i} />)}
        </div>
        <div className="team-row" style={{ display: "grid", gridTemplateColumns: `repeat(${row2.length},calc((100% - 42px) / 4))`, justifyContent: "center", gap: 14 }}>
          {row2.map((m, i) => <TeamCard key={m.name} member={m} idx={i + 4} />)}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
