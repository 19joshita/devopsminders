import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = ["Cloud Infrastructure", "DevOps Automation", "CI/CD Pipelines"];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="text-3xl font-semibold h-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {slides[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
