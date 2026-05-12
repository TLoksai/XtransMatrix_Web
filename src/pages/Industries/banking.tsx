import React from "react";

const BankingPaymentsSection: React.FC = () => {
  return (
    <section className="bg-[#0a0214] text-white font-inter">
     
      <div
        className="relative w-full h-[400px] flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4"
        style={{
          backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/Industries/Banking_and_Payment/1.png?')",
          backgroundAttachment: "fixed", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 uppercase">Banking and Payments</h1>
      </div>

   
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16">
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold">
              Strategic Guidance for{" "}
              <span className="text-purple-400">Financial Excellence</span>
            </h2>
            <p className="text-gray-300 mt-4 text-justify">
              At XTRANSMATRIX, we offer expert consultancy services to banking
              and payment providers, helping them optimize operations, ensure
              regulatory compliance, and adopt modern digital payment
              solutions. Our deep financial industry knowledge enables
              institutions to enhance customer experiences, secure transactions,
              and achieve operational excellence in a competitive market.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full flex items-center">
              Learn more →
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://ik.imagekit.io/lrxrnuqog/Industries/Banking_and_Payment/2.png?"
              alt="Financial Growth"
              className="w-64 md:w-72"
            />
          </div>
        </div>

   
        <div className="text-center mt-16">
          <h3 className="text-lg md:text-xl font-semibold">
            Our Strategic Guidance
          </h3>
          <p className="text-gray-300 mt-4 text-justify">
            We provide cutting-edge insights to help financial institutions
            adopt new technologies, enhance security, and expand their market
            reach.
          </p>

          <ul className="list-disc text-gray-300 mt-6 space-y-3 pl-6 text-justify mx-auto max-w-3xl">
            <li>
              <span className="text-white font-semibold">
                Compliance & Regulatory Support:
              </span>{" "}
              Navigate complex regulations to maintain compliance and ensure
              operational continuity.
            </li>
            <li>
              <span className="text-white font-semibold">
                Payment Innovation:
              </span>{" "}
              Implement advanced digital payment solutions to meet modern
              customer demands and enhance transaction speed.
            </li>
            <li>
              <span className="text-white font-semibold">
                Cybersecurity & Fraud Prevention:
              </span>{" "}
              Strengthen security protocols and adopt AI-driven fraud detection
              systems for secure transactions.
            </li>
            <li>
              <span className="text-white font-semibold">
                Customer-Centric Experiences:
              </span>{" "}
              Optimize user journeys with data-driven insights to improve
              banking services and satisfaction.
            </li>
            <li>
              <span className="text-white font-semibold">
                Strategic Growth & Expansion:
              </span>{" "}
              Identify new market opportunities and expand services with
              tailored financial strategies.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BankingPaymentsSection;
