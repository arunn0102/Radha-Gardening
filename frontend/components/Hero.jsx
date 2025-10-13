"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaSeedling, FaTree, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-28 overflow-hidden">
      {/* Decorative Floating Icons */}
      <FaLeaf className="absolute top-10 left-10 text-green-400 text-4xl animate-bounce-slow opacity-70" />
      <FaSeedling className="absolute top-32 right-16 text-green-500 text-3xl animate-float opacity-60" />
      <FaTree className="absolute bottom-20 left-20 text-green-700 text-5xl animate-bounce-slow opacity-50" />

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto text-center px-6 flex flex-col items-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-green-900 mb-4 leading-tight"
        >
          Radha <span className="text-green-700">Gardening Package</span>
        </motion.h1>

        <motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ 
    scale: 1.05, 
    color: "#065f46", 
    textShadow: "0 0 10px rgba(6, 95, 70, 0.6)" // subtle glow
  }}
  transition={{ duration: 0.5 }}
  className="text-lg md:text-xl text-green-800 max-w-3xl mx-auto leading-relaxed relative cursor-pointer group"
>
  Sabhi Prakar ki Suvidha Di Jayegi <strong>Fal, Phool, Ped, Paudhe, Vegetable Aadi</strong>.  
  Terrace Garden | Home Garden | Rose Garden | Jasmine Garden | Marriage Lawn

  {/* Underline animation */}
  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-500"></span>
</motion.p>


        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300"
          >
            <FaPhoneAlt className="animate-pulse" />
            Get in Touch
          </Link>
        </motion.div>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {["Terrace Garden", "Home Garden", "Rose Garden", "Jasmine Garden"].map((item, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-green-100 text-green-900 px-4 py-2 rounded-full shadow hover:shadow-md font-semibold"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Subtle Floating Leaves */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.span
          animate={{ y: [0, 20, 0], x: [0, 15, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-24 text-green-200 text-4xl opacity-30"
        >
          🍃
        </motion.span>
        <motion.span
          animate={{ y: [0, -15, 0], x: [0, -10, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 right-20 text-green-300 text-3xl opacity-40"
        >
          🍃
        </motion.span>
      </div>
    </section>
  );
}








