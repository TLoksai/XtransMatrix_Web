import React from 'react';

const EngineeringTeam: React.FC = () => {
  const engineeringMembers = [
    {
      name: 'Chaithanya',
      role: 'Senior AI Backend Dev',
      department: 'Tech Team',
      image: 'https://ik.imagekit.io/lrxrnuqog/Employess/Engineering%20Team/Chaitanya.png'
    },
    {
      name: 'Tammineni Loksai',
      role: 'Front-End Dev',
      department: 'Tech Team',
      image: 'https://ik.imagekit.io/lrxrnuqog/Employess/Engineering%20Team/Loksai.png'
    },
    {
      name: 'Sai Vikram',
      role: 'Senior Full Stack',
      department: 'Tech Team',
      image: 'https://ik.imagekit.io/lrxrnuqog/Employess/Engineering%20Team/Sai%20Vikram.png'
    },
    {
      name: 'Prajwal',
      role: 'Data',
      department: 'Tech Team',
      image: 'https://ik.imagekit.io/lrxrnuqog/Employess/Engineering%20Team/Prajwal.png'
    },
    {
      name: 'Anusha',
      role: 'React Native Intern',
      department: 'Tech Team',
      image: 'https://ik.imagekit.io/lrxrnuqog/Employess/Engineering%20Team/Anusha.png'
    },
    {
      name: 'Krithika Shetty',
      role: 'UI/UX Designer',
      department: 'Tech Team',
      image: 'https://ik.imagekit.io/lrxrnuqog/Employess/Engineering%20Team/Krithika.png'
    },
    {
      name: 'Bharani M',
      role: 'Media Editor',
      department: 'Tech - Digital Team',
      image: 'https://ik.imagekit.io/lrxrnuqog/Employess/Engineering%20Team/Bharani.png'
    },
    {
      name: 'Shridhi Shety',
      role: 'Content that captivates minds',
      department: 'Tech - Digital Team',
      image: 'https://ik.imagekit.io/lrxrnuqog/Employess/Engineering%20Team/Shridhi%20Shety.png'
    },
    {
      name: 'Shreyas',
      role: 'Full Stack Intern',
      department: 'Tech Team',
      image: 'https://ik.imagekit.io/lrxrnuqog/Employess/Engineering%20Team/Shreyas.png'
    },
    {
      name: 'Deekshith Gowda',
      role: 'IT Intern',
      department: 'Tech Team',
      image: 'https://ik.imagekit.io/lrxrnuqog/Employess/Engineering%20Team/Deekshith.png'
    }
  ];

  return (
    <div className="w-full py-[5vh] px-[3vw] md:py-[8vh] md:px-[5vw] bg-[#080412]">
      <div className="text-center mb-[5vh] md:mb-[8vh]">
        <div className="inline-block px-[6vw] py-[2vh] md:px-[8vw] md:py-[3vh] rounded-[5vh] shadow-lg" style={{
          background: 'radial-gradient(ellipse at center, #7F60ED 0%, #483787 100%)',
        }}>
          <h2 className="text-white text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] font-bold leading-tight">
            ENGINEERING TEAM
          </h2>
          <p className="text-white text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1vw] font-medium mt-[0.5vh]">
            Turning complex code into seamless performance
          </p>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[3vw] md:gap-[2vw]">
          {engineeringMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#3D3D3D] text-white shadow-md flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              <div className="p-[2vw] pt-[3vw] pb-[1vw]">
                <div className="overflow-hidden rounded-tr-[5vw]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[65vh] sm:h-[30vh] md:h-[25vh] lg:h-[40vh] object-cover rounded-tr-[5vw]"
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

export default EngineeringTeam;
