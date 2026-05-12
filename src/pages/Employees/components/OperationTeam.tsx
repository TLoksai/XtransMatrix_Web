import React from 'react';

const OperationTeam: React.FC = () => {
  const operationMembers = [
    {
      name: "Akhilesh",
      role: "Ops - Infinitus & Design head",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Operation%20Team/Akhilesh.png"
    },
    {
      name: "Dr. Akshay SP",
      role: "Lead of AI",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Operation%20Team/Akshay.png"
    },
    {
      name: "SHASHANK LK",
      role: "All in TECH",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Operation%20Team/Shashank.png"
    },
    {
      name: "JEEVAN",
      role: "All in AI",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Operation%20Team/Jeevan.png"
    },
    {
      name: "VISHAL PATIL",
      role: "Chief of Staff",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Operation%20Team/vishal.jpeg"
    },
    {
      name: "Megashree srinvas",
      role: "Human capital partner",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Operation%20Team/Megashree.png"
    },
    {
      name: "John Alber",
      role: "Business Analyst & ROI Strategist",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Operation%20Team/john.jpeg?updatedAt=1757500054949"
    },
  ];

  // Group members into rows of 3
  const rows = [];
  for (let i = 0; i < operationMembers.length; i += 3) {
    rows.push(operationMembers.slice(i, i + 3));
  }

  return (
    <div className="w-full py-[8vh] px-[4vw] md:px-[8vw] bg-[#080412]">
      <div className="flex justify-center w-full">
        <div className="relative inline-block">
          <svg
            className="absolute inset-0 w-full h-[4em] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '4em' }}
          >
            <defs>
              <pattern id="dotsPattern" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotsPattern)" />
          </svg>

          <h1 className="relative text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-[8vh] tracking-wide">
            OPERATION TEAM
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid gap-[4vw] mb-[4vw] ${
              row.length === 1
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            } ${row.length === 1 ? 'place-items-center' : ''}`}
          >
            {row.map((member, index) => (
              <div
                key={index}
                className={`relative rounded-[2vw] overflow-hidden shadow-lg group transition-all duration-500 ease-in-out transform hover:-translate-y-[0.5vh] hover:shadow-2xl ${
                  row.length === 1 ? 'col-start-2 col-span-1' : ''
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[70vh] sm:h-[45vh] md:h-[40vh] lg:h-[70vh] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-0 w-full bg-[#6253A1] bg-opacity-90 px-[2vw] py-[1.5vh] text-center transition-all duration-300 group-hover:bg-opacity-100">
                  <h3 className="text-[1.2rem] md:text-[1.4rem] font-bold text-white uppercase">
                    {member.name}
                  </h3>
                  <p className="text-white text-[0.9rem] md:text-[1rem] mt-[0.5vh]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperationTeam;