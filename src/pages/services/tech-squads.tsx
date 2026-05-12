import React from "react";

const TechSquadsAndExpertise: React.FC = () => {
  return (
    <section className="bg-[#0a0214] text-white font-inter">
   
      <div
        className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4 bg-fixed"
        style={{
          backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/Menu_Services/tech-squads/1.png?')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 uppercase">Tech Squads</h1>
      </div>

  
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16">
        <h2 className="text-xl md:text-2xl font-bold text-center">
          Empowering Tech Dreams Through <span className="text-purple-400">Agile Collaboration</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
          <div className="md:w-2/3">
            <p className="text-gray-300" style={{ textAlign: "justify" }}>
              At XTRANSMATRIX, our TECH SQUADS are purpose-driven teams comprising 3 to 10 members, carefully assembled to drive innovation and deliver measurable value. Each squad is built on a balanced pyramid that blends the energy and creativity of young minds with the deep expertise of seasoned tech professionals.
            </p>
            <p className="text-gray-300 mt-4" style={{ textAlign: "justify" }}>
              Guided by visionary tech mentors and dynamic change agents, we refer to these teams as Innoterns—innovators working hand-in-hand with change agents to help our customers realize their tech dreams.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img src="https://ik.imagekit.io/lrxrnuqog/Menu_Services/tech-squads/2.png?" alt="Tech Squads" className="w-64 md:w-72" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mt-12">
          <div className="md:w-2/3">
            <p className="text-gray-300" style={{ textAlign: "justify" }}>
              Operating from Bangalore—the Silicon Valley of India—and Mangalore, our TECH SQUADS are strategically established to provide the right mix of skills, agility, and insight.
            </p>
            <p className="text-gray-300 mt-4" style={{ textAlign: "justify" }}>
              This dual-location approach ensures that we consistently deliver cutting-edge solutions and exceptional value, empowering organizations to transform their technology landscape with confidence.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img src="https://ik.imagekit.io/lrxrnuqog/Menu_Services/tech-squads/3.png?" alt="Tech Squads" className="w-64 md:w-72" />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full flex items-center">
            Learn more →
          </button>
        </div>
      </div>

   
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16">
        <h2 className="text-xl md:text-2xl font-bold" style={{ textAlign: "justify" }}>
          We harness the power of cutting-edge technologies to drive innovation and deliver transformative solutions.
        </h2>
        <h3 className="text-lg md:text-xl font-semibold mt-2" style={{ textAlign: "justify" }}>Our expertise spans</h3>

        <ul className="list-disc text-gray-300 mt-6 space-y-3 pl-6">
          <li style={{ textAlign: "justify" }}>
            <span className="text-white font-semibold">Artificial Intelligence (AI):</span> Leveraging intelligent systems to automate, optimize, and innovate across business functions.
          </li>
          <li style={{ textAlign: "justify" }}>
            <span className="text-white font-semibold">Retrieval-Augmented Generation (RAG) & Language Learning Models (LLM):</span> Enhancing data retrieval and natural language processing to deliver smarter insights and solutions.
          </li>
          <li style={{ textAlign: "justify" }}>
            <span className="text-white font-semibold">Python & Application Development:</span> Utilizing robust programming frameworks for rapid development and scalable applications.
          </li>
          <li style={{ textAlign: "justify" }}>
            <span className="text-white font-semibold">UX Design with React & Java Development:</span> Crafting intuitive, engaging user experiences and building reliable, enterprise-grade applications.
          </li>
          <li style={{ textAlign: "justify" }}>
            <span className="text-white font-semibold">Data Warehousing & Data Services:</span> Structuring and managing large datasets to empower data-driven decision-making and strategic insights.
          </li>
          <li style={{ textAlign: "justify" }}>
            <span className="text-white font-semibold">Mobile App Development:</span> Creating engaging, user-friendly mobile experiences for both iOS and Android platforms. Our mobile solutions integrate seamlessly with Meta’s cutting-edge technologies, enabling immersive and socially connected digital experiences.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TechSquadsAndExpertise;
