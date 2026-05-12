import React from "react";

const AdvisoryAndAIRiskManagement: React.FC = () => {
  return (
    <section className="bg-[#0a0214] text-white font-sans">

      <div
        className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4 bg-fixed"
        style={{
          backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/Menu_Services/advisory/1.png?')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 uppercase">Advisory & AI Risk Management</h1>
      </div>

    
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16">
        
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold">
              Project to <span className="text-purple-400">Product Transformation</span>
            </h2>
            <p className="text-gray-300 mt-4 text-justify">
              At xTRansmatrix, our Advisory Services help organizations shift from a traditional
              project mindset to a dynamic, product-centric approach. Leveraging our proven Framework
              of Product Capability Setup—successfully implemented in large multinational
              corporations—we empower your teams to build robust product ecosystems that
              drive continuous innovation and growth. Through our sister concern, WeCollab
              Consulting, and our comprehensive Build-Operate-Transfer model, we guide your
              transformation journey, ensuring operational excellence and a seamless shift to
              a product mindset for lasting competitive advantage.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full">
              Learn more →
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img src="https://ik.imagekit.io/lrxrnuqog/Menu_Services/advisory/2.png?" alt="Product Transformation" className="w-64 md:w-72 rounded-lg" />
          </div>
        </div>

   
        <div className="flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold"><br/><br/>
              Digital Presence Navigator – Elevating Your <span className="text-purple-400">Digital Experience</span>
            </h2>
            <p className="text-gray-300 mt-4 text-justify">
              Our Digital Presence Navigator advisory service is designed to empower startups and
              established companies alike by transforming their digital footprint. We guide you through a
              comprehensive customer journey mapping process to identify key touchpoints and uncover
              opportunities for engagement. By leveraging cutting-edge UX design principles, our expert
              team crafts intuitive, visually compelling digital experiences that resonate with your
              audience and drive meaningful conversions. With our tailored approach, we ensure your brand’s
              digital presence not only captivates users but also strategically supports your business growth
              in today’s competitive marketplace.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full">
              Learn more →
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img src="https://ik.imagekit.io/lrxrnuqog/Menu_Services/advisory/3.png?" alt="AI Team Agility" className="w-64 md:w-72 rounded-lg" />
          </div>
        </div>
      </div>

 
      <div className="bg-[#0a0214] text-white py-16 px-6 md:px-12">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-3/5">
            <h1 className="text-3xl md:text-2xl font-bold">
              AI Enabled <span className="text-purple-400">Product & Team Agility</span>
            </h1>
            <p className="text-gray-300 mt-4 text-lg leading-relaxed text-justify">
              At WeCollab xTRansmatrix’s Sister concern, our AI Enabled Product & Team Agility Advisory service
              empowers organizations to revolutionize their product development and operational frameworks.
              We specialize in setting up nimble, AI-enabled product ecosystems paired with compact, agile squads
              that drive rapid innovation. Leveraging our deep expertise and proven methodologies, our experienced
              consultants guide you through the transformation journey—integrating advanced AI tools, refining agile
              practices, and cultivating a robust product-centric mindset.
            </p>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <img src="https://ik.imagekit.io/lrxrnuqog/Menu_Services/advisory/4.png?" alt="AI Risk Management" className="w-64 md:w-80" />
          </div>
        </div>

    
        <div className="max-w-screen-lg mx-auto mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Our service offerings include</h2>
          <ul className="mt-6 text-gray-300 space-y-4 text-lg">
            <li>
              <span className="font-semibold">• Enterprise AI Risk Management Consultation:</span> Assess your
              organization's AI impact, governance, and security risks...
            </li>
            <li>
              <span className="font-semibold">• Responsible AI Usage Training and Advisory:</span> Equip your workforce
              with the knowledge to use AI safely and ethically...
            </li>
            <li>
              <span className="font-semibold">• AI Red Teaming and Security Services:</span> Utilize our specialized
              expertise in LLM security to conduct rigorous red teaming exercises...
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryAndAIRiskManagement;
