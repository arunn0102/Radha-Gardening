"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="relative py-20 px-8 bg-gradient-to-br from-green-50 via-green-100 to-green-200 overflow-hidden">
      {/* Decorative leaf pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] bg-repeat"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
            <Image
  src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=80"
  alt="About Radha Gardening"
  fill
  className="object-cover hover:scale-105 transition-transform duration-500"
/>

          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold text-green-900 mb-6">
            About <span className="text-green-700">Radha Gardening Package</span>
          </h2>

          <p className="text-green-800 text-lg leading-relaxed mb-6">
            Welcome to <strong>Radha Gardening Package</strong> your trusted partner in creating
            lush, beautiful, and sustainable gardens. We specialize in <em>terrace gardens,
            home landscapes, rose gardens, jasmine gardens, and marriage lawns</em>.
          </p>

          <p className="text-green-700 mb-8">
            With years of experience and a passion for greenery, our team brings
            creativity and care to every plant, ensuring your surroundings bloom with
            freshness and peace.
          </p>

          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-green-800 transition"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

