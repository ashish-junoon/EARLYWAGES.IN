import {
  FiUser,
  FiHome,
  FiCalendar,
  FiCreditCard,
  FiFileText,
  FiCamera,
} from "react-icons/fi";
import docs from "../assets/docs.png";

const documents = [
  { title: "Recent passport-size photograph", icon: FiCamera },
  { title: "PAN Card", icon: FiUser },
  { title: "Aadhaar Card", icon: FiCalendar },
  { title: "Proof of Address", icon: FiHome },
  { title: "Bank Statement (Last 6 Months)", icon: FiCreditCard },
  { title: "Latest 3 month's salary slips", icon: FiFileText },
];

export default function DocumentsRequired() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 lg:px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            <span className="text-primary">Documents</span> Required
          </h2>

          <p className="text-gray-600 mb-5 leading-relaxed">
            Confirm your eligibility with a quick, paperless KYC process. Simply
            upload your basic documents through our secure, 100% online platform
            to get started instantly.
          </p>

          <div className="space-y-1">
            {documents.map((doc, index) => {
              const Icon = doc.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white p-2 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
                >
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center rounded-lg">
                    <Icon className="text-primary text-lg" />
                  </div>

                  <p className="text-gray-700 font-medium">{doc.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center">
          <img
            src={docs}
            alt="Document Verification"
            className="w-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
