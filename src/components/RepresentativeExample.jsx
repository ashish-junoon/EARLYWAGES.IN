import { FiCreditCard, FiTrendingUp } from "react-icons/fi";

// const data = [
//   { label: "Loan Amount", value: "₹20,000" },
//   { label: "Tenure", value: "12 Months" },
//   { label: "Processing Fee", value: "₹400" },
//   { label: "GST on Processing Fee", value: "₹72" },
//   { label: "Disbursed Amount", value: "₹19,528" },
//   { label: "Monthly EMI", value: "₹2,009" },
//   { label: "Total Repayment Amount", value: "₹24,111" },
//   { label: "Total Interest", value: "₹4,111" },
//   { label: "APR", value: "40.72%" },
// ];
const data = [
  { label: "Credit Line", value: "₹20,000 (91 days)" },
  { label: "Processing Fee", value: "5% (₹1,000)" },
  { label: "GST", value: "₹180" },
  { label: "Net Disbursed Amount", value: "₹18,820" },
  { label: "Total Interest (0.1% per day)", value: "₹1,820" },
  { label: "Total Repayable", value: "₹21,820" },
  { label: "APR", value: "41%" },
];

export default function RepresentativeExample() {
  return (
    <section className="py-6 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-2 lg:px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            <span className="text-primary">Example</span> Calculation
          </h2>
          <p className="text-gray-600">
            Below is an example to help you understand how the loan repayment works.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 lg:p-10">

          <div className="grid sm:grid-cols-2 gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-3"
              >
                <span className="text-gray-600">{item.label}</span>
                <span className="font-semibold text-gray-800">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}