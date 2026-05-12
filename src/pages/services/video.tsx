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
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
@keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
.fade-up { opacity:0; transform:translateY(24px); transition:opacity .7s ease, transform .7s ease; }
.fade-up.visible { opacity:1; transform:none; }
.hero-tag-dot { width:6px; height:6px; background:${BLUE}; border-radius:50%; animation:pulse 2s ease-in-out infinite; flex-shrink:0; }
.ticker-inner { display:inline-flex; gap:0; animation:ticker 22s linear infinite; white-space:nowrap; }
.filmstrip { display: flex; }
@media (max-width: 768px) {
  .filmstrip { display: none !important; }
}
.intel-card:hover { background:${S2} !important; border-color:${B2} !important; }
.intel-card:hover .intel-accent { transform:scaleX(1) !important; }
.btn-p:hover { background:${BLUE_D} !important; }
.btn-g:hover { background:${B1} !important; }

@media (max-width: 1024px) {
  .hero-content { padding: 100px 32px 64px !important; }
  .hero-body { flex-direction: column !important; align-items: flex-start !important; gap: 24px !important; }
  .hero-body p { max-width: 100% !important; }
  .hero-actions { flex-shrink: 0 !important; }
  .section-padding { padding: 64px 32px !important; }
  .intel-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .timeline-content { padding: 32px !important; }
  .cta-layout { flex-direction: column !important; align-items: flex-start !important; gap: 32px !important; }
  .cta-buttons { flex-direction: row !important; }
}
@media (max-width: 768px) {
  .hero-content { padding: 80px 20px 48px !important; }
  .hero-body { gap: 20px !important; }
  .section-padding { padding: 48px 20px !important; }
  .intel-grid { grid-template-columns: 1fr !important; }
  .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .stats-grid > div { padding: 32px !important; }
  .timeline-content { padding: 24px !important; }
  .timeline-tracks { overflow-x: auto; }
  .ticker-content { padding: 10px 0 !important; }
  .cta-padding { padding: 48px 20px !important; }
  .cta-inner { padding: 40px 24px !important; flex-direction: column !important; gap: 32px !important; }
  .cta-buttons { flex-direction: column !important; width: 100%; }
  .cta-buttons a, .cta-buttons Link { width: 100%; justify-content: center; }
}
@media (max-width: 480px) {
  .hero-content { padding: 64px 16px 40px !important; }
  .section-padding { padding: 40px 16px !important; }
  .hero-actions { flex-direction: column !important; gap: 12px !important; width: 100%; }
  .hero-actions a { width: 100%; justify-content: center; }
  .stats-grid { grid-template-columns: 1fr !important; }
  .ticker-inner { animation: ticker 15s linear infinite !important; }
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

function SecLabel({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div style={{ ...mono, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 14, display: "flex", alignItems: "center", gap: 12, ...style }}>
      <span style={{ width: 20, height: 1, background: BLUE, display: "inline-block" }} />
      {children}
    </div>
  );
}

/* ── FILMSTRIP ── */
function Filmstrip() {
  return (
    <div className="filmstrip" style={{ position: "absolute", top: 120, left: 0, right: 0, height: 120, display: "flex", alignItems: "center", gap: 4, overflow: "hidden", opacity: 0.12, zIndex: 1, pointerEvents: "none" }}>
      {Array.from({ length: 30 }, (_, i) => (
        <div key={i} style={{ flexShrink: 0, width: 80, height: 100, border: `1px solid ${BLUE}`, position: "relative" }}>
          <div style={{ position: "absolute", left: 4, top: 8, bottom: 8, width: 8, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {Array.from({ length: 6 }, (_, j) => (
              <div key={j} style={{ width: 8, height: 6, background: BLUE, borderRadius: 1 }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <div className="hero-content" style={{ minHeight: "100vh", padding: "120px 48px 80px", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(26,107,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(26,107,255,.04) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
      <div style={{ position: "absolute", bottom: -200, left: -100, width: 800, height: 800, background: "radial-gradient(ellipse,rgba(13,71,200,.28),transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "10%", right: "5%", width: 500, height: 500, background: "radial-gradient(ellipse,rgba(26,107,255,.09),transparent 65%)", pointerEvents: "none" }} />
      <Filmstrip />

      <div style={{ maxWidth: 1300, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 2 }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
            <div style={{ width: 32, height: 1, background: BLUE }} />
            <a href="https://verilabel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}><span style={{ ...mono, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE }}>Powered by <img src="/images/VL-logo.png" alt="VeriLabel" style={{ height: "20px", width: "auto", objectFit: "contain", display: "inline-block", verticalAlign: "middle" }} /> VeriLabel · Video Intelligence</span></a>
          </div>
          <h1 style={{ fontSize: "clamp(48px,8vw,114px)", fontWeight: 900, letterSpacing: "-.045em", lineHeight: 0.9, textTransform: "uppercase", marginBottom: 32, ...inter }}>
            Where<br />
            Video Becomes<br />
            <span style={{ color: BLUE }}>Structured</span><br />
            <span style={{ color: G4 }}>Intelligence.</span>
          </h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <p style={{ fontSize: 15, color: G2, lineHeight: 1.75 }}>
            Multi-object tracking, action segmentation, speaker detection, transcription, and behavioral analysis - synchronized across cameras, sensors, and audio streams with continuity enforced across long-duration recordings.
          </p>
          <div className="hero-actions" style={{ display: "flex", gap: 16 }}>
            <a href="https://calendly.com/vishal-patil-xtransmatrix/30min" target="_blank" rel="noopener noreferrer" className="btn-p" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: BLUE, color: "#fff", ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "13px 28px", textDecoration: "none", transition: "all .2s" }}>
              Book Demo →
            </a>
            <a href="/case-studies?case=3" className="btn-g" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: BLUE_XL, ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "13px 28px", border: `1px solid ${B2}`, textDecoration: "none", transition: "all .2s" }}>
              Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── TICKER ── */
const TICKER_ITEMS = ["Multi-Object Tracking", "Action Recognition", "Egocentric Video", "8–12 Camera Sync", "Behavioral Annotation", "Scene Understanding", "MCAP Timestamp Alignment", "97%+ Accuracy"];

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{ borderTop: `1px solid ${B1}`, borderBottom: `1px solid ${B1}`, overflow: "hidden", whiteSpace: "nowrap", padding: "12px 0", background: S1 }}>
      <div className="ticker-content" style={{ overflow: "hidden" }}>
        <div className="ticker-inner">
          {items.map((item, i) => (
            <span key={i} style={{ ...mono, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: G3, padding: "0 32px" }}>
              {item} <span style={{ color: BLUE }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── INTELLIGENCE GRID ── */
const intelCards = [
  {
    cat: "Tracking", title: "Multi-Object Tracking",
    desc: "Persistent identity across frames. Trajectory annotation with speed, direction, and occlusion metadata. Consistent object IDs maintained across camera cuts and long-duration sequences.",
    tags: ["MOT", "Trajectory", "Occlusion Handling", "Re-ID"],
  },
  {
    cat: "Action", title: "Action Recognition",
    desc: "Temporal boundary annotation with millisecond precision. Task phase segmentation for imitation learning pipelines. Multi-label action classification across overlapping activities.",
    tags: ["Temporal Boundaries", "Phase Segmentation", "Imitation Learning"],
  },
  {
    cat: "Egocentric", title: "First-Person Video",
    desc: "Annotation from the robot's or operator's POV. Hand-object contact labeling with grasp metadata, end-effector tracking, and interaction zone classification.",
    tags: ["Robot POV", "Hand-Object", "Grasp Metadata"],
  },
  {
    cat: "Multi-Cam", title: "Synchronized Cameras",
    desc: "Annotation consistency enforced across 8–12 concurrent channels via MCAP timestamp alignment. Cross-camera identity linking, coverage gaps flagged, sub-frame sync verified.",
    tags: ["8–12 Channels", "MCAP Alignment", "Sub-Frame Sync"],
  },
  {
    cat: "Behavior", title: "Behavioral Annotation",
    desc: "Gesture recognition, intent tagging, crowd dynamics modeling, safety events and near-miss detection. Structured behavioral signals for downstream prediction models.",
    tags: ["Gesture", "Intent Tagging", "Safety Events", "Near-Miss"],
  },
  {
    cat: "Scene", title: "Scene Understanding",
    desc: "Change detection, environmental condition tagging, background/foreground separation. Scene graph annotation for rich spatial reasoning across dynamic environments.",
    tags: ["Change Detection", "Environment Tagging", "Scene Graph"],
  },
];

function IntelCard({ cat, title, desc, tags }: { cat: string; title: string; desc: string; tags: string[] }) {
  return (
    <div className="intel-card" style={{ background: S1, border: `1px solid ${B1}`, padding: 44, position: "relative", overflow: "hidden", transition: "all .3s", cursor: "default" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
        <div style={{ ...mono, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE }}>{cat}</div>
        <div style={{ ...mono, fontSize: 11, letterSpacing: "0.12em", color: BLUE_XL, background: "rgba(26,107,255,.1)", border: `1px solid ${B1}`, padding: "4px 10px" }}>97%+</div>
      </div>
      <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-.025em", marginBottom: 12 }}>{title}</div>
      <div style={{ fontSize: 13, color: G3, lineHeight: 1.8, marginBottom: 20 }}>{desc}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {tags.map((t) => (
          <div key={t} style={{ ...mono, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 10px", border: `1px solid ${B1}`, color: G4 }}>{t}</div>
        ))}
      </div>
      <div className="intel-accent" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${BLUE},transparent)`, transform: "scaleX(0)", transformOrigin: "left", transition: "transform .4s ease" }} />
    </div>
  );
}

function Intelligence() {
  return (
    <FadeSection id="intelligence" className="section-padding" style={{ padding: "96px 48px", maxWidth: 1296, margin: "0 auto" }}>
      <SecLabel>Intelligence Captures</SecLabel>
      <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", marginBottom: 16, ...inter }}>
        Temporal Intelligence<br />At Every Frame.
      </h2>
      <p style={{ fontSize: 15, color: G3, maxWidth: 560, lineHeight: 1.75, ...mono, letterSpacing: "0.02em", marginBottom: 56 }}>
        xTransMatrix captures every meaningful signal across time — identity, motion, behavior, environment. Six dimensions of video intelligence, all at 97%+.
      </p>
      <div className="intel-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 2 }}>
        {intelCards.map((c) => <IntelCard key={c.cat} {...c} />)}
      </div>
    </FadeSection>
  );
}

/* ── TIMELINE VIZ ── */
const tlTracks = [
  { name: "Camera 01", color: BLUE, opacity: 0.7, anns: [18, 42, 71] },
  { name: "Camera 02", color: BLUE_L, opacity: 0.7, anns: [18, 42, 71] },
  { name: "LiDAR", color: "#4D8FFF", opacity: 0.5, anns: [18, 42, 71] },
  { name: "IMU / Motion", color: BLUE_XL, opacity: 0.4, anns: [] },
];

function TemporalArch() {
  return (
    <FadeSection className="section-padding" style={{ padding: "96px 48px", maxWidth: 1296, margin: "0 auto" }}>
      <SecLabel>Temporal Architecture</SecLabel>
      <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", marginBottom: 16, ...inter }}>
        Multi-Stream Sync.<br />Frame-Perfect Annotation.
      </h2>
      <p style={{ fontSize: 15, color: G3, maxWidth: 560, lineHeight: 1.75, ...mono, letterSpacing: "0.02em", marginBottom: 56 }}>
        Every signal stream annotated in lockstep. No drift, no gaps — temporal continuity enforced across the full recording.
      </p>

      {/* Timeline */}
      <div className="timeline-content" style={{ background: S1, border: `1px solid ${B1}`, padding: 40, overflow: "hidden", position: "relative", marginBottom: 48 }}>
        <div style={{ ...mono, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: 24 }}>
          Timeline · 4-Channel Sample · 30-Second Recording
        </div>
        <div className="timeline-tracks" style={{ overflowX: "auto" }}>
          {tlTracks.map((tr, i) => (
            <div key={tr.name} style={{ marginBottom: i < tlTracks.length - 1 ? 20 : 0 }}>
              <div style={{ ...mono, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: G3, marginBottom: 6 }}>{tr.name}</div>
              <div style={{ position: "relative", height: 12, background: "rgba(26,107,255,.06)", border: `1px solid ${B1}` }}>
                <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "100%", background: tr.color, opacity: tr.opacity }} />
                {tr.anns.map((pct) => (
                  <div key={pct} style={{ position: "absolute", top: 0, left: `${pct}%`, height: "100%", borderLeft: `1.5px solid ${ORANGE}`, opacity: 0.9 }} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          {["0s", "5s", "10s", "15s", "20s", "25s", "30s"].map((t) => (
            <div key={t} style={{ ...mono, fontSize: 7, letterSpacing: "0.1em", color: G4 }}>{t}</div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 20, marginTop: 16, paddingTop: 16, borderTop: `1px solid ${B1}`, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 12, height: 2, background: ORANGE }} />
            <div style={{ ...mono, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: G3 }}>Annotation event</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 12, height: 4, background: BLUE }} />
            <div style={{ ...mono, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: G3 }}>Annotated stream</div>
          </div>
        </div>
      </div>
    </FadeSection>
  );
}

/* ── STATS ── */
const stats = [
  { val: "97%+", label: "Accuracy Across\nAll Video Tasks" },
  { val: "12", label: "Max Camera\nChannels Synced" },
  { val: "6", label: "Annotation\nIntelligence Types" },
  { val: "5×", label: "Faster Delivery\nWith QA Built In" },
];

function Stats() {
  return (
    <FadeSection className="section-padding" style={{ padding: "80px 48px", maxWidth: 1296, margin: "0 auto" }}>
      <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 2 }}>
        {stats.map((s) => (
          <div key={s.val} style={{ background: S1, border: `1px solid ${B1}`, padding: 44 }}>
            <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: "-.06em", color: BLUE_XL, lineHeight: 1 }}>{s.val}</div>
            <div style={{ ...mono, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: G3, marginTop: 8, whiteSpace: "pre-line" }}>{s.label}</div>
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
        <div style={{ position: "absolute", top: -80, left: -80, width: 400, height: 400, background: "radial-gradient(circle,rgba(26,107,255,.1),transparent 65%)", pointerEvents: "none" }} />
        <div style={{ zIndex: 2 }}>
          <div style={{ ...mono, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 12 }}>Your Next-Gen Dataset</div>
          <div style={{ fontSize: "clamp(22px,3vw,40px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", ...inter }}>
            Frame-Perfect AI Data<br />For The World's<br /><span style={{ color: BLUE }}>Smartest Models.</span>
          </div>
        </div>
        <div className="cta-buttons" style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0, zIndex: 2 }}>
          <Link to="/tour" className="btn-p" style={{ textAlign: "center", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: BLUE, color: "#fff", ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "13px 28px", textDecoration: "none", transition: "all .2s" }}>
            Book a Demo →
          </Link>
            <Link to="/tour" className="btn-g" style={{ textAlign: "center", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "transparent", color: BLUE_XL, ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "13px 28px", border: `1px solid ${B2}`, textDecoration: "none", transition: "all .2s" }}>
              Talk to the Team
            </Link>
          <div style={{ ...mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: G4, textAlign: "center", marginTop: 4 }}>hello@xtransmatrix.com</div>
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
      <div style={{ background: BG, color: "#fff", ...inter, overflowX: "hidden", minHeight: "100vh", width: "100%", maxWidth: "100%" }}>
        <Header />
        <Hero />
        <Ticker />
        <Intelligence />
        <Divider />
        <TemporalArch />
        <Divider />
        <Stats />
        <Divider />
        <CTA />
        <Footer />
      </div>
    </>
  );
}