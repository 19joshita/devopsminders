import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import RatingCard from "../components/RatingCard";

const steps = [
  {
    id: "01",
    title: "Understand Your Business Needs",
    desc: "We begin with deep discovery of challenges, goals, and technical requirements.",
  },
  {
    id: "02",
    title: "Define the Service Scope",
    desc: "Our team outlines a clear roadmap covering timelines, technologies, and deliverables.",
  },
  {
    id: "03",
    title: "Deliver with Expertise",
    desc: "We provide expert execution across web, mobile, AI, and UI/UX using proven stacks.",
  },
  {
    id: "04",
    title: "Ensure Quality & Performance",
    desc: "Every solution is tested for security, scalability, and performance before delivery.",
  },
  {
    id: "05",
    title: "Support & Continuous Improvement",
    desc: "We offer ongoing optimization, maintenance, and long-term support.",
  },

  /* Hidden initially */
  {
    id: "06",
    title: "Deployment & Integration",
    desc: "Solutions are deployed with CI/CD pipelines and seamless system integration.",
  },
  {
    id: "07",
    title: "Monitoring & Optimization",
    desc: "We continuously monitor performance metrics and optimize for efficiency.",
  },
  {
    id: "08",
    title: "Scaling & Growth",
    desc: "Infrastructure and applications are prepared for future growth and scale.",
  },
];

export default function ProcessSection() {
  const [expanded, setExpanded] = useState(false);

  const visibleSteps = expanded ? steps : steps.slice(0, 5);

  return (
    <section id="process" className="relative overflow-hidden">
      <div className="p-4">
        <RatingCard />
      </div>
      <div className="max-w-5xl mx-auto px-6 relative mt-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2
            className="
                     text-2xl
                     sm:text-3xl
                     md:text-4xl
                     font-semibold
                     tracking-tight
                   "
          >
            The Framework Behind Our Solutions
          </h2>

          <div
            className="
                     h-[2px]
                     w-16
                     mx-auto
                     mt-3
                     bg-gradient-to-r
                     from-transparent
                     via-slate-400
                     to-transparent
                     opacity-40
                   "
          />

          <p className="text-slate-500 mt-4 text-sm sm:text-base">
            Our proven process ensures quality delivery at every stage
          </p>
        </motion.div>

        <div className="">
          <div className="space-y-16">
            <AnimatePresence>
              {visibleSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 14,
                    delay: index * 0.05,
                  }}
                  className="relative flex gap-8 group"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-200" />
                    <div className="absolute inset-0 rounded-full bg-indigo-400 blur-md opacity-40 group-hover:opacity-70 transition" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 14,
                      delay: index * 0.06,
                    }}
                    whileHover={{
                      rotateX: 6,
                      rotateY: -6,
                      y: -10,
                      scale: 1.03,
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="
                      relative w-full rounded-2xl p-[1px]
                      bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200
                    "
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        relative rounded-2xl bg-white/80 backdrop-blur-xl
                        border border-white shadow-xl
                        px-7 py-6 transition
                        group-hover:shadow-2xl
                      "
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-100 blur-xl" />
                      </div>

                      <div className="relative">
                        <h3 className="text-lg font-semibold text-slate-900 mt-1">
                          {step.title}
                        </h3>

                        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {!expanded && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center pt-14"
            >
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setExpanded(true)}
                className="
                  px-7 py-3 rounded-xl text-sm font-medium
                  bg-gradient-to-r from-indigo-500 to-purple-500
                  text-white shadow-lg shadow-indigo-200
                  hover:shadow-xl transition-all duration-300
                "
              >
                View Full Process
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
