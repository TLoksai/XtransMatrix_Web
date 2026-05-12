import { useEffect, useRef, ReactNode, CSSProperties } from "react";

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

/* ── Keyframe injection ── */
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');
@keyframes pill-wave { 0%,100%{transform:scaleY(.5)} 50%{transform:scaleY(1)} }
@keyframes wave-anim { 0%,100%{height:20px} 50%{height:var(--h)} }
@keyframes fade-up-in { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
.fade-up { opacity:0; transform:translateY(24px); transition:opacity .7s ease, transform .7s ease; }
.fade-up.visible { opacity:1; transform:none; }
.wave-bar { width:4px; background:${BLUE}; border-radius:2px 2px 0 0; animation:wave-anim 1.8s ease-in-out infinite; }
.pill-w span { display:inline-block; width:3px; background:${BLUE}; border-radius:1px; animation:pill-wave 1.2s ease-in-out infinite; }
.ann-row:hover { border-color:${B2} !important; }
.lang-card:hover { border-color:${B2} !important; background:${S2} !important; }
.qa-card:hover { background:${S2} !important; }
.btn-p:hover { background:${BLUE_D} !important; }
.btn-g:hover { background:${B1} !important; }

@media (max-width: 1024px) {
  .hero-content { padding: 48px 32px !important; }
  .section-padding { padding: 64px 32px !important; }
  .ann-grid { grid-template-columns: 180px 1fr auto !important; gap: 24px !important; }
  .qa-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
  .cta-layout { flex-direction: column !important; align-items: flex-start !important; gap: 32px !important; }
  .cta-buttons { flex-direction: row !important; }
}
@media (max-width: 768px) {
  .hero-content { padding: 32px 20px !important; min-height: auto !important; padding-top: 80px !important; padding-bottom: 64px !important; }
  .section-padding { padding: 48px 20px !important; }
  .ann-grid { grid-template-columns: 1fr !important; gap: 16px !important; padding: 24px 20px !important; }
  .ann-tags { flex-direction: row !important; flex-wrap: wrap !important; }
  .qa-grid { grid-template-columns: 1fr !important; }
  .stats-grid { grid-template-columns: 1fr 1fr !important; }
  .cta-padding { padding: 48px 20px !important; }
  .cta-inner { padding: 40px 24px !important; flex-direction: column !important; gap: 32px !important; }
  .cta-buttons { flex-direction: column !important; width: 100%; }
  .cta-buttons a { width: 100%; justify-content: center; }
}
@media (max-width: 480px) {
  .hero-content { padding: 24px 16px !important; }
  .section-padding { padding: 40px 16px !important; }
  .stats-grid { grid-template-columns: 1fr !important; }
  .wave-vis { padding: 24px 16px !important; }
  .wave-vis-content { flex-direction: column !important; gap: 16px !important; }
  .wave-vis-info { flex-direction: column !important; gap: 8px !important; }
}
`;

/* ── Components ── */



function PillWave() {
  const delays = [0, 0.15, 0.3, 0.1, 0.25];
  const heights = [6, 12, 8, 14, 6];
  return (
    <div className="pill-w" style={{ display: "flex", alignItems: "center", gap: 2 }}>
      {heights.map((h, i) => (
        <span key={i} style={{ height: h, animationDelay: `${delays[i]}s` }} />
      ))}
    </div>
  );
}

function WaveformDeco() {
  const bars = Array.from({ length: 120 }, (_, i) => ({
    h: Math.random() * 100 + 20,
    delay: (i * 0.05) % 1.8,
  }));
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 180, display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 3, opacity: 0.2, pointerEvents: "none" }}>
      {bars.map((b, i) => (
        <div
          key={i}
          className="wave-bar"
          style={{ height: b.h * 0.3, animationDelay: `${b.delay}s` } as CSSProperties}
        />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <div className="hero-content" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 48px 80px", position: "relative", overflow: "hidden" }}>
      {/* BG */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(26,107,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(26,107,255,.04) 1px,transparent 1px)`, backgroundSize: "44px 44px" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 900, background: "radial-gradient(ellipse,rgba(13,71,200,.22),transparent 60%)", pointerEvents: "none" }} />
      <WaveformDeco />

      <div style={{ maxWidth: 1300, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 2 }}>
        <div>
          {/* Pill */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 32 }}>
            <div style={{ width: 32, height: 1, background: BLUE }} />
            <PillWave />
            <a href="https://verilabel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <span style={{ ...mono, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE }}>
                Powered by <img src="/images/VL-logo.png" alt="VeriLabel" style={{ height: "20px", width: "auto", objectFit: "contain", display: "inline-block", verticalAlign: "middle" }} /> VeriLabel
              </span>
            </a>
          </div>

          <h1 style={{ fontSize: "clamp(48px,8.5vw,120px)", fontWeight: 900, letterSpacing: "-.045em", lineHeight: 0.88, textTransform: "uppercase", marginBottom: 32, ...inter }}>
            Every <span style={{ color: BLUE }}>Voice.</span><br />
            Every <span style={{ color: BLUE }}>Emotion.</span><br />
            <span style={{ fontWeight: 300, color: G3 }}>AI-Ready at Scale.</span>
          </h1>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <p style={{ fontSize: 16, color: G2, lineHeight: 1.75 }}>
            xTransMatrix transforms complex multi-speaker audio into precise, timestamped, emotion-tagged datasets — ready to power the world's most advanced speech AI systems.
          </p>

          <div style={{ display: "flex", gap: 16 }}>
            <a href="https://calendly.com/vishal-patil-xtransmatrix/30min" target="_blank" rel="noopener noreferrer" className="btn-p" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: BLUE, color: "#fff", ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "13px 28px", textDecoration: "none", transition: "all .2s" }}>
              Book Demo →
            </a>
            <a href="/case-studies?case=4" className="btn-g" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: BLUE_XL, ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "13px 28px", border: `1px solid ${B2}`, textDecoration: "none", transition: "all .2s" }}>
              Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function WaveVis() {
  return (
    <div className="wave-vis" style={{ background: S1, borderTop: `1px solid ${B1}`, borderBottom: `1px solid ${B1}`, padding: "32px 48px", overflow: "hidden" }}>
      <div className="wave-vis-content" style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ ...mono, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, flexShrink: 0, width: 80 }}>Live Sample</div>
        <div style={{ flex: 1, position: "relative" }}>
          <svg width="100%" height="56" viewBox="0 0 800 56" preserveAspectRatio="none" style={{ display: "block" }}>
            <path d="M0 28 C20 20 40 10 60 18 C80 26 100 8 120 14 C140 20 160 6 180 12 C200 18 220 22 240 16 C260 10 280 4 300 10 C320 16 340 8 360 14 C380 20 400 24 420 18 C440 12 460 6 480 10 C500 14 520 20 540 16 C560 12 580 8 600 12 C620 16 640 20 660 14 C680 8 700 6 720 10 C740 14 760 20 780 16 C800 12 800 28 800 28Z" fill="rgba(26,107,255,.25)" stroke="#1A6BFF" strokeWidth=".8" />
            <path d="M0 28 C20 36 40 46 60 38 C80 30 100 48 120 42 C140 36 160 50 180 44 C200 38 220 34 240 40 C260 46 280 52 300 46 C320 40 340 48 360 42 C380 36 400 32 420 38 C440 44 460 50 480 46 C500 42 520 36 540 40 C560 44 580 48 600 44 C620 40 640 36 660 42 C680 48 700 50 720 46 C740 42 760 36 780 40 C800 44 800 28 800 28Z" fill="rgba(77,143,255,.15)" stroke="#4D8FFF" strokeWidth=".6" />
            <line x1="120" y1="2" x2="120" y2="54" stroke="#FF7A5C" strokeWidth="1" strokeDasharray="3,2" opacity=".8" />
            <line x1="320" y1="2" x2="320" y2="54" stroke="#FF7A5C" strokeWidth="1" strokeDasharray="3,2" opacity=".8" />
            <line x1="580" y1="2" x2="580" y2="54" stroke="#FF7A5C" strokeWidth="1" strokeDasharray="3,2" opacity=".8" />
            <text x="4" y="12" fontFamily="monospace" fontSize="6" fill="#1A6BFF" opacity=".9">SPK 1</text>
            <text x="4" y="50" fontFamily="monospace" fontSize="6" fill="#4D8FFF" opacity=".9">SPK 2</text>
          </svg>
        </div>
        <div className="wave-vis-info" style={{ display: "flex", gap: 16, flexShrink: 0 }}>
          <div style={{ ...mono, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: G4 }}>2 Speakers · Diarized</div>
          <div style={{ ...mono, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: BLUE }}>IAA ✓ 97.4%</div>
        </div>
      </div>
    </div>
  );
}

