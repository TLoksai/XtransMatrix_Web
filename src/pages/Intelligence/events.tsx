import React from "react";

const XtmxEventsSection: React.FC = () => {
  return (
    <section className="bg-[#0a0214] text-white font-inter">
    
      <div
        className="relative w-full h-[500px] flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4"
        style={{
          backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/Intelligence/Events/1.png?')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 uppercase">Events</h1>
      </div>

   
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16">
        
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold">
            Welcome to <span className="text-purple-400">Xtransmatrix Events</span>
          </h2>
        </div>

  
        <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold">
              AI Agentic Day – Powered by{" "}
              <span className="text-purple-400">AI Tank</span>
            </h2>
            <p className="text-gray-300 mt-4 text-justify">
              Join us for AI Agentic Day, an exciting event hosted by XtransMatrix, where 
              industry leaders, AI enthusiasts, and experts come together to explore the 
              transformative power of artificial intelligence.
            </p>
            <p className="text-gray-300 mt-4 text-justify">
              This day will feature insightful panel discussions, hands-on workshops, and 
              networking opportunities, focusing on the latest trends in AI, its ethical 
              implications, and its role in decision-making and innovation.
            </p>
            <p className="text-gray-300 mt-4 text-justify">
              Whether you're an AI professional, business leader, researcher, or enthusiast, 
              AI Agentic Day offers the perfect platform to connect, learn, and shape the future of AI.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full flex items-center">
              Learn more →
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://ik.imagekit.io/lrxrnuqog/Intelligence/Events/2.png?"
              alt="AI Agentic Day"
              className="w-64 md:w-72"
            />
          </div>
        </div>

 
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mt-16">
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://ik.imagekit.io/lrxrnuqog/Intelligence/Events/3.png?"
              alt="Collaboration Event"
              className="w-64 md:w-72"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold">
              Profit Stream Through Collaboration –{" "}
              <span className="text-purple-400">We Collab For Profits</span>
            </h2>
            <p className="text-gray-300 mt-4 text-justify">
              At XtransMatrix, we believe in the power of collaboration to drive profit. 
              By partnering with like-minded innovators, businesses, and AI professionals, 
              we create synergies that unlock new revenue streams and business opportunities.
            </p>
            <p className="text-gray-300 mt-4 text-justify">
              Our collaborative approach ensures that each partnership is built on shared 
              goals, mutual growth, and sustainable success, allowing us to maximize the 
              impact of AI in various sectors while delivering tangible results.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full flex items-center">
              Learn more →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XtmxEventsSection;
