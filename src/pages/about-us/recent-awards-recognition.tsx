import React from "react";

const AwardsList = [
  {
    title: "Global Emerging Leadership Award from GCPIT – 2024",
    description: `We are proud to announce that in 2024, xTRansmatrix was honored with the Global Emerging Leadership Award from GCPIT. This prestigious accolade recognizes our innovative leadership, commitment to transformative change, and dedication to shaping the future of work. Awarded by GCPIT—a global authority in championing technological excellence and forward-thinking practices—this award celebrates how our dynamic team, blending diverse young minds with seasoned change agents, drives sustainable progress.`,
    image: "https://ik.imagekit.io/lrxrnuqog/recent-awards-recognition/1.png?",
  },
  {
    title: "Global AI Innovation Award from Global Council of AI Entrepreneurs – 2024",
    description: `In addition, xTRansmatrix has been honored with the Global AI Innovation Award from the Global Council of AI Entrepreneurs in 2024. This esteemed recognition celebrates our groundbreaking initiatives in artificial intelligence and highlights our commitment to leveraging AI technologies to overcome complex challenges and drive sustainable growth.`,
    image: "https://ik.imagekit.io/lrxrnuqog/recent-awards-recognition/2.png?",
  },
  {
    title: "KDEM Recognition from Karnataka Digital Economy Mission",
    description: `Furthermore, we are honored to receive recognition from the Karnataka Digital Economy Mission (KDEM) for our exceptional efforts in creating employment opportunities beyond Bangalore. This accolade celebrates our pioneering initiative—the Mangaore AI Tech Workplace—which harnesses advanced AI technologies to drive job creation and foster digital transformation in emerging regions.`,
    image: "https://ik.imagekit.io/lrxrnuqog/recent-awards-recognition/3.png?",
  },
  {
    title: "Thought Leadership Recognition for Agility & Product Mindset from Product Tank – 2023",
    description: `We are thrilled to announce that in 2024, xTRansmatrix received recognition from Product Tank for our thought leadership in agility and product mindset. This accolade underscores our commitment to cultivating an agile, customer-centric approach that drives innovative product solutions and industry transformation.`,
    image: "https://ik.imagekit.io/lrxrnuqog/recent-awards-recognition/4.png?",
  },
];

const AwardsSection: React.FC = () => {
  return (
    <section className="bg-[#0a0214] text-white font-inter">
     
      <div
  className="relative w-full h-[250px] md:h-[400px] flex items-center justify-center text-white text-2xl md:text-3xl font-bold text-center px-4 bg-fixed"
  style={{
    backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/recent-awards-recognition/hero.png?')",
    backgroundSize: "cover",
    backgroundPosition: "center", 
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40" />
  <h1 className="relative z-10 uppercase">Recent Awards and Recognition</h1>
</div>


     
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16">
        {AwardsList.map((award, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold">
                {award.title.split("from")[0]}{" "}
                <span className="text-purple-400">{award.title.split("from")[1]}</span>
              </h2>
              <p className="text-gray-300 mt-4 text-justify">{award.description}</p>
              <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full flex items-center transition duration-300">
                Learn more →
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={award.image}
                alt={`Award image for ${award.title}`}
                className="w-48 md:w-60 rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
