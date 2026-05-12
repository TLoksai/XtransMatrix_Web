import React from "react";

const AutomobileSection: React.FC = () => {
  return (
    <section className="bg-[#0a0214] text-white font-inter">

      <div
       className="relative w-full h-[600px] flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4 -mt-4"
       style={{
         backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/Industries/AutoMobile/1.png?')",
         backgroundSize: "contain", 
         backgroundPosition: "center center",
         backgroundRepeat: "no-repeat",
         backgroundAttachment: "fixed", 
       }}
       
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 uppercase">Automobile</h1>
      </div>

      
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16">
   
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold">
              Expert Guidance for{" "}
              <span className="text-purple-400">Automotive Excellence</span>
            </h2>
            <p className="text-gray-300 mt-4 text-justify">
              At XTRANSMATRIX, we provide comprehensive strategic services for the automobile
              industry, supporting global manufacturers like Volkswagen in streamlining operations,
              improving efficiency, and ensuring compliance with industry regulations.
            </p>
            <p className="text-gray-300 mt-4 text-justify">
              Our expertise helps automotive companies enhance production processes, reduce costs,
              and navigate complex market challenges while maintaining high standards of quality
              and performance.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full flex items-center">
              Learn more →
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://ik.imagekit.io/lrxrnuqog/Industries/AutoMobile/2.png?"
              alt="Automobile Strategy"
              className="w-64 md:w-72"
            />
          </div>
        </div>

        
        <div className="text-center mt-16">
          <h3 className="text-lg md:text-xl font-semibold">
            Our Strategic Guidance
          </h3>
          <p className="text-gray-300 mt-4 text-justify">
            With a deep understanding of the automotive sector, we help manufacturers stay
            competitive by ensuring operational excellence and regulatory compliance.
          </p>

          <ul className="list-disc text-gray-300 mt-6 space-y-3 pl-6 text-justify">
            <li>
              <span className="text-white font-semibold">
                Manufacturing Process Optimization:
              </span>{" "}
              Improving production efficiency, reducing costs, and ensuring quality control.
            </li>
            <li>
              <span className="text-white font-semibold">
                Supply Chain & Logistics Management:
              </span>{" "}
              Streamlining procurement, inventory, and distribution for seamless operations.
            </li>
            <li>
              <span className="text-white font-semibold">
                Regulatory & Compliance Support:
              </span>{" "}
              Ensuring adherence to industry regulations, safety standards, and environmental policies.
            </li>
            <li>
              <span className="text-white font-semibold">
                Market Strategy & Expansion:
              </span>{" "}
              Assisting in market entry, competitive analysis, and business growth strategies.
            </li>
            <li>
              <span className="text-white font-semibold">
                Operational Excellence & Cost Reduction:
              </span>{" "}
              Identifying inefficiencies and implementing cost-saving measures.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AutomobileSection;
