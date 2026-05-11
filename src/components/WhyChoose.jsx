import { FiHeadphones, FiShield, FiGlobe, FiCreditCard } from "react-icons/fi";

const features = [
  {
    icon: FiHeadphones,
    title: "Quick Customer Support",
    desc: "Our support team is always ready to help you with your queries and loan assistance."
  },
  {
    icon: FiShield,
    title: "No Collateral Needed",
    desc: "Get access to loans without pledging any assets or security."
  },
  {
    icon: FiGlobe,
    title: "100% Online Process",
    desc: "Apply for loans anytime from anywhere without visiting an office."
  },
  {
    icon: FiCreditCard,
    title: "No Pre-Closure Charges",
    desc: "Repay your loan early without worrying about extra penalties."
  }
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-1">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-primary">Early Wages</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We understand the financial needs of young professionals and students. 
            Our lending platform provides simple, fast and accessible loans designed 
            to support your daily financial requirements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                  <Icon size={24} />
                </div>

                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}