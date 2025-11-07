const ForBrandsProcess = () => {

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-left mb-16 ml-8">
          <h2 className="mb-4" style={{
            fontFamily: 'Aileron',
            fontWeight: 700,
            fontStyle: 'Bold',
            fontSize: '58.32px',
            lineHeight: '57.86px',
            letterSpacing: '-0.06em',
            textTransform: 'capitalize',
            color: '#231f20'
          }}>
            Creator Marketing
          </h2>
          <h2 className="text-6xl font-bold mb-4" style={{
            fontFamily: 'Aileron',
            fontWeight: 700,
            fontStyle: 'Bold',
            fontSize: '58.32px',
            lineHeight: '57.86px',
            letterSpacing: '-0.06em',
            textTransform: 'capitalize',
            color: '#231f20'
          }}>
            <span 
              className="text-white -px-1 -py-4 rounded"
              style={{
                backgroundColor: '#1340ff',
                fontFamily: 'Aileron',
                fontWeight: 700,
                fontStyle: 'Bold',
                fontSize: '58.32px',
                lineHeight: '57.86px',
                letterSpacing: '-0.06em',
                textTransform: 'capitalize'
              }}
            >
              Made Easy.
            </span>
          </h2>
          
          {/* Group 37.svg Image */}
          <div className="mt-44">
            <img
              src="/images/ForBrands/steps.svg"
              alt="Creator Marketing Process"
              className="mx-auto max-w-6xl w-full h-auto"
            />
          </div>
        </div>


        {/* CTA Button */}
        <div className="text-center mt-16">
          <button
            className="px-12 py-4 text-white font-bold rounded-full text-lg relative overflow-hidden"
            style={{
              backgroundColor: '#1340ff',
              background: 'linear-gradient(135deg, #1340ff 0%, #1340ff 100%)',
              boxShadow: '0 8px 25px rgba(19, 64, 255, 0.3)',
              fontFamily: 'Aileron',
              fontWeight: 700
            }}
          >
            <span className="flex items-center gap-2">
              GET STARTED
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="inline-block"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForBrandsProcess;
