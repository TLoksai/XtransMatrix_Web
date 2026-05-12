import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden font-inter">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/lrxrnuqog/about-us(Cultures)/hero%20photo.png?')",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative flex items-center justify-center h-full text-white text-3xl md:text-4xl font-bold">
          <h1>Privacy Policy</h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="bg-[#0a0214] text-white py-16 px-6 md:px-12 font-inter">
        <div className="max-w-screen-lg mx-auto text-left space-y-10">
          <h2 className="text-xl md:text-2xl font-bold uppercase mb-6">
            Your Privacy Matters to Us
          </h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            At XTRANSMATRIX, we take your privacy seriously. This Privacy Policy explains how we handle
            your personal information, what we collect, why we collect it, and how we keep it safe.
            By using our website and services, you agree to the practices described here.
          </p>

          {/* Information We Collect */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              Information We Collect
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              We do not collect personal data from visitors browsing our website. The only
              information we collect is related to our hiring process. This may include your name,
              email address, phone number, resume, and other personal or professional information
              voluntarily provided during the recruitment process. This information is securely stored
              in our internal databases and is never used for purposes other than recruitment.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              How We Use Your Information
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              Your information is used exclusively for evaluating your application and contacting
              you regarding hiring opportunities. We do not sell, rent, or share your personal data
              with third parties without your explicit consent. We will never use your details for
              marketing, advertising, or any unrelated activity.
            </p>
          </div>

          {/* Data Storage and Security */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              Data Storage and Security
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              All personal information collected for hiring purposes is stored securely in our
              protected database. We implement industry-standard security measures, including
              restricted access, encryption, and monitoring, to protect against unauthorized access
              or misuse of your data.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              Your Rights
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              You have the right to request access to your personal information, correct inaccuracies,
              or request deletion of your data from our system. If you wish to exercise these rights,
              please contact us at <span className="text-purple-400">developer@xtransmatrix.com</span>.
            </p>
          </div>

          {/* Cookies & Tracking */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              Cookies & Tracking
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              We do not use cookies or tracking tools to monitor your browsing behavior on our
              website. Your experience on our site is private and free from unnecessary tracking.
            </p>
          </div>

          {/* Updates to Privacy Policy */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              Updates to This Policy
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              From time to time, we may update this Privacy Policy to reflect changes in our
              practices or legal requirements. When updates occur, we will revise the "Last Updated"
              date at the bottom of this page.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              Contact Us
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              If you have any questions or concerns about this Privacy Policy, please contact us at
              <span className="text-purple-400"> developer@xtransmatrix.com</span>.
            </p>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            Last Updated: August 2026
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
