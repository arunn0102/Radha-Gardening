"use client";

import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white text-center overflow-hidden">
      {/* Decorative floating leaves */}
      <div className="absolute top-10 left-5 w-10 h-10 bg-green-400 rounded-full opacity-30 animate-bounce-slow"></div>
      <div className="absolute bottom-10 right-10 w-12 h-12 bg-green-300 rounded-full opacity-20 animate-bounce-slow delay-1000"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="flex items-center justify-center mb-4 space-x-2">
          <FaLeaf className="text-green-200 text-2xl animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Ready to Create Your Dream Garden?
          </h2>
          <FaLeaf className="text-green-200 text-2xl animate-bounce" />
        </div>

        <p className="mb-8 text-green-100 text-lg md:text-xl max-w-2xl mx-auto">
          Contact us today and let’s bring nature closer to your home. Our experts will
          design and nurture a garden that you’ll love for years.
        </p>

        <a
          href="/contact"
          className="inline-block bg-white text-green-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}
