import React from "react";

const InsuranceSection: React.FC = () => {
  return (
    <section className="bg-[#0a0214] text-white font-inter">
    
      <div
  className="relative w-full h-[500px] flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4"
  style={{
    backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/Industries/Insurance/1.png?')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", 
  }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 uppercase">Insurance</h1>
      </div>

     
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16">
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold">
              Strategic Expertise for a{" "}
              <span className="text-purple-400">Resilient Future</span>
            </h2>
            <p className="text-gray-300 mt-4 text-justify">
              At XTRANSMATRIX, we provide expert consultancy services for the
              insurance industry, assisting leading insurers in streamlining
              operations, ensuring regulatory compliance, and enhancing risk
              management. Our deep industry expertise helps insurance providers
              optimize claims processing, improve customer experience, and adopt
              digital solutions for seamless policy management.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full flex items-center">
              Learn more →
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://ik.imagekit.io/lrxrnuqog/Industries/Insurance/2.png?"
              alt="Insurance Strategy"
              className="w-64 md:w-72"
            />
          </div>
        </div>

       
        <div className="text-center mt-16">
          <h3 className="text-lg md:text-xl font-semibold">
            Our Strategic Guidance
          </h3>
          <p className="text-gray-300 mt-4 text-justify">
            With a strategic and technology-driven approach, we help insurance
            companies improve operational efficiency, reduce risks, and provide
            better financial protection to their customers.
          </p>

          <ul className="list-disc text-gray-300 mt-6 space-y-3 pl-6 text-justify mx-auto max-w-3xl">
            <li>
              <span className="text-white font-semibold">
                Regulatory & Compliance Mastery:
              </span>{" "}
              Navigate evolving insurance regulations with confidence, ensuring
              full compliance and industry best practices.
            </li>
            <li>
              <span className="text-white font-semibold">
                Seamless Claims Processing:
              </span>{" "}
              Accelerate claims settlements, enhance fraud detection, and
              improve accuracy for a hassle-free customer experience.
            </li>
            <li>
              <span className="text-white font-semibold">
                Advanced Risk & Underwriting Solutions:
              </span>{" "}
              Strengthen risk assessment models and optimize policy pricing for
              smarter, more profitable decision-making.
            </li>
            <li>
              <span className="text-white font-semibold">
                AI-Powered Digital Transformation:
              </span>{" "}
              Leverage cutting-edge automation and AI-driven solutions to
              streamline policy management and enhance customer interactions.
            </li>
            <li>
              <span className="text-white font-semibold">
                Strategic Market Growth:
              </span>{" "}
              Expand into new territories with data-driven strategies that
              enhance service offerings and increase market share.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
