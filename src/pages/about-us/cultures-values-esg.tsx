import React from "react";

const IMAGE_SIZE = "w-32 md:w-40"; 

const HomePage: React.FC = () => {
  return (
    <>
     
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden font-inter">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/hero%20photo.png?')",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative flex items-center justify-center h-full text-white text-3xl md:text-4xl font-bold">
          <h1>Cultures, Values and ESG.</h1>
        </div>
      </div>

   
      <section className="bg-[#0a0214] text-white py-16 px-6 md:px-12 font-inter">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-lg md:text-xl font-bold uppercase mb-8">Our Values</h2>

     
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">
                IGNITING THE <span className="text-purple-400">FUTURE</span>
              </h3>
              <p className="text-gray-300 mt-4 text-justify">
                At xTRansmatrix, we believe that the key to a transformative tomorrow lies in the passion of young minds and the right mix of GenZ
                 and Change Agents. For our clients and their customers, our industry, and our communities, we challenge the status quo and embrace 
                 bold new perspectives. Through our can-do attitude, determination to think beyond boundaries, and commitment to revolutionizing the 
                 future of work, we reimagine what’s possible and build a lasting legacy for our clients. We are igniting the future by fusing 
                 innovation with an unwavering drive to create lasting impact.
              </p>
              <a href="/future">
              <button className="mt-4 px-6 py-2 bg-[#517AF5] hover:bg-[#4165CF] text-white font-semibold rounded-full">
                Learn more →
              </button>
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/1.png?" alt="Future" className="w-96 md:w-[300px] h-auto" />
            </div>
          </div>

         
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/2 flex justify-center">
              <img src="https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/2.png?" alt="Future" className="w-80 md:w-[300px] h-auto" />
            </div>
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold">
                SOCIAL EQUILIBRIUM AT <span className="text-purple-400">THE WORK</span>
              </h3>
              <p className="text-gray-300 mt-4 text-justify">
                At xTRansmatrix, we believe that true innovation stems from the balance between individual authenticity and collective collaboration. We value the difference you make and the unique qualities that define you. Our #LearnWhileWork philosophy now embraces Social Equillibirium—a dynamic blend where diversity, equity, and inclusivity merge with a collaborative mindset among our clients and colleagues. This balanced approach is at the core of our success and is a value that every team member brings to life each day.
              </p>
              <a href="/thework">
              <button className="mt-4 px-6 py-2 bg-[#517AF5] hover:bg-[#4165CF] text-white font-semibold rounded-full">
                Learn more →
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0214] text-white py-16 px-6 md:px-12 font-inter">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Every Day One <span className="text-purple-400">IMPACT</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            At XTRANSMATRIX, every day is an opportunity to drive meaningful change for our clients, their customers, our industry, and our communities. We expect every team member to embrace our core principles:
          </p>

  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
           
            <div className="text-center">
              <img src="https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/3.png?" alt="Succeed Together" className={`${IMAGE_SIZE} mx-auto`} />
              <h4 className="text-lg font-bold mt-4">Succeed Together</h4>
              <p className="text-gray-300 mt-2">
                Foster a collaborative environment built on integrity and excellence, where every success contributes to our collective legacy.
              </p>
              
            </div>

         
            <div className="text-center">
              <img src="https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/4.png?" alt="Transform Relentlessly" className={`${IMAGE_SIZE} mx-auto`} />
              <h4 className="text-lg font-bold mt-4">Transform Relentlessly</h4>
              <p className="text-gray-300 mt-2">
                Innovate Boldly: Challenge conventional thinking and harness creativity to develop breakthrough solutions that set new standards.
              </p>
              
            </div>

            <div className="text-center">
              <img src="https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/5.png?" alt="Innovate Boldly" className={`${IMAGE_SIZE} mx-auto`} />
              <h4 className="text-lg font-bold mt-4">Innovate Boldly</h4>
              <p className="text-gray-300 mt-2">
                Challenge conventional thinking and harness creativity to develop breakthrough solutions that set new standards.
              </p>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
