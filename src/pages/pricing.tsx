import { useState, useEffect } from "react";

const Pricing = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = "1";
          (entry.target as HTMLElement).style.transform = "translateY(0)";
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.06 });

    document.querySelectorAll('.case-card, .stat, .benchmarks, .cta-band').forEach((el) => {
      const element = el as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(18px)";
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease, background 0.3s";
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const caseStudies = [
    {
      id: 1,
      featured: true,
      tags: ["SaaS / Salon Tech", "Data Intelligence"],
      client: "Salonkee",
      title: "Smart Ticket Intelligence for Digital Platforms",
      summary: "As Salonkee expanded its premium salon platform, thousands of unstructured support tickets — spanning bookings, payments, subscriptions, and platform issues — needed to be transformed into structured, insight-ready datasets for operational intelligence.",
      impacts: [
        "Structured datasets enabling operational intelligence at scale",
        "Faster identification of recurring platform issues",
        "Improved internal reporting and analytics capabilities",
        "Better visibility into customer interaction patterns"
      ],
      chips: ["Data Annotation", "Ticket Categorization", "Data Validation", "Duplicate Removal & Normalization", "Data Evaluation", "Analytics-Ready Structuring", "HITL Workflows"],
      lineColor: "blue"
    },
    {
      id: 2,
      tags: ["IoT / Connected Devices"],
      client: "Moultrie",
      title: "Customer Feedback Intelligence for IoT Ecosystems",
      summary: "Large volumes of fragmented feedback across connected devices, mobile apps, and subscription services were preventing Moultrie from identifying product quality concerns, UX issues, and early churn signals in time to act.",
      impacts: [
        "Improved visibility into product and app performance signals",
        "Early detection of customer dissatisfaction and churn",
        "Better insights for product roadmap and feature improvements",
        "Data foundation ready for advanced analytics and AI models"
      ],
      chips: ["Feedback Annotation", "Sentiment Categorization", "Hardware and App Tagging", "Duplicate Cleaning", "Churn Signal Detection"],
      lineColor: "green"
    },
    {
      id: 3,
      tags: ["Retail / Health & Wellness"],
      client: "Holland & Barrett",
      title: "Customer Experience Intelligence for Retail Operations",
      summary: "Customer interactions across orders, deliveries, payments, subscriptions, and digital platforms created fragmented operational data — making it difficult to monitor product quality feedback, logistics issues, and satisfaction signals at scale.",
      impacts: [
        "Clear visibility into delivery, refund, and order management issues",
        "Improved monitoring of product quality and safety feedback",
        "Stronger alignment across logistics, product, and digital teams",
        "Data-driven insights enabling operational improvements"
      ],
      chips: ["Interaction Categorization", "Logistics and Payments Tagging", "Terminology Standardization", "Data Consistency Checks", "Analytics Dataset Prep"],
      lineColor: "orange"
    },
    {
      id: 4,
      featured: true,
      tags: ["AI / Speech Technology", "Media & Entertainment"],
      client: "Global AI Program",
      title: "AI-Ready Dialogue Annotation for Movie & TV Audio Data",
      summary: "A global AI program required high-quality annotated conversational datasets from movie and TV audio content to train advanced speech recognition models. The raw data presented multi-speaker overlaps, background noise, non-standard speech patterns, and timestamp-aligned transcription at scale.",
      impacts: [
        "Improved speech recognition model training outcomes",
        "More accurate multi-speaker conversation detection",
        "Enhanced emotion recognition across 8 distinct emotion categories",
        "High-quality dialogue datasets for conversational AI systems"
      ],
      metrics: [
        { value: ">98%", label: "Segmentation Accuracy", color: "purple" },
        { value: ">95%", label: "Speaker Accuracy", color: "blue" },
        { value: ">90%", label: "Transcription Accuracy", color: "green" },
        { value: "100%", label: "First-Pass Review", color: "white" }
      ],
      chips: ["Speaker Identification", "Emotion Detection (8 types)", "Speech Event Tagging", "Verbatim Transcription", "Timestamp Segmentation", "Multi-Stage QA Framework", "HITL Annotation Pipeline"],
      lineColor: "purple"
    },
    {
      id: 5,
      tags: ["Speech AI"],
      client: "Global AI Data Program",
      title: "Speech AI Data Annotation & Evaluation Pipeline",
      summary: "Large-scale conversational audio datasets contained multi-speaker dialogues, background noise, AI-generated speech, and inconsistent transcripts — requiring a structured HITL pipeline covering annotation, validation, and model-ready evaluation.",
      impacts: [
        "High-quality training datasets for speech recognition and conversational AI",
        "Accurate multi-speaker conversational annotations",
        "Improved dataset reliability via HITL validation workflows",
        "Scalable pipelines supporting ASR model development and evaluation"
      ],
      chips: ["Multi-Speaker Segmentation", "Emotion Classification", "Speaker Role Tagging", "Confidence Scoring", "AI Speech Detection", "ASR Evaluation Ready"],
      lineColor: "blue"
    },
    {
      id: 6,
      comingSoon: true,
      tags: ["Coming Soon"],
      client: "xTransMatrix",
      title: "New Case Study — Publishing Soon",
      summary: "Another enterprise-grade data annotation and AI pipeline success story is on its way. Stay tuned for the full details of our latest client engagement and the measurable impact delivered."
    }
  ];

  const filters = ["All Projects", "Data Annotation", "Speech AI", "IoT & Product", "Retail & CX", "HITL Pipelines"];

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #060a14; --surface: #0c1220; --surface2: #111827;
          --border: rgba(99,179,237,0.10); --accent: #38bdf8; --accent2: #818cf8;
          --accent3: #34d399; --accent4: #fb923c; --text: #e2e8f0;
          --muted: #64748b; --white: #f8fafc;
        }
        html { scroll-behavior: auto; }
        .pricing-body {
          background: var(--bg);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          line-height: 1.7;
          overflow-x: hidden;
          min-height: 100vh;
        }
        .pricing-body::before {
          content: ''; position: fixed; inset: 0;
          background-image: linear-gradient(rgba(56,189,248,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.025) 1px, transparent 1px);
          background-size: 52px 52px; pointer-events: none; z-index: 0;
        }
        .nav {
          position: sticky; top: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 64px; background: rgba(6,10,20,0.88);
          backdrop-filter: blur(20px); border-bottom: 1px solid var(--border);
        }
        .nav-logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.3rem; color: var(--white); letter-spacing: -0.5px; text-decoration: none; }
        .nav-logo span { color: var(--accent); }
        .nav-links { display: flex; gap: 36px; }
        .nav-links a { font-size: 0.82rem; letter-spacing: 0.07em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.2s; }
        .nav-links a:hover, .nav-links a.active { color: var(--accent); }
        .hero { position: relative; z-index: 1; padding: 110px 64px 72px; text-align: center; overflow: hidden; }
        .hero-glow { position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 800px; height: 520px; background: radial-gradient(ellipse, rgba(56,189,248,0.11) 0%, transparent 68%); pointer-events: none; }
        .hero-tag { display: inline-flex; align-items: center; gap: 8px; padding: 6px 18px; border: 1px solid var(--border); border-radius: 100px; font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 28px; background: rgba(56,189,248,0.05); }
        .hero-tag::before { content: ''; width: 6px; height: 6px; background: var(--accent); border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.5)} }
        .hero h1 { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(2.6rem, 5vw, 4.2rem); line-height: 1.06; letter-spacing: -1.5px; color: var(--white); max-width: 820px; margin: 0 auto 22px; }
        .hero h1 em { font-style: normal; background: linear-gradient(120deg, var(--accent), var(--accent2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero p { font-size: 1.05rem; color: var(--muted); max-width: 540px; margin: 0 auto; font-weight: 300; }
        .stats-strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin: 64px 64px 80px; position: relative; z-index: 1; }
        .stat { background: var(--surface); padding: 34px 28px; text-align: center; transition: background 0.25s; }
        .stat:hover { background: var(--surface2); }
        .stat-num { font-family: 'Syne', sans-serif; font-size: 2.2rem; font-weight: 800; color: var(--white); line-height: 1; margin-bottom: 8px; }
        .stat-num span { color: var(--accent); }
        .stat-label { font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
        .section-header { padding: 0 64px 48px; position: relative; z-index: 1; }
        .section-label { font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px; }
        .section-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: clamp(1.7rem, 2.8vw, 2.5rem); letter-spacing: -0.8px; color: var(--white); }
        .filter-bar { display: flex; gap: 10px; flex-wrap: wrap; padding: 0 64px 52px; position: relative; z-index: 1; }
        .filter-btn { padding: 7px 18px; border: 1px solid var(--border); border-radius: 100px; background: transparent; color: var(--muted); font-family: 'DM Sans', sans-serif; font-size: 0.78rem; letter-spacing: 0.04em; cursor: pointer; transition: all 0.22s; }
        .filter-btn:hover, .filter-btn.active { background: rgba(56,189,248,0.08); border-color: var(--accent); color: var(--accent); }
        .cases-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; background: var(--border); margin: 0 64px; position: relative; z-index: 1; }
        .case-card.span-full { grid-column: 1 / -1; }
        .case-card { background: var(--surface); padding: 52px 48px; position: relative; overflow: hidden; cursor: pointer; transition: background 0.3s; text-decoration: none; display: block; color: inherit; }
        .case-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, var(--accent), var(--accent2)); transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease; }
        .case-card:hover { background: var(--surface2); }
        .case-card:hover::before { transform: scaleX(1); }
        .case-card.green-line::before { background: linear-gradient(90deg, var(--accent3), var(--accent)); }
        .case-card.orange-line::before { background: linear-gradient(90deg, var(--accent4), var(--accent2)); }
        .case-card.purple-line::before { background: linear-gradient(90deg, var(--accent2), var(--accent)); }
        .card-layout { display: grid; grid-template-columns: 1fr auto; gap: 44px; align-items: start; }
        .case-card.span-full .card-layout { grid-template-columns: 1fr 360px; }
        .card-eyebrow { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 18px; }
        .tag { font-size: 0.68rem; letter-spacing: 0.11em; text-transform: uppercase; padding: 4px 11px; border-radius: 4px; }
        .tag-blue { color: var(--accent); border: 1px solid rgba(56,189,248,0.2); background: rgba(56,189,248,0.05); }
        .tag-purple { color: var(--accent2); border: 1px solid rgba(129,140,248,0.2); background: rgba(129,140,248,0.05); }
        .tag-green { color: var(--accent3); border: 1px solid rgba(52,211,153,0.2); background: rgba(52,211,153,0.05); }
        .tag-orange { color: var(--accent4); border: 1px solid rgba(251,146,60,0.2); background: rgba(251,146,60,0.05); }
        .card-num { font-size: 0.72rem; color: var(--muted); letter-spacing: 0.07em; margin-left: auto; }
        .case-card h2 { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.45rem; line-height: 1.22; letter-spacing: -0.2px; color: var(--white); margin-bottom: 14px; }
        .case-card.span-full h2 { font-size: 1.9rem; }
        .client-name { font-size: 0.78rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); margin-bottom: 18px; display: flex; align-items: center; gap: 8px; }
        .client-name::before { content: ''; width: 20px; height: 1px; background: var(--muted); }
        .card-summary { font-size: 0.9rem; color: var(--muted); line-height: 1.78; margin-bottom: 28px; max-width: 600px; }
        .impact-list { display: flex; flex-direction: column; gap: 9px; margin-bottom: 30px; }
        .impact-item { display: flex; align-items: flex-start; gap: 10px; font-size: 0.85rem; color: var(--text); }
        .impact-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); flex-shrink: 0; margin-top: 7px; }
        .impact-dot.purple { background: var(--accent2); }
        .impact-dot.green { background: var(--accent3); }
        .impact-dot.orange { background: var(--accent4); }
        .metrics-row { display: flex; gap: 28px; flex-wrap: wrap; margin-bottom: 30px; }
        .metric-val { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 700; color: var(--white); }
        .metric-val.blue { color: var(--accent); }
        .metric-val.purple { color: var(--accent2); }
        .metric-val.green { color: var(--accent3); }
        .metric-desc { font-size: 0.7rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); margin-top: 3px; }
        .cta-link { display: inline-flex; align-items: center; gap: 8px; font-size: 0.8rem; letter-spacing: 0.05em; color: var(--accent); font-weight: 500; transition: gap 0.2s; }
        .cta-link:hover { gap: 14px; }
        .cta-link.purple { color: var(--accent2); }
        .cta-link.green { color: var(--accent3); }
        .cta-link.orange { color: var(--accent4); }
        .card-aside { display: flex; flex-direction: column; gap: 10px; min-width: 190px; }
        .chip { padding: 9px 15px; border: 1px solid var(--border); border-radius: 6px; font-size: 0.76rem; color: var(--muted); background: rgba(255,255,255,0.02); transition: all 0.2s; display: flex; align-items: center; gap: 8px; }
        .chip::before { content:''; width:5px; height:5px; border-radius:50%; background: var(--accent); flex-shrink:0; }
        .chip.purple::before { background: var(--accent2); }
        .chip.green::before { background: var(--accent3); }
        .chip.orange::before { background: var(--accent4); }
        .case-card:hover .chip { border-color: rgba(56,189,248,0.2); color: var(--text); }
        .divider-label { position: relative; z-index: 1; margin: 60px 64px 0; padding: 22px 32px; background: var(--surface); border: 1px solid var(--border); border-bottom: none; display: flex; align-items: center; gap: 16px; font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
        .divider-label::before, .divider-label::after { content:''; flex:1; height:1px; background: var(--border); }
        .benchmarks { margin: 2px 64px 0; padding: 56px 56px; background: var(--surface); border: 1px solid var(--border); border-top: none; position: relative; z-index: 1; }
        .benchmarks-inner { display: grid; grid-template-columns: 300px 1fr; gap: 60px; align-items: center; }
        .bench-title { font-family:'Syne',sans-serif; font-weight:800; font-size:1.5rem; color:var(--white); line-height:1.2; margin-bottom:12px; }
        .bar-rows { display:flex; flex-direction:column; gap:18px; }
        .bar-row { display:grid; grid-template-columns: 230px 1fr 70px; align-items:center; gap:16px; }
        .bar-label { font-size:0.8rem; color:var(--muted); }
        .bar-track { height:3px; background:rgba(255,255,255,0.05); border-radius:2px; overflow:hidden; }
        .bar-fill { height:100%; border-radius:2px; background: linear-gradient(90deg, var(--accent), var(--accent2)); animation: growBar 1.4s ease forwards; transform-origin:left; transform:scaleX(0); }
        @keyframes growBar { to { transform:scaleX(1); } }
        .bar-pct { font-family:'Syne',sans-serif; font-weight:700; font-size:0.88rem; color:var(--accent); text-align:right; }
        .cta-band { position:relative; z-index:1; margin: 2px 64px 0; padding: 72px 56px; background: var(--surface); border: 1px solid var(--border); border-top:none; display:flex; align-items:center; justify-content:space-between; gap:40px; }
        .cta-band h3 { font-family:'Syne',sans-serif; font-weight:800; font-size:1.8rem; letter-spacing:-0.4px; color:var(--white); max-width:460px; line-height:1.18; }
        .cta-band h3 em { font-style:normal; color:var(--accent); }
        .btn-group { display:flex; gap:14px; }
        .btn-primary { padding:15px 34px; background:var(--accent); color:#060a14; font-family:'DM Sans',sans-serif; font-weight:600; font-size:0.88rem; letter-spacing:0.04em; border:none; cursor:pointer; text-decoration:none; display:inline-block; transition:all 0.2s; white-space:nowrap; }
        .btn-primary:hover { background:#7dd3fc; transform:translateY(-1px); }
        .btn-ghost { padding:14px 30px; background:transparent; color:var(--text); font-family:'DM Sans',sans-serif; font-weight:500; font-size:0.88rem; letter-spacing:0.04em; border:1px solid var(--border); cursor:pointer; text-decoration:none; display:inline-block; transition:all 0.2s; white-space:nowrap; }
        .btn-ghost:hover { border-color:var(--accent); color:var(--accent); }
        footer { position:relative; z-index:1; margin-top:2px; padding:28px 64px; border-top:1px solid var(--border); display:flex; align-items:center; justify-content:space-between; font-size:0.76rem; color:var(--muted); }
        @media(max-width:1100px){
          .nav,.hero,.stats-strip,.section-header,.filter-bar,.cases-grid,.divider-label,.benchmarks,.cta-band,footer{ padding-left:32px; padding-right:32px; }
          .stats-strip,.cases-grid,.benchmarks,.cta-band,.divider-label{ margin-left:32px; margin-right:32px; }
          .cases-grid{ grid-template-columns:1fr; }
          .case-card.span-full{ grid-column:1; }
          .case-card.span-full .card-layout{ grid-template-columns:1fr; }
          .stats-strip{ grid-template-columns:repeat(2,1fr); }
          .benchmarks-inner{ grid-template-columns:1fr; gap:32px; }
          .bar-row{ grid-template-columns:180px 1fr 60px; }
        }
        @media(max-width:640px){
          .nav-links{ display:none; }
          .hero h1{ font-size:2.1rem; }
          .card-layout{ grid-template-columns:1fr !important; }
          .card-aside{ display:none; }
          .cta-band{ flex-direction:column; align-items:flex-start; }
          .stats-strip{ grid-template-columns:1fr 1fr; }
          .bar-row{ grid-template-columns:140px 1fr 55px; }
        }
      `}</style>

      <div className="pricing-body">
        <section className="hero">
          <div className="hero-glow"></div>
          <div className="hero-tag">Client Success Stories</div>
          <h1>Transforming Raw Data into<br/><em>AI-Ready Intelligence</em></h1>
          <p>Scalable data annotation, validation and evaluation pipelines - real results across industries.</p>
        </section>

        <div className="stats-strip">
          <div className="stat">
            <div className="stat-num">{"<"}98<span>%</span></div>
            <div className="stat-label">Segmentation Accuracy</div>
          </div>
          <div className="stat">
            <div className="stat-num">{"<"}95<span>%</span></div>
            <div className="stat-label">Speaker and Event Accuracy</div>
          </div>
          <div className="stat">
            <div className="stat-num">{"<"}90<span>%</span></div>
            <div className="stat-label">Transcription Accuracy</div>
          </div>
          <div className="stat">
            <div className="stat-num">100<span>%</span></div>
            <div className="stat-label">First-Pass Review Rate</div>
          </div>
        </div>

        <div className="section-header">
          <div className="section-label">Our Work</div>
          <div className="section-title">6 Case Studies. Multiple Industries.<br/>One Standard of Excellence.</div>
        </div>

        <div className="filter-bar">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter.toLowerCase().replace(/ /g, '-') || (filter === 'All Projects' && activeFilter === 'all') ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter === 'All Projects' ? 'all' : filter.toLowerCase().replace(/ /g, '-'))}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="cases-grid">
          {caseStudies.map((study) => (
            <a
              key={study.id}
              href="#"
              className={`case-card ${study.featured ? 'span-full' : ''} ${study.lineColor ? `${study.lineColor}-line` : ''}`}
              style={study.comingSoon ? { opacity: 0.55, pointerEvents: 'none' } : undefined}
            >
              <div className="card-layout">
                <div>
                  <div className="card-eyebrow">
                    {study.tags.map((tag, i) => (
                      <span key={i} className={`tag tag-${tag.toLowerCase().includes('coming') ? 'purple' : tag.toLowerCase().includes('speech') || tag.toLowerCase().includes('saas') ? 'blue' : tag.toLowerCase().includes('iot') ? 'green' : tag.toLowerCase().includes('retail') ? 'orange' : 'blue'}`}>
                        {tag}
                      </span>
                    ))}
                    {!study.comingSoon && <span className="card-num">Case Study 0{study.id}</span>}
                  </div>
                  <div className="client-name">{study.client}</div>
                  <h2>{study.title}</h2>
                  <p className="card-summary">{study.summary}</p>
                  {study.impacts && (
                    <div className="impact-list">
                      {study.impacts.map((impact, i) => (
                        <div key={i} className="impact-item">
                          <div className={`impact-dot ${study.lineColor === 'purple' ? 'purple' : study.lineColor === 'green' ? 'green' : study.lineColor === 'orange' ? 'orange' : ''}`}></div>
                          <span>{impact}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {study.metrics && (
                    <div className="metrics-row">
                      {study.metrics.map((metric, i) => (
                        <div key={i}>
                          <div className={`metric-val ${metric.color}`}>{metric.value}</div>
                          <div className="metric-desc">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <span className={`cta-link ${study.lineColor === 'purple' ? 'purple' : study.lineColor === 'green' ? 'green' : study.lineColor === 'orange' ? 'orange' : ''}`}>
                    {study.comingSoon ? 'Coming Soon' : 'Read Full Case Study →'}
                  </span>
                </div>
                {study.chips && (
                  <div className="card-aside">
                    {study.chips.map((chip, i) => (
                      <div key={i} className={`chip ${study.lineColor === 'purple' ? 'purple' : study.lineColor === 'green' ? 'green' : study.lineColor === 'orange' ? 'orange' : ''}`}>
                        {chip}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        <div className="divider-label">Quality Benchmarks</div>
        <div className="benchmarks">
          <div className="benchmarks-inner">
            <div>
              <div className="section-label">Accuracy We Maintain</div>
              <div className="bench-title">Data Quality Standards<br/>Across All Deliverables</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '12px' }}>
                Every dataset is held to strict quality benchmarks - verified through multi-stage QA frameworks and continuous annotator feedback loops.
              </p>
            </div>
            <div className="bar-rows">
              <div className="bar-row">
                <span className="bar-label">Segmentation Accuracy</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: '98%' }}></div></div>
                <span className="bar-pct">{"<"}98%</span>
              </div>
              <div className="bar-row">
                <span className="bar-label">Speaker and Audio Event Accuracy</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: '95%' }}></div></div>
                <span className="bar-pct">{"<"}95%</span>
              </div>
              <div className="bar-row">
                <span className="bar-label">Transcription Accuracy</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: '90%' }}></div></div>
                <span className="bar-pct">{"<"}90%</span>
              </div>
              <div className="bar-row">
                <span className="bar-label">First-Pass Annotation Review</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: '100%' }}></div></div>
                <span className="bar-pct">100%</span>
              </div>
              <div className="bar-row">
                <span className="bar-label">Quality Sampling Audits</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: '20%' }}></div></div>
                <span className="bar-pct">20%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-band">
          <h3>Ready to Build Your<br/><em>AI Training Dataset?</em></h3>
          <div className="btn-group">
            <a href="https://xtransmatrix.com/contact" className="btn-primary">Talk to Our Team</a>
          </div>
        </div>

        <footer>
          <span>© 2026 xTransMatrix. All rights reserved.</span>
          <span>AI Data Annotation · Validation · Evaluation</span>
        </footer>
      </div>
    </>
  );
};

export default Pricing;
