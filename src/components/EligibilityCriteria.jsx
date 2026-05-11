import { FiCheckCircle } from "react-icons/fi";

const eligibility = [
  "Indian Resident",
  "Salaried Employee",
  "Above 21 Years of Age",
  "Salary Credited in Bank Account",
  "Minimum Salary ₹20,000 (Net Pay)",
  "Good Credit Score",
];

export default function EligibilityCriteria() {
  return (
    <section className="py-6 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Eligibility <span className="text-primary">Criteria</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            To ensure a smooth and successful loan disbursal, applicants must
            meet the following requirements.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eligibility.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full font-bold">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex items-center gap-3 mt-2">
                <FiCheckCircle className="text-primary text-xl" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}