import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "../assets/main.jpeg";
import Brands from "./Brands";

const rotatingText = [
  "Designed Around People",
  "Built for Performance",
  "Engineered for Scale",
  "Optimized for Growth",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingText.length);
    }, 2400);

    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative">
      <div className="relative h-[340px] sm:h-screen overflow-hidden">
        <motion.img
          src={heroBg}
          alt="Hero Background"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="
            absolute inset-0
            w-full h-full
            object-cover
            object-center
          "
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative
          max-w-5xl
          mx-auto
          -mt-16 sm:-mt-40
          z-20
          px-4
        "
      >
        <div
          className="
            bg-white
            rounded-2xl
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            border border-slate-200
            p-6 sm:p-10
            text-slate-900
          "
        >
          <div className="max-w-2xl">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                text-xl
                sm:text-3xl
                md:text-5xl
                font-extrabold
                leading-tight
                text-slate-900
              "
            >
              Intelligent Digital Solutions
            </motion.h1>

            {/* Rotating Text */}
            <div className="h-8 sm:h-10 mt-2 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="
                    text-blue-900
                    text-xs
                    sm:text-lg
                    font-medium
                  "
                >
                  {rotatingText[index]}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                text-slate-600
                text-xs
                sm:text-base
              "
            >
              Fast, secure connectivity to boost your operations.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                mt-5 sm:mt-6
                px-5 sm:px-8
                py-2.5 sm:py-3
                bg-blue-900
                text-white
                text-xs sm:text-base
                font-medium
                rounded-lg
                shadow-lg
                hover:bg-blue-800
                transition
              "
            >
              Get Started Today
            </motion.button>
          </div>
        </div>
      </motion.div>
      <Brands />
    </section>
  );
}
