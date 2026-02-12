import { motion } from "framer-motion";

const metrics = [
  { label: "Quality Assurance", value: 98 },
  { label: "Delivery Speed", value: 92 },
  { label: "Client Satisfaction", value: 95 },
];

export default function RatingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-200"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E2A78]">
          The Framework Behind Our Solutions
        </h2>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          Our proven process ensures quality delivery at every stage
        </p>
      </div>

      {/* Rating */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-10 bg-[#FFEBEE] p-6 rounded-2xl shadow-md">
        <div className="text-center sm:text-left">
          <p className="text-5xl sm:text-6xl font-extrabold text-[#E53935]">
            4.5
          </p>
          <p className="text-sm sm:text-base text-[#1E2A78] mt-1">
            (200+ Reviews)
          </p>
        </div>
      </div>

      {/* Metrics with unified gradient progress bars */}
      <div className="space-y-6">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="flex justify-between mb-1">
              <span className="text-sm sm:text-base font-medium text-[#1E2A78]">
                {metric.label}
              </span>
              <span className="text-sm sm:text-base font-semibold text-[#E53935]">
                {metric.value}%
              </span>
            </div>
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${metric.value}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-4 rounded-full bg-gradient-to-r from-red-500 via-blue-500 to-purple-500"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
