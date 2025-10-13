"use client";

import { motion } from "framer-motion";
import { FaUserTie, FaLeaf, FaDollarSign, FaSmile } from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Experienced Team",
      desc: "Our gardeners have years of experience in landscaping, terrace gardens, and home gardens.",
      icon: <FaUserTie className="text-green-600 w-12 h-12" />,
    },
    {
      title: "Quality Plants & Materials",
      desc: "We use only healthy plants and eco-friendly materials to ensure long-lasting beauty.",
      icon: <FaLeaf className="text-green-600 w-12 h-12" />,
    },
    {
      title: "Affordable Packages",
      desc: "We offer cost-effective gardening solutions suitable for every budget.",
      icon: <FaDollarSign className="text-green-600 w-12 h-12" />,
    },
    {
      title: "Customer Satisfaction",
      desc: "Our top priority is delivering happiness through green spaces you’ll love.",
      icon: <FaSmile className="text-green-600 w-12 h-12" />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-50 via-green-100 to-green-200 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-14">
        Why Choose <span className="text-green-700">Us</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center"
          >
            <div className="mb-5">{r.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold text-green-800 mb-3">{r.title}</h3>
            <p className="text-green-700 text-sm md:text-base leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

