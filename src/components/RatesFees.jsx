import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

// const fees = [
//   { label: "Minimum Loan Amount", value: "₹1,000 – ₹2,00,000" },
//   { label: "Loan Tenure", value: "95 – 180 Days" },
//   { label: "Processing Fees", value: "2% – 7%" },
//   { label: "Interest Rate (ROI)", value: "2.99%" },
//   { label: "Pre-closure Charges", value: "No Charges" },
//   { label: "NACH Bounce Charges", value: "₹590" },
//   { label: "GST on Processing Fee", value: "18%" },
//   { label: "Annual Percentage Rate (APR)", value: "35% – 72%" },
// ];
const fees = [
  { label: "Loan Amount", value: "₹1000 – ₹100000" },
  { label: "Rate of Interest (ROI)", value: "0.10% to 1.00% per day" },
  { label: "Processing Fee", value: "4.00% to 10.00% (exclusive of 18% GST)" },
  { label: "Prepayment Charges", value: "₹0 (No charges on early repayment)" },
  { label: "Penalty", value: "Rs. 50/- per day" },
];

export default function RatesFees() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 lg:px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Transparent <span className="text-primary">Rates</span> & <span className="text-primary">Fees</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10">
            Empower your financial journey with our seamless digital lending platform designed for emerging professionals underserved by traditional banks. We provide quick, short-term personal loans to bridge immediate gaps with complete transparency and no hidden costs. Operating in strict adherence to RBI Digital Lending Guidelines, we ensure a secure, encrypted, and responsible experience for those building their financial foundation.
          </p>

          <div className="space-y-3">
            {fees.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-between border-b pb-3 gap-5"
              >
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-primary" size={18} />
                  <span className="text-gray-700">{item.label}</span>
                </div>

                <span className="font-semibold text-gray-900 max-md:text-sm text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Highlight Card */}
        <div className="bg-white shadow-xl rounded-2xl p-5 md:p-10 border border-gray-100 border-t-5 border-t-primary">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Quick Loan Highlights
          </h3>

          <ul className="space-y-4 text-gray-600">
            <li>✔ 100% Online Loan Process</li>
            <li>✔ No Collateral Required</li>
            <li>✔ Instant Approval</li>
            <li>✔ Flexible Repayment</li>
            <li>✔ No Pre-closure Charges</li>
          </ul>

          <Link to="https://apps.earlywages.in/register" target="_blank" className="block mt-8 w-fit bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
            Apply for Loan
          </Link>
        </div>

      </div>
    </section>
  );
}