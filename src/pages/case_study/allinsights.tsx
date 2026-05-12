import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BLUE = "#1A6BFF";

const CASES = [
  { id: 1, client: "Salonkee", svc: "image", badge: "b-saas", industry: "SaaS & Platforms", title: "Smart Ticket Intelligence for Digital Platforms", challenge: "Thousands of unstructured support requests across bookings, payments and subscriptions with no way to detect trends or extract operational insight at scale.", caps: ["Data Annotation", "Data Validation", "HITL Pipelines", "Trend Analysis", "Data Structuring"], metrics: [{ n: "100%", l: "Ticket Coverage" }, { n: "4×", l: "Faster Triage" }, { n: "0", l: "Data Loss" }], impacts: ["Structured datasets enabling operational intelligence", "Faster identification of recurring platform issues", "Improved internal reporting and analytics capabilities", "Better visibility into customer interaction patterns"], steps: [{ t: "Data Annotation", d: "Categorizing support tickets into standardized issue types across bookings, payments, subscriptions." }, { t: "Data Validation", d: "Verifying accuracy, removing duplicates, normalizing records for downstream analysis." }, { t: "Data Evaluation", d: "Reviewing tagged datasets for consistency and quality throughout the pipeline." }, { t: "Data Structuring", d: "Preparing analytics-ready datasets for reporting and trend analysis workflows." }] },
  { id: 2, client: "Moultrie", svc: "image", badge: "b-iot", industry: "IoT & Hardware", title: "Customer Feedback Intelligence for IoT Ecosystems", challenge: "Large volumes of fragmented feedback across connected devices, apps and subscriptions made it impossible to identify product quality concerns or early churn signals.", caps: ["Feedback Annotation", "Sentiment Analysis", "Data Curation", "Churn Detection"], metrics: [{ n: "↑60%", l: "Signal Visibility" }, { n: "Early", l: "Churn Detection" }, { n: "AI-Ready", l: "Output" }], impacts: ["Improved visibility into product and app performance signals", "Early detection of customer dissatisfaction and churn indicators", "Better insights for product roadmap improvements", "Data foundation ready for advanced AI models"], steps: [{ t: "Data Annotation", d: "Categorizing feedback across hardware, app experience, subscriptions, and sentiment dimensions." }, { t: "Data Validation", d: "Cleaning inconsistent records and standardizing product identifiers." }, { t: "Data Evaluation", d: "Reviewing labeled datasets for tagging accuracy and consistency." }, { t: "Insight Structuring", d: "Preparing structured datasets for product teams with clear taxonomies." }] },
  { id: 3, client: "Holland & Barrett", svc: "video", badge: "b-retail", industry: "Retail & Commerce", title: "Customer Experience Intelligence for Retail Operations", challenge: "Customer interactions across orders, deliveries, payments and digital platforms created fragmented operational data — making it impossible to monitor quality or logistics issues at scale.", caps: ["Interaction Annotation", "Logistics Tagging", "Quality Monitoring", "Operational Intelligence"], metrics: [{ n: "↑3×", l: "Issue Visibility" }, { n: "Multi", l: "Domain Coverage" }, { n: "Real-time", l: "Insights" }], impacts: ["Clear visibility into delivery, refund, and order management issues", "Improved monitoring of product quality and safety feedback", "Stronger alignment between logistics, product, and digital teams", "Data-driven insights enabling operational improvements"], steps: [{ t: "Data Annotation", d: "Categorizing interactions across logistics, payments, product quality, and digital platforms." }, { t: "Data Validation", d: "Cleaning incomplete records and standardizing terminology across datasets." }, { t: "Data Evaluation", d: "Reviewing tagged data through blind evaluation rounds." }, { t: "Data Structuring", d: "Preparing datasets for internal analytics and reporting KPIs." }] },
  { id: 4, client: "Global AI Program", svc: "audio", badge: "b-media", industry: "Media & Entertainment", featured: true, title: "AI-Ready Dialogue Annotation for Movie & TV Audio Data", challenge: "Multi-speaker movie and TV audio with overlapping dialogue, background noise, emotion variation, non-standard speech and precise timestamp alignment — too complex for standard pipelines.", caps: ["Speaker Diarization", "Emotion Detection", "Audio Segmentation", "Speech Transcription", "HITL QA"], metrics: [{ n: ">98%", l: "Segmentation Acc." }, { n: ">95%", l: "Speaker Accuracy" }, { n: ">90%", l: "Transcription Acc." }], impacts: ["Improved speech recognition model training across multi-speaker contexts", "More accurate multi-speaker conversation detection for production models", "Enhanced emotion recognition via fine-grained labeling", "High-quality dialogue datasets for conversational AI systems"], steps: [{ t: "Data Validation", d: "Audio clarity, language verification, noise thresholds, overlap percentage — only quality data advances." }, { t: "Speaker Identification", d: "Segmentation, ID assignment, character ID with gender, age, and frequency tagging." }, { t: "Emotion Detection", d: "Eight-class labeling: neutral, angry, happy, sad, surprised, scared, disgusted, other." }, { t: "Speech Event Tagging", d: "Laughs, coughs, sighs, gasps, stuttering, filler words, and slang classification." }, { t: "Precision Segmentation", d: "Timestamp-level segmentation for speaker changes, emotional shifts, and overlapping dialogue." }, { t: "Multi-Stage QA", d: "100% first-pass review, blind secondary eval, 20% sampling audits, continuous feedback loops." }] },
  { id: 5, client: "Global AI Data Program", svc: "audio", badge: "b-ai", industry: "AI / Speech AI", title: "Speech AI Data Annotation & Evaluation Pipeline", challenge: "Large-scale conversational audio with multi-speaker dialogues, AI-generated speech, background noise, and inconsistent transcripts failing quality thresholds for model training.", caps: ["ASR Annotation", "Speaker Tagging", "Confidence Scoring", "Dataset Benchmarking", "Anomaly Detection"], metrics: [{ n: "Scale", l: "Production Pipeline" }, { n: "HITL", l: "Validation Layer" }, { n: "ASR", l: "Model-Ready" }], impacts: ["High-quality training datasets for speech recognition and conversational AI", "Accurate multi-speaker conversational annotations at production scale", "Improved dataset reliability through HITL validation workflows", "Scalable data pipelines supporting speech AI development"], steps: [{ t: "Speech Data Annotation", d: "Multi-speaker segmentation, speaker ID, role tagging, emotion classification, verbatim transcription." }, { t: "Data Validation", d: "Quality checks for segmentation, speaker attributes, emotional classification, consistency audits." }, { t: "Data Evaluation", d: "Confidence scoring, transcription benchmarking, AI-generated speech detection, structured preparation for model training." }] },
  { id: 6, client: "Robotics AI Program", svc: "robotics", badge: "b-robotics", industry: "Robotics & Physical AI", title: "3D Sensor Fusion Annotation for Autonomous Systems", challenge: "Large-scale LIDAR and multi-sensor robotics datasets with complex 3D point clouds, sensor fusion requirements and precise spatial annotation — too demanding for standard image-based pipelines.", caps: ["3D Point Cloud Annotation", "Sensor Fusion", "LIDAR Labeling", "MCAP Processing", "HITL QA"], metrics: [{ n: ">97%", l: "3D Accuracy" }, { n: "Multi", l: "Sensor Fusion" }, { n: "MCAP", l: "Native Format" }], impacts: ["High-quality 3D annotated datasets for autonomous navigation models", "Accurate sensor fusion labeling across LIDAR, camera and IMU inputs", "Scalable annotation pipelines built for physical AI development", "Production-grade spatial datasets enabling robotics model training"], steps: [{ t: "Data Ingestion", d: "MCAP-native ingestion of multi-sensor robotics data including LIDAR, RGB camera and IMU streams." }, { t: "3D Point Cloud Annotation", d: "Precise 3D bounding box and segmentation labeling across dynamic and static scene elements." }, { t: "Sensor Fusion Alignment", d: "Temporal and spatial alignment of annotations across all sensor modalities." }, { t: "HITL Validation", d: "Human-in-the-loop quality review ensuring spatial accuracy and consistency across all frames." }] }
];

