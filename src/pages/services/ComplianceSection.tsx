const ComplianceSection = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-16 py-16 bg-black text-white overflow-hidden">

      <div className="absolute inset-0">
        <img
          src="/images/services1/forge-ai/lernmore/bg.png"
          alt="Compliance Background"
          className="w-full h-full object-cover opacity-90"
        />
      </div>


      <div className="relative z-10 max-w-3xl text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6">
          Compliance (Data & Cyber Security Coverage)
        </h2>
        
        <ul className="text-lg md:text-xl font-semibold text-left space-y-4">
          <li>
            <span className="text-white font-bold">Comprehensive & General Insurance:</span>{" "}
            2M USD coverage
          </li>
          <li>
            <span className="text-white font-bold">Cybersecurity Insurance:</span>{" "}
            2M USD coverage
          </li>
          <li>
            <span className="text-white font-bold">Errors & Omissions Insurance:</span>{" "}
            5M USD coverage
          </li>
          <li>
            <span className="text-white font-bold">ISO9001, ISO27001 Certified</span>
          </li>
          <li>
            <span className="text-white font-bold">
              Onboarded ISO AI System Lead Auditor Compliance
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComplianceSection;
