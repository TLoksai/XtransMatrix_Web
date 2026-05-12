import { useState } from "react";
import { Link } from "react-router";

// ── Floating grid background ──────────────────────────────────────────────────
const GridBg = () => (
  <div className="pointer-evextents-none fixed inset-0 z-0 overflow-hidden">
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(139,92,246,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.07) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
      className="absolute inset-0"
    />
    <div
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(109,40,217,0.18) 0%, transparent 70%)",
      }}
      className="absolute inset-0"
    />
  </div>
);

// ── Hero Section ──────────────────────────────────────────────────────────────
const Hero = () => (
  <section className="relative z-10 overflow-hidden">
    {/* Background hero.png */}
    <div
      className="relative h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay hero_rec.png - full screen */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero_rec.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Text overlay */}
      <div className="relative z-10 text-center px-4">
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          style={{ fontFamily: "'Sora', 'Orbitron', sans-serif", letterSpacing: "-0.02em" }}
        >
          Flexible Services & Scalable<br />
          <span>Engagements</span>
        </h1>
      </div>
    </div>
  </section>
);

// ── Tagline Bar ───────────────────────────────────────────────────────────────
const TaglineBar = () => {
  const items = [
    "Transparent Pricing",
    "Scalable Execution",
    "Enterprise-Ready Delivery",
  ];
  return (
    <div className="relative z-10 flex flex-col items-center py-10 px-4">
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {items.map((t, i) => (
          <span key={t} className="flex items-center gap-2">
            <span
              className="text-xl md:text-2xl font-bold text-white"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {t}
            </span>
            {i < items.length - 1 && (
              <span className="text-purple-400 font-bold text-xl">→</span>
            )}
          </span>
        ))}
      </div>
      <p className="text-gray-300 text-center text-sm md:text-base max-w-2xl leading-relaxed mb-6">
        Choose the Xtransmatrix model that fits your AI initiatives. We offer specialized human-in-the-loop services and flexible engagement models to accelerate your AI development — from data annotation and validation to evaluation workflows and production-ready dataset pipelines.
      </p>
    </div>
  );
};

