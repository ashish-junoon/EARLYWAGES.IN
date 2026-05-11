import { HashLink } from "react-router-hash-link";
import heroImg from "../assets/hero.png";
import { Link } from "react-router-dom";

const typingdata = [
  "Bullet Repayment Loan",
  "EMI Options",
  "Digital Procession",
  "Quick Disbursement",
  "Fully Automated Process",
  "Minimal Documentation",
  "100% Paperless Process",
  "Simple & Secure Process",
  "24/7 Customer Support",
];

export default function Hero() {
  return (
    <section className="bg-[#eef5fb] pt-15">
      <div className="w-full max-w-[1400px] mx-auto px-0 md:px-6 grid md:grid-cols-2 max-md:py-5 gap-10 items-center">
        {/* Left Content */}
        <div className="max-md:order-2">
          <ul
            style={{ zIndex: -9 }}
            className="dytext font-semibold max-md:px-2"
          >
            {typingdata?.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-2">
                  <div className="bg-primary w-3 h-3 rounded-full animate-bounce"></div>
                  <h2>{item}</h2>
                </li>
              );
            })}
          </ul>

          <h1 className="text-2xl md:text-5xl font-bold leading-tight text-gray-900 max-md:px-2">
            Welcome to <span className="text-primary">Early Wages</span> <br />
            <span className="text-primary">Easiest</span> lending platform
          </h1>

          <p className="mt-5 text-gray-600 max-w-lg max-md:px-2">
            We are a digital lending platform dedicated to supporting emerging
            professionals and individuals currently underserved by traditional
            banking. We bridge the gap by providing accessible credit to those
            starting their careers or building their financial foundations.
          </p>

          <div className="flex gap-2 max-md:px-2">
            <HashLink
              smooth
              to="/#contact"
              className="mt-7 bg-white hover:bg-gray-100/50 border border-primary text-primary px-6 py-3 rounded-md font-semibold shadow-md"
            >
              Contact us
            </HashLink>
            <Link
              to="https://apps.earlywages.in/register"
              target="_blank"
              className="mt-7 bg-primary hover:bg-primary/90 border border-primary text-white px-6 py-3 rounded-md font-semibold shadow-md"
            >
              Get Loan
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative max-md:order-1 m-auto">
          <img
            src={heroImg}
            alt="Finance"
            className="max-md:h-[350px] md:w-[450px] m-auto float-right"
          />
        </div>
      </div>

      {/* Bottom Features */}
      {/* <div className="bg-primary mt-2 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-white text-center gap-6 px-6">

          <div>
            <p className="font-semibold">Fast Approvals</p>
          </div>

          <div>
            <p className="font-semibold">400000 Customers</p>
          </div>

          <div>
            <p className="font-semibold">Flexible Payments</p>
          </div>

          <div>
            <p className="font-semibold">No Prepayment Fees</p>
          </div>

        </div>
      </div> */}
    </section>
  );
}
