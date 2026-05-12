import React from "react";

const XtmxIntelligenceSection: React.FC = () => {
  return (
    <section className="bg-[#080412] text-white font-inter">
      
      <div
        className="relative w-full h-[300px] flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4"
        style={{
          backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/Intelligence/XTMX/1.png?')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#080412] bg-opacity-40" />
        <h1 className="relative z-10 uppercase">XTMX Intelligence</h1>
      </div>

     4r
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16">
      
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold">
            Welcome to <span className="text-purple-400">Xtransmatrix Intelligence</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold">
              Revolutionizing Intelligence Through{" "}
              <span className="text-purple-400">Agile, Chain-Intelligent SMEs</span>
            </h2>
            <p className="text-gray-300 mt-4 text-justify">
              At Xtransmatrix Intelligence, we embrace a new-age agile approach powered by interconnected 
              Small and Medium Enterprises (SMEs). Our vision is to create a dynamic, adaptive ecosystem 
              that fosters innovation, efficiency, and seamless intelligence sharing.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full flex items-center">
              Learn more →
            </button>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            <iframe
              src="https://my.spline.design/tesseractcopy-d41e7195f665011680c021d1a853ee50/"
              className="w-full max-w-[400px] md:max-w-[500px] h-[350px] md:h-[450px] border-none"
              allowFullScreen
            ></iframe>
          </div>

        </div>

       
        <div className="text-center mt-16">
          <h3 className="text-lg md:text-xl font-semibold">
            Our Approach: Chain-Intelligent SMEs
          </h3>
          <p className="text-gray-300 mt-4 text-justify">
            We believe in breaking down silos and creating a collaborative framework where multiple SMEs 
            contribute specialized expertise. This chain-intelligent approach ensures:
          </p>

          <ul className="list-disc text-gray-300 mt-6 space-y-3 pl-6 text-justify mx-auto max-w-3xl">
            <li>
              <span className="text-white font-semibold">Agility & Flexibility:</span>{" "}
              Rapid adaptation to evolving industry needs.
            </li>
            <li>
              <span className="text-white font-semibold">Scalability:</span>{" "}
              A decentralized yet interconnected system enabling seamless growth.
            </li>
            <li>
              <span className="text-white font-semibold">Innovation & Specialization:</span>{" "}
              Each SME focuses on core competencies, driving continuous improvement.
            </li>
          </ul>
        </div>

      
        <div className="flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="md:w-2/3">
            <h3 className="text-lg md:text-xl font-semibold">
              Why Choose <span className="text-purple-400">Xtransmatrix Intelligence?</span>
            </h3>

            <ul className="list-disc text-gray-300 mt-6 space-y-3 pl-6 text-justify">
              <li>
                <span className="text-white font-semibold">Intelligent Collaboration:</span>{" "}
                We leverage the collective intelligence of SMEs to provide holistic solutions.
              </li>
              <li>
                <span className="text-white font-semibold">Agile & Adaptive Execution:</span>{" "}
                Our modular system allows us to respond to industry shifts in real time.
              </li>
              <li>
                <span className="text-white font-semibold">Smart Automation & AI-Driven Insights:</span>{" "}
                We integrate AI-driven intelligence with human expertise.
              </li>
            </ul>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://ik.imagekit.io/lrxrnuqog/Intelligence/XTMX/3.png?"
              alt="Why Choose XTMX Intelligence"
              className="w-64 md:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default XtmxIntelligenceSection;
