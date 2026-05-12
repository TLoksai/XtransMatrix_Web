import { useEffect, useRef, ReactNode, CSSProperties } from "react";
import { Link } from "react-router-dom";
import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/footer";

const BLUE = "#1A6BFF";
const BLUE_D = "#0D47C8";
const BLUE_L = "#4D8FFF";
const BLUE_XL = "#8AB4FF";
const ORANGE = "#FF7A5C";
const BG = "#07080D";
const S1 = "#0E1220";
const S2 = "#131828";
const B1 = "rgba(26,107,255,0.12)";
const B2 = "rgba(26,107,255,0.22)";
const G2 = "#C8CCDA";
const G3 = "#7A8099";
const G4 = "#3A3F52";

const mono = { fontFamily: "'JetBrains Mono', monospace" };
const inter = { fontFamily: "'Inter', sans-serif" };

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');
.fade-up { opacity:0; transform:translateY(24px); transition:opacity .7s ease, transform .7s ease; }
.fade-up.visible { opacity:1; transform:none; }
.why-card:hover { border-color:${B2} !important; }
.out-card:hover { background:${S2} !important; border-color:${B2} !important; }
.btn-p:hover { background:${BLUE_D} !important; }
.btn-g:hover { background:${B1} !important; }

@media (max-width: 1024px) {
  .hero-layout { grid-template-columns: 1fr !important; gap: 40px !important; padding: 48px 32px 0 !important; }
  .hero-visual { min-height: 400px !important; order: -1 !important; }
  .section-padding { padding: 64px 32px !important; }
  .why-grid { grid-template-columns: 1fr !important; }
  .output-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .qa-steps { grid-template-columns: repeat(3, 1fr) !important; }
  .qa-stats { grid-template-columns: repeat(2, 1fr) !important; }
  .cta-layout { flex-direction: column !important; align-items: flex-start !important; gap: 32px !important; }
  .cta-buttons { flex-direction: row !important; }
}
@media (max-width: 768px) {
  .hero-layout { padding: 32px 20px 0 !important; gap: 32px !important; }
  .hero-visual { min-height: 320px !important; }
  .section-padding { padding: 48px 20px !important; }
  .output-grid { grid-template-columns: 1fr !important; }
  .qa-steps { grid-template-columns: repeat(2, 1fr) !important; }
  .qa-stats { grid-template-columns: 1fr 1fr !important; }
  .qa-steps-connector { display: none !important; }
  .cta-padding { padding: 48px 20px !important; }
  .cta-inner { padding: 40px 24px !important; flex-direction: column !important; gap: 32px !important; }
  .cta-buttons { flex-direction: column !important; width: 100%; }
  .cta-buttons a, .cta-buttons Link { width: 100%; justify-content: center; }
}
@media (max-width: 480px) {
  .hero-layout { padding: 24px 16px 0 !important; }
  .section-padding { padding: 40px 16px !important; }
  .qa-steps { grid-template-columns: 1fr !important; }
  .qa-stats { grid-template-columns: 1fr !important; }
  .ann-meta { grid-template-columns: 1fr !important; }
}
`;

function FadeSection({ children, id, className, style }: { children: ReactNode; id?: string; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.classList.add("visible");
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div id={id} ref={ref} className={`fade-up ${className || ""}`} style={style}>{children}</div>;
}

function Divider() {
  return <div style={{ height: 1, background: `linear-gradient(90deg,transparent,${B2},transparent)`, margin: "0 48px" }} />;
}

function SecLabel({ children }: { children: ReactNode }) {
  return (
    <div style={{ ...mono, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 14, display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ width: 20, height: 1, background: BLUE, display: "inline-block", flexShrink: 0 }} />
      {children}
    </div>
  );
}

/* ── HERO VISUAL ── */
function AnnFrame() {
  const boxes = [
    { color: BLUE,    label: "Vehicle", labelBg: BLUE,    labelColor: "#fff", top: "15%", left: "12%", width: "28%", height: "35%" },
    { color: ORANGE,  label: "Person",  labelBg: ORANGE,  labelColor: "#fff", top: "25%", left: "52%", width: "32%", height: "42%" },
    { color: BLUE_L,  label: "Sign",    labelBg: BLUE_L,  labelColor: "#fff", top: "62%", left: "22%", width: "20%", height: "22%" },
    { color: BLUE_XL, label: "Cyclist", labelBg: BLUE_XL, labelColor: BG,     top: "55%", left: "55%", width: "26%", height: "28%" },
  ];

  const cornerBase: CSSProperties = { position: "absolute", width: 8, height: 8, borderColor: BLUE_XL, borderStyle: "solid" };

  return (
    <div style={{ width: "100%", maxWidth: 480, background: S1, border: `1px solid ${B2}`, padding: 24, overflow: "hidden" }}>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ ...mono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: BLUE }}>VeriLabel · Image Workspace</div>
        <div style={{ display: "flex", gap: 6 }}>
          {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => (
            <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
          ))}
        </div>
      </div>

      {/* Image area */}
      <div style={{ background: "#0A0C10", aspectRatio: "4/3", position: "relative", border: `1px solid ${B1}`, overflow: "hidden" }}>
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(26,107,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(26,107,255,.03) 1px,transparent 1px)`, backgroundSize: "24px 24px" }} />
        {/* Corner markers */}
        <div style={{ ...cornerBase, top: -1, left: -1, borderWidth: "1.5px 0 0 1.5px" }} />
        <div style={{ ...cornerBase, top: -1, right: -1, borderWidth: "1.5px 1.5px 0 0" }} />
        <div style={{ ...cornerBase, bottom: -1, left: -1, borderWidth: "0 0 1.5px 1.5px" }} />
        <div style={{ ...cornerBase, bottom: -1, right: -1, borderWidth: "0 1.5px 1.5px 0" }} />
        {/* Annotation boxes */}
        {boxes.map((b) => (
          <div key={b.label} style={{ position: "absolute", border: `1.5px solid ${b.color}`, top: b.top, left: b.left, width: b.width, height: b.height }}>
            <div style={{ position: "absolute", top: -1, left: -1, background: b.labelBg, color: b.labelColor, ...mono, fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", padding: "2px 5px", fontWeight: 700 }}>
              {b.label}
            </div>
          </div>
        ))}
        {/* Segmentation curves */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }} viewBox="0 0 100 75" preserveAspectRatio="none">
          <path d="M0 50 Q25 40 50 52 Q75 65 100 48" stroke="#1A6BFF" strokeWidth=".4" fill="none" />
          <path d="M0 60 Q30 55 60 62 Q80 68 100 58" stroke="#4D8FFF" strokeWidth=".3" fill="none" />
        </svg>
      </div>

      {/* Meta row */}
      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
        {[["4", "Annotations"], ["97%", "Confidence"], ["QA ✓", "Validated"]].map(([n, l]) => (
          <div key={l} style={{ background: "rgba(26,107,255,.06)", border: `1px solid ${B1}`, padding: 10, textAlign: "center" }}>
            <div style={{ fontSize: 16, fontWeight: 900, letterSpacing: "-.03em", color: BLUE_XL }}>{n}</div>
            <div style={{ ...mono, fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: G4, marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <div className="hero-layout" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 48px 80px", position: "relative", overflow: "hidden" }}>
      {/* BG */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(26,107,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(26,107,255,.04) 1px,transparent 1px)`, backgroundSize: "48px 48px" }} />
      <div style={{ position: "absolute", top: "10%", right: "-10%", width: 700, height: 700, background: "radial-gradient(ellipse,rgba(26,107,255,.14),transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1300, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
            <div style={{ width: 32, height: 1, background: BLUE }} />
            <a href="https://verilabel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}><span style={{ ...mono, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE }}>Powered by <img src="/images/VL-logo.png" alt="VeriLabel" style={{ height: "20px", width: "auto", objectFit: "contain", display: "inline-block", verticalAlign: "middle" }} /> VeriLabel · Image AI</span></a>
          </div>
          <h1 style={{ fontSize: "clamp(44px,6.5vw,88px)", fontWeight: 900, letterSpacing: "-.045em", lineHeight: 0.92, textTransform: "uppercase", marginBottom: 28, ...inter }}>
            Elite<br />Image<br /><span style={{ color: BLUE }}>Annotation.</span>
          </h1>
          <p style={{ fontSize: 15, color: G2, lineHeight: 1.75 }}>
            Production-ready computer vision datasets crafted for accuracy, consistency, and real-world performance. From pilot to millions of images.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="https://calendly.com/vishal-patil-xtransmatrix/30min" target="_blank" rel="noopener noreferrer" className="btn-p" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: BLUE, color: "#fff", ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "13px 24px", textDecoration: "none", transition: "all .2s" }}>
              Book Demo →
            </a>
            <a href="/case-studies?case=1" className="btn-g" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: BLUE_XL, ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "13px 24px", border: `1px solid ${B2}`, textDecoration: "none", transition: "all .2s" }}>
              Case Studies
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <AnnFrame />
        </div>
      </div>
    </div>
  );
}

/* ── WHY ── */
const whyCards = [
  { num: "Precision", title: "Engineered for Production AI", desc: "Multi-layer QA, structured workflows, and continuous validation ensure high-fidelity annotations at scale. Every dataset is built to the exacting standards that production model development demands." },
  { num: "Pipelines", title: "Precision-Driven Workflows", desc: "From AI pre-annotation to blind evaluation and IAA scoring — every annotation passes through a rigorous validation architecture before it reaches your pipeline." },
  { num: "Expertise", title: "Domain-Aligned Annotators", desc: "Annotation teams trained for specific industries — medical imaging, autonomous vehicles, retail AI. Context-aware, consistent, and reliable datasets that reflect real deployment conditions." },
  { num: "Scale", title: "Scalable by Design", desc: "From pilot to millions of images — pipelines that adapt, iterate, and grow with your model requirements. Infrastructure that scales without sacrificing quality or turnaround time." },
];

function Why() {
  return (
    <FadeSection className="section-padding" style={{ padding: "96px 48px", maxWidth: 1296, margin: "0 auto" }}>
      <SecLabel>Why xTransMatrix</SecLabel>
      <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", marginBottom: 16, ...inter }}>
        Production-Ready Datasets,<br />Not Proof-of-Concepts.
      </h2>
      <p style={{ fontSize: 15, color: G3, maxWidth: 560, lineHeight: 1.75, ...mono, letterSpacing: "0.02em", marginBottom: 48 }}>
        Built for real-world computer vision systems where data quality directly impacts model performance — not just basic labeling.
      </p>
      <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        {whyCards.map((c) => (
          <div key={c.num} className="why-card" style={{ background: S1, border: `1px solid ${B1}`, padding: 44, position: "relative", overflow: "hidden", transition: "border-color .3s" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: `linear-gradient(180deg,${BLUE},transparent)` }} />
            <div style={{ ...mono, fontSize: 11, letterSpacing: "0.2em", color: BLUE, marginBottom: 16 }}>{c.num}</div>
            <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-.02em", marginBottom: 12 }}>{c.title}</div>
            <div style={{ fontSize: 13, color: G3, lineHeight: 1.8 }}>{c.desc}</div>
          </div>
        ))}
      </div>
    </FadeSection>
  );
}

/* ── OUTPUT TYPES ── */
const outputs = [
  {
    title: "Bounding Boxes",
    desc: "Precise object localisation for detection and tracking models. COCO, YOLO, Pascal VOC, or custom schema.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" stroke="rgba(26,107,255,.2)" strokeWidth="1" />
        <rect x="12" y="14" width="20" height="16" stroke="#1A6BFF" strokeWidth="1.5" />
        <rect x="11" y="13" width="2" height="2" fill="#1A6BFF" />
        <rect x="29" y="13" width="2" height="2" fill="#1A6BFF" />
        <rect x="11" y="29" width="2" height="2" fill="#1A6BFF" />
        <rect x="29" y="29" width="2" height="2" fill="#1A6BFF" />
      </svg>
    ),
  },
  {
    title: "Segmentation Masks",
    desc: "Pixel-accurate masks for semantic and instance segmentation. Polygon, brush, and AI-assisted tooling.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" stroke="rgba(26,107,255,.2)" strokeWidth="1" />
        <path d="M10 30 L16 16 L24 22 L32 12 L40 20 L40 38 L10 38 Z" fill="rgba(26,107,255,.15)" stroke="#1A6BFF" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Keypoints",
    desc: "Skeletal and pose landmark annotations for motion AI, human pose estimation, and ergonomics models.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" stroke="rgba(26,107,255,.2)" strokeWidth="1" />
        <circle cx="24" cy="14" r="2.5" fill="#1A6BFF" />
        <circle cx="18" cy="20" r="2" fill="#4D8FFF" />
        <circle cx="30" cy="20" r="2" fill="#4D8FFF" />
        <circle cx="24" cy="30" r="2.5" fill="#1A6BFF" />
        <circle cx="16" cy="36" r="2" fill="#8AB4FF" />
        <circle cx="32" cy="36" r="2" fill="#8AB4FF" />
        {[["24","14","18","20"],["24","14","30","20"],["24","30","16","36"],["24","30","32","36"],["18","20","24","30"],["30","20","24","30"]].map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1A6BFF" strokeWidth="1" opacity=".4" />
        ))}
      </svg>
    ),
  },
  {
    title: "Labeled Attributes",
    desc: "Structured metadata and classification labels for richer training signals. Custom taxonomy, multi-label support.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" stroke="rgba(26,107,255,.2)" strokeWidth="1" />
        <rect x="10" y="12" width="28" height="6" rx="1" fill="rgba(26,107,255,.12)" stroke="#1A6BFF" strokeWidth="1" />
        <rect x="10" y="22" width="20" height="6" rx="1" fill="rgba(26,107,255,.08)" stroke="rgba(26,107,255,.4)" strokeWidth="1" />
        <rect x="10" y="32" width="24" height="6" rx="1" fill="rgba(26,107,255,.08)" stroke="rgba(26,107,255,.4)" strokeWidth="1" />
        <text x="34" y="17" fontFamily="monospace" fontSize="5" fill="#1A6BFF">A1</text>
        <text x="32" y="27" fontFamily="monospace" fontSize="5" fill="#4D8FFF">B2</text>
        <text x="36" y="37" fontFamily="monospace" fontSize="5" fill="#4D8FFF">C3</text>
      </svg>
    ),
  },
];

function OutputTypes() {
  return (
    <FadeSection id="output" className="section-padding" style={{ padding: "96px 48px", maxWidth: 1296, margin: "0 auto" }}>
      <SecLabel>Produced Output</SecLabel>
      <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", marginBottom: 16, ...inter }}>
        Production-Ready<br />Visual Datasets.
      </h2>
      <p style={{ fontSize: 15, color: G3, maxWidth: 560, lineHeight: 1.75, ...mono, letterSpacing: "0.02em", marginBottom: 48 }}>
        Every annotation type your computer vision pipeline needs — delivered in the format your models expect.
      </p>
      <div className="output-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2 }}>
        {outputs.map((o) => (
          <div key={o.title} className="out-card" style={{ background: S1, border: `1px solid ${B1}`, padding: "36px 28px", transition: "all .3s", cursor: "default" }}>
            <div style={{ width: 48, height: 48, marginBottom: 20 }}>{o.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-.01em", marginBottom: 10 }}>{o.title}</div>
            <div style={{ fontSize: 12, color: G3, lineHeight: 1.8 }}>{o.desc}</div>
          </div>
        ))}
      </div>
    </FadeSection>
  );
}

/* ── QA STEPS ── */
const qaSteps = [
  { num: "01", title: "AI Pre-Annotation", desc: "Speeds throughput without sacrificing precision.", highlight: false },
  { num: "02", title: "Expert Review", desc: "Domain-expert annotators — not generalist crowd-workers.", highlight: false },
  { num: "03", title: "Blind Evaluation", desc: "Catches what first-pass review misses.", highlight: false },
  { num: "04", title: "IAA Scoring", desc: "Rejection thresholds for every annotation task.", highlight: false },
  { num: "05", title: "Delivery", desc: "COCO, Pascal VOC, YOLO, or custom export.", highlight: true },
];

const qaStats = [
  { val: "97%+", label: "Accuracy Across All Tasks" },
  { val: "5×",   label: "Faster Than Industry Avg." },
  { val: "4",    label: "Output Formats Supported" },
  { val: "5",    label: "QA Validation Gates" },
];

function QASection() {
  return (
    <FadeSection className="section-padding" style={{ padding: "96px 48px", maxWidth: 1296, margin: "0 auto" }}>
      <SecLabel>Quality Assurance</SecLabel>
      <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", marginBottom: 16, ...inter }}>
        How xTransMatrix<br />Quality is Enforced.
      </h2>
      <p style={{ fontSize: 15, color: G3, maxWidth: 560, lineHeight: 1.75, ...mono, letterSpacing: "0.02em", marginBottom: 48 }}>
        Five sequential validation gates. Every annotation cleared before delivery.
      </p>

      {/* Steps */}
      <div className="qa-steps" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 0, position: "relative" }}>
        <div className="qa-steps-connector" style={{ position: "absolute", top: 28, left: "10%", right: "10%", height: 1, background: `linear-gradient(90deg,${BLUE},rgba(26,107,255,.3),rgba(26,107,255,.1))`, pointerEvents: "none" }} />
        {qaSteps.map((s) => (
          <div key={s.num} style={{ padding: "28px 20px 20px", textAlign: "center", position: "relative" }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: s.highlight ? "rgba(26,107,255,.15)" : S1, border: `1px solid ${s.highlight ? BLUE : B2}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", position: "relative", zIndex: 2 }}>
              <span style={{ ...mono, fontSize: 11, letterSpacing: "0.1em", color: BLUE, fontWeight: 700 }}>{s.num}</span>
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "-.01em", marginBottom: 8 }}>{s.title}</div>
            <div style={{ fontSize: 11, color: G3, lineHeight: 1.7, ...mono, letterSpacing: "0.02em", textTransform: "uppercase" }}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="qa-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2, marginTop: 48 }}>
        {qaStats.map((s) => (
          <div key={s.label} style={{ background: S1, border: `1px solid ${B1}`, padding: 32, textAlign: "center" }}>
            <div style={{ fontSize: 42, fontWeight: 900, letterSpacing: "-.05em", color: BLUE_XL }}>{s.val}</div>
            <div style={{ ...mono, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: G3, marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </FadeSection>
  );
}

/* ── CTA ── */
function CTA() {
  return (
    <div className="cta-padding" style={{ padding: "80px 48px", maxWidth: 1296, margin: "0 auto" }}>
      <div className="cta-inner" style={{ background: S1, border: `1px solid ${B1}`, padding: "72px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${BLUE},${BLUE_L},rgba(26,107,255,0))` }} />
        <div style={{ position: "absolute", bottom: -100, right: -100, width: 400, height: 400, background: "radial-gradient(circle,rgba(26,107,255,.1),transparent 65%)", pointerEvents: "none" }} />
        <div style={{ zIndex: 2 }}>
          <div style={{ ...mono, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 8 }}>Ready to Build</div>
          <div style={{ fontSize: "clamp(22px,3vw,40px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", marginTop: 12, ...inter }}>
            Your Image Dataset<br />Starts Here.<br /><span style={{ color: BLUE }}>Let's Talk.</span>
          </div>
        </div>
        <div className="cta-buttons" style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0, zIndex: 2 }}>
          <Link to="/tour" className="btn-p" style={{ textAlign: "center", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: BLUE, color: "#fff", ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "13px 24px", textDecoration: "none", transition: "all .2s" }}>
            Book a Demo →
          </Link>
            <Link to="/tour" className="btn-g" style={{ textAlign: "center", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "transparent", color: BLUE_XL, ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "13px 24px", border: `1px solid ${B2}`, textDecoration: "none", transition: "all .2s" }}>
              Talk to the Team
            </Link>
          <div style={{ ...mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: G4, textAlign: "center", marginTop: 4 }}>
            hello@xtransmatrix.com
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── ROOT ── */
export default function App() {
  return (
    <>
      <style>{STYLES}</style>
      <div style={{ background: BG, color: "#fff", ...inter, overflowX: "hidden", minHeight: "100vh" }}>
        <Header />
        <Hero />
        <Divider />
        <Why />
        <Divider />
        <OutputTypes />
        <Divider />
        <QASection />
        <Divider />
        <CTA />
        <Footer />
      </div>
    </>
  );
}