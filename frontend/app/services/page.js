"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Home Gardens",
      desc: "Design and maintain lush home gardens with flowers, vegetables, and decorative plants. Perfect for enhancing your living space.",
      img: "https://picsum.photos/id/1040/600/400",
    },
    {
      title: "Terrace Gardens",
      desc: "Transform your terrace into a vibrant green paradise. We specialize in compact and eco-friendly terrace landscaping.",
      img: "https://picsum.photos/id/1041/600/400",
    },
    {
      title: "Flower Gardens",
      desc: "We design rose gardens, jasmine gardens, and other floral setups that bloom beautifully all year round.",
      img: "https://picsum.photos/id/1042/600/400",
    },
    {
      title: "Vegetable Gardens",
      desc: "Grow your own fresh vegetables at home. We provide guidance and setup for productive and healthy vegetable gardens.",
      img: "https://picsum.photos/id/1043/600/400",
    },
    {
      title: "Marriage Lawns & Event Gardens",
      desc: "Create stunning lawns and garden spaces for weddings, parties, and other events. Tailored layouts and greenery for every occasion.",
      img: "https://picsum.photos/id/1044/600/400",
    },
    {
      title: "Eco-Friendly Gardening",
      desc: "Sustainable gardening solutions using organic fertilizers, water-efficient practices, and environmentally friendly designs.",
      img: "https://picsum.photos/id/1045/600/400",
    },
  ];

  return (
    <main className="bg-green-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-100 via-green-200 to-green-50 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-green-900 mb-4"
        >
          Our Gardening Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl text-green-800 max-w-3xl mx-auto leading-relaxed"
        >
          Explore our wide range of gardening services. Whether it’s a home garden, terrace garden, 
          floral designs, or eco-friendly solutions, we bring beauty and sustainability to your spaces.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 cursor-pointer bg-white"
            >
              <div className="relative w-full h-64">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-2">{service.title}</h3>
                <p className="text-green-700">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-green-700 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Transform Your Space?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-2xl mx-auto mb-6 text-lg"
        >
          Contact us today and let our experts design a beautiful garden tailored to your space and needs.
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300"
        >
          Get in Touch
        </motion.a>
      </section>
    </main>
  );
}