const CARDS = [
  { id: "hc1", title: "Robotics &\nPhysical AI", desc: "MCAP-native · LiDAR · Sensor fusion · 3D point clouds", bg: "bg-[#0C0F1A] border border-blue-950", link: "/robotics" },
  { id: "hc2", title: "Image\nAnnotation", desc: "Bounding boxes · Segmentation · Keypoints · COCO · YOLO", bg: "bg-blue-800", link: "/image" },
  { id: "hc3", title: "Video\nIntelligence", desc: "MOT · Action recognition · Egocentric · 8–12 cam sync", bg: "bg-[#0a1628]", link: "/video" },
  { id: "hc4", title: "Audio &\nSpeech AI", desc: "ASR · Diarization · Emotion · 15+ languages · IPA", bg: "bg-blue-950/30 border border-blue-800/40", link: "/audio" },
];

function CardCanvas({ id }: { id: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const p = c.parentElement;
    c.width = p?.offsetWidth || 280;
    c.height = p?.offsetHeight || 160;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const W = c.width, H = c.height;
    if (W <= 0 || H <= 0) return;
    let t = 0, rafId: number;

    function draw() {
      ctx.clearRect(0, 0, W, H);
      if (id === "hc1") {
        const cols = Math.floor(W / 12), rows = Math.floor(H / 12);
        for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
          const w = Math.sin(i * 0.3 + j * 0.3 + t) * 0.5 + 0.5;
          const radius = Math.max(0.1, w * 2.5 + 0.3);
          ctx.beginPath();
          ctx.arc(i * 12 + 6, j * 12 + 6, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100,160,255,${w * 0.6 + 0.1})`;
          ctx.fill();
        }
      } else if (id === "hc2") {
        for (let k = 0; k < 5; k++) {
          ctx.beginPath();
          for (let x = 0; x <= W; x += 2) {
            const y = H / 2 + Math.sin(x * 0.025 + t + k * 0.6) * ((k + 1) * 14) * Math.sin(x * 0.005 + t * 0.3);
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(150,190,255,${0.12 + k * 0.06})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      } else if (id === "hc3") {
        const cx = W / 2, cy = H / 2;
        for (let i = 0; i < 60; i++) {
          const a = (i / 60) * Math.PI * 2, r1 = 30 + Math.sin(t + i * 0.2) * 8, r2 = 60 + Math.cos(t * 0.7 + i * 0.15) * 20 + i * 0.8;
          ctx.strokeStyle = `rgba(100,150,255,${0.05 + Math.sin(t + i * 0.1) * 0.04})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
          ctx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2);
          ctx.stroke();
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 px-12 border-t border-blue-950 bg-[#06080E]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-blue-500 mb-5">
          <span className="w-5 h-px bg-blue-500" />Services
        </div>
        <h2 className="font-black tracking-tight uppercase leading-[0.95] mb-12" style={{ fontSize: "clamp(36px,4vw,64px)" }}>
          Every modality.<br /><span className="text-blue-500">Production-grade.</span>
        </h2>
        <div className="flex gap-1 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
          {CARDS.map(card => (
            <a key={card.id} href={card.link} className={`flex-shrink-0 w-72 h-[460px] ${card.bg} relative overflow-hidden group transition-all duration-500 hover:w-[360px] cursor-pointer no-underline text-inherit`}>
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="font-mono text-[12px] tracking-widest text-white/30">{card.title}</div>
                <div>
                  <div className="font-black text-2xl tracking-tight uppercase leading-tight mb-3">{card.title.split("\n").map((l, i) => <span key={i} className="block">{l}</span>)}</div>
                  <div className="relative h-28 overflow-hidden"><CardCanvas id={card.id} /></div>
                </div>
                <div className="font-mono text-[12px] text-white/50 tracking-wider uppercase leading-loose">{card.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const badgeColors: Record<string, string> = {
  "b-saas": "bg-[rgba(138,180,255,0.08)] border-[rgba(138,180,255,0.2)] text-[#8AB4FF]",
  "b-iot": "bg-[rgba(163,136,238,0.07)] border-[rgba(163,136,238,0.2)] text-[#C4ADFF]",
  "b-retail": "bg-[rgba(255,122,92,0.07)] border-[rgba(255,122,92,0.2)] text-[#FF9E88]",
  "b-media": "bg-[rgba(93,202,165,0.07)] border-[rgba(93,202,165,0.2)] text-[#5DCAA5]",
  "b-ai": "bg-[rgba(26,107,255,0.1)] border-[rgba(26,107,255,0.22)] text-[#8AB4FF]",
  "b-robotics": "bg-[rgba(255,200,80,0.07)] border-[rgba(255,200,80,0.2)] text-[#FFD166]",
};

const CaseStudiesSection: React.FC<{ onCaseStudyClick: (c: typeof CASES[0]) => void }> = ({ onCaseStudyClick }) => {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get("filter") || "all";
  const [filter, setFilter] = useState(initialFilter);
  const filteredCases = filter === "all" ? CASES : CASES.filter(c => c.svc === filter);

  return (
    <section className="bg-[#06080E] py-20 px-4">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-wrap gap-2 mb-9">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
          {filteredCases.map((c) => (
            <div key={c.id} onClick={() => onCaseStudyClick(c)} className={`bg-[#0C0F1A] border border-blue-500/20 p-8 relative overflow-hidden cursor-pointer transition-all duration-400 hover:bg-[#111626] hover:border-blue-500/40 ${c.featured ? "md:col-span-2" : ""}`}>
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
      </div>
    </section>
  );
};

const CaseStudyDetailPage: React.FC<{ caseData: typeof CASES[0]; onBack: () => void }> = ({ caseData }) => {
  return (
    <div className="bg-[#0C0F1A] text-white min-h-screen font-inter">
      <div className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0C0F1A 0%, #1A6BFF 100%)" }}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-4xl px-4">
          <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-blue-400 mb-4">{caseData.client}</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">{caseData.title}</h1>
          <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.16em] uppercase text-blue-500 mt-4">
            <span className="w-8 h-px bg-blue-500" />{caseData.client}
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16 px-4 md:px-16 max-w-4xl leading-relaxed text-gray-200">
        <div className="mb-8">
          <div className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-blue-500 mb-4 flex items-center gap-2 pb-3 border-b border-blue-500/20">
            <span className="w-3 h-px bg-blue-500" />The Challenge
          </div>
          <p className="font-mono text-[11px] leading-relaxed tracking-[0.03em] uppercase">{caseData.challenge}</p>
        </div>
        <div className="mb-8">
          <div className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-blue-500 mb-4 flex items-center gap-2 pb-3 border-b border-blue-500/20">
            <span className="w-3 h-px bg-blue-500" />Our Approach
          </div>
          <div className="flex flex-col gap-0.5">
            {caseData.steps.map((s, idx) => (
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
        <div className="mb-8">
          <div className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-blue-500 mb-4 flex items-center gap-2 pb-3 border-b border-blue-500/20">
            <span className="w-3 h-px bg-blue-500" />Quality Benchmarks
          </div>
          <div className="grid grid-cols-3 gap-0.5">
            {caseData.metrics.map((m, mi) => (
              <div key={mi} className="bg-blue-500/20 border border-blue-500/40 p-4 text-center">
                <div className="font-black tracking-tight" style={{ fontSize: "26px" }}>{m.n}</div>
                <div className="font-mono text-[7px] tracking-[0.12em] uppercase text-[#A0A8BC] mt-1">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <div className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-blue-500 mb-4 flex items-center gap-2 pb-3 border-b border-blue-500/20">
            <span className="w-3 h-px bg-blue-500" />Impact
          </div>
          <div className="flex flex-col gap-1.5">
            {caseData.impacts.map((imp, ii) => (
              <div key={ii} className="flex gap-2.5 bg-blue-500/10 border-l-2 border-blue-500 p-2.5 font-mono text-[9px] text-[#E2E5EF] tracking-[0.03em] leading-relaxed">
                <span className="w-0.75 h-0.75 rounded-full bg-blue-500 flex-shrink-0 mt-1" />{imp}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-5 border-t border-blue-500/20">
          <div className="font-mono text-[8px] tracking-[0.16em] uppercase text-[#5A6278] mb-2.5">Key Capabilities</div>
          <div className="flex flex-wrap gap-1.5">
            {caseData.caps.map((cap, ci) => (
              <span key={ci} className="font-mono text-[8px] tracking-[0.1em] uppercase px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-[#5A6278]">{cap}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FinalWebsite: React.FC = () => {
  const [searchParams] = useSearchParams();
  const caseParam = searchParams.get("case");
  const initialCase = caseParam ? CASES.find(c => c.id === parseInt(caseParam)) : null;
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof CASES[0] | null>(initialCase);

  const handleCaseStudyClick = (caseStudy: typeof CASES[0]) => {
    setSelectedCaseStudy(caseStudy);
  };

  const handleBackToCaseStudies = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <div className="bg-[#06080E] min-h-screen font-inter">
      {!selectedCaseStudy ? (
        <>
          <ServicesSection />
          <CaseStudiesSection onCaseStudyClick={handleCaseStudyClick} />
        </>
      ) : (
        <CaseStudyDetailPage caseData={selectedCaseStudy} onBack={handleBackToCaseStudies} />
      )}
    </div>
  );
};

export default FinalWebsite;