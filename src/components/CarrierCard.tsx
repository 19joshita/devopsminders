import React from "react";

export interface CareerCardProps {
  image: string;
  title: string;
  description: string;
  highlights: string[];
  isActive: boolean;
}

const CareerCard: React.FC<CareerCardProps> = ({
  image,
  title,
  description,
  highlights,
  isActive,
}) => {
  return (
    <div
      className={`
        px-3 mb-1 transition-all duration-500
        ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-60"}
      `}
    >
      <div
        className={`
          rounded-xl bg-white border border-slate-100 overflow-hidden
          transition-all duration-500 h-full
          ${isActive ? "shadow-md" : "shadow"}
        `}
      >
        {/* Image */}
        <div className="h-50 sm:h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`
              w-full h-full object-cover transition-transform duration-700
              ${isActive ? "scale-105" : "scale-100"}
            `}
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>

          {/* Description (controlled height for alignment) */}
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Highlights */}
          <ul className="mt-4 space-y-2">
            {highlights.map((point, i) => (
              <li
                key={i}
                className="text-sm text-slate-700 flex items-center gap-2"
              >
                <span
                  className={`
                    w-1.5 h-1.5 rounded-full
                    ${isActive ? "bg-black" : "bg-slate-400"}
                  `}
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
