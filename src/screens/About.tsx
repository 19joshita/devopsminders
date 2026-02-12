import { motion } from "framer-motion";
import CountUp from "react-countup";
import aboutImg from "../assets/about.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function About() {
  const stats = [
    { number: 3, suffix: "+", label: "Years Experience" },
    { number: 200, suffix: "+", label: "Projects Delivered" },
    { number: 80, suffix: "+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            About DevOpsMinders
          </h2>

          {/* Star Rating */}
          <div className="flex justify-center mt-4 items-center gap-1">
            <FaStar className="text-yellow-400 text-lg sm:text-xl" />
            <FaStar className="text-yellow-400 text-lg sm:text-xl" />
            <FaStar className="text-yellow-400 text-lg sm:text-xl" />
            <FaStar className="text-yellow-400 text-lg sm:text-xl" />
            <FaStarHalfAlt className="text-yellow-400 text-lg sm:text-xl" />
          </div>

          <div className="mt-3 h-[2px] w-20 mx-auto bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-40" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImg}
                alt="About DevOpsMinders"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Our Mission
            </h3>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg">
              At DevOpsMinders Technologies, our mission is to empower
              businesses with cutting-edge technology solutions. We focus on
              innovation, automation, and performance to help our clients thrive
              in a competitive landscape.
            </p>

            {/* Premium Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  className="relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition p-4 sm:p-5 text-center"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900">
                    <CountUp
                      end={item.number}
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    <span className="text-indigo-600">{item.suffix}</span>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-500 mt-1">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Address */}
            <div className="mt-10 space-y-1">
              <p className="text-sm text-slate-600">
                Ludhiana, Punjab 141008, India
              </p>
              <p className="text-sm text-slate-500">
                Mon–Fri: 09:00 AM – 05:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