function SecLabel({ children }: { children: ReactNode }) {
  return (
    <div style={{ ...mono, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 14, display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ width: 20, height: 1, background: BLUE, display: "inline-block" }} />
      {children}
    </div>
  );
}

function AnnTag({ active, children }: { active: boolean; children: ReactNode }) {
  return (
    <div style={{ ...mono, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 12px", border: `1px solid ${active ? BLUE : B1}`, color: active ? BLUE_XL : G4, background: active ? "rgba(26,107,255,.06)" : "transparent", whiteSpace: "nowrap", textAlign: "center" }}>
      {children}
    </div>
  );
}

const annotations = [
  {
    cat: "Transcription", type: "ASR & Phoneme Tagging",
    desc: "Verbatim or clean transcription with word-level timestamps. Phoneme-level IPA annotation ensures high-fidelity, model-ready speech data for ASR and pronunciation modeling pipelines.",
    tags: [["Word-Level", true], ["Phoneme-Level", true], ["IPA", false], ["Accuracy-Validated", false]],
  },
  {
    cat: "Diarization", type: "Speaker ID & Turns",
    desc: "Identify speakers, label overlaps and cross-talk, and annotate voice activity boundaries — consistently accurate across complex multi-speaker environments and noisy recordings.",
    tags: [["Multi-Speaker", true], ["Overlap Detection", true], ["VAD", false], ["Accuracy-Checked", false]],
  },
  {
    cat: "Emotion", type: "Affect & Tone Modeling",
    desc: "Capture emotional states, pitch, stress, and conversational tone — annotated for high-precision emotion-aware AI. Structured affect labels for affective computing and sentiment analysis pipelines.",
    tags: [["Emotion", true], ["Prosody", true], ["Tone", false], ["Accuracy-Validated", false]],
  },
  {
    cat: "Acoustic Events", type: "Sound Event Detection",
    desc: "Environmental, industrial, and urban sounds labeled with precision for robotics and audio perception models. Temporal localization with event-class taxonomy and intensity metadata.",
    tags: [["Safety", true], ["Industrial", true], ["Urban", false], ["Accuracy-Enforced", false]],
  },
  {
    cat: "Multilingual", type: "15+ Languages & Dialects",
    desc: "Native-speaker annotation for low-resource languages and code-switching scenarios. Verified linguistic accuracy across dialects, accents, and regional variation — including language pairs and mixed-language audio.",
    tags: [["15+ Languages", true], ["Dialects", true], ["Native Speaker", false], ["Accuracy-Guaranteed", false]],
  },
];

function Annotations() {
  return (
    <FadeSection id="annotations" className="section-padding" style={{ padding: "96px 48px", maxWidth: 1296, margin: "0 auto" }}>
      <SecLabel>What We Annotate</SecLabel>
      <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", marginBottom: 16, ...inter }}>
        Speech &amp; Sound Intelligence<br />For AI.
      </h2>
      <p style={{ fontSize: 15, color: G3, maxWidth: 560, lineHeight: 1.75, ...mono, letterSpacing: "0.02em", marginBottom: 56 }}>
        Five annotation disciplines. One production-ready output. Every signal your speech AI needs — delivered with verified accuracy.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {annotations.map((a) => (
          <div key={a.cat} className="ann-row ann-grid" style={{ background: S1, border: `1px solid ${B1}`, padding: "36px 40px", display: "grid", gridTemplateColumns: "200px 1fr auto", alignItems: "start", gap: 32, transition: "border-color .3s", cursor: "default" }}>
            <div>
              <div style={{ ...mono, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: 6 }}>{a.cat}</div>
              <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-.02em" }}>{a.type}</div>
            </div>
            <div style={{ fontSize: 13, color: G3, lineHeight: 1.8 }}>{a.desc}</div>
            <div className="ann-tags" style={{ display: "flex", flexDirection: "column", gap: 6, flexShrink: 0 }}>
              {a.tags.map(([label, active]) => <AnnTag key={String(label)} active={active as boolean}>{String(label)}</AnnTag>)}
            </div>
          </div>
        ))}
      </div>
    </FadeSection>
  );
}

const qaCards = [
  { num: "01", title: "Expert Review", desc: "Domain-trained professionals verify every annotation — from multi-object tracking to speaker identification — ensuring models learn from real-world accuracy, not guesswork." },
  { num: "02", title: "Blind Evaluation", desc: "A second independent pass catches errors first-pass misses. Every segment and speaker alignment is cross-checked for precision and consistency." },
  { num: "03", title: "AI Pre-Annotation", desc: "VeriLabel accelerates throughput with machine-assisted labeling while human experts refine every detail — the best of AI and human intelligence combined." },
  { num: "04", title: "Flexible Export", desc: "Production-grade datasets in COCO, YOLO, Pascal VOC, or JSON. Multi-camera, multi-modal, and audio alignment preserved — plug-and-play for your AI models." },
];

const stats = [
  { val: "97%+", label: "Transcription Accuracy" },
  { val: "15+", label: "Languages & Dialects" },
  { val: "5", label: "Annotation Disciplines" },
];

function QA() {
  return (
    <FadeSection className="section-padding" style={{ padding: "96px 48px", maxWidth: 1296, margin: "0 auto" }}>
      <SecLabel>Quality Assurance</SecLabel>
      <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", marginBottom: 16, ...inter }}>
        How Quality<br />Is Ensured.
      </h2>
      <p style={{ fontSize: 15, color: G3, maxWidth: 560, lineHeight: 1.75, ...mono, letterSpacing: "0.02em", marginBottom: 56 }}>
        Four-layer QA architecture. Domain expertise at every stage. Production-grade accuracy guaranteed.
      </p>
      <div className="qa-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2 }}>
        {qaCards.map((c) => (
          <div key={c.num} className="qa-card" style={{ background: S1, border: `1px solid ${B1}`, padding: "40px 32px", position: "relative", overflow: "hidden", transition: "all .3s" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${BLUE},transparent)` }} />
            <div style={{ fontSize: 64, fontWeight: 900, letterSpacing: "-.06em", color: BLUE, opacity: 0.12, lineHeight: 1, marginBottom: 4 }}>{c.num}</div>
            <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-.015em", marginBottom: 10 }}>{c.title}</div>
            <div style={{ fontSize: 12, color: G3, lineHeight: 1.8 }}>{c.desc}</div>
          </div>
        ))}
      </div>
      <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, marginTop: 2 }}>
        {stats.map((s) => (
          <div key={s.label} style={{ background: S1, border: `1px solid ${B1}`, borderTop: "none", padding: 36, textAlign: "center" }}>
            <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: "-.06em", color: BLUE_XL }}>{s.val}</div>
            <div style={{ ...mono, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: G3, marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </FadeSection>
  );
}

function CTA() {
  return (
    <div className="cta-padding" style={{ padding: "80px 48px", maxWidth: 1296, margin: "0 auto" }}>
      <div className="cta-inner" style={{ background: S1, border: `1px solid ${B1}`, padding: "72px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${BLUE},${BLUE_L},rgba(26,107,255,0))` }} />
        <div style={{ position: "absolute", top: "50%", right: -80, transform: "translateY(-50%)", width: 400, height: 400, background: "radial-gradient(circle,rgba(26,107,255,.1),transparent 65%)", pointerEvents: "none" }} />
        <div style={{ zIndex: 2 }}>
          <div style={{ ...mono, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE, marginBottom: 12 }}>Ready to Build</div>
          <div style={{ fontSize: "clamp(22px,3vw,40px)", fontWeight: 900, letterSpacing: "-.04em", lineHeight: 0.95, textTransform: "uppercase", ...inter }}>
            Your Audio Dataset<br />Starts Here.<br /><span style={{ color: BLUE }}>Let's Talk.</span>
          </div>
        </div>
        <div className="cta-buttons" style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0, zIndex: 2 }}>
          <a href="#" className="btn-p" style={{ textAlign: "center", display: "inline-flex", alignItems: "center", gap: 8, background: BLUE, color: "#fff", ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "13px 28px", textDecoration: "none", transition: "all .2s" }}>
            Book a Demo →
          </a>
          <a href="#" className="btn-g" style={{ textAlign: "center", display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: BLUE_XL, ...mono, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "13px 28px", border: `1px solid ${B2}`, textDecoration: "none", transition: "all .2s" }}>
            Talk to the Team
          </a>
          <div style={{ ...mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: G4, textAlign: "center", marginTop: 4 }}>
            hello@xtransmatrix.com
          </div>
        </div>
      </div>
    </div>
  );
}



function Divider() {
  return <div style={{ height: 1, background: `linear-gradient(90deg,transparent,${B2},transparent)`, margin: "0 48px" }} />;
}

/* ── Intersection-observer fade-up wrapper ── */
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

/* ── Root App ── */
export default function App() {
  return (
    <>
      <style>{STYLES}</style>
      <div style={{ background: BG, color: "#fff", ...inter, overflowX: "hidden", minHeight: "100vh" }}>
        <Hero />
        <WaveVis />
        <Annotations />
        <Divider />
        <QA />
        <Divider />
        <CTA />
      </div>
    </>
  );
}