import React from "react";

const PerformAISection: React.FC = () => {
  return (
    <section className="bg-[#0a0214] text-white font-sans">
     
      <div
        className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4 bg-fixed"
        style={{
          backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/Menu_Services/Human_in_Loop/1.png?')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 uppercase">Human-in-the-Loop AI</h1>
      </div>

      
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3">
          <h2 className="text-xl md:text-2xl font-bold">
            Human-in-the-Loop: Accelerating AI{" "}
            <span className="text-purple-400">Performance and Efficiency</span>
          </h2>
          <p className="text-gray-300 mt-4 text-justify">
            We empower your AI initiatives through a dedicated Human-in-the-Loop (HITL) workforce of skilled AI Operators, AI Trainers, Prompt Engineers, and Data Annotators — all committed to elevating AI performance and ensuring rapid, reliable training cycles.
          </p>
          <p className="text-gray-300 mt-4 text-justify">
            Our experts deliver precise data annotation, detailed data tagging, intelligent prompt design, and custom supervision workflows — providing the high-quality labeled data and human feedback essential for next-generation AI Solutions as a Service.
          </p>
          <p className="text-gray-300 mt-4 text-justify">
            By applying cutting-edge methodologies and industry-leading best practices, we optimize every model for accuracy, scalability, and operational efficiency.          
            </p>
          <p className="text-gray-300 mt-4 text-justify">
            Operating from our state-of-the-art centers in Bangalore and Mangalore, we harness top local talent and advanced infrastructure to deliver agile, high-impact HITL solutions that adapt to the fast-changing demands of digital transformation.
          </p>
           <p className="text-gray-300 mt-4 text-justify">
               At xTransMatrix, we transform your AI vision into a high-performance reality — combining the power of automation with the insight of skilled human expertise, ensuring your business stays ahead in the world of intelligent automation and data-driven decision-making.     
            </p>
          <a href="/performai_learnmore">
          <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all duration-300 text-white font-semibold rounded-full flex items-center">
            Learn more →
          </button>
          </a>
        </div>

    
        <div className="md:w-1/3 flex justify-center">
          <img
            src="https://ik.imagekit.io/lrxrnuqog/Menu_Services/Human_in_Loop/2.png?"
            alt="Illustration showcasing AI performance"
            className="w-64 md:w-72 rounded-lg hover:shadow-lg transition-shadow duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default PerformAISection;
