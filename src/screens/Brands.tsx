import Slider from "react-slick";
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
  const settings = {
    infinite: true,
    speed: 9000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-14 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.id} className="px-2 flex justify-center">
              <div className="flex items-center justify-center h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-full">
                <img
                  src={brand.image}
                  alt="brand logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
