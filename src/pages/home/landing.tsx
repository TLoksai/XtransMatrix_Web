import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TeamSection from "./team";

const BLUE = "#1A6BFF";
const ORANGE = "#FF7A5C";

const CASES = [
  { id: 1, client: "Salonkee", svc: "image", badge: "b-saas", industry: "SaaS & Platforms", title: "Smart Ticket Intelligence for Digital Platforms", challenge: "Thousands of unstructured support requests across bookings, payments and subscriptions with no way to detect trends or extract operational insight at scale.", caps: ["Data Annotation", "Data Validation", "HITL Pipelines", "Trend Analysis", "Data Structuring"], metrics: [{ n: "100%", l: "Ticket Coverage" }, { n: "4×", l: "Faster Triage" }, { n: "0", l: "Data Loss" }], impacts: ["Structured datasets enabling operational intelligence", "Faster identification of recurring platform issues", "Improved internal reporting and analytics capabilities", "Better visibility into customer interaction patterns"], steps: [{ t: "Data Annotation", d: "Categorizing support tickets into standardized issue types across bookings, payments, subscriptions." }, { t: "Data Validation", d: "Verifying accuracy, removing duplicates, normalizing records for downstream analysis." }, { t: "Data Evaluation", d: "Reviewing tagged datasets for consistency and quality throughout the pipeline." }, { t: "Data Structuring", d: "Preparing analytics-ready datasets for reporting and trend analysis workflows." }] },
  { id: 2, client: "Moultrie", svc: "image", badge: "b-iot", industry: "IoT & Hardware", title: "Customer Feedback Intelligence for IoT Ecosystems", challenge: "Large volumes of fragmented feedback across connected devices, apps and subscriptions made it impossible to identify product quality concerns or early churn signals.", caps: ["Feedback Annotation", "Sentiment Analysis", "Data Curation", "Churn Detection"], metrics: [{ n: "↑60%", l: "Signal Visibility" }, { n: "Early", l: "Churn Detection" }, { n: "AI-Ready", l: "Output" }], impacts: ["Improved visibility into product and app performance signals", "Early detection of customer dissatisfaction and churn indicators", "Better insights for product roadmap improvements", "Data foundation ready for advanced AI models"], steps: [{ t: "Data Annotation", d: "Categorizing feedback across hardware, app experience, subscriptions, and sentiment dimensions." }, { t: "Data Validation", d: "Cleaning inconsistent records and standardizing product identifiers." }, { t: "Data Evaluation", d: "Reviewing labeled datasets for tagging accuracy and consistency." }, { t: "Insight Structuring", d: "Preparing structured datasets for product teams with clear taxonomies." }] },
  { id: 3, client: "Holland & Barrett", svc: "video", badge: "b-retail", industry: "Retail & Commerce", title: "Customer Experience Intelligence for Retail Operations", challenge: "Customer interactions across orders, deliveries, payments and digital platforms created fragmented operational data — making it impossible to monitor quality or logistics issues at scale.", caps: ["Interaction Annotation", "Logistics Tagging", "Quality Monitoring", "Operational Intelligence"], metrics: [{ n: "↑3×", l: "Issue Visibility" }, { n: "Multi", l: "Domain Coverage" }, { n: "Real-time", l: "Insights" }], impacts: ["Clear visibility into delivery, refund, and order management issues", "Improved monitoring of product quality and safety feedback", "Stronger alignment between logistics, product, and digital teams", "Data-driven insights enabling operational improvements"], steps: [{ t: "Data Annotation", d: "Categorizing interactions across logistics, payments, product quality, and digital platforms." }, { t: "Data Validation", d: "Cleaning incomplete records and standardizing terminology across datasets." }, { t: "Data Evaluation", d: "Reviewing tagged data through blind evaluation rounds." }, { t: "Data Structuring", d: "Preparing datasets for internal analytics and reporting KPIs." }] },
  { id: 4, client: "Global AI Program", svc: "audio", badge: "b-media", industry: "Media & Entertainment", featured: true, title: "AI-Ready Dialogue Annotation for Movie & TV Audio Data", challenge: "Multi-speaker movie and TV audio with overlapping dialogue, background noise, emotion variation, non-standard speech and precise timestamp alignment — too complex for standard pipelines.", caps: ["Speaker Diarization", "Emotion Detection", "Audio Segmentation", "Speech Transcription", "HITL QA"], metrics: [{ n: ">98%", l: "Segmentation Acc." }, { n: ">95%", l: "Speaker Accuracy" }, { n: ">90%", l: "Transcription Acc." }], impacts: ["Improved speech recognition model training across multi-speaker contexts", "More accurate multi-speaker conversation detection for production models", "Enhanced emotion recognition via fine-grained labeling", "High-quality dialogue datasets for conversational AI systems"], steps: [{ t: "Data Validation", d: "Audio clarity, language verification, noise thresholds, overlap percentage — only quality data advances." }, { t: "Speaker Identification", d: "Segmentation, ID assignment, character ID with gender, age, and frequency tagging." }, { t: "Emotion Detection", d: "Eight-class labeling: neutral, angry, happy, sad, surprised, scared, disgusted, other." }, { t: "Speech Event Tagging", d: "Laughs, coughs, sighs, gasps, stuttering, filler words, and slang classification." }, { t: "Precision Segmentation", d: "Timestamp-level segmentation for speaker changes, emotional shifts, and overlapping dialogue." }, { t: "Multi-Stage QA", d: "100% first-pass review, blind secondary eval, 20% sampling audits, continuous feedback loops." }] },
  { id: 5, client: "Global AI Data Program", svc: "audio", badge: "b-ai", industry: "AI / Speech AI", title: "Speech AI Data Annotation & Evaluation Pipeline", challenge: "Large-scale conversational audio with multi-speaker dialogues, AI-generated speech, background noise, and inconsistent transcripts failing quality thresholds for model training.", caps: ["ASR Annotation", "Speaker Tagging", "Confidence Scoring", "Dataset Benchmarking", "Anomaly Detection"], metrics: [{ n: "Scale", l: "Production Pipeline" }, { n: "HITL", l: "Validation Layer" }, { n: "ASR", l: "Model-Ready" }], impacts: ["High-quality training datasets for speech recognition and conversational AI", "Accurate multi-speaker conversational annotations at production scale", "Improved dataset reliability through HITL validation workflows", "Scalable data pipelines supporting speech AI development"], steps: [{ t: "Speech Data Annotation", d: "Multi-speaker segmentation, speaker ID, role tagging, emotion classification, verbatim transcription." }, { t: "Data Validation", d: "Quality checks for segmentation, speaker attributes, emotional classification, consistency audits." }, { t: "Data Evaluation", d: "Confidence scoring, transcription benchmarking, AI-generated speech detection, structured preparation for model training." }] },
  { id: 6, client: "Robotics AI Program", svc: "robotics", badge: "b-robotics", industry: "Robotics & Physical AI", title: "3D Sensor Fusion Annotation for Autonomous Systems", challenge: "Large-scale LIDAR and multi-sensor robotics datasets with complex 3D point clouds, sensor fusion requirements and precise spatial annotation — too demanding for standard image-based pipelines.", caps: ["3D Point Cloud Annotation", "Sensor Fusion", "LIDAR Labeling", "MCAP Processing", "HITL QA"], metrics: [{ n: ">97%", l: "3D Accuracy" }, { n: "Multi", l: "Sensor Fusion" }, { n: "MCAP", l: "Native Format" }], impacts: ["High-quality 3D annotated datasets for autonomous navigation models", "Accurate sensor fusion labeling across LIDAR, camera and IMU inputs", "Scalable annotation pipelines built for physical AI development", "Production-grade spatial datasets enabling robotics model training"], steps: [{ t: "Data Ingestion", d: "MCAP-native ingestion of multi-sensor robotics data including LIDAR, RGB camera and IMU streams." }, { t: "3D Point Cloud Annotation", d: "Precise 3D bounding box and segmentation labeling across dynamic and static scene elements." }, { t: "Sensor Fusion Alignment", d: "Temporal and spatial alignment of annotations across all sensor modalities." }, { t: "HITL Validation", d: "Human-in-the-loop quality review ensuring spatial accuracy and consistency across all frames." }] }
 ];

function HeroCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    let rafId, tick = 0, rotX = 0, rotY = 0, mouseX = 0, mouseY = 0;
    const N = 700;
    let dots = [], W = 0, H = 0;

    function resize() {
      if (!c || c.offsetWidth <= 0 || c.offsetHeight <= 0) return;
      W = c.width = c.offsetWidth;
      H = c.height = c.offsetHeight;
      buildDots();
    }
    function buildDots() {
      if (W <= 0 || H <= 0) return;
      dots = [];
      const cx = W * 0.62, cy = H * 0.48, R = Math.min(W, H) * 0.26;
      const phi = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < N; i++) {
        const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), theta = phi * i;
        dots.push({ ox: r * Math.cos(theta) * R, oy: y * R, oz: r * Math.sin(theta) * R,
          r: Math.random() * 1.2 + 0.4, baseA: (0.3 + r * Math.sin(theta) * 0.5) * (0.7 + Math.random() * 0.3), cx, cy });
      }
    }
    resize();
    const onResize = () => resize();
    const onMouse = e => { mouseX = e.clientX; mouseY = e.clientY; };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse, { passive: true });

    function draw() {
      if (!W || !H) { rafId = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W, H);
      tick++;
      ctx.strokeStyle = "rgba(26,107,255,0.04)"; ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += 72) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += 72) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      const tx = ((mouseY / H) - 0.5) * 0.4, ty = ((mouseX / W) - 0.5) * 0.4 + tick * 0.0008;
      rotX += (tx - rotX) * 0.03; rotY += (ty - rotY) * 0.03;
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX), cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cx = W * 0.62, cy = H * 0.48;
      const proj = dots.map(d => {
        let x = d.ox, y = d.oy, z = d.oz;
        const nx = x * cosY + z * sinY, nz = -x * sinY + z * cosY; x = nx; z = nz;
        const ny = y * cosX - z * sinX, nz2 = y * sinX + z * cosX; y = ny; z = nz2;
        const depth = (z + 1) / 2;
        const radius = Math.max(0.1, d.r * (0.5 + depth * 0.5));
        return { sx: cx + x, sy: cy + y, z, depth, r: radius, a: d.baseA * (0.3 + depth * 0.6) };
      }).sort((a, b) => a.z - b.z);
      proj.forEach(p => { ctx.beginPath(); ctx.arc(p.sx, p.sy, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(200,210,255,${p.a * 0.5})`; ctx.fill(); });
      rafId = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(rafId); window.removeEventListener("resize", onResize); window.removeEventListener("mousemove", onMouse); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

function CtaCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d");
    let W = 0, H = 0, rafId;
    const nodes = Array.from({ length: 35 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.0002, vy: (Math.random() - 0.5) * 0.0002 }));
    function resize() {
      const r = c.parentElement?.getBoundingClientRect();
      if (!r) return;
      W = c.width = r.width || 280;
      H = c.height = r.height || 160;
    }
    resize();
    window.addEventListener("resize", resize);
    function draw() {
      if (!W || !H || W <= 0 || H <= 0) { rafId = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W, H);
      nodes.forEach(n => { n.x += n.vx; n.y += n.vy; if (n.x < 0 || n.x > 1) n.vx *= -1; if (n.y < 0 || n.y > 1) n.vy *= -1; });
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const dx = (nodes[i].x - nodes[j].x) * W, dy = (nodes[i].y - nodes[j].y) * H, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 200) { ctx.strokeStyle = `rgba(26,107,255,${(1 - d / 200) * 0.12})`; ctx.lineWidth = 0.5; ctx.beginPath(); ctx.moveTo(nodes[i].x * W, nodes[i].y * H); ctx.lineTo(nodes[j].x * W, nodes[j].y * H); ctx.stroke(); }
      }
      nodes.forEach(n => { ctx.beginPath(); ctx.arc(n.x * W, n.y * H, 1.5, 0, Math.PI * 2); ctx.fillStyle = "rgba(26,107,255,0.3)"; ctx.fill(); });
      rafId = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(rafId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

function CardCanvas({ id }: { id: string }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const p = c.parentElement;
    c.width = p.offsetWidth || 280; c.height = p.offsetHeight || 160;
    const ctx = c.getContext("2d"), W = c.width, H = c.height;
    if (W <= 0 || H <= 0) return;
    let t = 0, rafId;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      if (id === "hc1") {
        const cols = Math.floor(W / 12), rows = Math.floor(H / 12);
        for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
          const w = Math.sin(i * 0.3 + j * 0.3 + t) * 0.5 + 0.5;
          const radius = Math.max(0.1, w * 2.5 + 0.3);
          ctx.beginPath(); ctx.arc(i * 12 + 6, j * 12 + 6, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100,160,255,${w * 0.6 + 0.1})`; ctx.fill();
        }
      } else if (id === "hc2") {
        for (let k = 0; k < 5; k++) {
          ctx.beginPath();
          for (let x = 0; x <= W; x += 2) {
            const y = H / 2 + Math.sin(x * 0.025 + t + k * 0.6) * ((k + 1) * 14) * Math.sin(x * 0.005 + t * 0.3);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(150,190,255,${0.12 + k * 0.06})`; ctx.lineWidth = 1.2; ctx.stroke();
        }
      } else if (id === "hc3") {
        const cx = W / 2, cy = H / 2;
        for (let i = 0; i < 60; i++) {
          const a = (i / 60) * Math.PI * 2, r1 = 30 + Math.sin(t + i * 0.2) * 8, r2 = 60 + Math.cos(t * 0.7 + i * 0.15) * 20 + i * 0.8;
          ctx.strokeStyle = `rgba(100,150,255,${0.05 + Math.sin(t + i * 0.1) * 0.04})`; ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1); ctx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2); ctx.stroke();
        }
      } else if (id === "hc4") {
        const bars = 36, bw = (W - 40) / bars;
        for (let i = 0; i < bars; i++) {
          const h = Math.max(4, (Math.sin(i * 0.3 + t) * Math.sin(i * 0.1 + t * 0.7) + 1) * H * 0.3 + 4);
          ctx.fillStyle = `rgba(130,180,255,${0.2 + Math.abs(Math.sin(i * 0.3 + t)) * 0.5})`;
          ctx.fillRect(20 + i * bw, (H - h) / 2, bw * 0.7, h);
        }
      }
      t += id === "hc4" ? 0.04 : id === "hc3" ? 0.012 : id === "hc2" ? 0.015 : 0.025;
      rafId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(rafId);
  }, [id]);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />;
}

function BBtn({ href = "#", children, dim, style, external }: { href?: string; children: React.ReactNode; dim?: boolean; style?: React.CSSProperties; external?: boolean }) {
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={`inline-flex items-center gap-0 font-mono text-xs font-medium tracking-widest uppercase no-underline text-white transition-colors hover:text-blue-400 ${dim ? "opacity-60" : ""}`} style={style}>
      <span className="text-blue-500 text-sm transition-transform">⌈</span>
      <span className="border-t border-b border-blue-900 px-4 py-2.5">{children}</span>
      <span className="text-blue-500 text-sm transition-transform">⌋</span>
    </a>
  );
}

function useReveal() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref as React.LegacyRef<HTMLDivElement>} className={`transition-all duration-700 ease-out ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function SLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[12px] tracking-[0.22em] uppercase text-blue-500 mb-5">
      <span className="w-5 h-px bg-blue-500" />{children}
    </div>
  );
}


const DIRECTION_LINKS = [
  { num: "01", name: "Clinical Precision",  desc: "Calm precision and a healthcare-led editorial composition.", to: "/clinical", swatch: ["#f2f6f3", "#197767", "#16372f"] },
  { num: "03", name: "The Human Frontier",  desc: "A distinctive, human editorial expression of the brand.",    to: "/human",    swatch: ["#eaeae1", "#d1eb62", "#445822"] },
];

const OPS_NODES = [
  { n: "01", t: "Train",     pos: "top-[15px] left-[22%]" },
  { n: "02", t: "Evaluate",  pos: "top-[70px] right-0" },
  { n: "03", t: "Operate",   pos: "bottom-[25px] right-[6%]" },
  { n: "04", t: "Supervise", pos: "bottom-[25px] left-[2%]" },
  { n: "05", t: "Improve",   pos: "top-[83px] left-[-3%]" },
];

const PRINCIPLES = [
  { k: "01 / Outcome",       t: "Beyond a completed task.",              d: "Connect the hand-offs, reviews and follow-through that make the whole workflow useful." },
  { k: "02 / Accountability", t: "Human judgement. Clear ownership.",     d: "Define who reviews, who resolves and when a qualified domain expert must take over." },
  { k: "03 / Progress",      t: "Improve the system—not just the volume.", d: "Learn from approved feedback. Reduce avoidable rework. Make quality visible as AI changes." },
];

function OperatingModel() {
  return (
    <div className="relative">
      <div className="relative p-4 md:p-6 border border-blue-950 shadow-[0_25px_100px_rgba(3,6,16,0.6)]" style={{ background: "linear-gradient(150deg,rgba(12,15,26,0.92),rgba(6,8,14,0.94))" }}>
        <div className="flex justify-between items-center gap-3 pb-4 border-b border-blue-950 font-mono text-[9px] tracking-[0.16em] uppercase text-gray-500">
          <span className="flex items-center gap-2"><span className="inline-block w-[5px] h-[5px] rounded-full bg-blue-500" />xTMX / Operating model</span>
          <span>Concept illustration</span>
        </div>
        <div className="relative h-[232px] my-2" style={{ backgroundImage: "radial-gradient(rgba(26,107,255,0.22) 1px, transparent 1px)", backgroundSize: "18px 18px" }}>
          <div className="absolute w-[220px] h-[220px] top-3 left-1/2 -translate-x-1/2 rounded-full border border-blue-500/20" />
          <div className="absolute w-[160px] h-[160px] top-[42px] left-1/2 -translate-x-1/2 rounded-full border border-dashed border-blue-500/20" />
          <div className="absolute z-20 left-1/2 top-[78px] -translate-x-1/2 w-[156px] h-[90px] flex flex-col items-center justify-center border border-blue-500/40 shadow-[0_0_60px_rgba(26,107,255,0.16)]" style={{ background: "linear-gradient(135deg,#111626,#0C0F1A)" }}>
            <strong className="text-[25px] font-extrabold tracking-[-0.045em] leading-none">AI + Human</strong>
            <small className="font-mono text-[7.5px] tracking-[0.14em] uppercase text-blue-500 mt-2">Intelligence in operation</small>
          </div>
          {OPS_NODES.map(nd => (
            <div key={nd.n} className={`absolute z-30 flex items-center gap-2 px-3 py-2 text-[10px] leading-none border border-blue-950 bg-[#0C0F1A] ${nd.pos}`}>
              <span className="font-mono text-[8px] text-blue-500">{nd.n}</span>{nd.t}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 p-3.5 border border-blue-950 bg-[#0C0F1A]">
          <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7 shrink-0 text-blue-500"><path d="m16 3 11 5v8c0 8-11 13-11 13S5 24 5 16V8L16 3Z" /><path d="m10 16 4 4 8-9" /></svg>
          <div>
            <strong className="block text-xs font-semibold tracking-tight">Human judgement, built into the loop.</strong>
            <small className="block font-mono text-[9px] tracking-wide text-gray-500 mt-1">Review → Resolve → Record → Improve</small>
          </div>
        </div>
      </div>
      <div className="absolute -right-2 md:-right-4 -bottom-5 px-4 py-3 max-w-[240px] font-mono text-[9px] leading-relaxed text-white shadow-[0_9px_30px_rgba(3,6,16,0.55)]" style={{ background: BLUE }}>
        <b className="block font-sans text-xs font-bold tracking-tight mb-0.5">Healthcare &amp; MedTech</b>
        Reliable workflows. More room for care. ↗
      </div>
    </div>
  );
}


const CARDS = [
  { id:"hc1", num:"01/04", title:"Robotics &\nPhysical AI", desc:"MCAP-native · LiDAR · Sensor fusion · 3D point clouds", bg:"bg-[#0C0F1A] border border-blue-950", link:"/robotics" },
  { id:"hc2", num:"02/04", title:"Image\nAnnotation", desc:"Bounding boxes · Segmentation · Keypoints · COCO · YOLO", bg:"bg-blue-800", link:"/image" },
  { id:"hc3", num:"03/04", title:"Video\nIntelligence", desc:"MOT · Action recognition · Egocentric · 8–12 cam sync", bg:"bg-[#0a1628]", link:"/video" },
  { id:"hc4", num:"04/04", title:"Audio &\nSpeech AI", desc:"ASR · Diarization · Emotion · 15+ languages · IPA", bg:"bg-blue-950/30 border border-blue-800/40", link:"/audio" },
];

const MODS = [
  { n:"01", title:"Robotics &\nPhysical AI", desc:"MCAP-native workflows, real-time sensor fusion, and high-fidelity multimodal annotation built for autonomous systems.", path: "/robotics" },
  { n:"02", title:"Image\nAnnotation", desc:"Bounding boxes, segmentation masks, keypoints — precision pipelines that scale from pilot to millions of images.", path: "/image" },
  { n:"03", title:"Video\nIntelligence", desc:"Multi-object tracking, action segmentation, egocentric video, synchronized multi-camera streams.", path: "/video" },
  { n:"04", title:"Audio &\nSpeech", desc:"ASR, phoneme tagging, speaker diarization, emotion and prosody modeling — 15+ languages at IPA-level precision.", path: "/audio" },
];

const CMP = [
  ["Annotation workflow","Rigid","Fully custom"],
  ["Data types","2D only","3D + LiDAR + Fusion"],
  ["Export formats","Locked","Open / custom"],
  ["Workforce","Crowd","Domain specialists"],
  ["QA validation","Basic","Multi-layer"],
  ["Pricing","Expensive","Scale-efficient"],
];

 const QA = [
   ["01","AI Pre-annotation","Speeds throughput without sacrificing precision. Machine-assisted first pass at scale."],
   ["02","Expert Review","Domain-trained annotators — not generalist crowd workers. Industry-specific expertise on every task."],
   ["03","Blind Evaluation","A full second-pass review catches what first-pass misses. Every frame, segment, and alignment cross-checked."],
   ["04","IAA Scoring","Inter-annotator agreement thresholds enforced per task type. Automatic rejection below threshold."],
 ];

 const LOGO_ITEMS = [
   "https://ik.imagekit.io/lrxrnuqog/stimuler_logo.jpeg",
   "https://ik.imagekit.io/lrxrnuqog/Partners_logos/brand-tcl.webp?updatedAt=1754371941672",
   "https://ik.imagekit.io/lrxrnuqog/Partners_logos/4.png?updatedAt=1753248687775",
   "https://ik.imagekit.io/lrxrnuqog/Partners_logos/3.png?updatedAt=1753248687883",
   "https://ik.imagekit.io/lrxrnuqog/Our_Partners/5.png?updatedAt=1753248824590",
   "https://ik.imagekit.io/lrxrnuqog/Our_Partners/4.png?updatedAt=1753248824972",
   "https://ik.imagekit.io/lrxrnuqog/9.png",
   "https://ik.imagekit.io/lrxrnuqog/8.png",
   "https://ik.imagekit.io/lrxrnuqog/6.png",
   "https://ik.imagekit.io/lrxrnuqog/10.png",
   "https://ik.imagekit.io/lrxrnuqog/7.png",
   "https://ik.imagekit.io/lrxrnuqog/5.png",
   "https://ik.imagekit.io/lrxrnuqog/3.png",
   "https://ik.imagekit.io/lrxrnuqog/4.png",
   "https://ik.imagekit.io/lrxrnuqog/Partners_logos/4.png?updatedAt=1753248687775",
   "https://ik.imagekit.io/lrxrnuqog/Our_Partners/5.png?updatedAt=1753248824590",
   "https://ik.imagekit.io/lrxrnuqog/Our_Partners/4.png?updatedAt=1753248824972"
 ];

 function CaseStudiesSection() {
  const [filter, setFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<typeof CASES[0] | null>(null);

  const filteredCases = filter === "all" ? CASES : CASES.filter(c => c.svc === filter);

  const openModal = (c: typeof CASES[0]) => { setSelectedCase(c); setModalOpen(true); document.body.style.overflow = "hidden"; };
  const closeModal = () => { setModalOpen(false); setSelectedCase(null); document.body.style.overflow = ""; };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const badgeColors: Record<string, string> = {
    "b-saas": "bg-[rgba(138,180,255,0.08)] border-[rgba(138,180,255,0.2)] text-[#8AB4FF]",
    "b-iot": "bg-[rgba(163,136,238,0.07)] border-[rgba(163,136,238,0.2)] text-[#C4ADFF]",
    "b-retail": "bg-[rgba(255,122,92,0.07)] border-[rgba(255,122,92,0.2)] text-[#FF9E88]",
    "b-media": "bg-[rgba(93,202,165,0.07)] border-[rgba(93,202,165,0.2)] text-[#5DCAA5]",
    "b-ai": "bg-[rgba(26,107,255,0.1)] border-[rgba(26,107,255,0.22)] text-[#8AB4FF]",
    "b-robotics": "bg-[rgba(255,200,80,0.07)] border-[rgba(255,200,80,0.2)] text-[#FFD166]",
  };

  return (
    <section id="cases" className="py-20 px-4 md:px-10">
      <div className="max-w-[1300px] mx-auto">
        <Reveal><div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-blue-500 mb-5"><span className="w-5 h-px bg-blue-500" />02 — Case Studies</div></Reveal>
        <Reveal delay={100}><h2 className="font-black tracking-tight uppercase leading-[0.95] mb-12" style={{ fontSize: "clamp(36px,4vw,64px)" }}>Real impact.<br /><span className="text-blue-500">Proven results.</span></h2></Reveal>
      </div>
      <div className="flex flex-wrap gap-2 mb-9 px-4 max-w-[1300px] mx-auto">
        {[
          { label: "All Cases", tag: "all" },
          { label: "Robotics & Physical AI", tag: "robotics" },
          { label: "Image Annotation", tag: "image" },
          { label: "Video Intelligence", tag: "video" },
          { label: "Audio & Speech", tag: "audio" }
        ].map(btn => (
          <button key={btn.tag} onClick={() => setFilter(btn.tag)} className={`font-mono text-[9px] font-bold tracking-[0.14em] uppercase px-4 py-2 bg-transparent border border-[#2A2F42] text-[#5A6278] cursor-pointer transition-all duration-250 hover:border-blue-500/50 hover:text-blue-300 ${filter === btn.tag ? "bg-blue-500/10 border-blue-500/50 text-blue-400" : ""}`}>
            {btn.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] px-4 max-w-[1300px] mx-auto">
        {filteredCases.map((c, i) => (
          <div key={c.id} onClick={() => openModal(c)} className={`bg-[#0C0F1A] border border-blue-500/20 p-8 relative overflow-hidden cursor-pointer transition-all duration-400 hover:bg-[#111626] hover:border-blue-500/40 ${c.featured ? "md:col-span-2" : ""}`} style={{ animationDelay: `${i * 90}ms` }}>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(26,107,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,107,255,0.03)_1px,transparent_1px)] bg-[28px_28px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 scale-x-0 origin-left transition-transform duration-500 hover:scale-x-100" />
            <div className="relative z-10">
              <div className="font-mono text-[9px] tracking-[0.18em] text-[#5A6278] mb-4">{c.client}</div>
              <div className={`inline-flex items-center gap-1.5 font-mono text-[9px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-4 ${badgeColors[c.badge]}`}>
                {c.industry}
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.16em] uppercase text-blue-500 mb-2">
                <span className="w-2.5 h-px bg-blue-500" />{c.client}
              </div>
              <div className="font-black tracking-tight uppercase leading-tight mb-3" style={{ fontSize: "clamp(16px,1.6vw,21px)" }}>{c.title}</div>
              <div className="font-mono text-[10px] text-[#A0A8BC] leading-relaxed tracking-[0.03em] uppercase mb-5 line-clamp-2">{c.challenge.substring(0, 130)}{c.challenge.length > 130 ? "…" : ""}</div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {c.caps.map((cap, j) => (
                  <span key={j} className="font-mono text-[8px] tracking-[0.1em] uppercase px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-[#5A6278]">{cap}</span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-0.5 mb-5">
                {c.metrics.map((m, k) => (
                  <div key={k} className="bg-blue-500/10 border border-blue-500/20 p-3 text-center">
                    <div className="font-black tracking-tight text-blue-300" style={{ fontSize: "18px" }}>{m.n}</div>
                    <div className="font-mono text-[7px] tracking-[0.1em] uppercase text-[#5A6278] mt-1">{m.l}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {c.impacts.slice(0, 3).map((impact, l) => (
                  <div key={l} className="flex items-start gap-2 font-mono text-[9px] text-[#E2E5EF] tracking-[0.03em] leading-relaxed">
                    <span className="w-0.75 h-0.75 rounded-full bg-blue-500 flex-shrink-0 mt-1" />
                    <span>{impact}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-7 right-7 text-xl text-[#2A2F42] transition-all duration-300 hover:text-blue-500 hover:translate-x-0.5 hover:-translate-y-0.5">↗</div>
          </div>
        ))}
      </div>

      {modalOpen && selectedCase && (
        <>
          <div className="fixed inset-0 z-[9000] bg-black/80 backdrop-blur-md opacity-0 transition-opacity duration-300" onClick={closeModal} />
          <div className="fixed top-1/2 left-1/2 z-[9001] w-[min(860px,92vw)] max-h-[88vh] overflow-y-auto bg-[#0C0F1A] border border-blue-500/40 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-400" style={{ transform: "translate(-50%, -50%)" }}>
            <div className="sticky top-0 z-10 flex justify-end bg-[#0C0F1A] p-4 pt-6 border-b border-blue-500/20">
              <button onClick={closeModal} className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#5A6278] bg-transparent border border-[#2A2F42] px-4 py-1.5 cursor-pointer transition-all duration-200 hover:text-white hover:border-[#A0A8BC]">✕ Close</button>
            </div>
            <div className="p-10 md:p-14">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className={`inline-flex items-center gap-1.5 font-mono text-[9px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 ${badgeColors[selectedCase.badge]}`}>{selectedCase.industry}</span>
                <span className="font-mono text-[8px] tracking-[0.16em] text-[#5A6278]">{selectedCase.client}</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] uppercase text-blue-500 mb-2">
                <span className="w-3.5 h-px bg-blue-500" />{selectedCase.client}
              </div>
              <div className="font-black tracking-tight uppercase leading-[0.95] mb-3" style={{ fontSize: "clamp(22px,3vw,38px)" }}>{selectedCase.title}</div>
              <div className="h-6" />
              <div className="mb-7">
                <div className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-blue-500 mb-3.5 flex items-center gap-2 pb-2.5 border-b border-blue-500/20">
                  <span className="w-3 h-px bg-blue-500" />The Challenge
                </div>
                <div className="font-mono text-[10px] text-[#E2E5EF] leading-relaxed tracking-[0.03em] uppercase">{selectedCase.challenge}</div>
              </div>
              <div className="mb-7">
                <div className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-blue-500 mb-3.5 flex items-center gap-2 pb-2.5 border-b border-blue-500/20">
                  <span className="w-3 h-px bg-blue-500" />Our Approach
                </div>
                <div className="flex flex-col gap-0.5">
                  {selectedCase.steps.map((s, idx) => (
                    <div key={idx} className="grid grid-cols-[24px_1fr] gap-3.5 bg-blue-500/10 border border-blue-500/20 p-3.5">
                      <div className="font-mono text-[10px] font-bold text-blue-400">{`0${idx + 1}`}</div>
                      <div>
                        <div className="font-bold text-[12px] text-white mb-1">{s.t}</div>
                        <div className="font-mono text-[9px] text-[#A0A8BC] leading-relaxed tracking-[0.03em] uppercase">{s.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-7">
                <div className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-blue-500 mb-3.5 flex items-center gap-2 pb-2.5 border-b border-blue-500/20">
                  <span className="w-3 h-px bg-blue-500" />Quality Benchmarks
                </div>
                <div className="grid grid-cols-3 gap-0.5 mb-5">
                  {selectedCase.metrics.map((m, mi) => (
                    <div key={mi} className="bg-blue-500/20 border border-blue-500/40 p-4 text-center">
                      <div className="font-black tracking-tight" style={{ fontSize: "26px" }}>{m.n}</div>
                      <div className="font-mono text-[7px] tracking-[0.12em] uppercase text-[#A0A8BC] mt-1">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-7">
                <div className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-blue-500 mb-3.5 flex items-center gap-2 pb-2.5 border-b border-blue-500/20">
                  <span className="w-3 h-px bg-blue-500" />Impact
                </div>
                <div className="flex flex-col gap-1.5">
                  {selectedCase.impacts.map((imp, ii) => (
                    <div key={ii} className="flex gap-2.5 bg-blue-500/10 border-l-2 border-blue-500 p-2.5 font-mono text-[9px] text-[#E2E5EF] tracking-[0.03em] leading-relaxed">
                      <span className="w-0.75 h-0.75 rounded-full bg-blue-500 flex-shrink-0 mt-1" />{imp}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-7 pt-5 border-t border-blue-500/20">
                <div className="font-mono text-[8px] tracking-[0.16em] uppercase text-[#5A6278] mb-2.5">Key Capabilities</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCase.caps.map((cap, ci) => (
                    <span key={ci} className="font-mono text-[8px] tracking-[0.1em] uppercase px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-[#5A6278]">{cap}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default function LandingPage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % MODS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: "#06080E", fontFamily: "Inter, -apple-system, sans-serif" }}>
<style>{`
          *{box-sizing:border-box;margin:0;padding:0;}
          body{background:#06080E;}
          a{text-decoration:none;}
          ::-webkit-scrollbar{width:4px;}
          ::-webkit-scrollbar-track{background:#06080E;}
          ::-webkit-scrollbar-thumb{background:#1A6BFF44;border-radius:2px;}
           @media (max-width: 768px) {
             #hero { padding-top: 80px !important; }
             .hero-btn-container { justify-content: center !important; }
             .hero-powered-link { flex-direction: column !important; gap: 4px !important; }
             .cards-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
             .cards-scroll > a { width: 280px !important; min-width: 280px; }
             .cards-scroll > a:hover { width: 360px !important; }
             .modalities-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
             .quality-grid { grid-template-columns: 1fr !important; }
             .platform-grid { grid-template-columns: 1fr !important; }
             .cta-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
             .deliver-box { flex-direction: column !important; text-align: center !important; gap: 16px !important; padding: 20px !important; }
             .deliver-box > div { width: 100% !important; }
             .deliver-box .text { font-size: 20px !important; }
             .deliver-box .subtext { font-size: 10px !important; }
             .numbers-grid { grid-template-columns: 1fr 1fr !important; }
             .numbers-grid > div { padding: 16px 12px !important; }
             .numbers-grid .card { padding: 20px 16px !important; }
             .qa-card { padding: 20px !important; }
             .qa-card .qa-num { font-size: 36px !important; }
             .qa-card .qa-title { font-size: 16px !important; }
             .qa-card .qa-desc { font-size: 11px !important; }
             .numbers-grid .num { font-size: 24px !important; }
             .numbers-grid .label { font-size: 8px !important; }
             .numbers-grid .item { padding: 20px 12px !important; }
             .aitank-grid { grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
             .aitank-grid > div { padding: 16px 12px !important; }
             .aitank-tags { font-size: 9px !important; }
             .aitank-tags strong { font-size: 11px !important; }
             #catalysts .team-row {
               display: flex !important;
               flex-direction: column !important;
               gap: 16px !important;
             }
             #catalysts .team-row > div {
               width: 100% !important;
               max-width: 100% !important;
             }
             #catalysts {
               padding: 48px 16px !important;
             }
           }
             @media (max-width: 480px) {
               .hero-stats { display: none !important; }
               .cta-container { padding: 24px !important; }
               #hero { padding-top: 40px !important; }
               #hero h1 { font-size: clamp(32px, 8vw, 42px) !important; }
               #hero .hero-subtitle { font-size: clamp(14px, 4vw, 18px) !important; }
               #hero .hero-desc { font-size: clamp(11px, 3vw, 13px) !important; }
               #hero .hero-powered-link { gap: 4px !important; }
               .hero-btn-container { margin-top: 1.5rem !important; }
               .cards-scroll > a { width: 260px !important; min-width: 260px; }
               .cards-scroll > a:hover { width: 300px !important; }
             }
        `}</style>
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        background: "radial-gradient(ellipse 90% 70% at 5% 0%,rgba(13,71,200,0.32) 0%,transparent 55%), radial-gradient(ellipse 50% 40% at 95% 15%,rgba(26,107,255,0.12) 0%,transparent 50%), radial-gradient(ellipse 60% 50% at 50% 100%,rgba(8,18,60,0.5) 0%,transparent 60%)"
      }} />

        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-8 pb-0">
          <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-[1.12fr_1fr] gap-12 md:gap-14 items-center py-10 md:min-h-[calc(100vh-180px)]">
              <div>
                <SLabel>The AI Operations Company</SLabel>
                <h1 className="font-black tracking-[-0.05em] leading-[0.94] uppercase" style={{ fontSize: "clamp(34px,4.3vw,58px)" }}>
                  <span className="block">Make AI work.</span>
                  <span className="block">In the <span className="text-blue-500">real world.</span></span>
                </h1>
                <p className="hero-desc text-gray-400 leading-relaxed mt-7 max-w-[480px]" style={{ fontSize: "clamp(13px,1.1vw,15px)" }}>
                  We bring human intelligence, AI engineering and operational discipline together to help teams run dependable AI-powered workflows—with clear ownership, thoughtful oversight and outcomes that matter to people.
                </p>
                <div className="flex gap-3 md:gap-4 flex-wrap mt-9 hero-btn-container">
                  <BBtn href="https://calendly.com/vishal-patil-xtransmatrix/30min" external style={{ fontSize: "12px" }}>Book Demo</BBtn>
                  <BBtn href="#hscroll" style={{ fontSize: "12px" }}>Explore AI Operations</BBtn>
                  <BBtn href="/medtech" dim style={{ fontSize: "12px" }}>Our healthcare focus ↗</BBtn>
                </div>
              </div>
              <OperatingModel />
            </div>
          </div>
        </section>

        <section id="purpose" className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-12 py-20 md:py-28 border-t border-blue-950">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[76px] items-start">
            <Reveal>
              <SLabel>Human intelligence × Artificial intelligence</SLabel>
              <h2 className="font-black tracking-tight uppercase leading-[0.95]" style={{ fontSize: "clamp(34px,3.9vw,56px)" }}>
                Less friction.<br /><span className="text-blue-500">More human possibility.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mt-6 max-w-[480px]" style={{ fontSize: "clamp(13px,1.1vw,15px)" }}>
                A world where AI-powered work earns trust—and gives people more time for what matters. That is the future we want to help build.
              </p>
              <div className="mt-12 pt-8 border-t border-blue-950 max-w-[480px]">
                <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-gray-600 mb-5">Two other directions</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DIRECTION_LINKS.map(d => (
                    <Link key={d.to} to={d.to} className="group block p-5 border border-blue-950 bg-[#0C0F1A] transition-colors hover:border-blue-800 hover:bg-[#111626]">
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-mono text-[9px] tracking-[0.18em] text-blue-500">{d.num}</span>
                        <span className="flex gap-1">{d.swatch.map(c => <span key={c} className="w-3.5 h-3.5 border border-white/10" style={{ background: c }} />)}</span>
                      </div>
                      <div className="mt-3 text-[15px] font-bold tracking-tight">{d.name}</div>
                      <div className="mt-1.5 text-[11px] leading-relaxed text-gray-500">{d.desc}</div>
                      <div className="mt-4 font-mono text-[9px] tracking-[0.16em] uppercase text-blue-500 flex items-center gap-1.5">
                        View direction <span className="inline-block transition-transform group-hover:translate-x-0.5">↗</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border-t border-blue-950">
                {PRINCIPLES.map(p => (
                  <article key={p.k} className="py-6 border-b border-blue-950">
                    <span className="font-mono text-[9px] font-medium tracking-[0.18em] uppercase text-blue-500">{p.k}</span>
                    <h3 className="text-xl font-bold tracking-tight mt-2.5 mb-2">{p.t}</h3>
                    <p className="text-[13px] text-gray-400 leading-relaxed max-w-[460px]">{p.d}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-10 p-5 md:px-7 md:py-6 border border-blue-950 bg-[#0C0F1A]">
              <span className="block font-mono text-[9px] tracking-[0.18em] uppercase text-gray-600 mb-4">Our proposed operating approach</span>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[13px] md:text-sm font-medium tracking-tight">
                <span>AI platforms</span><b className="font-normal text-blue-500">+</b>
                <span>xTMX operations</span><b className="font-normal text-blue-500">+</b>
                <span>Client domain teams</span><b className="font-normal text-blue-500">→</b>
                <strong className="font-bold text-blue-500">Accountable workflows</strong>
              </div>
              <p className="font-mono text-[10px] text-gray-600 leading-relaxed mt-4">A service model to scope with each client—not a claim of integration with any named platform.</p>
            </div>
          </Reveal>
        </section>

        <div className="h-14 border-t border-b border-blue-950 overflow-hidden flex items-center my-3">
          <div className="flex gap-16 items-center whitespace-nowrap marquee-container" style={{ width: "max-content" }}>
            {[
              "Autonomous Systems","Physical AI Teams","Robotics Ventures","Enterprise AI","Research Institutes","Embodied Intelligence","Autonomous Driving","Computer Vision","Autonomous Systems","Physical AI Teams","Robotics Ventures","Enterprise AI","Research Institutes","Embodied Intelligence","Autonomous Driving","Computer Vision",
              "Autonomous Systems","Physical AI Teams","Robotics Ventures","Enterprise AI","Research Institutes","Embodied Intelligence","Autonomous Driving","Computer Vision","Autonomous Systems","Physical AI Teams","Robotics Ventures","Enterprise AI","Research Institutes","Embodied Intelligence","Autonomous Driving","Computer Vision"
            ].map((it, i) => (
              <span key={i} className="font-mono text-[13px] tracking-[0.2em] uppercase text-gray-300 marquee-item">{it}<span className="inline-block w-1 h-1 rounded-full bg-blue-500 opacity-80 mx-8 align-middle" /></span>
            ))}
          </div>
          <style>{`
            .marquee-container {
              animation: marquee-scroll 30s linear infinite;
            }
            .marquee-container:hover {
              animation-play-state: paused;
            }
            @keyframes marquee-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(calc(-50% + 0.5rem)); }
            }
          `}</style>
        </div>

      <div className="h-14 border-t border-blue-950 overflow-hidden flex items-center my-3">
        <div className="flex gap-16 items-center whitespace-nowrap marquee-container-reverse" style={{ width: "max-content" }}>
          {[...LOGO_ITEMS, ...LOGO_ITEMS].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              style={{
                height: src.includes("brand-tcl") || src.includes("stimuler_logo") ? "100px" : "60px",
                width: "auto",
                objectFit: "contain",
                margin: "0 32px"
              }}
            />
          ))}
        </div>
        <style>{`
          .marquee-container-reverse {
            animation: marquee-scroll-reverse 30s linear infinite;
          }
          .marquee-container-reverse:hover {
            animation-play-state: paused;
          }
          @keyframes marquee-scroll-reverse {
            from { transform: translateX(calc(-50% + 0.5rem)); }
            to { transform: translateX(0); }
          }
        `}</style>
        </div>

      <section id="hscroll" className="py-20 px-12 border-t border-blue-950">
        <div className="max-w-[1400px] mx-auto">
          <Reveal><SLabel>Services</SLabel></Reveal>
          <Reveal delay={100}><h2 className="font-black tracking-tight uppercase leading-[0.95] mb-12" style={{ fontSize: "clamp(36px,4vw,64px)" }}>Every modality.<br /><span className="text-blue-500">Production-grade.</span></h2></Reveal>
          <div className="cards-scroll flex gap-1 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
            {CARDS.map(card => (
              <Link key={card.id} to={card.link} className={`flex-shrink-0 w-72 h-[460px] ${card.bg} relative overflow-hidden group transition-all duration-500 hover:w-[360px] cursor-default no-underline`}>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="font-mono text-[12px] tracking-widest text-white/30">{card.title}</div>
                  <div>
                    <div className="font-black text-2xl tracking-tight uppercase leading-tight mb-3">{card.title.split("\n").map((l,i) => <span key={i} className="block">{l}</span>)}</div>
                    <div className="relative h-28 overflow-hidden"><CardCanvas id={card.id} /></div>
                  </div>
                  <div className="font-mono text-[12px] text-white/50 tracking-wider uppercase leading-loose">{card.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="modalities-scroll" className="py-20 px-12 border-t border-blue-950">
        <div className="max-w-[1400px] mx-auto">
          <SLabel>Modalities</SLabel>
          <h2 className="font-black tracking-tight uppercase leading-[0.95] mb-12" style={{ fontSize: "clamp(36px,4vw,64px)" }}>Precision at<br /><span className="text-blue-500">every layer.</span></h2>
          <div className="border-t border-blue-950">
            {MODS.map((m, i) => (
              <Link key={i} to={m.path} className={`modalities-grid grid grid-cols-[120px_1fr_1fr] items-center gap-8 py-6 px-0 border-b border-blue-950 cursor-pointer transition-opacity duration-300 block no-underline text-inherit ${active === i ? "opacity-100" : "opacity-20 hover:opacity-50"}`}>
                <div className="font-mono text-sm text-blue-500 tracking-widest">{m.n}</div>
                <div className="font-black tracking-tight uppercase leading-[0.95]" style={{ fontSize: "clamp(24px,2.5vw,40px)" }}>{m.title.split("\n").map((l,j)=><span key={j} className="block">{l}</span>)}</div>
                <div className="font-mono text-xs text-gray-200 leading-loose tracking-wider uppercase hidden md:block">{m.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="py-20 px-12">
        <div className="max-w-[1400px] mx-auto">
          <Reveal><SLabel>Platform</SLabel></Reveal>
          <Reveal delay={100}><h2 className="font-black tracking-tight uppercase leading-[0.95] mb-12" style={{ fontSize: "clamp(36px,4vw,64px)" }}>Legacy tools break<br />at scale.<br /><span className="text-blue-500">We don't.</span></h2></Reveal>
          <Reveal delay={200}>
            <div className="platform-grid grid grid-cols-1 md:grid-cols-2 gap-[3px]">
              <div className="bg-[#0C0F1A] border border-blue-950 p-16">
                <div className="font-mono text-[12px] text-blue-500 tracking-widest mb-4">VeriLabel Platform</div>
                <div className="text-2xl font-black tracking-tight uppercase mb-3">End-to-end annotation infrastructure</div>
                <div className="font-mono text-[12px] text-gray-400 leading-loose tracking-wider uppercase">Platform + workforce + QA + delivery. Fully tailored workflows, schemas and pipelines per use case. Domain-trained expert annotators per industry vertical.</div>
                <table className="w-full mt-10 border-collapse">
                  <thead>
                    <tr>
                      <th className="font-mono text-[11px] tracking-widest uppercase text-gray-600 text-left pb-2 border-b border-blue-950 w-[44%]">Dimension</th>
                      <th className="font-mono text-[11px] tracking-widest uppercase text-gray-600 text-center pb-2 border-b border-blue-950">Industry</th>
                      <th className="font-mono text-[11px] tracking-widest uppercase text-blue-500 text-right pb-2 border-b border-blue-950">VeriLabel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CMP.map(([dim,ind,vl]) => (
                      <tr key={dim as string} className="border-b border-white/[0.04] last:border-b-0">
                        <td className="font-mono text-[12px] text-gray-200 py-2.5">{dim as string}</td>
                        <td className="font-mono text-[12px] text-gray-400 py-2.5 text-center"><span className="bg-white/[0.04] border border-white/10 text-gray-500 text-[11px] font-bold tracking-wider px-2 py-0.5">{ind as string}</span></td>
                        <td className="font-mono text-[12px] py-2.5 text-right"><span className="bg-blue-500/10 border border-blue-900/50 text-blue-300 text-[11px] font-bold tracking-wider px-2 py-0.5">{vl as string}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-col gap-[3px]">
                {[["01","Open Export","JSON, COCO, YOLO, Pascal VOC — or fully custom schema aligned to your stack."],["02","Multi-layer QA","AI pre-annotation → expert review → blind evaluation → IAA scoring → delivery."]].map(([n,t,d]) => (
                  <div key={n as string} className="flex-1 bg-[#0C0F1A] border border-blue-950 p-12 hover:bg-[#111626] transition-colors">
                    <div className="font-mono text-[12px] text-blue-500 tracking-widest mb-5">{n as string}</div>
                    <div className="text-[28px] font-black tracking-tight uppercase mb-3">{t as string}</div>
                    <div className="font-mono text-[12px] text-gray-400 leading-loose tracking-wider uppercase">{d as string}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="quality" className="py-20 px-12">
        <div className="max-w-[1400px] mx-auto">
          <Reveal><SLabel>Quality Assurance</SLabel></Reveal>
          <Reveal delay={100}><h2 className="font-black tracking-tight uppercase leading-[0.95] mb-12" style={{ fontSize: "clamp(36px,4vw,64px)" }}>Five layers between<br />your data and <span className="text-blue-500">failure.</span></h2></Reveal>
          <Reveal delay={200}>
            <div className="quality-grid grid grid-cols-1 md:grid-cols-2 gap-[3px]">
              {QA.map(([n,t,d]) => (
                <div key={n as string} className="relative bg-[#0C0F1A] border border-blue-950 p-12 overflow-hidden group hover:bg-[#111626] hover:border-blue-800 transition-all cursor-default after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100 qa-card">
                  <div className="font-mono text-5xl font-black text-blue-500/10 leading-none mb-4 qa-num">{n as string}</div>
                  <div className="text-xl font-black tracking-tight uppercase mb-2.5 qa-title">{t as string}</div>
                  <div className="font-mono text-[12px] text-gray-400 leading-loose tracking-wider uppercase qa-desc">{d as string}</div>
                </div>
              ))}
              <div className="col-span-1 md:col-span-2 bg-blue-600 p-8 px-12 flex items-center justify-between flex-wrap gap-6 deliver-box">
                <div>
                  <div className="text-[28px] font-black tracking-tight uppercase deliver-text">Step 05 — Deliver</div>
                  <div className="font-mono text-[12px] text-white/60 tracking-widest uppercase mt-1.5 deliver-subtext">Production-grade output · COCO · Pascal VOC · YOLO · Custom export</div>
                </div>
                <BBtn href="https://calendly.com/vishal-patil-xtransmatrix/30min" external>Book Demo</BBtn>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div id="numbers">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px] numbers-grid">
          {[["97%+","Annotation accuracy"],["15+","Languages supported"],["5×","Faster than legacy tools"],["4","Modalities"]].map(([n,l], i) => (
            <Reveal key={l as string} delay={i * 100}>
              <div className="relative bg-[#0C0F1A] border border-blue-950 px-10 py-16 text-center hover:bg-[#111626] transition-colors cursor-default overflow-hidden group item">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(26,107,255,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="font-black tracking-tight leading-none num" style={{ fontSize: "clamp(48px,5vw,72px)" }}>{n as string}</div>
                <div className="font-mono text-[11px] text-gray-600 mt-3 tracking-widest uppercase label">{l as string}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <section id="aitank" className="py-20 px-12">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
              <div className="bg-[#0C0F1A] border border-blue-950 p-16 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[12px] tracking-[0.22em] uppercase mb-5" style={{ color: ORANGE }}>
                    <span className="w-5 h-px" style={{ background: ORANGE }} />An xTransMatrix Product
                  </div>
                  <h2 className="font-black tracking-tight uppercase leading-[0.95]" style={{ fontSize: "clamp(36px,3.5vw,56px)", color: ORANGE }}>
                    <em className="not-italic">AI</em> Tank —<br /><span className="text-white">where builders<br />push limits.</span>
                  </h2>
                  <p className="font-mono text-[12px] text-gray-400 leading-loose tracking-wider uppercase mt-6 max-w-md">A collaborative hub for builders, thinkers, and technologists pushing the boundaries of AI. Whether training models, testing edge cases, or exploring ethical AI — there's a space for you inside the Tank.</p>
                </div>
                <div className="mt-10">
                  <a href="#" className="inline-flex items-center gap-0 font-mono text-xs font-medium tracking-widest uppercase text-white">
                    <span className="text-sm" style={{ color: ORANGE }}>⌈</span>
                    <span className="px-4 py-2.5" style={{ borderTop: `1px solid rgba(255,122,92,0.3)`, borderBottom: `1px solid rgba(255,122,92,0.3)` }}>Join AI Tank</span>
                    <span className="text-sm" style={{ color: ORANGE }}>⌋</span>
                  </a>
                </div>
              </div>
              <div className="p-16 flex flex-col justify-between" style={{ background: "rgba(255,122,92,0.06)", border: "1px solid rgba(255,122,92,0.15)" }}>
                <div className="flex flex-col gap-4">
                  <svg width="56" height="56" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="24" cy="24" rx="9" ry="9" fill="#FF7A5C"/>
                    <rect x="17" y="35" width="15" height="33" rx="7.5" fill="#352956"/>
                    <ellipse cx="44" cy="17" rx="9" ry="9" fill="#fff"/>
                    <rect x="37" y="28" width="15" height="40" rx="7.5" fill="#FF7A5C"/>
                    <ellipse cx="64" cy="24" rx="9" ry="9" fill="#FF7A5C"/>
                    <rect x="57" y="35" width="15" height="33" rx="7.5" fill="#352956"/>
                  </svg>
                  <div className="text-5xl font-black tracking-tight leading-none"><em className="not-italic" style={{ color: ORANGE }}>AI</em> TANK</div>
                  <div className="font-mono text-[11px] tracking-widest uppercase text-white/25">A product of xTransMatrix Inc.</div>
                </div>
                <div className="grid grid-cols-2 gap-0.5 mt-8 aitank-grid">
                  {[["Hub","Collaboration"],["Lab","Experimentation"],["Community","Builders"],["Launchpad","Next-gen AI"]].map(([s,v]) => (
                    <div key={s as string} className="p-4 font-mono text-[11px] tracking-widest uppercase text-white/50 aitank-tags" style={{ background: "rgba(255,122,92,0.05)", border: "1px solid rgba(255,122,92,0.1)" }}>
                      <strong className="block text-sm font-black tracking-tight text-white font-sans mb-1">{s as string}</strong>{v as string}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          <CaseStudiesSection />
            </Reveal>
        </div>
      </section>

      <TeamSection />
    </div>
  );
}