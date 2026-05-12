import React, { useState } from "react";
import emailjs from "emailjs-com";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;


interface Job {
  id: string;
  title: string;
  location: string;
  description: string;
}

const jobs: Job[] = [
  {
    id: "69543",
    title: "React Developer (Frontend-Focused with Full-Stack Awareness)",
    location: "India - Bengaluru",
    description:
      "Seeking a React Developer with 3-7 years of experience in React, REST APIs, and SQL databases, with deployment experience on GCP preferred. Strong frontend skills with backend awareness are key.",
  },
  {
    id: "69544",
    title: "Senior Backend Engineer (LLM & Scalable Systems)",
    location: "India - Bengaluru",
    description:
      "Seeking a Senior Backend Engineer with 5+ years of experience in Python, FastAPI, and AI-driven workflows to design scalable systems and mentor junior engineers. Hybrid role based in Mangalore/Bangalore with US time zone overlap required.",
  },
  {
    id: "69545",
    title: "Junior Backend Engineer (LLM & Backend Development)",
    location: "India - Bengaluru",
    description:
      "Seeking a Junior Backend Engineer with 1.5+ years of experience in Python, FastAPI, and SQL databases to build scalable APIs and work with LLM-driven workflows. Hybrid role based in Mangalore/Bangalore with US time zone overlap required.",
  },
  {
    id: "69546",
    title: "Contract Scrum Master (Remote - CST Timezone)",
    location: "India - Bengaluru",
    description:
      "Seeking a Scrum Master with proven experience in Agile environments, strong leadership skills, and expertise in Jira. Must be available for remote work in CST timezone with a focus on driving team performance and Agile transformation.",
  },

  {
    id: "69547",
    title: "Program Manager – Banking/FinTech",
    location: "India - Bengaluru",
    description: `
      Experience: 10-14 years  
      Position: Full-Time  
      Industry: Banking / FinTech  
      
      Role Overview:  
      We are seeking an experienced Program Manager with a strong background in Banking/FinTech to oversee and drive multiple strategic projects. The role involves ensuring alignment with business goals and client expectations.  
  
      Key Skills Required:  
      - Expertise in Agile methodologies (Scrum, Kanban, SAFe)  
      - Strong stakeholder management capabilities  
      - Proven experience in managing large-scale program execution  
      - Experience working with Middle East clients (preferred)  
    `,
  },
  
  

  {
    id: "69548",
    title: "Project Manager – Banking/FinTech",
    location: "India - Bengaluru",
    description: `
      Experience: 10-14 years  
      Industry: Banking / FinTech  
      Employment Type: Full-time  
      
      Role Overview:  
      We are seeking an experienced Project Manager with a strong background in Banking/FinTech to lead high-impact projects for global clients, including those in the Middle East.  
  
      Key Skills Required:  
      - Expertise in Agile methodologies (Scrum, Kanban, SAFe).  
      - Strong stakeholder management capabilities.  
      - Proven experience in end-to-end project execution.  
    `,
  },
  

  {
    id: "69549",
    title: "Solution Architect – Banking/FinTech",
    location: "India - Bengaluru",
    description: `
      Location: Bangalore (Hybrid Work Environment)  
      Experience: 10-14 years  
      Position: Full-Time  
      Industry: Banking / FinTech  
  
      We are seeking an experienced Solution Architect with a deep understanding of Banking and FinTech solutions.  
      This role involves designing and delivering scalable, secure, and high-performance architectures for global clients, including those in the Middle East.  
  
      The ideal candidate should have expertise in:  
      - Agile methodologies  
      - Cloud computing  
      - Enterprise architecture  
      - System integration  
    `,
  },
  
  {
    id: "69550",
    title: "Java Lead – Banking/FinTech",
    location: "India - Bengaluru",
    description: `
      Experience: 8-10 years  
      Position: Full-Time  
      Industry: Banking / FinTech  
      Work Environment: Hybrid (Bangalore-based)  
  
      Role Overview:  
      We are seeking a skilled Java Lead with 8-10 years of experience in Java development, including 2+ years as a Tech Lead. The ideal candidate will play a pivotal role in leading development efforts, ensuring best practices, and driving technical excellence.  
  
      Key Skills Required:  
      - Java 8+, Spring Boot, Microservices, Hibernate, REST APIs, and SQL/NoSQL databases.  
      - Cloud & DevOps: Hands-on experience with AWS, Azure, or GCP, along with Docker, Kubernetes, and CI/CD pipelines.  
      - Agile & Best Practices: Strong understanding of Scrum, TDD, BDD, and clean coding principles.  
      - Banking/FinTech Exposure: Prior experience in financial services, payments, or banking applications is a strong advantage.  
  
      If you're passionate about driving innovation in the Banking/FinTech space and leading impactful projects, we encourage you to apply.
    `,
  },
  

  {
    id: "69551",
    title: "iOS Developer – Mobile App Development",
    location: "India - Bengaluru",
    description: `
      Experience: 5-6 years  
      Position: Full-Time  
      Industry: Banking / FinTech  
      Work Environment: Hybrid (Bangalore-based)  
  
      Role Overview:  
      We are looking for an experienced iOS Developer to design and build high-quality, user-friendly iOS applications for Banking/FinTech solutions.  
  
      Key Responsibilities:  
      - Develop and maintain iOS applications using Swift and Objective-C.  
      - Work on UI/UX improvements, API integrations, and performance optimizations.  
      - Ensure app security, performance, and compliance with App Store guidelines.  
      - Collaborate with cross-functional teams for Agile development.  
  
      Key Requirements:  
      - Tech Stack: Swift, Objective-C, Xcode, UIKit, SwiftUI, CoreData, RESTful APIs, and Firebase.  
      - Testing & Deployment: Experience with Unit Testing, XCTest, and App Store Deployment.  
      - FinTech/Banking app development experience is a plus.  
  
      If you're passionate about crafting seamless mobile experiences and driving innovation in the Banking/FinTech industry, we encourage you to apply.
    `,
  },
  

  {
    id: "69552",
    title: "Android Developer – Mobile App Development",
    location: "India - Bengaluru",
    description: `
      Experience: 5-6 years  
      Position: Full-Time  
      Industry: Banking / FinTech  
      Work Environment: Hybrid (Bangalore-based)  
  
      Role Overview:  
      We are seeking an Android Developer to build and maintain high-performance FinTech applications on the Android platform.  
  
      Key Responsibilities:  
      - Develop and maintain Android applications using Kotlin/Java.  
      - Optimize app performance, security, and UX.  
      - Integrate with RESTful APIs, third-party SDKs, and payment gateways.  
      - Ensure compliance with Google Play Store policies.  
  
      Key Requirements:  
      - Tech Stack: Kotlin, Java, Android SDK, Jetpack, Room Database, MVVM, Retrofit, Firebase.  
      - Testing & Deployment: Experience with Unit Testing, Espresso, and Play Store Deployment.  
      - Experience in Banking/FinTech apps is a plus.  
  
      If you're an experienced Android developer eager to build impactful solutions in the FinTech industry, we'd love to hear from you!
    `,
  },
  

{
  id: "69553",
  title: "Software Tester – QA Engineer",
  location: "India - Bengaluru",
  description: `
    Experience: 5-6 years  
    Position: Full-Time  
    Industry: Banking / FinTech  
    Work Environment: Hybrid (Bangalore-based)  

    Role Overview:  
    We are looking for a Software Tester (QA Engineer) to ensure the quality and reliability of Banking/FinTech applications through both automated and manual testing.  

    Key Responsibilities:  
    - Design and execute test cases, automation scripts, and performance tests.  
    - Perform manual, functional, regression, and API testing.  
    - Ensure security and compliance for banking applications.  
    - Collaborate with Agile teams to ensure high-quality software releases.  

    Key Requirements:  
    - Testing Tools: Selenium, JUnit, TestNG, Appium, Postman, JIRA, Jenkins.  
    - Automation Experience: UI, API, and Performance Testing.  
    - Experience in Banking/FinTech application testing is a plus.  

    If you have a keen eye for detail and a passion for ensuring flawless software performance, we'd love to have you on our team!
  `,
},


{
  id: "69554",
  title: ".NET Developer – Senior Developer",
  location: "India - Bengaluru",
  description: `
    Experience: 5-6 years  
    - Position: Full-Time  
    - Industry: Banking / FinTech  
    - Work Environment: Hybrid (Bangalore-based)  

    Role Overview:  
    We are looking for a Senior .NET Developer to develop secure and scalable Banking/FinTech applications using .NET technologies.  

    Key Responsibilities:  
    - Design and develop web applications using .NET Core, C#, ASP.NET, and Entity Framework.  
    - Work on API integrations, database management, and cloud solutions.  
    - Ensure application security, scalability, and performance optimization.  
    - Collaborate with Agile teams for efficient software delivery.  

    Key Requirements:  
    - Tech Stack: .NET Core, C#, ASP.NET MVC, Web API, Entity Framework, SQL Server.  
    - Cloud & DevOps: Experience with Azure, AWS, Docker, Kubernetes is a plus.  
    - Experience in Banking/FinTech applications is preferred.  

    If you're a skilled .NET developer with a passion for building robust applications in the financial domain, we'd love to hear from you!
  `,
},

{
  id: "69555",
  title: "Senior Android Software Engineer",
  location: "India - Bengaluru",
  description: `
    Experience: 5+ years  
    - Position: Full-Time  
    - Industry: Banking / FinTech  
    

    Role Overview:  
    We are looking for a Senior Android Software Engineer to design, develop, and optimize Android applications, ensuring high performance and user experience.  

    Key Responsibilities:  
    - Design and develop advanced applications for the Android platform.  
    - Collaborate with cross-functional teams to define, design, and implement new features.  
    - Conduct code reviews, maintain code quality, and ensure adherence to coding standards.  
    - Troubleshoot and debug issues to enhance application reliability and performance.  
    - Stay updated with the latest industry trends and technologies.  
    - Work with RESTful APIs and integrate backend services efficiently.  

    Key Requirements:  
    - Proficiency in Kotlin (Java is a plus) and experience with Android SDK.  
    - Experience with Multi-Module Application development is a plus.  
    - Strong knowledge of Proguard (DexGuard experience is a plus).  
    - Strong problem-solving and debugging skills.  
    - Excellent verbal and written English communication skills.  
    - Banking or FinTech experience is preferred.  

    If you're an experienced Android developer passionate about building innovative FinTech solutions, we'd love to hear from you!
  `
},

{
  id: "69556",
  title: "Senior Business Analyst",
  location: "India - Bengaluru",
  description: `
    Experience: 5+ years  
    - Position: Permanent  
    - Industry: FinTech  

    Role Overview:  
    We are seeking a Senior Business Analyst to join our dynamic team. As a Senior Business Analyst, you will play a key role in driving business solutions by collaborating with cross-functional teams to gather requirements, optimize processes, and ensure alignment with business objectives. You will support and ensure the successful completion of analysis, development, testing, and deployment tasks for our software product's features.  

    Key Responsibilities:  
    - Lead and facilitate the business requirements gathering process using interviews, workshops, surveys, and document analysis.  
    - Collaborate with stakeholders to align business needs with technical solutions.  
    - Document business cases, process flows, data models, and user stories on Jira.  
    - Identify areas for process improvement and propose new ideas and features.  
    - Oversee multiple concurrent software development projects, ensuring timely delivery.  
    - Evaluate and implement enterprise-wide solutions with minimal cross-functional impact.  
    - Provide mentorship and guidance to junior business analysts.  

    Key Requirements:  
    - Bachelor's degree in MIS, CCE, Computer Science, or a related field.  
    - Minimum 5+ years of experience as a Business Analyst.  
    - Proficiency in Jira and experience in Agile environments.  
    - Strong skills in extracting requirements and testing.  
    - Experience in data analysis and visualization techniques.  
    - Excellent critical thinking and communication skills.  

    If you're an experienced Business Analyst passionate about delivering impactful solutions in the FinTech industry, we'd love to hear from you!
  `
},





];

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("India - Bengaluru");
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentCtc, setCurrentCtc] = useState("");
  const [expectedCtc, setExpectedCtc] = useState("");
  const [residenceCity, setResidenceCity] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!resumeFile) {
      alert("Please upload a resume");
      return;
    }
  
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("current_ctc", currentCtc);
    formData.append("expected_ctc", expectedCtc);
    formData.append("applicant_location", residenceCity); 
    formData.append("role", jobs.find((job) => job.id === selectedJobId)?.title || "Unknown");
    formData.append("resume", resumeFile);
  
    try {
      await fetch(`${API_BASE_URL}/upload`, {
        method: "POST",
        body: formData,
      });
   
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: name,
          email: email,
          phone: phone,
          current_ctc: currentCtc,
          expected_ctc: expectedCtc,
          applicant_location: residenceCity, 
          role: jobs.find((job) => job.id === selectedJobId)?.title || "Unknown",
        },
        EMAILJS_USER_ID
      );

      alert("Application submitted successfully!");
      setName("");
      setPhone("");
      setEmail("");
      setResumeFile(null);
      setSelectedJobId(null);
      setName("");
      setPhone("");
      setEmail("");
      setCurrentCtc(""); 
      setExpectedCtc("");
      setResidenceCity("");  
      setResumeFile(null);
      setSelectedJobId(null);
    } catch (error) {
      alert("Error submitting application. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#080412] text-white">
      <section className="bg-[#080412] text-white">
        <div
          className="relative bg-fixed bg-center bg-cover h-[750px] md:h-[550px] sm:h-[450px] flex items-center -mt-8"
          style={{ backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/Career/career.png?')" }}
        >
          <h1 className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold text-center">
            Begin your XTMX journey
          </h1>
        </div>
      </section>

    <div className="p-6 bg-black text-white min-h-screen px-8 md:px-20 lg:px-40">
      <div className="text-center p-4 mb-6 border border-red-600 rounded-md bg-gray-800">
        <h1 className="text-xl font-bold text-red-500">
          ALERT: BE AWARE OF FRAUDULENT JOB OFFERS
        </h1>
        <p className="text-sm text-gray-200 mt-2">
          We have been informed of several scams targeting the public, involving fraudsters pretending to be from  xTMX. Please verify the identity of anyone reaching out to you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Enter keyword or job ID"
          className="border p-2 w-full md:w-1/2 bg-gray-800 text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border p-2 bg-gray-800 text-white"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option>India</option>
          
        </select>
      </div>
      <ul>
      {jobs
        .filter(
          (job) =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            job.location === selectedLocation
        )
        .map((job) => (
        <li key={job.id} className="border-b p-4 bg-gray-900 rounded-lg mb-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-white">{job.title}</h3>
              <p className="text-sm text-gray-400">
                {job.location} | Job ID {job.id}
              </p>
            </div>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded"
              onClick={() => setSelectedJobId(selectedJobId === job.id ? null : job.id)}
            >
              {selectedJobId === job.id ? "Close" : "Apply Now"}
            </button>
          </div>

              {selectedJobId === job.id && (
                <div className="mt-6 p-4 border rounded shadow-lg bg-gray-800 text-white">
                  <p className="mb-4">{job.description}</p>
                  <form className="mt-4" onSubmit={handleSubmit}>
          
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="border p-2 w-full mb-2 bg-gray-900 text-white" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                  />
     
                  <input 
                    type="text" 
                    placeholder="Phone Number" 
                    className="border p-2 w-full mb-2 bg-gray-900 text-white" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                  />
                  
                
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="border p-2 w-full mb-2 bg-gray-900 text-white" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                  
              
                  <input 
                    type="text" 
                    placeholder="Current CTC" 
                    className="border p-2 w-full mb-2 bg-gray-900 text-white" 
                    value={currentCtc} 
                    onChange={(e) => setCurrentCtc(e.target.value)} 
                    required 
                  />
                  
              
                  <input 
                    type="text" 
                    placeholder="Expected CTC" 
                    className="border p-2 w-full mb-2 bg-gray-900 text-white" 
                    value={expectedCtc} 
                    onChange={(e) => setExpectedCtc(e.target.value)} 
                    required 
                  />
                  
      
                  <select
                    className="border p-2 w-full mb-2 bg-gray-900 text-white"
                    value={residenceCity}
                    onChange={(e) => setResidenceCity(e.target.value)}
                    required
                  >
                    <option value="">Select your city</option>
                    <option value="Mangalore, Karnataka">Mangalore, Karnataka</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Delhi, NCR">Delhi, NCR</option>
                  </select>
                  
              
                  <input 
                    type="file" 
                    className="border p-2 w-full mb-2 bg-gray-900 text-white" 
                    onChange={(e) => setResumeFile(e.target.files?.[0] || null)} 
                    required 
                  />
                  
         
                  <button 
                    type="submit" 
                    className="bg-green-500 text-white px-4 py-2 rounded" 
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
