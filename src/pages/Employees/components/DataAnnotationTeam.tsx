import React from 'react';

const DataAnnotationTeam: React.FC = () => {
  const dataAnnotationMembers = [
    {
      name: "SUSHMITHA",
      role: "Data Annotator",
      department: "Data Team",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Data%20Annotation%20Team/SUSHMITHA.png"
    },
    {
      name: "Diya",
      role: "Data Annotator",
      department: "Data Team",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Data%20Annotation%20Team/Divya.png"
    },
    {
      name: "Mave",
      role: "Data Annotator",
      department: "Data Team",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Data%20Annotation%20Team/Mave.png"
    },
    {
      name: "Richelle",
      role: "Data Annotator",
      department: "Data Team",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Data%20Annotation%20Team/Rechal.png"
    },
    {
      name: "Rakshitha M",
      role: "Data Annotator",
      department: "Data Team",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Data%20Annotation%20Team/Rakshitha.png"
    },
    {
      name: "Vanaja",
      role: "Data Annotator",
      department: "Data Team",
      image: "https://ik.imagekit.io/lrxrnuqog/Employess/Data%20Annotation%20Team/Vanaja.png"
    }
  ];

  return (
    <div className="w-full py-[5vh] px-[3vw] md:py-[8vh] md:px-[5vw] bg-[#080412]">
      <div className="text-center mb-[5vh] md:mb-[8vh]">
        <div className="inline-block px-[6vw] py-[2vh] md:px-[8vw] md:py-[3vh] rounded-[5vh] shadow-lg" style={{
          background: 'radial-gradient(ellipse at center, #7F60ED 0%, #483787 100%)',
        }}>
          <h2 className="text-white text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] font-bold leading-tight">
            DATA ANNOTATION TEAM
          </h2>
          <p className="text-white text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1vw] font-medium mt-[0.5vh]">
            Building products that users love
          </p>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[3vw] md:gap-[2vw]">
          {dataAnnotationMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#3D3D3D] text-white shadow-md flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              <div className="p-[2vw] pt-[3vw] pb-[1vw]">
                <div className="overflow-hidden rounded-tr-[5vw]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[60vh] sm:h-[30vh] md:h-[25vh] lg:h-[28vh] xl:h-[50vh] object-cover"
                  />
                </div>
              </div>
              <div className="p-[2vw] text-center">
                <h3 className="text-[4.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] font-bold mb-[1vh]">{member.name}</h3>
                <p className="text-[3.5vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] mb-[0.5vh]">{member.role}</p>
                <p className="text-[3.2vw] sm:text-[1.8vw] md:text-[1.3vw] lg:text-[1vw] text-gray-300">{member.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataAnnotationTeam;
