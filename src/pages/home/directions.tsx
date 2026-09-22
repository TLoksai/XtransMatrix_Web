import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";

/* The two alternate rebrand directions from the xTMX Rebrand Lab, kept in their
   own light palettes. Direction 02 (Intelligence in Motion) is the live site. */

type Palette = {
  bg: string; text: string; muted: string; accent: string; accentInk: string;
  line: string; panel: string; soft: string;
  /* Direction 03 states its primary button in lime rather than the text accent. */
  primary?: { bg: string; ink: string; border: string };
};

const CLINICAL: Palette = {
  bg: "#f2f6f3", text: "#16372f", muted: "#5b7269", accent: "#197767",
  accentInk: "#ffffff", line: "#cedbd4", panel: "#e7efea", soft: "#dde9e1",
};

const HUMAN: Palette = {
  bg: "#eaeae1", text: "#252820", muted: "#696e60", accent: "#445822",
  accentInk: "#f5f7ee", line: "#c7cabc", panel: "#e0e2d6", soft: "#d7dbc9",
  primary: { bg: "#d1eb62", ink: "#242a12", border: "#272d18" },
};

const PRINCIPLES = [
  { k: "01 / Outcome",        t: "Beyond a completed task.",               d: "Connect the hand-offs, reviews and follow-through that make the whole workflow useful." },
  { k: "02 / Accountability", t: "Human judgement. Clear ownership.",      d: "Define who reviews, who resolves and when a qualified domain expert must take over." },
  { k: "03 / Progress",       t: "Improve the system—not just the volume.", d: "Learn from approved feedback. Reduce avoidable rework. Make quality visible as AI changes." },
];

function Eyebrow({ p, children }: { p: Palette; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase mb-6" style={{ color: p.accent }}>
      <span className="w-6 h-px shrink-0" style={{ background: p.accent }} />{children}
    </div>
  );
}

function Btn({ p, children, primary, pill }: { p: Palette; children: React.ReactNode; primary?: boolean; pill?: boolean }) {
  const base = "inline-flex items-center justify-center gap-5 px-5 py-3.5 text-xs font-semibold leading-tight transition-transform hover:-translate-y-0.5";
  return (
    <span
      className={`${base} ${pill ? "rounded-full" : ""}`}
      style={primary
        ? {
            background: p.primary?.bg ?? p.accent,
            color: p.primary?.ink ?? p.accentInk,
            border: `1px solid ${p.primary?.border ?? p.accent}`,
          }
        : { border: `1px solid ${p.line}`, color: p.text }}
    >
      {children}
    </span>
  );
}

function ClinicalVisual({ p }: { p: Palette }) {
  return (
    <div className="relative h-[360px] md:h-[425px] flex flex-col justify-end">
      <div className="absolute right-0 top-0 w-[265px] md:w-[330px] h-[330px] md:h-[405px]"
        style={{ background: "linear-gradient(150deg,#ccdcd0,#b5d4c5 55%,#d5e5dc)", borderRadius: "49% 49% 8px 8px" }} />
      <div className="absolute right-10 md:right-[70px] top-8 md:top-10 font-mono text-[9px] tracking-[0.1em]" style={{ color: "#376d56" }}>
        TECHNOLOGY WITH HUMAN OVERSIGHT
      </div>
      <div className="absolute right-[72px] md:right-[104px] top-[90px] md:top-[115px] w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full flex items-center justify-center"
        style={{ border: "1px solid #4d917545", color: "#2d6b52", boxShadow: "0 0 60px rgba(255,255,255,0.6)" }}>
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-12 h-12 md:w-14 md:h-14">
          <path d="M7 34h11l6-13 9 27 9-32 7 18h8" /><circle cx="32" cy="32" r="30" strokeOpacity=".25" />
        </svg>
      </div>
      <div className="relative z-10 w-[88%] md:w-[80%] p-5 md:p-6 mb-5"
        style={{ background: "#fffaf2", border: "1px solid #d9e2d4", boxShadow: "0 22px 45px rgba(35,75,48,0.09)" }}>
        <span className="block font-mono text-[9px] tracking-[0.1em] uppercase" style={{ color: p.muted }}>The human-in-the-loop approach</span>
        <h3 className="text-[19px] md:text-[22px] font-medium tracking-[-0.025em] leading-tight mt-3 mb-4">
          AI supports the process.<br />People provide judgement.
        </h3>
        <div className="flex flex-wrap gap-2.5 items-center font-mono text-[9px]" style={{ color: "#41644e" }}>
          <span className="pb-1.5" style={{ borderBottom: "1px solid #aec4b2" }}>AI-assisted work</span><b className="font-normal">→</b>
          <span className="pb-1.5" style={{ borderBottom: "1px solid #aec4b2" }}>Human review</span><b className="font-normal">→</b>
          <span className="pb-1.5" style={{ borderBottom: "1px solid #aec4b2" }}>Feedback</span>
        </div>
      </div>
      <span className="absolute right-3.5 -bottom-2 font-mono text-[10px] tracking-[0.04em]" style={{ color: "#517362" }}>
        A healthcare-led expression of xTransMatrix
      </span>
    </div>
  );
}

function HumanVisual() {
  return (
    <div className="relative h-[360px] md:h-[425px] p-6 md:p-7 overflow-hidden" style={{ background: "#252b21", color: "#eff3e8" }}>
      <div className="absolute rounded-full" style={{ width: 420, height: 420, border: "1px solid rgba(170,198,123,0.25)", top: 37, left: 27 }} />
      <div className="absolute rounded-full" style={{ width: 340, height: 340, border: "1px solid rgba(170,198,123,0.25)", top: 77, left: 67 }} />
      <div className="relative z-10 font-mono text-[9px] tracking-[0.1em]" style={{ color: "#b8c0aa" }}>xTRANSMATRIX / THE HUMAN ADVANTAGE</div>
      <div className="relative z-10 mt-8 font-semibold tracking-[-0.065em] leading-[0.97]" style={{ fontSize: "clamp(56px,6vw,88px)" }}>
        Human.<br /><span style={{ color: "#d1eb62" }}>+ AI.</span>
      </div>
      <div className="absolute right-4 top-[116px] font-mono text-[9px] tracking-[0.16em]" style={{ writingMode: "vertical-rl", color: "#a0af91" }}>
        CURIOUS MINDS. REAL-WORLD WORK.
      </div>
      <div className="absolute left-6 md:left-7 bottom-6 md:bottom-[34px] text-[11px] leading-[1.5] max-w-[150px]" style={{ color: "#b8c5ac" }}>
        Two kinds of intelligence.<br />One shared ambition.
      </div>
      <div className="absolute right-4 md:right-[29px] bottom-5 md:bottom-[27px] w-[78px] md:w-[93px] h-[78px] md:h-[93px] rounded-full flex items-center justify-center text-center text-[10px] md:text-[11px] leading-[1.3] z-10"
        style={{ background: "#d1eb62", color: "#293118", transform: "rotate(-12deg)" }}>
        THE<br />HUMAN<br />FRONTIER ↗
      </div>
    </div>
  );
}

const DIRECTIONS = {
  clinical: {
    num: "01",
    name: "Clinical Precision",
    p: CLINICAL,
    pill: true,
    grid: "md:grid-cols-[1.08fr_1fr]",
    eyebrow: "AI Operations / Healthcare & MedTech",
    h1: (<>Intelligent<br />operations.<br /><span style={{ color: CLINICAL.accent }}>Human care.</span></>),
    h1Size: "clamp(46px,5.4vw,80px)",
    h1Weight: 500,
    body: "Less friction in the process. More room for care. Bring human judgement, quality review and operational discipline to the workflows surrounding healthcare—from information preparation to coordinated follow-through.",
    ctas: ["Explore our healthcare focus →", "The operating model ↗"],
    visual: <ClinicalVisual p={CLINICAL} />,
  },
  human: {
    num: "03",
    name: "The Human Frontier",
    p: HUMAN,
    pill: false,
    grid: "md:grid-cols-[1.23fr_0.82fr]",
    eyebrow: "AI Operations, powered by people",
    h1: (<>A new generation.<br /><span style={{ color: "#5f7628" }}>An intelligent<br />future.</span></>),
    h1Size: "clamp(46px,5.8vw,88px)",
    h1Weight: 600,
    body: "The future of AI needs people who can question outputs, resolve exceptions and improve the way work gets done. Our ambition: turn a new generation of talent into a lasting advantage in AI operations.",
    ctas: ["Meet our AI Operations approach →", "Meet the human side ↗"],
    visual: <HumanVisual />,
  },
} as const;

