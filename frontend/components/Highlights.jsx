"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Home Garden",
    icon: "🏡",
    color: "from-green-400 to-green-600",
    desc: "Transform your home spaces into lush green havens with our expertise."
  },
  {
    title: "Terrace Garden",
    icon: "🌿",
    color: "from-green-300 to-green-500",
    desc: "Make your terrace bloom with plants, flowers, and vegetables."
  },
  {
    title: "Rose Garden",
    icon: "🌹",
    color: "from-pink-400 to-red-500",
    desc: "Create a fragrant and colorful rose garden for your home or events."
  },
  {
    title: "Jasmine Garden",
    icon: "🌼",
    color: "from-yellow-300 to-yellow-500",
    desc: "Enjoy the delicate beauty and aroma of jasmine flowers in your garden."
  },
];

export default function Highlights() {
  return (
    <section className="py-20 px-6 bg-green-50 relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 text-center mb-12">
        Our Gardening Specialties
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative rounded-3xl overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105 hover:shadow-2xl`}
          >
            <div
              className={`flex flex-col items-center justify-center p-10 bg-gradient-to-br ${service.color} text-white h-64 rounded-3xl`}
            >
              <span className="text-6xl mb-4">{service.icon}</span>
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-center text-sm md:text-base">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


