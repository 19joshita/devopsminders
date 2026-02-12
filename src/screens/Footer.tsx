import React from "react";
import logo from "../assets/devops.png";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Logo + Brand Name */}
        <div>
          <div className="flex items-center mb-4">
            <img src={logo} alt="DevOpsMinders Logo" className="h-10 sm:h-12" />
            <span className="ml-3  font-extrabold text-xl sm:text-2xl text-blue-900 tracking-tight">
              DevOpsMinders
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Intelligent Digital Solutions Designed Around People. We build
            scalable products, beautiful interfaces, and meaningful digital
            experiences.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:border-slate-700 transition"
            >
              <FaTwitter className="text-slate-300 text-sm" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:border-slate-700 transition"
            >
              <FaLinkedin className="text-slate-300 text-sm" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:border-slate-700 transition"
            >
              <FaGithub className="text-slate-300 text-sm" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 tracking-wide">
            Services
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Website Development",
              "Mobile App Development",
              "AI Development",
              "UI/UX Design",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 tracking-wide">
            Company
          </h3>
          <ul className="space-y-3 text-sm">
            {["About Us", "Our Process", "Careers", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 tracking-wide">
            Connect
          </h3>
          <div className="space-y-3 text-sm">
            <p className="text-slate-500">WhatsApp</p>
            <p className="text-slate-300">+91 88475 99647</p>

            <p className="text-slate-500 pt-2">Email</p>
            <p className="text-slate-300">info@devopsminders.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 DevOpsMinders Technologies. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
