import { motion } from "framer-motion";
import ola from "../assets/brands/ola.png";
import repido from "../assets/brands/repido.jpg";
import nyka from "../assets/brands/nayka.png";
import bmg from "../assets/brands/bmg.png";
import byjus from "../assets/brands/byjus.png";
import cpa from "../assets/brands/cpa.png";
import feerless from "../assets/brands/feerless.png";

const brands = [
  { id: 1, image: ola },
  { id: 2, image: repido },
  { id: 3, image: nyka },
  { id: 4, image: bmg },
  { id: 5, image: byjus },
  { id: 6, image: cpa },
  { id: 7, image: feerless },
];

export default function Brands() {
  return (
    <section className="py-14 bg-slate-50 overflow-hidden mt-10">
      <div className="max-w-7xl mx-auto px-4 relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            x: { repeat: Infinity, duration: 20, ease: "linear" },
          }}
        >
          {brands.concat(brands).map((brand, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="h-50 w-50">
                <img
                  src={brand.image}
                  alt="brand logo"
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
