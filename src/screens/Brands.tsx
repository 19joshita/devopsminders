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
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 3 }, // show only 3 logos
      },
      {
        breakpoint: 480, // very small phones
        settings: { slidesToShow: 2 }, // optional, 2 cards for very small screens
      },
    ],
  };

  return (
    <section className="py-14 bg-slate-50  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.id} className="px-1">
              {/* Equal-sized logo container */}
              <div
                className="
                  h-[155px]
                  w-full
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src={brand.image}
                  alt="brand logo"
                  className="
                    h-[150px]
                    w-[250px]
                    object-fill shadow
                  "
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