// ── Services Card ─────────────────────────────────────────────────────────────
const ServicesCard = () => (
  <section className="relative z-10 px-4 pb-16 flex justify-center">
    <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* xTransMatrix Services Card */}
      <div
        className="rounded-2xl p-6 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/box.png')",
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          boxShadow: "0 0 40px rgba(109,40,217,0.2)",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0" />
        
        <div className="relative z-10">
          <h2
            className="text-xl font-bold text-white mb-3"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            xTransMatrix Services
          </h2>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            Built for AI teams, startups, and research labs, xTransMatrix delivers
            high-quality AI <span style={{ color: "#517AF5" }}>data operations, evaluation pipelines</span> and <span style={{ color: "#517AF5" }}>human-in-the-loop validation</span> powered by expert AI trainers and scalable workflows.
          </p>
          <p className="text-gray-300 text-sm font-semibold mb-2">
            Flexible service models designed for AI development:
          </p>
          <ul className="text-gray-300 text-sm space-y-2 mb-6">
            {[
              "End-to-end data annotation, validation, and evaluation workflows",
              "Managed Human-In-the-Loop (HITL) AI operations",
              "Access to trained AI data specialists and domain experts",
              "SOP-driven quality assurance and dataset governance",
              "Scalable execution with volume-based pricing",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-purple-400 mt-0.5 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="w-full py-2.5 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 block text-center"
            style={{
              background: "linear-gradient(90deg, #7c3aed, #6366f1)",
              boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Platform Subscription Card */}
      <div
        className="rounded-2xl p-6 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/box.png')",
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          boxShadow: "0 0 40px rgba(109,40,217,0.2)",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0" />

        <div className="relative z-10">
          <h2
            className="text-xl font-bold text-white mb-3"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Platform Subscription
          </h2>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            Ideal for enterprises and AI teams building reliable data pipelines and AI training infrastructure, xTransMatrix supports the full life cycle of AI data preparation and evaluation.
          </p>
          <p className="text-gray-300 text-sm font-semibold mb-2">
            AI data infrastructure designed for production-grade models:
          </p>
          <ul className="text-gray-300 text-sm space-y-2 mb-6">
            {[
              "Multimodal data annotation (text, image, video, speech, documents)",
              "Model evaluation and dataset validation frameworks",
              "Human-in-the-Loop feedback loops for continuous model improvement",
              "Integration with existing ML pipelines and annotation tools",
              "Dedicated technical and project support",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-purple-400 mt-0.5 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Coming Soon button */}
          <button
            className="w-full py-2.5 rounded-lg text-white font-semibold text-sm transition-all duration-200"
            style={{
              background: "linear-gradient(90deg, #7c3aed, #6366f1)",
              boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
            }}
          >
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  </section>
);

// ── Section Divider ───────────────────────────────────────────────────────────
interface SectionDividerProps {
  children: React.ReactNode;
}

const SectionDivider = ({ children }: SectionDividerProps) => (
  <div className="relative z-10 px-4 pb-8">
    <h2
      className="text-2xl md:text-3xl font-bold text-white text-center mb-2"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      {children}
    </h2>
    <div
      className="mx-auto mt-4 h-px w-2/3"
      style={{
        background: "#B296F1",
      }}
    />
  </div>
);

// ── Services Grid ─────────────────────────────────────────────────────────────
interface ServiceData {
  icon: string;
  title: string;
  subtitle: string;
  bullets: string[];
  side: "left" | "right";
}

const servicesData: ServiceData[] = [
  {
    icon: "⚡",
    title: "Core Data Services",
    side: "left",
    subtitle:
      "Cost-efficient AI data services powered by trained annotators for standard Computer Vision, NLP, speech, and multilingual datasets.",
    bullets: [
      "Image, video, text, and document annotation",
      "Structured data validation and dataset preparation",
      "Scalable execution for large AI datasets",
    ],
  },
  {
    icon: "⚡",
    title: "Expert AI Training Services",
    side: "right",
    subtitle:
      "Specialized AI trainers and domain experts for advanced model training, evaluation, and post-training workflows.",
    bullets: [
      "RLHF and model evaluation workflows",
      "Complex dataset curation and validation",
      "Domain-specific annotation for high-accuracy models",
    ],
  },
  {
    icon: "⚡",
    title: "Xtransmatrix Talent Network",
    side: "left",
    subtitle:
      "Access and collaborate directly with skilled AI data specialists and annotators to scale your internal AI data operations.",
    bullets: [
      "Hire experts for project-based engagements",
      "Build dedicated annotation teams",
      "Extend your in-house AI data pipeline",
    ],
  },
];

const ServiceCard = ({ title, subtitle, bullets, side }: Omit<ServiceData, "icon">) => (
  <div
    className={`flex ${side === "right" ? "justify-end" : "justify-start"} px-8 md:px-32 mb-10`}
  >
    <div
      className="max-w-xl w-full rounded-xl p-6"
      style={{ background: "transparent" }}
    >
      <div className="flex items-center gap-2 mb-2">
        <img
          src="/images/game-icons_electric.png"
          alt="icon"
          className="w-10 h-10"
        />
        <h3
          className="text-base font-bold"
          style={{ 
            fontFamily: "'Sora', sans-serif",
            color: "#B296F1"
          }}
        >
          {title}
        </h3>
      </div>
      <p className="text-gray-300 text-sm mb-3 leading-relaxed font-semibold">
        {subtitle}
      </p>
      <ul className="text-gray-300 text-sm space-y-1">
        {bullets.map((b: string) => (
          <li key={b} className="flex gap-2">
            <span style={{ color: "#7F60ED" }}>•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// ── Custom Pricing CTA ────────────────────────────────────────────────────────
const CustomPricingCTA = () => (
  <section className="relative z-10 px-4 py-16 flex justify-center">
    <div
      className="max-w-md w-full rounded-2xl py-16 px-8 text-center relative overflow-hidden border pt-24"
      style={{
        background: "linear-gradient(135deg, #1a1040 0%, #130d30 100%)",
        borderColor: "rgba(139,92,246,0.35)",
        boxShadow: "0 0 50px rgba(109,40,217,0.25)",
      }}
    >
      {/* Coming soon ribbon */}
      <div
        className="absolute top-8 left-[-45px] -rotate-45 px-10 py-1 text-xs font-bold text-white"
      >
        Coming Soon
      </div>

      <div className="mb-6">
        <img
          src="/images/infinity.png"
          alt="Infinity"
          className="w-12 h-8 mx-auto"
        />
      </div>

      <h2
        className="text-2xl  mb-3"
        style={{
          fontFamily: "'Sora', sans-serif",
          background: "linear-gradient(90deg, #a78bfa, #818cf8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Custom Pricing for your scale
      </h2>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        Tell us about your data operations and we'll build a tailored plan with
        SLA-backed delivery and dedicated support.
      </p>
      <button
        className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{
          background: "linear-gradient(90deg, #7c3aed, #6366f1)",
          boxShadow: "0 4px 20px rgba(124,58,237,0.45)",
        }}
      >
        Request Custom Quote
      </button>
    </div>
  </section>
);

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqData = [
  {
    q: "How is pricing determined?",
    a: "Pricing is based on the volume of data-rows processed, the modality (text, image, video, audio), and the complexity of the annotation or validation task. Contact us for a custom quote.",
  },
  {
    q: "Can I upgrade my plan anytime?",
    a: "Yes. You can upgrade from Starter to Growth or Enterprise at any time. Your existing work and configurations carry over seamlessly.",
  },
  {
    q: "Do you support RLHF workflows?",
    a: "Yes. Our Enterprise plan includes dedicated RLHF validation pipelines with expert annotators trained to evaluate and rank model responses for fine-tuning.",
  },
  {
    q: "Is my data secure?",
    a: "Enterprise plans include security and compliance workflows with strict data handling policies. We support NDA agreements and custom compliance requirements.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative z-10 px-4 pb-20 max-w-6xl mx-auto">
      <p
        className="text-purple-400 text-xl font-bold mb-2"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        -FAQ
      </p>
      <p
        className="text-white text-lg font-semibold mb-6"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        Common Questions
      </p>
      <div
        className="space-y-3"
      >
        {faqData.map((item, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden cursor-pointer"
            style={{
              backgroundImage: "url('/images/faq-bg.png')",
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              borderColor:
                open === i ? "rgba(139,92,246,0.5)" : "rgba(139,92,246,0.15)",
              transition: "border-color 0.2s",
            }}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span
                className="text-white text-sm font-semibold"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {item.q}
              </span>
              <span
                className="text-purple-400 text-xl font-bold select-none ml-4 shrink-0"
                style={{
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.2s",
                  display: "inline-block",
                }}
              >
                +
              </span>
            </div>
            {open === i && (
              <div className="px-5 pb-4">
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// ── Page Root ─────────────────────────────────────────────────────────────────
export default function XTransMatrixPage() {
  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        background: "#080815",
        fontFamily: "'Sora', 'Inter', sans-serif",
      }}
    >
      {/* Google Font */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');`}</style>

      <GridBg />
      <Hero />
      <TaglineBar />
      <ServicesCard />

      <SectionDivider>
        Choose an xTransMatrix <span style={{ color: "#7F60ED" }}>service and collaborate</span> with expert AI data specialists
      </SectionDivider>

      <div className="relative z-10 pt-2">
        {servicesData.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>

      <CustomPricingCTA />
      <FAQ />
    </div>
  );
}