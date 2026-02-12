import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section className=" overflow-hidden mt-4 py-14 bg-slate-100" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Contact Us
          </h2>

          <div className="h-[2px] w-20 mx-auto mt-4 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-40" />

          <p className="text-slate-500 mt-6 text-sm sm:text-base max-w-xl mx-auto">
            Have a project in mind or a question? We’d love to hear from you.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white/90 backdrop-blur rounded-3xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)] p-5 sm:p-9"
          >
            <ContactForm />
          </motion.div>

          {/* Info Cards */}
          <div className="flex flex-col gap-4">
            <InfoCard
              delay={0.15}
              icon={<FaEnvelope />}
              title="General Inquiries"
              text="Share your requirements and our team will respond shortly."
            />

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918847599647"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="
                  flex items-center gap-3 w-full md:w-auto px-6 py-4 rounded-2xl 
                  bg-gradient-to-r from-[#25D366] to-[#1EBEA5] 
                  text-white font-medium shadow-md hover:shadow-lg 
                  transition-all duration-300 cursor-pointer
                "
              >
                <FaWhatsapp size={20} />
                <span className="text-sm sm:text-base font-medium">
                  Chat on WhatsApp
                </span>
              </motion.div>
            </a>

            <InfoCard
              delay={0.25}
              icon={<FaMapMarkerAlt />}
              title="Our Office"
              text="Ludhiana, Punjab 141008, India"
            />

            <InfoCard
              delay={0.3}
              icon={<FaPhoneAlt />}
              title="Call Us"
              text="+91 88475 99647"
            />

            <InfoCard
              delay={0.35}
              icon={<FaEnvelope />}
              title="Email Us"
              text="info@devopsminders.com"
            />
          </div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-24 rounded-3xl overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.2)]"
        >
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Ludhiana,Punjab,India&output=embed"
            className="w-full h-[320px] sm:h-[450px]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

/* Info Card */
type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
  highlight?: boolean;
  delay?: number;
};

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  text,
  highlight,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    whileHover={{ y: -3 }}
    className={`
      group
      rounded-2xl
      p-6
      transition-all
      ${highlight ? "bg-black text-white shadow-[0_25px_50px_-20px_rgba(0,0,0,0.6)]" : "bg-white shadow-[0_12px_30px_-15px_rgba(0,0,0,0.15)]"}
    `}
  >
    <div className="flex items-start gap-4">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`mt-0.5 text-xl ${highlight ? "text-green-400" : "text-slate-700"}`}
      >
        {icon}
      </motion.div>

      <div>
        <h4 className="font-medium text-base mb-1">{title}</h4>
        <p
          className={`text-sm leading-relaxed ${highlight ? "text-white/80" : "text-slate-600"}`}
        >
          {text}
        </p>
      </div>
    </div>
  </motion.div>
);
