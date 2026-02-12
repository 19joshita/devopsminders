import React, { useState } from "react";
import type { Settings } from "react-slick";
import CareerCard from "../components/CarrierCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import { motion } from "framer-motion";

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

  const settings: Settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    beforeChange: (_, next) => setActiveIndex(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: { slidesToShow: 3, centerMode: true, centerPadding: "0px" },
      },
      {
        breakpoint: 1280, // xl
        settings: { slidesToShow: 2, centerMode: true, centerPadding: "0px" },
      },
      {
        breakpoint: 1024, // lg
        settings: { slidesToShow: 2, centerMode: true, centerPadding: "0px" },
      },
      {
        breakpoint: 768, // md
        settings: { slidesToShow: 1, centerMode: false, arrows: false },
      },
      {
        breakpoint: 480, // sm
        settings: { slidesToShow: 1, centerMode: false, arrows: false },
      },
    ],
  };

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

        <div className="relative">
          <Slider {...settings}>
            {careers.map((career, index) => (
              <div key={career.id} className="px-3">
                <CareerCard
                  image={career.image}
                  title={career.title}
                  description={career.description}
                  isActive={index === activeIndex}
                  highlights={career.highlights}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Career;

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute -right-3 top-1/2 -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <div className="bg-white shadow-md rounded-full p-2 hover:scale-110 transition">
      <FaChevronRight size={18} />
    </div>
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute -left-3 top-1/2 -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <div className="bg-white shadow-md rounded-full p-2 hover:scale-110 transition">
      <FaChevronLeft size={18} />
    </div>
  </div>
);
