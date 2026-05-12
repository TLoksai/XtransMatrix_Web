const HeroSection = () => {
    return (
      <section className="#080412 text-white">
     
        <div
        className="relative bg-fixed bg-center bg-cover h-[700px]  md:h-[600px] sm:h-[400px] "
        style={{
          backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/learnmore/future/hero.png?')",
        }}
      >
     
        <img
          src="https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/learnmore/future/over.png?"
          alt="Overlay Image"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        />

     
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold text-center">
          Embracing Social Equilibrium at <br />
          Work: The xTransMatrix Way
        </h1>
      </div> 
  
        <div className="px-4 md:px-16 py-8 text-center">
          <p className="text-lg md:text-xl leading-relaxed ">
            At Transmatrix, we see a future shaped by the energy of young minds and the spirit of change. Our philosophy is
            simple yet powerful: the passion of GenZ combined with visionary change agents creates a transformative
            tomorrow. Today, we’re excited to share how our approach challenges the status quo and revolutionizes the
            future of work for our clients, their customers, our industry, and our communities.
          </p>
        </div>
  
      
        <div className="px-4 md:px-16 py-12 flex flex-col items-center gap-12">
          {[ 
            {
              title: "A New Era of Innovation",
              description:
                "Forge AI is redefining innovation by transforming ideas into intelligent, data-driven solutions. With advanced AI capabilities, we empower businesses to streamline operations, enhance decision-making, and drive growth. Our technology bridges the gap between potential and execution, delivering precision and efficiency. Experience the future of AI-driven transformation with Forge AI.",
              imgSrc: "/images/about-us/future/innovation.jpg",
            },
            {
              title: "Passion Meets Purpose",
              description:
                "The heart of xTRansmatrix lies in our commitment to making a lasting impact. We know that passion is contagious, and when fueled by purpose, it can drive extraordinary change. Whether we’re collaborating with clients or engaging with communities, our mission is clear: to build a legacy that transcends the ordinary. Every project is an opportunity to blend innovative ideas with actionable strategies, ensuring that the future we create is both visionary and tangible.",
              imgSrc: "/images/about-us/future/purpose3.jpg",
            },
            {
              title: "Challenging the Status Quo",
              description:
                "At xTRansmatrix, complacency has no place. Our approach is rooted in a can-do attitude that thrives on pushing boundaries. We challenge conventional wisdom and reject the notion that change must be gradual. Instead, we embrace a bold, forward-thinking mindset that disrupts existing paradigms and paves the way for revolutionary breakthroughs. Our commitment to challenging the status quo is not just a strategy—it’s a movement that inspires our clients and communities to imagine what’s possible.",
              imgSrc: "/images/about-us/future/challenging2.jpg",
            },
            {
              title: "Revolutionizing the Future of Work",
              description:
                "The future of work is not a distant dream—it’s happening now. As we navigate the evolving landscape of business, technology, and human potential, we are dedicated to reimagining what work can be. Our innovative strategies and collaborative spirit are transforming traditional work environments into dynamic hubs of creativity and productivity. By integrating state-of-the-art technology with a human-centered approach, we’re setting new standards that empower individuals and organizations alike.",
              imgSrc: "https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/learnmore/future/future-of-work.jpg?",
            },
            {
              title: "A Lasting Legacy",
              description:
                "Our journey at xTRansmatrix is about more than immediate success; it’s about creating a lasting legacy. Every breakthrough, every innovative solution, and every bold step forward is a brick in the foundation of a future where work is redefined, and possibilities are limitless. We are not just keeping pace with change—we are igniting it, sparking a movement that will resonate for generations to come.",
              imgSrc: "/images/about-us/future/legacy.jpg",
            },
            {
              title: "Join the Movement",
              description:
                "As we continue to push the boundaries of what’s possible, we invite you to be a part of our journey. Whether you’re a client looking to revolutionize your business, a community member eager to embrace change, or a fellow innovator ready to challenge the norms, xTRansmatrix is here to collaborate and inspire. Together, we can ignite the future and create a world where innovation meets impact.",
              imgSrc: "/images/about-us/future/sucess.jpg",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "mr-auto" : "ml-auto"
              } max-w-4xl bg-purple-500 text-white p-6 rounded-lg shadow-md relative`}
            >
         
              <div className="absolute inset-0 bg-black/60 rounded-lg"></div>
  
             
              <div className="md:w-1/2 p-4 relative z-10">
                <h2 className="text-2xl font-bold mb-4">
                  {card.title.split(" ").map((word, i) => {
                    if (
                      word.toLowerCase() === "innovation" ||
                      word.toLowerCase() === "purpose" ||
                      word.toLowerCase() === "movement" ||
                      word.toLowerCase() === "legacy" ||
                      word.toLowerCase() === "work" ||
                      word.toLowerCase() === "quo"
                    ) {
                      return (
                        <span key={i} className="text-purple-600">
                          {word}
                        </span>
                      );
                    } else {
                      return <span key={i}>{word} </span>;
                    }
                  })}
                </h2>
                <p className="text-justify">{card.description}</p>
              </div>
  
           
              <div className="md:w-1/2 p-4 flex justify-center relative z-10">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="rounded-lg w-full md:w-5/6 h-60 object-cover"
                />
              </div>
            </div>
          ))}
          <div className="px-4 md:px-16 py-8 text-center">
            <p className="text-lg md:text-xl leading-relaxed ">
              At xTRansmatrix, we’re not just imagining a better tomorrow—we’re building it today.
              Join us on this exciting journey and witness the transformation firsthand. The future is bright,
              bold, and brimming with potential, and we’re just getting started.
            </p>
          </div>
        </div>
  
    
        <section className="relative flex justify-center px-4 sm:px-6 md:px-16 lg:px-24 py-24 sm:py-32 text-white bg-[url('https://ik.imagekit.io/lrxrnuqog/Contact/contact_bg.png?')] bg-[length:80%] bg-center bg-no-repeat">
          
          <div className="absolute inset-0 bg-black/50"></div>
  
          <div className="absolute top-6 sm:top-8 md:top-12 lg:top-16 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full border-2 border-[#35A7E4] text-xs sm:text-sm md:text-lg font-semibold z-10 hover:bg-[#3953C5] hover:border-[#6253A1]" style={{ backgroundColor: "rgba(98, 83, 161, 0.3)" }}>
            Contact
          </div>
  
        
          <div className="w-full sm:w-5/6 md:w-4/5 bg-black p-6 sm:p-10 rounded-lg shadow-lg border-2 border-[#7F60ED] flex flex-col md:flex-row mt-12 sm:mt-16 relative z-10">
            
            <div className="w-full md:w-1/2 flex flex-col items-center px-4 sm:px-8 py-6 sm:py-12">
              <div className="w-full max-w-md">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center">Get in touch with us</h2>
  
                <div className="flex items-center space-x-3 sm:space-x-4 bg-[#1e1e38] p-4 sm:p-5 rounded-lg mt-6 sm:mt-8">
                  <img src="https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/learnmore/future/Ellipse%206%20(1).png?" alt="User Avatar" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full" />
                  <p className="text-xs sm:text-sm text-gray-300">
                    Hi, I’m Amanda. Need help? Use the form below or email me at
                    <span className="text-[#B296F1]"> hello@xtransmatrix.com</span>.
                  </p>
                </div>
  
                <form className="space-y-4 sm:space-y-6 mt-6 sm:mt-10">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 placeholder-gray-500 rounded-lg border border-transparent focus:outline-none focus:border-[#7F60ED] focus:ring-1 focus:ring-[#7F60ED]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 placeholder-gray-500 rounded-lg border border-transparent focus:outline-none focus:border-[#7F60ED] focus:ring-1 focus:ring-[#7F60ED]"
                  />
                  <textarea
                    placeholder="Message"
                    className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 placeholder-gray-500 rounded-lg border border-transparent focus:outline-none focus:border-[#7F60ED] focus:ring-1 focus:ring-[#7F60ED]"
                  ></textarea>
  
                  <button
                    type="submit"
                    className="w-full bg-[#7F60ED] text-white font-semibold p-3 sm:p-4 rounded-lg shadow-md hover:bg-[#B296F1] focus:outline-none focus:ring-2 focus:ring-[#7F60ED]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
           
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden mt-6 sm:mt-10 md:mt-0 h-64 sm:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.7748129493244!2d77.59107387485258!3d13.061026713693185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1fb0f1f0b12f%3A0x6b0bb03d8998d63c!2s3H4X%2B448%2C%20Dasarahalli%20Main%20Rd%2C%20Sector%20B%2C%20Hebbal%20Kempapura%2C%20Bengaluru%2C%20Byatarayanapura%20CMC%20and%20OG%20Part%2C%20Karnataka%20560092!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </section>
    );
  };
  
  export default HeroSection;

  