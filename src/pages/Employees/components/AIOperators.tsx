import React from 'react';

const AIOperatorsTeam: React.FC = () => {
  const aiOperators = [
    { name: 'Sameeksha R', role: 'Team Lead', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Sameeksha%20R.png?' },
    { name: 'Ashwitha Sharal', role: 'Team Lead', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Ashwitha%20Sharal.jpg?' },
    { name: 'Darrel', role: 'Team Lead', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Darrel.jpg?' },
    { name: 'Samarth Shetty', role: 'Team Lead', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Samarth%20Shetty.png?' },
    { name: 'Tanisk Pandey', role: 'Transition Lead', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Tanisk%20Pandey.png?' },
    { name: 'SUBAITHA', role: 'AI QA Reviewer', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/SUBAITHA.png?' },
    { name: 'Ashish Joseph', role: 'AI QA Reviewer', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Ashish%20Joseph.png?' },
    { name: 'Suraksha', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Suraksha.jpg?' },
    { name: 'Bhavana', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Bhavana.jpg?' },
    { name: 'Md NAYEEM', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Md%20NAYEEM.png?' },
    { name: 'Srinidhi', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Srinidhi.png?' },
    { name: 'Karthik', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Karthik.png?' },
    { name: 'Mohan', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Mohan.png?' },
    { name: 'Nitya Dubey', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Nitya%20Dubey.jpg?' },
    { name: 'Pancham', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Pancham.png?' },
    { name: 'Namitha RV', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Namitha%20RV.png?' },
    { name: 'Shama Kulal', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Shama%20Kulal.png?' },
    { name: 'Sanjith', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Sanjith.png?' },
    { name: 'Vinisha', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Vinisha.png?' },
    { name: 'Yashashwani', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Yashashwani.png?' },
    { name: 'Pallavi S B', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Pallavi.jpg?' },
    { name: 'Lakshmi H', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Lakshmi.jpg?' },
    { name: 'Sadhu Munigokulsai', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Gokul.jpg?' },
    { name: 'Banish Mishra', role: '', department: 'AI Operator', image: 'https://ik.imagekit.io/lrxrnuqog/Employess/AI%20Operators/Banish.jpg?' }
  ];

  return (
    <div className="w-full py-[5vh] px-[3vw] md:py-[8vh] md:px-[5vw] bg-[#080412]">
      <div className="text-center mb-[5vh] md:mb-[8vh]">
        <div className="inline-block px-[5vw] py-[2vh] md:px-[8vw] md:py-[3vh] rounded-[5vh] shadow-lg" style={{
          background: 'radial-gradient(ellipse at center, #7F60ED 0%, #483787 100%)',
        }}>
          <h2 className="text-white text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] font-bold leading-tight">
            AI OPERATORS TEAM
          </h2>
          <p className="text-white text-[2.5vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1vw] font-medium mt-[0.5vh]">
            Empowering AI with operational excellence
          </p>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3vw] md:gap-[2vw]">
          {aiOperators.map((member, index) => (
            <div key={index} className="bg-[#3D3D3D] text-white shadow-md flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
              <div className="p-[2vw] pt-[3vw] pb-[1vw]">
                <div className="overflow-hidden rounded-tr-[5vw]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[65vh] sm:h-[30vh] md:h-[25vh] lg:h-[50vh] object-cover rounded-tr-[7vw]"
                  />
                </div>
              </div>
              <div className="p-[2vw] text-center">
                <h3 className="text-[4.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw] font-bold mb-[1vh]">{member.name}</h3>
                {member.role && <p className="text-[3.5vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] mb-[0.5vh]">{member.role}</p>}
                <p className="text-[3.2vw] sm:text-[1.8vw] md:text-[1.3vw] lg:text-[1vw] text-gray-300">{member.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIOperatorsTeam;
