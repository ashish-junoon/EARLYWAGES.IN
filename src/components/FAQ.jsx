import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    q: "Who is eligible to get the loan from Early Wages?",
    a: "A salaried employee with 20K minimum salary being credited in bank account, citizen of India and fits our eligibility criteria is eligible for the loan.",
  },
  {
    q: "How can I apply for a loan on Early Wages?",
    a: (
      <>
        You can apply online by using this{" "}
        <a
          href="https://apps.earlywages.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          apps.earlywages.in
        </a>{" "}
        link or visiting the Loan section of our website. Fill the application
        form and provide the required documents and we will contact you or you
        may contact us on WhatsApp or call on the number <a
          href="tel:9205750054"
          className="text-primary underline"
        >
          9205750054
        </a>{" "}.
      </>
    ),
  },
  {
    q: "What is the loan amount that can be offered?",
    a: "Loan approval depends on your current salary and credit history.",
  },
  {
    q: "What documents are required for the loan?",
    a: "You need to provide Proof of Address, Proof of Identity, salary slips, bank statements for the last 6 months, selfie, and other documents if required.",
  },
  {
    q: "Do you offer business loans?",
    a: "Currently, Early Wages provides loans only for salaried employees.",
  },
  {
    q: "Do I need to pay an application fee?",
    a: "No. Application is completely free. Processing fees and GST are deducted only after loan approval.",
  },
  {
    q: "How long does loan disbursal take?",
    a: "After approval and completion of formalities, the loan amount is credited within 24 hours.",
  },
  {
    q: "Why was my application rejected?",
    a: "Applications may be rejected if they do not meet our eligibility criteria.",
  },
  {
    q: "What happens if I repay early?",
    a: "If you repay before the due date, you will pay the interest on the loan only for the days utilized. There are no pre closure charges for the repayment of the loan.",
  },
  {
    q: "What interest rate is charged?",
    a: "The interest on the loan is decided on various factors depending on your requirement, credit history etc.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-6 md:py-20 bg-gray-50 scroll-mt-16">
      <div className="max-w-[1400px] w-[80%] max-md:w-full mx-auto px-2 lg:px-6">
        <h2 className="text-3xl font-bold text-center mb-2">
          EarlyWages <span className="text-primary">FAQ's</span>
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Frequently asked questions about loans at EarlyWages
        </p>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-xl shadow-sm overflow-hidden hover:bg-primary/5"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left cursor-pointer"
              >
                <span className="font-semibold text-gray-800">
                  {index + 1}. {faq.q}
                </span>

                <FiChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
