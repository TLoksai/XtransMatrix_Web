import React from "react";
import Spline from "@splinetool/react-spline"; 


const IMAGE_ALIGNMENT = "justify-end"; 

const DiversitySection: React.FC = () => {
  return (
    <section className="bg-[#080412] text-white font-inter">
      
      <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/about-us(Diversity)/hero1.png?')",
            backgroundAttachment: "fixed",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top", 
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative flex items-center justify-center h-full text-white text-2xl md:text-3xl font-bold">
          <h1>Diversity by Young Minds</h1>
        </div>
      </div>

  
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold">
            Diversity by <span className="text-purple-400">Young Minds</span>
          </h2>
          <p className="text-gray-300 mt-4 text-justify">
            At xTRansmatrix, we champion "Diversity by Young Minds"—a dynamic blend of GenZ energy and the right mix of change agents. We believe that true innovation springs from collaboration among diverse young talents, each bringing unique perspectives and bold ideas. In our vibrant ecosystem, these emerging leaders work side by side with experienced trailblazers, challenging conventions and transforming obstacles into opportunities. Together, we foster an environment where every voice is valued, every idea ignites progress, and every collaborative effort drives meaningful change for our clients, communities, and the future of work.
          </p>
          <button className="mt-6 px-6 py-2 bg-[#517AF5] hover:bg-[#4165CF] text-white font-semibold rounded-full flex items-center">
            Learn more →
          </button>
        </div>

     
        <div className={`md:w-1/2 flex ${IMAGE_ALIGNMENT}`}>
  <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
    <Spline scene="https://prod.spline.design/fJqMbRZBIkHXY44t/scene.splinecode" />
  </div>
</div>

      </div>
    </section>
  );
};

export default DiversitySection;
