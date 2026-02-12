import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const metrics = [
  { label: "Quality Assurance", value: 98 },
  { label: "Delivery Speed", value: 92 },
  { label: "Client Satisfaction", value: 95 },
];

export default function RatingCard() {
  const rating = 4.5; // Overall rating
  const totalStars = 5;

  // Function to render stars
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <FaStar key={i} className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" />,
        );
      } else if (i - rating <= 0.5) {
        stars.push(
          <FaStarHalfAlt
            key={i}
            className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6"
          />,
        );
      } else {
        stars.push(
          <FaRegStar
            key={i}
            className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6"
          />,
        );
      }
    }
    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-200"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          The Framework Behind Our Solutions
        </h2>

        <div className="h-[2px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-40" />

        <p className="text-slate-500 mt-4 text-sm sm:text-base">
          Our proven process ensures quality delivery at every stage
        </p>
      </motion.div>

      {/* Rating */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-10 bg-[#FFEBEE] p-6 rounded-2xl shadow-md">
        <div className="text-center sm:text-left">
          <p className="text-5xl sm:text-6xl font-extrabold text-[#E53935]">
            {rating}
          </p>
          <div className="flex justify-center sm:justify-start mt-2 space-x-1">
            {renderStars()}
          </div>
          <p className="text-sm sm:text-base text-[#1E2A78] mt-1">
            (200+ Reviews)
          </p>
        </div>
      </div>

      {/* Metrics with gradient progress bars */}
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
