const TeamMembersPage = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-[90vh]">
      <div className="absolute inset-0">
        <img 
          src="https://ik.imagekit.io/lrxrnuqog/Employess/Team_Banner.png"
          alt="Team Members"
          className="w-full h-full object-cover"
        />
      </div>

      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#6253A1',
          opacity: 0.65,
          border: '2px solid #7F60ED'
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[75vh] px-[4vw] text-white text-center">
        <h1
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            lineHeight: '1.2',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          Our Team Members
        </h1>

        <p
          className="max-w-[80vw] mt-[2vh]"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(1.2rem, 4vw, 2.5rem)',
            lineHeight: '1.4',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
          }}
        >
          Real People. Real Teams. Real Impact
        </p>
      </div>
    </div>
  );
};

export default TeamMembersPage;
