import React from "react";

const MedTechSection: React.FC = () => {
  return (
    <section className="bg-[#0a0214] text-white font-inter">
   
      <div
        className="relative w-full h-[500px] flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4"
        style={{
          backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/Industries/Med_Tech/1.png?')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 uppercase">MedTech</h1>
      </div>


      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16">
       
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold">
              Empowering AI for{" "}
              <span className="text-purple-400">Smarter Healthcare</span> Operations
            </h2>
            <p className="text-gray-300 mt-4 text-justify">
              At XTMX, we specialize in AI training through advanced voice and
              prompt-based interactions, ensuring seamless integration into
              med-tech operations. Our expert AI Operators bring together
              cutting-edge technology and HIPAA-compliant processes to enhance
              efficiency in benefit verification and healthcare automation.
            </p>
            <p className="text-gray-300 mt-4 text-justify">
              Partnering with leading organizations, we ensure that AI systems
              are trained with precision, compliance, and real-world expertise,
              allowing for smarter, faster, and more secure solutions in the
              medical technology industry.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full flex items-center">
              Learn more →
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://ik.imagekit.io/lrxrnuqog/Industries/Med_Tech/2.png?"
              alt="Healthcare AI"
              className="w-64 md:w-72"
            />
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="md:w-2/3">
            <h3 className="text-lg md:text-xl font-semibold">
              Why Choose <span className="text-purple-400">Xtransmatrix MedTech?</span>
            </h3>

            <ul className="list-disc text-gray-300 mt-6 space-y-3 pl-6 text-justify">
              <li>
                <span className="text-white font-semibold">
                  Med-Tech Industry Experts:
                </span>{" "}
                Our AI Operators understand the nuances of healthcare operations.
              </li>
              <li>
                <span className="text-white font-semibold">
                  HIPAA-Compliant AI Trainers:
                </span>{" "}
                We prioritize security and compliance in every process.
              </li>
              <li>
                <span className="text-white font-semibold">
                  Seamless AI-Human Collaboration:
                </span>{" "}
                Our team ensures AI learns directly from real-world interactions.
              </li>
              <li>
                <span className="text-white font-semibold">
                  Efficiency & Accuracy:
                </span>{" "}
                We help AI models evolve to provide reliable and precise automation.
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://ik.imagekit.io/lrxrnuqog/Industries/Med_Tech/3.png?"
              alt="Why Choose MedTech"
              className="w-64 md:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedTechSection;
