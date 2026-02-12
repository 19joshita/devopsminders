import React, { useState, useEffect } from "react";
import CareerCard from "../components/CarrierCard";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export type CareerItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  highlights: string[];
};

export const careers: CareerItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    title: "Website Development",
    description:
      "Build modern, high-performance websites using scalable technologies. Focus on speed, responsiveness, and seamless user experiences. Deliver solutions optimized for growth.",
    highlights: [
      "React / Next.js Development",
      "SEO & Performance Optimization",
      "Responsive UI Engineering",
      "API & Backend Integration",
    ],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title: "Mobile App Development",
    description:
      "Create powerful cross-platform mobile applications with smooth interactions. Emphasize performance, usability, and reliability. Deliver intuitive digital products.",
    highlights: [
      "React Native / Expo",
      "App Performance Tuning",
      "REST API Integration",
      "Clean UI Implementation",
    ],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    title: "AI Development Services",
    description:
      "Design intelligent systems powered by modern AI technologies. Build automation-driven solutions for smarter operations. Enhance decision-making with data insights.",
    highlights: [
      "AI / ML Model Integration",
      "Data Processing Pipelines",
      "Automation & Intelligence",
      "Predictive Solutions",
    ],
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9",
    title: "UI/UX Design Services",
    description:
      "Craft engaging digital experiences with user-centered design principles. Combine aesthetics with usability and clarity. Design interfaces users love.",
    highlights: [
      "User Experience Design",
      "Wireframing & Prototyping",
      "Design Systems",
      "Interaction & Visual Design",
    ],
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Team Collaboration",
    description:
      "Work in a collaborative, innovation-driven engineering culture. Build impactful products with shared ownership. Grow alongside passionate professionals.",
    highlights: [
      "Agile Development Culture",
      "Cross-Functional Teams",
      "Knowledge Sharing",
      "Continuous Learning",
    ],
  },
];

const Career: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(3);

  // Adjust number of slides based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) setSlidesToShow(3);
      else if (width >= 1024) setSlidesToShow(2);
      else setSlidesToShow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + careers.length) % careers.length);
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % careers.length);

  return (
    <section className="py-14 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Careers at DevOpsMinders
          </h2>
          <div className="h-[2px] w-16 mx-auto mt-3 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-40" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base">
            Join a team building high-performance digital infrastructure
          </p>
        </motion.div>

        <div className="relative flex items-center">
          {/* Prev Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-md hover:scale-110 transition"
          >
            <FaChevronLeft />
          </button>

          {/* Slider */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  (100 / slidesToShow) * activeIndex
                }%)`,
              }}
            >
              {careers.map((career, index) => (
                <div
                  key={career.id}
                  className="px-3"
                  style={{ minWidth: `${100 / slidesToShow}%` }}
                >
                  <CareerCard
                    image={career.image}
                    title={career.title}
                    description={career.description}
                    highlights={career.highlights}
                    isActive={index === activeIndex}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-md hover:scale-110 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Career;
