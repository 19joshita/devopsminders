import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../assets/devops.png";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = active;

      for (let link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            current = link.id;
            break;
          }
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-white shadow-md z-50 backdrop-blur-md bg-opacity-90"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleClick("home")}
        >
          <img src={logo} alt="DevOpsMinders Logo" className="h-10 sm:h-12" />
          <span className="ml-3 font-extrabold text-lg sm:text-2xl text-blue-900 tracking-tight">
            DevOpsMinders
          </span>
        </div>

        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`relative px-2 py-2 font-medium transition-colors ${
                active === link.id
                  ? "text-blue-900 font-semibold"
                  : "text-gray-700 hover:text-blue-800"
              }`}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-900 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-900"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute w-full bg-white shadow-lg top-full left-0 z-40"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleClick(link.id)}
                  className={`text-left py-2 font-medium transition-colors cursor-pointer ${
                    active === link.id
                      ? "text-blue-900 font-semibold"
                      : "text-gray-700 hover:text-blue-800"
                  }`}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="underline"
                      className="block w-10 h-0.5 bg-blue-900 mt-1 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
