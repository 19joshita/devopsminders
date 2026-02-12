import Home from "./screens/Home";
import Navbar from "./screens/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./screens/About";
import Service from "./screens/Services";
import Contact from "./screens/Contact";
import Footer from "./screens/Footer";
import Process from "./screens/Process";

export default function App() {
  return (
    <div className="bg-white text-gray-900 flex flex-col gap-14">
      <Navbar />
      <Home />
      <About />
      <Service />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
