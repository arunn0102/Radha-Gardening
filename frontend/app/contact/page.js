"use client";

import { motion } from "framer-motion";
import { FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCity, FaLeaf } from "react-icons/fa";

export default function Contact() {

  const details = [
    { icon: <FaUser className="text-green-700" />, label: "Name", value: "Akshay Gardner" },
    { icon: <FaPhoneAlt className="text-green-700" />, label: "Phone", value: "8960088835" },
    { icon: <FaEnvelope className="text-green-700" />, label: "Email", value: "radhagardnering67package@gmail.com" },
    { icon: <FaMapMarkerAlt className="text-green-700" />, label: "Address", value: "Max Hospital Gate, Na. 3 Kali Badi Mandir, Gomti Nagar, Lucknow, 226010" },
    { icon: <FaCity className="text-green-700" />, label: "City", value: "Lucknow" },
    { icon: <FaLeaf className="text-green-700" />, label: "Category", value: "Agriculture" },
  ];


  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-green-100">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-green-800 text-lg md:text-xl">
          Have questions or need a custom gardening solution? Fill out the form below, and our team will get back to you shortly.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-2xl rounded-3xl p-10 space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border text-black border-gray-300 rounded-xl p-4 focus:outline-none focus:border-green-600 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border text-black border-gray-300 rounded-xl p-4 focus:outline-none focus:border-green-600 transition"
          />
          <textarea
            placeholder="Your Message"
            className="w-full text-black border border-gray-300 rounded-xl p-4 h-40 focus:outline-none focus:border-green-600 transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition-all"
          >
            Send Message
          </button>
        </motion.form>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-96 rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.872342897278!2d80.98488951502013!3d26.846707183149933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd61e87ab1d5%3A0x238fe5d0621fef7c!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1702612789812!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>

      {/* Contact Details */}
      <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {details.map((d, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex items-center gap-4 p-6 bg-green-50 rounded-2xl shadow-md hover:shadow-lg transition-all"
        >
          <div className="text-3xl">{d.icon}</div>
          <div>
            <p className="text-green-700 font-semibold">{d.label}</p>
            <p className="text-green-900">{d.value}</p>
          </div>
        </motion.div>
      ))}
    </motion.section>
    </section>
  );
}