export default function DirectionPage({ direction }: { direction?: string }) {
  const { id } = useParams<{ id: string }>();
  const which = direction ?? id;
  const key = which === "clinical" || which === "human" ? which : null;
  if (!key) return <Navigate to="/" replace />;

  const d = DIRECTIONS[key];
  const p = d.p;
  const other = key === "clinical" ? DIRECTIONS.human : DIRECTIONS.clinical;
  const otherPath = key === "clinical" ? "/human" : "/clinical";

  return (
    <div style={{ background: p.bg, color: p.text, fontFamily: "'Inter', -apple-system, sans-serif" }}>
      <div className="max-w-[1250px] mx-auto px-5 md:px-14">

        <div className="flex flex-wrap items-center justify-between gap-3 py-5 font-mono text-[9px] md:text-[10px] tracking-[0.16em] uppercase"
          style={{ borderBottom: `1px solid ${p.line}`, color: p.muted }}>
          <span>xTMX / Direction {d.num} — {d.name}</span>
          <Link to="/" className="hover:underline" style={{ color: p.accent }}>← 02 Intelligence in Motion</Link>
        </div>

        <div className={`grid grid-cols-1 ${d.grid} gap-12 md:gap-14 items-center py-14 md:py-20`}>
          <div>
            <Eyebrow p={p}>{d.eyebrow}</Eyebrow>
            <h1 className="tracking-[-0.065em] leading-[0.99]" style={{ fontSize: d.h1Size, fontWeight: d.h1Weight }}>{d.h1}</h1>
            <p className="leading-[1.65] mt-7 max-w-[470px] text-[14px] md:text-[15px]" style={{ color: p.muted }}>{d.body}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Btn p={p} primary pill={d.pill}>{d.ctas[0]}</Btn>
              <Btn p={p} pill={d.pill}>{d.ctas[1]}</Btn>
            </div>
          </div>
          {d.visual}
        </div>

        <div className="py-16 md:py-24" style={{ borderTop: `1px solid ${p.line}` }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[76px] items-start">
            <div>
              <Eyebrow p={p}>Human intelligence × Artificial intelligence</Eyebrow>
              <h2 className="tracking-[-0.05em] leading-[1.06] font-medium" style={{ fontSize: "clamp(34px,3.8vw,54px)" }}>
                Less friction.<br /><span style={{ color: p.accent }}>More human possibility.</span>
              </h2>
              <p className="leading-[1.65] mt-6 max-w-[480px] text-[14px] md:text-[15px]" style={{ color: p.muted }}>
                A world where AI-powered work earns trust—and gives people more time for what matters. That is the future we want to help build.
              </p>
            </div>
            <div style={{ borderTop: `1px solid ${p.line}` }}>
              {PRINCIPLES.map(pr => (
                <article key={pr.k} className="py-5" style={{ borderBottom: `1px solid ${p.line}` }}>
                  <span className="font-mono text-[9px] tracking-[0.18em] uppercase" style={{ color: p.accent }}>{pr.k}</span>
                  <h3 className="text-[20px] font-medium tracking-[-0.025em] mt-2 mb-2">{pr.t}</h3>
                  <p className="text-[13px] leading-[1.65] max-w-[460px]" style={{ color: p.muted }}>{pr.d}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 px-5 py-5 md:px-7 md:py-6" style={{ background: p.panel, border: `1px solid ${p.line}` }}>
            <span className="block font-mono text-[9px] tracking-[0.18em] uppercase mb-4" style={{ color: p.muted }}>Our proposed operating approach</span>
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[13px] md:text-sm font-medium">
              <span>AI platforms</span><b className="font-normal" style={{ color: p.muted }}>+</b>
              <span>xTMX operations</span><b className="font-normal" style={{ color: p.muted }}>+</b>
              <span>Client domain teams</span><b className="font-normal" style={{ color: p.muted }}>→</b>
              <strong className="font-semibold" style={{ color: p.accent }}>Accountable workflows</strong>
            </div>
            <p className="font-mono text-[10px] leading-[1.7] mt-4" style={{ color: p.muted }}>
              A service model to scope with each client—not a claim of integration with any named platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-14 pt-6" style={{ borderTop: `1px solid ${p.line}` }}>
            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.16em] uppercase" style={{ color: p.muted }}>Other directions</span>
            <div className="flex flex-wrap gap-3">
              <Link to={otherPath}><Btn p={p} pill={d.pill}>{other.num} · {other.name} ↗</Btn></Link>
              <Link to="/"><Btn p={p} primary pill={d.pill}>02 · Intelligence in Motion ↗</Btn></Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
