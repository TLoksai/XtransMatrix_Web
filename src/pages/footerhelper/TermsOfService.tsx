import React from "react";

const TermsOfService: React.FC = () => {
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
          <h1>Terms of Service</h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="bg-[#0a0214] text-white py-16 px-6 md:px-12 font-inter">
        <div className="max-w-screen-lg mx-auto text-left space-y-10">
          <h2 className="text-xl md:text-2xl font-bold uppercase mb-6">
            Agreement Between You and XTRANSMATRIX
          </h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            These Terms of Service (“Terms”) govern your use of the website{" "}
            <span className="text-purple-400">xtransmatrix.com</span> and any
            services provided by XTRANSMATRIX. By accessing or using our website,
            you agree to be bound by these Terms. If you do not agree, please
            discontinue use immediately.
          </p>

          {/* Use of Website */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              1. Use of Our Website
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              You agree to use our website and services only for lawful purposes
              and in a manner that does not infringe the rights of others or
              restrict their use. Unauthorized attempts to disrupt, damage, or
              interfere with the website or servers are strictly prohibited.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              2. Intellectual Property
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              All content on this website, including text, graphics, logos,
              images, and software, is the property of XTRANSMATRIX or its
              licensors and is protected under copyright and intellectual
              property laws. You may not copy, modify, distribute, or reproduce
              any content without prior written consent.
            </p>
          </div>

          {/* Hiring & Data Submission */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              3. Hiring and Data Submission
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              As part of our hiring process, you may provide personal
              information such as your name, email, and resume. By submitting
              this information, you consent to its use for recruitment purposes
              only. We do not share, sell, or misuse your data without
              permission, in accordance with our{" "}
              <a href="/privacy-policy" className="text-purple-400 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              4. Limitation of Liability
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              XTRANSMATRIX provides this website and its content on an “as is”
              basis without warranties of any kind, express or implied. We are
              not liable for damages arising from your use or inability to use
              the site, including loss of data, business interruption, or
              indirect damages.
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              5. Third-Party Links
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              Our website may contain links to external websites operated by
              third parties. These links are provided for convenience only, and
              XTRANSMATRIX is not responsible for the content, accuracy, or
              policies of external sites.
            </p>
          </div>

          {/* Termination */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              6. Termination of Access
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              We reserve the right to restrict, suspend, or terminate your
              access to the website at our sole discretion if you violate these
              Terms or engage in harmful activities.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              7. Governing Law
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              These Terms are governed by the laws of India. Any disputes shall
              be subject to the exclusive jurisdiction of the courts in
              Bengaluru, Karnataka.
            </p>
          </div>

          {/* Updates */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              8. Updates to These Terms
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              We may revise these Terms from time to time. The latest version
              will always be posted on this page, and continued use of our
              website indicates your acceptance of the revised Terms.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-purple-400">
              9. Contact Us
            </h3>
            <p className="text-gray-300 mt-3 text-justify">
              For questions regarding these Terms, please contact us at{" "}
              <span className="text-purple-400">support@xtransmatrix.com</span>.
            </p>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            Last Updated: August 2025
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
