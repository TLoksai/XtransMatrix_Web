import { useEffect, useRef, ReactNode, CSSProperties } from "react";
import { Link } from "react-router-dom";
import Header from "../../shared/components/Header/Header";
import Footer from "../../shared/components/Footer/footer";

const BLUE = "#1A6BFF";
const BLUE_D = "#0D47C8";
const BLUE_L = "#4D8FFF";
const BLUE_XL = "#8AB4FF";
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
@keyframes scan { 0%{top:0;opacity:0} 10%{opacity:1} 90%{opacity:.5} 100%{top:100%;opacity:0} }
@keyframes fade-up-in { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
.fade-up { opacity:0; transform:translateY(24px); transition:opacity .7s ease, transform .7s ease; }
.fade-up.visible { opacity:1; transform:none; }
.hero-scan { position:absolute; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,rgba(26,107,255,.6),transparent); animation:scan 8s ease-in-out infinite; top:0; }
.btn-primary:hover { background:${BLUE_D} !important; transform:translateY(-1px); }
.btn-ghost:hover { background:${B1} !important; border-color:${BLUE} !important; }
.platform-card:hover { border-color:${B2} !important; }
.cap-card:hover { background:${S2} !important; border-color:${B2} !important; }
.cap-card:hover::after { width:100% !important; }
.t-body tr:hover { background:rgba(26,107,255,.04); }

