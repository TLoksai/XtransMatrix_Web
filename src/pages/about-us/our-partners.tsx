import React from "react";

const partnersList = [
  {
    name: "CYDRATECH",
    description: `Cydra Tech is a technology company specializing in website development, generative AI solutions, web scraping, and data analytics. They offer cost-effective, scalable, and industry-specific IT solutions for businesses. Their expertise spans AI & data solutions, web and app development, and interactive digital experiences. The company is led by a team of co-founders and also offers internships for aspiring tech professionals.`,
    logo: "https://ik.imagekit.io/lrxrnuqog/Our_Partners/1.png?",
    link: "https://cydratech.com/", 
  },
  {
    name: "PRODUCT CAPABILITY UPLIFT",
    description: `Product Capability Uplift is a company focused on enhancing product performance, scalability, and market readiness through strategic innovations. They specialize in upgrading hardware and software solutions to improve efficiency, usability, and competitiveness. Their expertise spans AI, automation, and embedded systems, driving next-gen technological advancements.`,
    logo: "https://ik.imagekit.io/lrxrnuqog/Our_Partners/2.png?",
    link: "https://www.productcapabilityuplift.com/", 
  },
  {
    name: "AI TANK",
    description: `AI Tank is a collaborative community dedicated to advancing AI innovation through research, training, and real-world applications. It provides a platform for AI enthusiasts to develop, share, and refine AI-driven solutions, including prompt engineering and data annotation services. With a focus on agentic AI and voice integration, AI Tank aims to shape the future of intelligent automation.`,
    logo: "https://ik.imagekit.io/lrxrnuqog/Our_Partners/3.png?",
    link: "https://aitank.ai/", 
  },
  {
    name: "WE COLLAB FOR PROFITS",
    description: `WeCollab (by Collaborative Frameworks) is a consultancy specializing in enhancing organizational collaboration, strategic alignment, and agile transformation. Through gamified workshops and innovative training programs, they help businesses improve teamwork, customer-centricity, and product clarity. They also offer SAFe® trainings, including Lean Portfolio Management and Agile Product and Solution Management, to drive agile adoption and enterprise success.`,
    logo: "https://ik.imagekit.io/lrxrnuqog/Our_Partners/4.png?",
    link: "https://www.collaborativeframeworks.com//", 
  },
  {
    name: "INNOTERN",
    description: `Innotern is a platform designed to bridge the gap between academia and industry by offering internship opportunities, training programs, and business collaborations. It specializes in VLSI (Very Large Scale Integration) training, helping engineers gain hands-on experience in frontend design, digital training, live projects, and industry-relevant tools like Cadence, Synopsys, and Xilinx. The platform also fosters an AI community where students and professionals can collaborate on cutting-edge AI technologies. Additionally, Innotern's ProfitStream initiative connects innovative minds with industry leaders for mentorship and entrepreneurial ventures.`,
    logo: "https://ik.imagekit.io/lrxrnuqog/Our_Partners/5.png?",
    link: "https://www.innotern.com/",
  },
];

const PartnersSection: React.FC = () => {
  return (
    <section className="bg-[#0a0214] text-white py-20 font-sans">
      
      <div
        className="relative w-full h-[200px] md:h-[500px] flex items-center justify-center text-white text-3xl md:text-6xl font-bold text-center px-4 bg-fixed"
        style={{
          backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/Our_Partners/hero.png?')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 uppercase">Our Partners</h1>
      </div>

     
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16">
        {partnersList.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 mb-20"
          >
            <div className="md:w-1/4 flex justify-center">
              <img src={partner.logo} alt={partner.name} className="w-32 md:w-40" />
            </div>
            <div className="md:w-3/4">
              <h2 className="text-xl md:text-2xl font-bold text-purple-400">{partner.name}</h2>
              <p className="text-gray-300 mt-4 text-justify">{partner.description}</p>
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full"
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default PartnersSection;
