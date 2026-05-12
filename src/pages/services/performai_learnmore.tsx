const ExpertiseSection = () => {
  return (
    <div className="w-full bg-black text-white">

      <section className="bg-[#080412] text-white">
        
        <div
          className="relative bg-fixed bg-center bg-cover h-[750px] md:h-[550px] sm:h-[450px] flex items-center -mt-8"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/lrxrnuqog/Menu_Services/Human_in_Loop/learnmore/hero.png?')",
          }}
        >
  
          <img
            src="https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/learnmore/future/over.png?"
            alt="Overlay Image"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-110"
          />

          
          <h1 className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold text-center">
            PERFORM AI <br />
          </h1>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center p-10">
        <p className="text-center max-w-3xl mb-8 text-gray-300">
          Perform AI is a specialized AI development service focused on building Gen AI-integrated products
          that are enterprise-grade, production-ready, and fully supported. We work with businesses that have
          a clear idea and roadmap, executing their vision with precision and scalability.
        </p>
        <h2 className="text-3xl font-bold mb-6">Our Expertise :</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="bg-purple-600 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">Digitization of Legacy Documents</h3>
            <p className="text-gray-200 mt-2">
              Converting unstructured and paper-based documents into structured, searchable digital formats.
              Implementing AI-driven OCR, NLP, and entity recognition solutions.
            </p>
          </div>
          <div className="bg-purple-600 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">LLM + RAG-Based Chatbots</h3>
            <p className="text-gray-200 mt-2">
              Developing AI-powered chatbots that integrate with structured and unstructured data.
              Enhancing user interactions with Retrieval-Augmented Generation (RAG) for context-aware responses.
            </p>
          </div>
          <div className="bg-purple-600 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">Migration to Structured Databases</h3>
            <p className="text-gray-200 mt-2">
              Transforming legacy data into structured databases for better accessibility and analytics.
              Ensuring data integrity, scalability, and compliance with industry standards.
            </p>
          </div>
          <div className="bg-purple-600 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">AI Agents for Various Tasks</h3>
            <p className="text-gray-200 mt-2">
              Automating complex workflows using intelligent AI agents.
              Enabling decision-making, predictive analytics, and business process optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DataTaggingSection = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-6 md:px-12 lg:px-24 xl:px-36">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="lg:w-1/2 lg:pl-16 xl:pl-32">
        <h2 className="text-4xl font-bold text-center lg:text-left mb-6">
          Focus on AI Data <span className="text-purple-400">Tagging & Annotation</span>
        </h2>
        <p className="text-center lg:text-left max-w-3xl mx-auto text-gray-300 mb-10">
          Our Data Tagging and Annotation Service provides high-quality, structured datasets for
          AI model training and fine-tuning. Whether it's image annotation, video labeling,
          speech transcription, or text classification, we offer human-in-the-loop feedback to
          ensure the accuracy and reliability of AI-driven automation. This is made possible by
          our large workforce of 50+ trained personnel, ensuring efficiency and scalability.
        </p>
      </div>
  
   
      <div className="lg:w-1/2 flex justify-center lg:pl-16 xl:pl-32">
        <img
          src="https://ik.imagekit.io/lrxrnuqog/Menu_Services/Human_in_Loop/learnmore/1.png?"
          alt="AI Robot"
          className="w-64 h-auto lg:w-80"
        />
      </div>
    </div>
  

      
    
      <div className="w-full flex flex-wrap justify-center gap-6 mt-10">
        <div className="bg-gray-900 p-6 rounded-xl w-72 text-center">
          <img
            src="https://ik.imagekit.io/lrxrnuqog/Menu_Services/Human_in_Loop/learnmore/2.png?"
            alt="Image Annotation"
            className="mx-auto mb-4 h-20"
          />
          <h3 className="text-xl font-semibold">Image & Video Annotation</h3>
          <p className="text-gray-400 text-sm mt-2">
            Object detection, segmentation, and classification. Bounding box, key point, and
            polygon-based annotations. Frame-by-frame video labeling for action recognition and
            object tracking.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl w-72 text-center">
          <img
            src="https://ik.imagekit.io/lrxrnuqog/Menu_Services/Human_in_Loop/learnmore/3.png?"
            alt="Text Annotation"
            className="mx-auto mb-4 h-20"
          />
          <h3 className="text-xl font-semibold">Text Labeling & NLP Training Data</h3>
          <p className="text-gray-400 text-sm mt-2">
            Named entity recognition (NER), sentiment analysis, and intent classification for
            NLP applications.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl w-72 text-center">
          <img
            src="https://ik.imagekit.io/lrxrnuqog/Menu_Services/Human_in_Loop/learnmore/4.png?"
            alt="Audio Transcription"
            className="mx-auto mb-4 h-20"
          />
          <h3 className="text-xl font-semibold">Audio Transcription & Speech Processing</h3>
          <p className="text-gray-400 text-sm mt-2">
            Manual and automated transcription for AI speech models. Speaker identification,
            sentiment tagging, and language classification.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl w-72 text-center">
          <img
            src="https://ik.imagekit.io/lrxrnuqog/Menu_Services/Human_in_Loop/learnmore/5.png?"
            alt="Audio Transcription"
            className="mx-auto mb-6 h-20"
          />
          <h3 className="text-xl font-semibold">Human-in-the-Loop Feedback for AI Models</h3>
          <p className="text-gray-400 text-sm mt-2">
          Providing human evaluation for AI-generated outputs.
          Refining model accuracy through reinforcement learning from human feedback (RLHF).
          </p>
        </div>
      </div>
      <div className="w-full bg-black text-white py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Compliance & Security Coverage</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold">Comprehensive & General Insurance</h3>
          <p className="text-gray-200 mt-2">$2M USD coverage</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold">Cybersecurity Insurance</h3>
          <p className="text-gray-200 mt-2">$2M USD coverage</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold">Errors & Omissions Insurance</h3>
          <p className="text-gray-200 mt-2">$5M USD coverage</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center ">
          <h3 className="text-xl font-semibold">Certifications</h3>
          <p className="text-gray-200 mt-2">ISO9001, ISO27001 Certified</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold">Onboarded ISO AI System Lead Auditor</h3>
          <p className="text-gray-200 mt-2">Ensuring compliance and audit readiness</p>
        </div>
      </div>
    </div>

    <section
      className="relative flex justify-center px-4 sm:px-6 md:px-16 lg:px-24 py-24 sm:py-32 text-white bg-[url('https://ik.imagekit.io/lrxrnuqog/Contact/contact_bg.png?')] bg-[length:80%] bg-center bg-no-repeat"
    >

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


    </div>
    
  );
};

const CombinedSections = () => {
  return (
    <>
      <ExpertiseSection />
      <DataTaggingSection />
    </>
  );
};

export default CombinedSections;
