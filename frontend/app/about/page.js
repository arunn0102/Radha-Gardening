"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 via-green-200 to-green-50 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-green-900 mb-4"
        >
          About Radha Gardening
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl text-green-800 max-w-3xl mx-auto leading-relaxed"
        >
          We bring nature closer to your home with beautifully designed gardens. From terrace gardens
          to home landscapes, we ensure quality, creativity, and sustainability in every project.
        </motion.p>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <Image
            src="https://picsum.photos/id/1059/600/400"
            alt="Gardening Story"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-green-900"
        >
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="mb-4 text-green-800">
            Radha Gardening started with a passion for creating green spaces that bring joy and
            serenity. We believe in eco-friendly solutions, sustainable gardening practices, and
            delivering customized landscapes for every client.
          </p>
          <p className="text-green-800">
            Over the years, we’ve transformed countless terraces, homes, and lawns into lush,
            vibrant spaces where nature and beauty thrive together.
          </p>
        </motion.div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 bg-green-100 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-green-900 mb-12"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl mx-auto text-green-800 text-lg md:text-xl leading-relaxed"
        >
          Our mission is to create sustainable, vibrant, and beautiful gardens that enhance the
          beauty of every home and terrace. We aim to bring eco-friendly gardening practices to
          every space while delivering exceptional quality and creativity.
        </motion.p>
      </section>

      {/* Our Expertise */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-green-900 mb-12 text-center"
        >
          Our Services & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Home Gardens",
              desc: "Designing and maintaining lush home gardens with flowers, vegetables, and trees.",
              img: "https://picsum.photos/id/1040/400/300",
            },
            {
              title: "Terrace Gardens",
              desc: "Creating beautiful terrace gardens that maximize space and greenery.",
              img: "https://picsum.photos/id/1041/400/300",
            },
            {
              title: "Flower & Lawn Design",
              desc: "Expert designs for rose gardens, jasmine gardens, and marriage lawns.",
              img: "https://picsum.photos/id/1042/400/300",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105 cursor-pointer"
            >
              <div className="relative w-full h-56">
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
              <div className="p-6 bg-green-50 text-center">
                <h3 className="text-xl font-bold text-green-800 mb-2">{service.title}</h3>
                <p className="text-green-700">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 px-6 bg-green-200 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-green-900 mb-12"
        >
          Sustainability & Eco-Friendly Practices
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl mx-auto text-green-800 text-lg md:text-xl leading-relaxed"
        >
          At Radha Gardening, we prioritize eco-friendly solutions, water-efficient practices, and
          the use of organic fertilizers and healthy plants. Our approach ensures that your garden
          is beautiful, sustainable, and beneficial for the environment.
        </motion.p>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-green-900 mb-12 text-center"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Ravi Kumar", feedback: "Excellent service! My home garden looks stunning now." },
            { name: "Neha Sharma", feedback: "They built a beautiful terrace garden for us. Highly recommended!" },
            { name: "Amit Verma", feedback: "Affordable and professional gardening solutions." },
            { name: "Sonal Mehta", feedback: "Amazing team and creative designs. Our garden is thriving!" },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-green-50 rounded-2xl p-6 shadow hover:shadow-lg transition-transform hover:scale-105"
            >
              <p className="italic text-green-800 mb-4">"{review.feedback}"</p>
              <h3 className="font-semibold text-green-900">- {review.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}


