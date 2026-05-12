import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });


    tl.to(".brick", {
      opacity: 0,
      scale: 0.5,
      stagger: 0.3, 
      duration: 0.2,
      ease: "power1.inOut",
    });

 
    tl.to(".loader", {
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
    });
  }, []);

  return (
    <>
      {loading && (
        <div className="loader fixed top-0 left-0 w-screen h-screen bg-black flex flex-col justify-center items-center text-white z-[9999]">
          <div className="flex gap-4 mb-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="brick w-12 h-12 bg-indigo-500 rounded-md"></div>
            ))}
          </div>
          <div className="flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i + 3} className="brick w-12 h-12 bg-indigo-500 rounded-md"></div>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            {[...Array(3)].map((_, i) => (
              <div key={i + 6} className="brick w-12 h-12 bg-indigo-500 rounded-md"></div>
            ))}
          </div>
        </div>
      )}
      <div className={`content ${loading ? "hidden opacity-0" : "opacity-100"} transition-opacity duration-500`}>
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold text-indigo-400 uppercase animate-pulse">
            Welcome to XTRANSMATRIX
          </h2>
          <p className="text-lg mt-4 text-gray-300">
            Ship higher-quality software faster. Be the hero of your engineering teams.
          </p>
          <a
            href="https://xtransmatrix.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="glow-button mt-6 bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg font-bold shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
              Know More
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Loader;
          