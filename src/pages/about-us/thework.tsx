const HeroSection = () => {
    return (
      <section className="#080412 text-white">

      <div
        className="relative bg-fixed bg-center bg-cover h-[700px] md:h-[600px] sm:h-[400px]"
        style={{
          backgroundImage: "url('https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/learnmore/thework/hero2.jpg?')",
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
          <p className="text-lg md:text-xl leading-relaxed">
            At xTRansmatrix, we believe that innovation isn’t just about technology or ideas—it’s about people. True innovation stems from finding the balance between individual authenticity and collective collaboration. We’re excited to share how our philosophy of Social Equilibrium at Work is reshaping the way we think, learn, and grow together.
          </p>
        </div>


        <div className="px-4 md:px-16 py-12 flex flex-col items-center gap-12">
          {[ 
            {
              title: "The Power of Authenticity and Collaboration",
              description:
                "Every person brings a unique set of skills, perspectives, and experiences to the table. At xTRansmatrix, we celebrate these differences, knowing that the unique qualities you contribute are the very essence of creativity and progress. We value individual authenticity, recognizing that when each team member is encouraged to be themselves, the result is a more dynamic and innovative workplace.",
              imgSrc: "https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/learnmore/thework/collaboration2.jpg?",
            },
            {
              title: "LearnWhileWork: A Philosophy for Growth",
              description:
                "Our LearnWhileWork philosophy is all about continuous growth. It’s a commitment to learning and evolving, both as individuals and as a community. Integrating Social Equilibrium into this philosophy means that while we pursue personal and professional development, we also nurture an environment where diversity, equity, and inclusivity are not just buzzwords—they are the core of our daily interactions.",
              imgSrc: "https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/learnmore/thework/growth.jpg?",
            },
            {
              title: "Diversity, Equity, and Inclusivity: The Cornerstones of Success",
              description:
                "Social Equilibrium is more than a concept; it’s a commitment to building a workplace where everyone feels valued and empowered. By merging diversity, equity, and inclusivity with a collaborative mindset, we create an environment where innovative ideas flourish. This balanced approach drives our success and sets the stage for groundbreaking solutions that benefit our clients, our industry, and our communities.",
              imgSrc: "/images/about-us/work/movement2.jpg",
            },
            {
              title: "The impact of Social Equilibrium",
              description:
                "Enhanced Creativity: When individuals are free to express their authentic selves, creative ideas emerge naturally. Stronger Team Bonds: By valuing each person’s unique contributions, we foster a sense of belonging and mutual respect that strengthens our teamwork. Continuous Learning: Our commitment to #LearnWhileWork ensures that every day is an opportunity to grow, adapt, and improve—both individually and collectively. Resilient Innovation: A diverse and inclusive environment leads to more robust problem-solving. We’re better equipped to navigate challenges and seize new opportunities.",
              imgSrc: "https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/learnmore/thework/social.jpg?",
            },
            {
              title: "Join our Journey",
              description:
                "At xTRansmatrix, Social Equilibrium isn’t just an idea—it’s a way of life. It’s a balanced approach that underpins every success story and every breakthrough innovation. We invite you to be a part of this journey. Whether you’re a client, a colleague, or someone passionate about a collaborative and inclusive future, there’s a place for you in our community.",
              imgSrc: "https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/learnmore/thework/55.jpg?",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? "mr-auto" : "ml-auto"} max-w-4xl bg-purple-500 text-white p-6 rounded-lg shadow-md relative`}
            >
            
              <div className="absolute inset-0 bg-black/60 rounded-lg"></div>

          
              <div className="md:w-1/2 p-4 relative z-10">
                <h2 className="text-2xl font-bold mb-4">
                  {card.title}
                </h2>
                <p className="text-justify">{card.description}</p>
              </div>

          
              <div className="md:w-1/2 p-4 flex justify-center relative z-10">
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="rounded-lg w-full md:w-6/6 h-50 object-cover"
                />
              </div>
            </div>
          ))}

          <div className="px-4 md:px-16 py-8 text-center">
            <p className="text-lg md:text-xl leading-relaxed">
              Discover more about our journey, our innovations, and how we’re shaping the future of work at xTRansmatrix. Stay connected and let’s learn while we work—together.
            </p>
          </div>
        </div>

        <section className="relative flex justify-center px-4 sm:px-6 md:px-16 lg:px-24 py-24 sm:py-32 text-white bg-[url('https://ik.imagekit.io/lrxrnuqog/Contact/contact_bg.png?')] bg-[length:80%] bg-center bg-no-repeat">
          
          <div className="absolute inset-0 bg-black/50"></div>

        
          <div
            className="absolute top-6 sm:top-8 md:top-12 lg:top-16 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full border-2 border-[#35A7E4] text-xs sm:text-sm md:text-lg font-semibold z-10 hover:bg-[#3953C5] hover:border-[#6253A1]"
            style={{ backgroundColor: "rgba(98, 83, 161, 0.3)" }}
          >
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
                    className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1]"
                  />
                  <textarea
                    placeholder="Type your query here..."
                    className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1] h-24 sm:h-28"
                  ></textarea>
                  <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#6253A1] text-white rounded-md text-sm sm:text-lg font-semibold hover:bg-[#53458C] transition">
                    Send my message
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