@media (max-width: 1024px) {
  .hero-content { padding: 120px 32px 64px !important; }
  .hero-stats { position: static !important; margin-top: 40px !important; flex-direction: row !important; flex-wrap: wrap !important; gap: 12px !important; }
  .hero-stats > div { flex: 1 1 calc(33.333% - 8px) !important; min-width: 140px !important; }
  .section-padding { padding: 64px 32px !important; }
  .platform-grid { grid-template-columns: 1fr !important; }
  .platform-cards { grid-template-columns: 1fr 1fr !important; }
  .cap-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .workflow-layout { flex-direction: column !important; }
  .workflow-items { flex-direction: row !important; flex-wrap: wrap !important; }
  .workflow-items > div { flex: 1 1 calc(50% - 8px) !important; margin: 0 0 16px 0 !important; }
  .cta-layout { flex-direction: column !important; align-items: flex-start !important; gap: 32px !important; }
  .cta-buttons { flex-direction: row !important; }
}
@media (max-width: 768px) {
  .hero-content { padding: 100px 20px 48px !important; }
  .hero-stats { flex-direction: column !important; gap: 8px !important; }
  .hero-stats > div { flex: 1 1 100% !important; min-width: auto !important; }
  .section-padding { padding: 48px 20px !important; }
  .platform-cards { grid-template-columns: 1fr !important; }
  .cap-grid { grid-template-columns: 1fr !important; }
  .comparison-table { overflow-x: auto; }
  .comparison-table table { min-width: 600px; }
  .workflow-items > div { flex: 1 1 100% !important; }
  .cta-padding { padding: 48px 20px !important; }
  .cta-inner { padding: 40px 24px !important; flex-direction: column !important; gap: 32px !important; }
  .cta-buttons { flex-direction: column !important; width: 100%; }
  .cta-buttons a { width: 100%; justify-content: center; }
}
@media (max-width: 480px) {
  .hero-content { padding: 80px 16px 40px !important; }
  .section-padding { padding: 40px 16px !important; }
  .hero-btn-group { flex-direction: column !important; gap: 12px !important; width: 100%; }
  .hero-btn-group a { width: 100%; justify-content: center; }
}
`;

function FadeSection({ children, id, className, style }: { children: ReactNode; id?: string; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.1 });
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
      <span style={{ width: 20, height: 1, background: BLUE, display: "inline-block" }} />
      {children}
    </div>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <div className="hero-content" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 48px 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(26,107,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(26,107,255,.055) 1px,transparent 1px)`, backgroundSize: "52px 52px" }} />
      <div style={{ position: "absolute", top: -200, left: -200, width: 900, height: 900, background: "radial-gradient(ellipse,rgba(13,71,200,.32),transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "20%", right: -150, width: 600, height: 600, background: "radial-gradient(ellipse,rgba(26,107,255,.1),transparent 65%)", pointerEvents: "none" }} />
      <div className="hero-scan" />

      <div style={{ maxWidth: 1300, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
              <div style={{ width: 32, height: 1, background: BLUE }} />
              <a href="https://verilabel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}><span style={{ ...mono, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE }}>Powered by <img src="/images/VL-logo.png" alt="VeriLabel" style={{ height: "20px", width: "auto", objectFit: "contain", display: "inline-block", verticalAlign: "middle" }} /> VeriLabel · Physical AI</span></a>
            </div>
            <h1 style={{ fontSize: "clamp(52px,8vw,110px)", fontWeight: 900, letterSpacing: "-.045em", lineHeight: 0.92, textTransform: "uppercase", marginBottom: 32, ...inter }}>
              Multimodal<br />
              <span style={{ color: BLUE }}>Data Engine</span><br />
              <span style={{ WebkitTextStroke: "1px rgba(255,255,255,.25)", color: "transparent" }}>For Robotics.</span>
            </h1>
          </div>
          <p style={{ fontSize: "clamp(14px,1.4vw,18px)", color: G2, lineHeight: 1.7 }}>
            MCAP-native annotation, precision LiDAR labeling, and sensor-fusion pipelines — built to structure, synchronize, and scale real-world robot data.
          </p>
          <div className="hero-btn-group" style={{ display: "flex", gap: 20 }}>
            <a href="https://calendly.com/vishal-patil-xtransmatrix/30min" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: BLUE, color: "#fff", ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "14px 28px", textDecoration: "none", transition: "all .25s" }}>
              Book Demo →
            </a>
            <a href="/case-studies?case=6" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "transparent", color: BLUE_XL, ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "14px 28px", border: `1px solid ${B2}`, textDecoration: "none", transition: "all .25s" }}>
              Case Studies
            </a>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end", gap: 2, marginTop: 80 }}>
          <div className="hero-stats" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[["97%+", "Annotation Accuracy"], ["5×", "Faster Delivery"], ["MCAP", "Native Format"]].map(([n, l]) => (
              <div key={l} style={{ display: "flex", alignItems: "baseline", gap: 8, padding: "14px 20px", background: "rgba(14,18,32,.7)", border: `1px solid ${B1}`, backdropFilter: "blur(12px)" }}>
                <span style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-.04em", color: BLUE_XL }}>{n}</span>
                <span style={{ ...mono, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: G3 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── PLATFORM ── */
const featureList = [
  "MCAP-native · ROS2 compatible",
  "Sensor-fusion across vision + LiDAR + IMU",
  "Custom schemas · fully open export",
  "End-to-end: platform + workforce + QA + delivery",
];

const platformCards = [
  { num: "Annotation", title: "MCAP-Native Workflows", desc: "Full multimodal annotation within MCAP containers. Temporal sync across all sensor streams preserved end-to-end.", tag: "→ ROS2 · MCAP · Rosbag" },
  { num: "Fusion", title: "Precision Sensor Fusion", desc: "Camera-LiDAR-IMU fusion pipelines with sub-frame temporal alignment. Every sensor stream in sync.", tag: "→ Point Cloud · 3D BEV · Calibration" },
  { num: "QA", title: "Multi-Layer Validation", desc: "AI pre-annotation → expert review → blind evaluation → IAA scoring. No annotation reaches delivery without clearing every gate.", tag: "→ 97%+ Accuracy SLA" },
  { num: "Scale", title: "Production-Grade Throughput", desc: "From pilot batches to millions of frames — pipelines that adapt, iterate, and scale with your model development cycle.", tag: "→ 5× Faster Than Industry Avg." },
];

function Platform() {
  return (
    <FadeSection className="section-padding" style={{ padding: "96px 48px", maxWidth: 1296, margin: "0 auto" }}>
      <div style={{ marginBottom: 56 }}>
        <SecLabel>Platform</SecLabel>
        <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", ...inter }}>
          Next-Gen Annotation<br />Infrastructure
        </h2>
        <p style={{ fontSize: 15, color: G3, marginTop: 16, maxWidth: 560, lineHeight: 1.75, ...mono, letterSpacing: "0.02em" }}>
          Legacy tools break at scale. VeriLabel is built from the ground up for autonomous systems operating in complex, real-world environments.
        </p>
      </div>
      <div className="platform-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 2 }}>
        <div style={{ background: S1, border: `1px solid ${B1}`, padding: 56 }}>
          <div style={{ fontSize: 80, fontWeight: 900, letterSpacing: "-.06em", color: BLUE, lineHeight: 1, marginBottom: 8, opacity: 0.9 }}>97%+</div>
          <div style={{ ...mono, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: G3, marginBottom: 20 }}>Accuracy · All Modalities</div>
          <p style={{ fontSize: 15, color: G2, lineHeight: 1.75, marginBottom: 28 }}>
            Every annotation is validated through a multi-layer QA architecture — AI pre-annotation, domain-expert review, blind evaluation, and IAA scoring. The result is production-grade data that generalization-ready models actually need.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {featureList.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "rgba(26,107,255,.06)", border: `1px solid ${B1}` }}>
                <div style={{ width: 6, height: 6, background: BLUE, borderRadius: "50%", flexShrink: 0 }} />
                <span style={{ ...mono, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: G2 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="platform-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {platformCards.slice(0, 2).map((c) => <PlatformCard key={c.num} {...c} />)}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {platformCards.slice(2).map((c) => <PlatformCard key={c.num} {...c} />)}
          </div>
        </div>
      </div>
    </FadeSection>
  );
}

function PlatformCard({ num, title, desc, tag }: { num: string; title: string; desc: string; tag: string }) {
  return (
    <div className="platform-card" style={{ background: S2, border: `1px solid ${B1}`, padding: 36, position: "relative", overflow: "hidden", transition: "border-color .3s" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${BLUE},transparent)` }} />
      <div style={{ ...mono, fontSize: 11, letterSpacing: "0.2em", color: BLUE, marginBottom: 14 }}>{num}</div>
      <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-.02em", marginBottom: 10 }}>{title}</div>
      <div style={{ fontSize: 12, color: G3, lineHeight: 1.8, ...mono, letterSpacing: "0.02em", textTransform: "uppercase" }}>{desc}</div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 14, ...mono, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: BLUE_XL, padding: "5px 10px", border: `1px solid ${B1}` }}>{tag}</div>
    </div>
  );
}

/* ── CAPABILITIES ── */
const caps = [
  {
    title: "3D LiDAR Point Cloud",
    desc: "Cuboid annotation, ground plane segmentation, object detection across all density levels. Supports Velodyne, Ouster, Livox.",
    icon: <path d="M2 3h4v4H2zM10 3h4v4h-4zM18 3h4v4h-4zM6 10h4v4H6zM14 10h4v4h-4zM2 17h4v4H2zM10 17h4v4h-4zM18 17h4v4h-4z" />,
  },
  {
    title: "Sensor Fusion Pipelines",
    desc: "Camera-LiDAR-IMU synchronization with sub-millisecond temporal alignment. Frustum association and cross-modal consistency enforced.",
    icon: <><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M1 12h4M19 12h4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></>,
  },
  {
    title: "Motion & Telemetry",
    desc: "Trajectory annotation, velocity/acceleration labeling, joint state sequences. Built for imitation learning and behavioral cloning pipelines.",
    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
  },
  {
    title: "Egocentric Vision",
    desc: "First-person annotation from the robot's POV. Hand-object contact labeling, grasp metadata, end-effector tracking.",
    icon: <><rect x="2" y="3" width="20" height="14" rx="1" /><polyline points="8 21 12 17 16 21" /></>,
  },
  {
    title: "Scene Understanding",
    desc: "Semantic segmentation, free-space annotation, occupancy grids, environmental condition tagging for operational domain modeling.",
    icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
  },
  {
    title: "MCAP Multi-Stream",
    desc: "Full MCAP container annotation across 8–12 concurrent sensor channels. Timestamp alignment, topic-level QA, delivery in any schema.",
    icon: <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />,
  },
];

function Capabilities() {
  return (
    <FadeSection className="section-padding" style={{ padding: "96px 48px", maxWidth: 1296, margin: "0 auto" }}>
      <div style={{ marginBottom: 56 }}>
        <SecLabel>Capabilities</SecLabel>
        <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", ...inter }}>
          Every Dimension.<br />Every Modality.
        </h2>
        <p style={{ fontSize: 15, color: G3, marginTop: 16, maxWidth: 560, lineHeight: 1.75, ...mono, letterSpacing: "0.02em" }}>
          Comprehensive annotation coverage across all sensor types and data formats required by production autonomous systems.
        </p>
      </div>
      <div className="cap-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2 }}>
        {caps.map((c) => (
          <div key={c.title} className="cap-card" style={{ background: S1, border: `1px solid ${B1}`, padding: 40, position: "relative", overflow: "hidden", cursor: "default", transition: "all .3s" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: 0, height: 2, background: BLUE, transition: "width .4s ease" }} className="cap-bar" />
            <div style={{ width: 40, height: 40, background: B1, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: "none", stroke: BLUE, strokeWidth: 1.5 }}>{c.icon}</svg>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-.015em", marginBottom: 10 }}>{c.title}</div>
            <div style={{ fontSize: 12, color: G3, lineHeight: 1.8, ...mono, letterSpacing: "0.02em", textTransform: "uppercase" }}>{c.desc}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 18 }}>
              <div style={{ flex: 1, height: 2, background: B1, position: "relative" }}>
                <div style={{ position: "absolute", left: 0, top: 0, height: "100%", background: BLUE, width: "97%" }} />
              </div>
              <div style={{ ...mono, fontSize: 11, letterSpacing: "0.12em", color: BLUE }}>97%+</div>
            </div>
          </div>
        ))}
      </div>
    </FadeSection>
  );
}

/* ── COMPARISON TABLE ── */
const rows = [
  ["Annotation Workflow", "Flexibility & Customization", "Pre-built templates. Rigid, limited flexibility.", "Fully tailored workflows, schemas, and pipelines per use case."],
  ["Platform Ownership", "End-to-End Delivery", "Annotation tool only — workforce and QA are on you.", "End-to-end: platform + workforce + QA + delivery in one."],
  ["Data Types", "Modality Coverage", "Standard 2D image, text, video only.", "3D point clouds, LiDAR, multi-sensor fusion, complex AI datasets."],
  ["Export Formats", "Schema Flexibility", "Locked to the platform's own format conventions.", "Fully customizable JSON and schema aligned to your stack."],
  ["Workforce Quality", "Annotator Expertise", "Generic crowd workforce with variable expertise.", "Domain-trained expert annotators per industry vertical."],
  ["QA & Validation", "Output Reliability", "Basic AI-assisted labeling, limited QA configurability.", "Multi-level validation layers ensuring production-grade output."],
  ["Turnaround", "Delivery Speed", "Standard delivery timelines.", "5× faster delivery with QA built into the pipeline."],
  ["Pricing Model", "Cost at Scale", "Per-label or per-hour — cost compounds at enterprise scale.", "Optimized pricing with scale efficiencies built in."],
];

const Dot = ({ type }: { type: "bad" | "mid" | "good" }) => {
  const colors: Record<string, string> = { bad: "#3A3F52", mid: "#5A6890", good: BLUE };
  return <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: colors[type], marginRight: 8 }} />;
};

function Comparison() {
  return (
    <FadeSection id="compare" className="section-padding" style={{ padding: "96px 48px", maxWidth: 1296, margin: "0 auto" }}>
      <div style={{ marginBottom: 56 }}>
        <SecLabel>Comparison</SecLabel>
        <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", ...inter }}>
          Why VeriLabel<br />Changes The Equation
        </h2>
        <p style={{ fontSize: 15, color: G3, marginTop: 16, maxWidth: 560, lineHeight: 1.75, ...mono, letterSpacing: "0.02em" }}>
          Industry-standard platforms were built for simpler problems. We were built for production-grade autonomous systems from day one.
        </p>
      </div>
      <div className="comparison-table" style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {[["28%", "Dimension", G4], ["36%", "Industry Leaders", G3], ["36%", "VeriLabel · xTransMatrix", BLUE]].map(([w, label, color]) => (
                <th key={label} style={{ width: w, background: S1, padding: "18px 24px", textAlign: "left", ...mono, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color, borderBottom: `1px solid ${B2}` }}>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="t-body">
            {rows.map(([dim, sub, bad, good], i) => (
              <tr key={i} style={{ borderBottom: "1px solid rgba(26,107,255,.06)" }}>
                <td style={{ padding: "16px 24px", fontSize: 13, fontWeight: 600, color: G2 }}>
                  {dim}
                  <span style={{ ...mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: G4, display: "block", marginTop: 3, fontWeight: 400 }}>{sub}</span>
                </td>
                <td style={{ padding: "16px 24px", fontSize: 13, color: G4 }}><Dot type="bad" />{bad}</td>
                <td style={{ padding: "16px 24px", fontSize: 13, color: BLUE_XL }}><Dot type="good" />{good}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeSection>
  );
}

/* ── WORKFLOW ── */
const steps = [
  ["01", "AI Pre-Annotation", "Machine-assisted labeling accelerates throughput without sacrificing precision. Baseline annotations generated at scale."],
  ["02", "Domain Expert Review", "Industry-trained annotators — not generalist crowd-workers — verify and refine every annotation for contextual accuracy."],
  ["03", "Blind Evaluation", "A second independent pass catches errors that first-pass review misses. Every frame cross-validated for precision and consistency."],
  ["04", "IAA Scoring", "Inter-annotator agreement scoring enforced across every task. Rejection thresholds eliminate variance before delivery."],
  ["05", "Delivery", "MCAP, custom JSON, or any schema aligned to your stack. Plug-and-play for your training pipelines."],
];

function Workflow() {
  return (
    <FadeSection className="section-padding" style={{ padding: "96px 48px", maxWidth: 1296, margin: "0 auto" }}>
      <div style={{ marginBottom: 56 }}>
        <SecLabel>Quality Architecture</SecLabel>
        <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", ...inter }}>
          How Every Dataset<br />Gets to 97%+
        </h2>
        <p style={{ fontSize: 15, color: G3, marginTop: 16, maxWidth: 560, lineHeight: 1.75, ...mono, letterSpacing: "0.02em" }}>
          Five sequential validation gates. No annotation reaches delivery without clearing every one.
        </p>
      </div>
      <div className="workflow-layout" style={{ display: "flex", flexDirection: "column", position: "relative" }}>
        <div style={{ position: "absolute", top: 24, left: 24, right: 24, height: 1, background: `linear-gradient(90deg,${BLUE},rgba(26,107,255,.2),transparent)`, pointerEvents: "none", display: "none" }} />
        <div className="workflow-items" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2, width: "100%" }}>
          {steps.map(([num, title, desc], i) => (
            <div key={num} style={{ flex: 1, padding: "40px 28px 28px", position: "relative", background: S1, border: `1px solid ${B1}` }}>
              <div style={{ ...mono, fontSize: 11, letterSpacing: "0.2em", color: BLUE, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 10, height: 10, background: BLUE, borderRadius: "50%", flexShrink: 0, position: "relative", zIndex: 2, boxShadow: `0 0 0 4px ${S1}, 0 0 0 5px ${BLUE}` }} />
                {num}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "-.01em", marginBottom: 10 }}>{title}</div>
              <div style={{ fontSize: 11, color: G3, lineHeight: 1.85, ...mono, letterSpacing: "0.02em", textTransform: "uppercase" }}>{desc}</div>
            </div>
          ))}
        </div>
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
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, background: "radial-gradient(circle,rgba(26,107,255,.12),transparent 65%)", pointerEvents: "none" }} />
        <div style={{ zIndex: 2 }}>
          <div style={{ ...mono, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 12 }}>Let's Build Together</div>
          <div style={{ fontSize: "clamp(22px,3vw,40px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", ...inter }}>
            What's Stopping Your<br />Robots From Generalizing?<br /><span style={{ color: BLUE }}>Let's Solve It.</span>
          </div>
        </div>
        <div className="cta-buttons" style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0, zIndex: 2 }}>
          <Link to="/tour" className="btn-primary" style={{ textAlign: "center", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, background: BLUE, color: "#fff", ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "14px 28px", textDecoration: "none", transition: "all .25s" }}>
            Book a Demo →
          </Link>
          <Link to="/tour" className="btn-ghost" style={{ textAlign: "center", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, background: "transparent", color: BLUE_XL, ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "14px 28px", border: `1px solid ${B2}`, textDecoration: "none", transition: "all .25s" }}>
            Talk to the Team
          </Link>
          <div style={{ ...mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: G4, textAlign: "center", marginTop: 4 }}>hello@xtransmatrix.com</div>
        </div>
      </div>
    </div>
  );
}

/* ── MAIN COMPONENT ── */
export default function Robotics() {
  return (
    <>
      <style>{STYLES}</style>
      <div style={{ background: BG, color: "#fff", ...inter, overflowX: "hidden", minHeight: "100vh", width: "100%", maxWidth: "100%" }}>
        <Header />
        <Hero />
        <Divider />
        <Platform />
        <Divider />
        <Capabilities />
        <Divider />
        <Comparison />
        <Divider />
        <Workflow />
        <Divider />
        <CTA />
        <Footer />
      </div>
    </>
  );
}