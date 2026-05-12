import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Innotern = () => {
  const [activeRole, setActiveRole] = useState('Intern');

  const renderJobDetails = () => {
    if (activeRole === 'Intern') {
      return (
        <>
          <h2 className="text-xl font-bold text-[#7F60ED] mb-4">AI Operator Interns</h2>
          <p className="text-white text-md mb-4">
            (Beginner | 7th/8th Sem Students | Duration: 4-6 months)
          </p>
          <p className="text-white text-md mb-6">
            <span className="font-bold">Short description:</span> Step into the corporate AI world with hands-on HITL training, guided mentoring, and valuable certificates.
          </p>
          <h3 className="text-lg font-bold text-[#7F60ED] mb-2">Primary Responsibility:</h3>
          <p className="text-white text-sm mb-4">
            We are seeking entry-level professionals excited to work at the intersection of humans and AI. This role is ideal for candidates who are process-driven, detail-oriented, and passionate about future-proof careers in AI operations and data curation.
          </p>
          <h3 className="text-lg font-bold text-[#7F60ED] mb-2">Basic Qualifications and Desired Skills:</h3>
          <ul className="text-white text-sm list-disc list-inside space-y-1 mb-4">
            <li>B.Tech, BCA, MCA, or any graduate with strong technical aptitude.</li>
            <li>0-1 years of experience in HITL (AI), data operations, annotation/tagging, or backend AI platforms.</li>
            <li>Interest in roles such as AI Prompt Engineering, Annotation, QA, AI Ops, AI Queue Management.</li>
            <li>Strong command of English (written and spoken) & willingness to work in a US shift schedule.</li>
            <li>Familiarity with AI/ML concepts and workflows.</li>
            <li>Comfortable with repetitive tasks requiring high precision.</li>
            <li>Understanding of data security and confidentiality.</li>
            <li>Working knowledge of Excel/Google Sheets & good comprehension and instruction-following skills.</li>
            <li>US English fluency (spoken/listening).</li>
          </ul>
          <h3 className="text-lg font-bold text-[#7F60ED] mb-2">Please Note: This Role May Not Be Suitable for Those Who:</h3>
          <ul className="text-white text-sm list-disc list-inside space-y-1 mb-4">
            <li>Are unable to work night shifts or in high-performance operational settings.</li>
            <li>Are seeking software development or coding roles, as this position is non-developmental and process-focused.</li>
          </ul>
          <p className="text-white text-sm mb-2"><span className="font-bold">Employment Type:</span> Internship</p>
          <p className="text-white text-sm mb-2"><span className="font-bold">Work place Type:</span> On-site</p>
          <p className="text-white text-sm mb-2"><span className="font-bold">Salary:</span> Stipend/Benefits; Performance-based rewards, certificates, and mentoring</p>
          <p className="text-white text-sm mb-4"><span className="font-bold">Job Location:</span> Bangalore, Mangalore, Noida</p>
        </>
      );
    } else {
      return (
        <>
          <h2 className="text-xl font-bold text-[#7F60ED] mb-4">AI Operator Trainees</h2>
          <p className="text-white text-md mb-4">
            (Beginner | Graduate | Duration: 6 months)
          </p>
          <p className="text-white text-md mb-6">
            <span className="font-bold">Short description:</span> A structured 6-month program with global AI Ops training, mentorship, and a path to a permanent role.
          </p>
          <h3 className="text-lg font-bold text-[#7F60ED] mb-2">Primary Responsibility:</h3>
          <p className="text-white text-sm mb-4">
            We are seeking entry-level professionals excited to work at the intersection of humans and AI. This role is ideal for candidates who are process-driven, detail-oriented, and passionate about future-proof careers in AI operations and data curation.
          </p>
          <h3 className="text-lg font-bold text-[#7F60ED] mb-2">Basic Qualifications and Desired Skills:</h3>
          <ul className="text-white text-sm list-disc list-inside space-y-1 mb-4">
            <li>B.Tech, BCA, MCA, or any graduate with strong technical aptitude.</li>
            <li>0-1 years of experience in HITL (AI), data operations, annotation/tagging, or backend AI platforms.</li>
            <li>Interest in roles such as AI Prompt Engineering, Annotation, QA, AI Ops, AI Queue Management.</li>
            <li>Strong command of English (written and spoken) & willingness to work in a US shift schedule.</li>
            <li>Familiarity with AI/ML concepts and workflows.</li>
            <li>Comfortable with repetitive tasks requiring high precision.</li>
            <li>Understanding of data security and confidentiality.</li>
            <li>Working knowledge of Excel/Google Sheets & good comprehension and instruction-following skills.</li>
            <li>US English fluency (spoken/listening).</li>
          </ul>
          <h3 className="text-lg font-bold text-[#7F60ED] mb-2">Please Note: This Role May Not Be Suitable for Those Who:</h3>
          <ul className="text-white text-sm list-disc list-inside space-y-1 mb-4">
            <li>Are unable to work night shifts or in high-performance operational settings.</li>
            <li>Are seeking software development or coding roles, as this position is non-developmental and process-focused.</li>
          </ul>
          <p className="text-white text-sm mb-2"><span className="font-bold">Employment Type:</span> Trainee</p>
          <p className="text-white text-sm mb-2"><span className="font-bold">Work place Type:</span> On-site</p>
          <p className="text-white text-sm mb-2"><span className="font-bold">Salary:</span> As per industry standards</p>
          <p className="text-white text-sm mb-4"><span className="font-bold">Job Location:</span> Bangalore, Mangalore, Noida</p>
        </>
      );
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center font-inter text-white">
   
      <div className="relative w-full h-[350px] md:h-[650px] overflow-hidden font-inter">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/Hiring_Innotern/innotern.png?updatedAt=1756214304091')",
          }}
        />
        <img
          src="https://ik.imagekit.io/lrxrnuqog/Hiring_Innotern/over_layer.png?updatedAt=1756214327716"
          alt="Overlay Image"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            src="https://ik.imagekit.io/lrxrnuqog/Hiring_Innotern/Kickstart%20Your%20AI%20Career_%20Join%20as%20Intern%20or%20Trainee.png?updatedAt=1756359516162"
            alt="Kickstart Your AI Career"
            className="w-11/12 max-w-xl md:max-w-6xl h-auto object-contain"
          />
        </div>
      </div>

      <div className="w-full flex justify-center py-12 px-4 md:px-12">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl">
        
          <div className="flex flex-col gap-8 md:w-1/3 w-full">
            
            <div
              className={`p-6 rounded-lg shadow-lg border-2 border-opacity-60 cursor-pointer transition-all duration-300 ${
                activeRole === 'Intern'
                  ? 'bg-[#1a1a1a] border-[#7F60ED]'
                  : 'bg-gray-900 border-transparent hover:border-gray-500'
              }`}
              onClick={() => setActiveRole('Intern')}
            >
              <h3 className="text-xl font-bold text-[#7F60ED] mb-2">AI Operator Interns</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                
                <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">Bangalore</span>
                <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">Mangalore</span>
                <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">Noida</span>
              </div>
              <p className="text-white text-md mb-2">
                (Beginner | 7th/8th Sem Students | Duration: 4-6 months)
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-bold">Short description:</span> Step into the corporate AI world with hands-on HITL training, guided mentoring, and valuable certificates.
              </p>
            </div>

        
            <div
              className={`p-6 rounded-lg shadow-lg border-2 border-opacity-60 cursor-pointer transition-all duration-300 ${
                activeRole === 'Trainee'
                  ? 'bg-[#1a1a1a] border-[#7F60ED]'
                  : 'bg-gray-900 border-transparent hover:border-gray-500'
              }`}
              onClick={() => setActiveRole('Trainee')}
            >
              <h3 className="text-xl font-bold text-[#7F60ED] mb-2">AI Operator Trainees</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                
                <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">Bangalore</span>
                <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">Mangalore</span>
                <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full">Noida</span>
              </div>
              <p className="text-white text-md mb-2">
                (Beginner | Graduate | Duration: 6 months)
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-bold">Short description:</span> A structured 6-month program with global AI Ops training, mentorship, and a path to a permanent role.
              </p>
            </div>
          </div>

         
          <div className="flex-1 p-8 bg-gray-900 rounded-lg shadow-lg w-full md:w-2/3">
            {renderJobDetails()}
            <Link to="/futureofwork">
              <button className="mt-6 w-full md:w-auto bg-[#7F60ED] bg-opacity-30 border border-purple-500 text-white px-6 py-3 text-lg font-semibold uppercase tracking-wide hover:bg-[#7F60ED] transition duration-300">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innotern;