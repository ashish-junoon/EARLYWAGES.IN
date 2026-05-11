import { useEffect, useState } from "react";
import { FiUsers, FiBriefcase, FiClock, FiAward } from "react-icons/fi";

const stats = [
  {
    icon: FiUsers,
    value: "1000+",
    label: "Customers",
    desc: "Loan Credited",
  },
  {
    icon: FiClock,
    value: "9AM to 9PM",
    label: "Support Hours",
    desc: "Quick Support",
  },
  {
    icon: FiAward,
    value: "4.8/5",
    label: "Average customer rating",
    desc: "Average customer rating",
  }
];

export default function CounterBar() {
  // const [counts, setCounts] = useState(stats.map(() => 0));

  // useEffect(() => {
  //   stats.forEach((stat, index) => {
  //     let start = 0;
  //     const end = stat.value;
  //     const increment = end / 60;

  //     const counter = setInterval(() => {
  //       start += increment;

  //       if (start >= end) {
  //         start = end;
  //         clearInterval(counter);
  //       }

  //       setCounts((prev) => {
  //         const updated = [...prev];
  //         updated[index] = Math.floor(start);
  //         return updated;
  //       });
  //     }, 40);
  //   });
  // }, []);

  return (
    <section className="bg-white border border-y-gray-200/90">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-4 border-r last:border-r-0 pr-6 max-md:border-r-0"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#ed502e]/10">
                <Icon className="text-[#ed502e] text-xl" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {item.value}
                </h3>

                <p className="font-semibold text-sm">{item.label}</p>

                <p className="text-xs text-gray-500">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}