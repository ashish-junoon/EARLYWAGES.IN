import illustration from "../assets/illustration.png";
const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-primary/5 mt-[40px] scroll-mt-16"
    >
      <div className="w-[95%] max-w-[1400px] mx-auto">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              About <span className="text-primary">EarlyWages</span>
            </h2>

            <p className="text-gray-600 text-md mb-6">
              We provide an accessible digital lending platform for emerging
              professionals underserved by traditional institutions. Our
              short-term personal loans bridge immediate financial gaps with
              full transparency and no hidden costs. Operating in strict
              adherence to RBI Digital Lending Guidelines, we ensure a secure,
              encrypted, and responsible experience for those building their
              financial foundation.
            </p>

            <div className="flex flex-wrap gap-1">
              <p className="bg-gray-100 border border-gray-300/80 text-sm text-primary font-medium w-fit px-2 rounded-sm">
                Bullet Repayment Loan
              </p>
              <p className="bg-gray-100 border border-gray-300/80 text-sm text-primary font-medium w-fit px-2 rounded-sm">
                Digital Procession
              </p>
              <p className="bg-gray-100 border border-gray-300/80 text-sm text-primary font-medium w-fit px-2 rounded-sm">
                Quick Disbursement
              </p>
              <p className="bg-gray-100 border border-gray-300/80 text-sm text-primary font-medium w-fit px-2 rounded-sm">
                Fully Automated Process
              </p>
              <p className="bg-gray-100 border border-gray-300/80 text-sm text-primary font-medium w-fit px-2 rounded-sm">
                Minimal Documentation
              </p>
              <p className="bg-gray-100 border border-gray-300/80 text-sm text-primary font-medium w-fit px-2 rounded-sm">
                100% Paperless Process
              </p>
              <p className="bg-gray-100 border border-gray-300/80 text-sm text-primary font-medium w-fit px-2 rounded-sm">
                Simple & Secure Process
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* <div className="absolute -top-6 -left-6 w-full h-full bg-primary/10 rounded-3xl"></div> */}
            <img
              src={illustration}
              alt="About Earlywages"
              className="relative rounded-3xl w-[90%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
