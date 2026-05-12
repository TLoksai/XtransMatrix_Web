import React from "react";

const FoundersTeam: React.FC = () => {
  const founders = [
    {
      name: "Vikas Uppal",
      role: "Co- Founder and Director",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Founders/Vikas.png",
    },
    {
      name: "Anupam Kharabanda",
      role: "Co- Founder and Director",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Founders/Anupam.png",
    },
    {
      name: "Prasanna Patel",
      role: "Co- Founder and Director",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Founders/Prasanna.png",
    },
  ];

  return (
    <section className="bg-[#080412] text-white py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 tracking-widest text-white">
        <span className="relative px-4 py-2 before:absolute before:inset-0 before:rounded-md before:bg-[#B296F1] before:opacity-20 before:blur-md">
          <span className="relative z-10 text-[#B296F1]">FOUNDERS TEAM</span>
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {founders.map((founder, index) => (
          <div key={index} className="flex flex-col items-center pt-24">
            <div className="relative mb-[-100px] z-10">
              <div className="w-52 h-52 rounded-full overflow-hidden bg-[#5A5A5A] relative">
                <div
                  className="absolute inset-0 rounded-full border-4 border-gray-500"
                  style={{
                    clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
                  }}
                ></div>
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top relative z-10"
                />
              </div>
            </div>

            <div className="bg-[#1c1c24] rounded-3xl pt-32 pb-12 px-8 w-full max-w-sm h-80 shadow-xl hover:shadow-purple-500/40 hover:bg-[#252530] transition-all duration-300 flex flex-col items-center">
              <div className="mt-4 mb-auto flex flex-col items-center">
                <h3 className="text-xl font-bold mb-2 text-center">{founder.name}</h3>
                <p className="text-sm text-center text-gray-300">{founder.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoundersTeam;
