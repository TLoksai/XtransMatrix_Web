import { useState } from "react";

const CombinedCareerPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    resume: null as File | null,
    coverLetter: null as File | null,
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prevState => ({
        ...prevState,
        [name]: files[0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const formPayload = new FormData();
      formPayload.append('firstName', formData.firstName);
      formPayload.append('lastName', formData.lastName);
      formPayload.append('email', formData.email);
      formPayload.append('motivation', formData.motivation);
      if (formData.resume) formPayload.append('resume', formData.resume);
      if (formData.coverLetter) formPayload.append('coverLetter', formData.coverLetter);

      const response = await fetch(`${import.meta.env.VITE_API_URL_FUTURE}/careers`, {
        method: 'POST',
        body: formPayload,
      });

      if (!response.ok) {
        throw new Error('Submission failed. Please try again.');
      }

      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        resume: null,
        coverLetter: null,
        motivation: ''
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-10 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              BUILD YOUR HITL - AI CAREER WITH XTRANSMATRIX 
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              Join India's fastest-growing Human-in-the-Loop (HITL) AI workforce. 
              Learn data annotation, AI prompting, and vibe coding from real-world 
              projects led by industry experts.
            </p>
            <div className="pt-4 md:pt-6">
              <button
                onClick={scrollToForm}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                START YOUR AI CAREER TODAY
              </button>
            </div>
          </div>

          <div className="relative flex justify-center mt-8 md:mt-0">
            <div className="absolute top-1/2 left-1/2 w-0 h-0 
              border-l-[150px] sm:border-l-[200px] md:border-l-[260px] border-l-transparent
              border-b-[150px] sm:border-b-[200px] md:border-b-[260px] border-b-purple-600 
              transform -translate-x-1/2 -translate-y-1/2 translate-x-[-20px] sm:translate-x-[-30px] md:translate-x-[-40px] translate-y-[-20px] sm:translate-y-[-30px] md:translate-y-[-40px] z-0">
            </div>
            
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-blue-600 z-10">
              <img 
                src="https://ik.imagekit.io/lrxrnuqog/Future_Of_Work/future.png?updatedAt=1756360713992" 
                alt="AI Career at XTRANSMATRIX" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      <div className="py-6 md:py-8 text-center">
        <p className="text-lg md:text-xl font-light text-white">
          xTMX | Powered by Humans. Built for AI.
        </p>
      </div>

      <section id="application-form" className="py-10 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Join Our AI-First Workforce at XTRANSMATRIX
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-6 md:mb-8">
              Become part of India's fastest-growing HITL-AI company with delivery centers in Bangalore, Mangalore, and expanding across India. Work on global AI projects in <span className="text-purple-400 font-semibold">data annotation, AI prompting, GenAI fine-tuning, and RLHF operations</span>.
            </p>
          </div>

          <form className="bg-gray-900 rounded-lg p-5 sm:p-6 md:p-8 border border-gray-700" onSubmit={handleSubmit}>
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 text-white">
              Apply for a Role in AI Annotation, Prompt Engineering & Data Enrichment
            </h3>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-900 text-green-200 rounded-lg border border-green-700">
                Application submitted successfully! We'll get back to you soon.
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-red-900 text-red-200 rounded-lg border border-red-700">
                {submitError}
              </div>
            )}

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                    First Name<span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                    Last Name<span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                  Email<span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                    Resume Upload<span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      id="resume-upload"
                    />
                    <label 
                      htmlFor="resume-upload"
                      className="flex items-center justify-between w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-white"
                    >
                      <span className="truncate mr-2">
                        {formData.resume ? formData.resume.name : 'Choose file...'}
                      </span>
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </label>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                    Cover Letter Upload
                    <span className="text-gray-400 text-xs sm:text-sm ml-2">Optional but recommended</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="coverLetter"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      id="coverletter-upload"
                    />
                    <label 
                      htmlFor="coverletter-upload"
                      className="flex items-center justify-between w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-white"
                    >
                      <span className="truncate mr-2">
                        {formData.coverLetter ? formData.coverLetter.name : 'Choose file...'}
                      </span>
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </label>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                  Why do you want to join the xTMX Human-in-the-Loop AI Team?<span className="text-red-400">*</span>
                  <span className="text-gray-400 text-xs sm:text-sm ml-2">(Max 300 words)</span>
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={5}
                  maxLength={300}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical transition-all duration-300"
                  placeholder="Tell us about your passion for AI, your relevant experience, and why you want to be part of our HITL-AI team..."
                />
                <div className="text-right text-xs sm:text-sm text-gray-400 mt-1">
                  {formData.motivation.length}/300 words
                </div>
              </div>

              <div className="flex justify-center">
                <div className="bg-gray-700 border border-gray-600 rounded p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 hover:bg-gray-600 transition-colors duration-300">
                  <input type="checkbox" className="w-4 h-4" required />
                  <span className="text-xs sm:text-sm text-gray-300">I'm not a robot</span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs">rC</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${isSubmitting ? 'bg-purple-800' : 'bg-purple-600 hover:bg-purple-700'} text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'APPLY TO BUILD THE FUTURE OF AI WITH xTMX'}
                </button>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-5 md:p-6 bg-gray-800 rounded-lg border border-gray-600">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 text-center">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-purple-400 mb-2">Roles Open</h4>
                  <p className="text-sm sm:text-base text-gray-300">AI Operators, Data Annotators, Prompt Engineers, AI Trainers</p>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-purple-400 mb-2">Growth Path</h4>
                  <p className="text-sm sm:text-base text-gray-300">Start in data enrichment and grow into advanced GenAI teams</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CombinedCareerPage;