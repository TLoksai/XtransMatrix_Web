import React from "react";

const ForgeAISection: React.FC = () => {
  return (
    <section className="bg-[#0a0214] text-white font-sans">
 
      <div
        className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4 bg-fixed"
        style={{
          backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/Menu_Services/forge-ai/1.png?')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 uppercase">Forge AI</h1>
      </div>


      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3">
          <h2 className="text-xl md:text-2xl font-bold">
            Transforming Ideas into MVPs at{" "}
            <span className="text-purple-400">Lightning Speed</span>
          </h2>
          <p className="text-gray-300 mt-4 text-justify">
            We empower startups and funded tech companies to rapidly transform
            innovative ideas into market-ready MVPs. Our agile, product-centric
            small teams leverage advanced AI-enabled tools that integrate the
            power of Data Analytics, Generative AI (Gen AI), and frameworks like
            Retrieval-Augmented Generation (RAG), alongside various flavors of
            Language Learning Models (LLMs) and Specialized Language Models
            (SLMs). Recognizing that the future of teams will be increasingly
            compact—thanks to the rise of intelligent agents and AI
            enablement—we collaborate closely with our clients using highly
            specialized, small teams to maximize value. This comprehensive,
            technology-driven approach accelerates the journey from idea to
            stage, enabling early, data-driven decision-making and ensuring
            every iteration is optimized for success. With Forge AI, you gain
            the speed, flexibility, and innovative technology required to bring
            your vision to life—faster and smarter than ever before.
          </p>
          <a href="/forgeai_learnmore">
          <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all duration-300 text-white font-semibold rounded-full flex items-center">
            Learn more →
          </button>
          </a>
        </div>


        <div className="md:w-1/3 flex justify-center">
          <img
            src="https://ik.imagekit.io/lrxrnuqog/Menu_Services/forge-ai/2.png?"
            alt="Forge AI"
            className="w-64 md:w-72 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ForgeAISection;
