"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaLeaf } from "react-icons/fa";

export default function Testimonials() {
  const reviews = [
  { name: "Ravi Kumar", feedback: "Excellent service! My home garden looks stunning now." },
  { name: "Neha Sharma", feedback: "They built a beautiful terrace garden for us. Highly recommended!" },
  { name: "Amit Verma", feedback: "Affordable and professional gardening solutions." },
  { name: "Sonal Mehta", feedback: "Amazing team and creative designs. Our garden is thriving!" },
  { name: "Priya Singh", feedback: "Our backyard has never looked better. Truly talented gardeners!" },
  { name: "Karan Joshi", feedback: "Professional, punctual, and full of creative ideas. Loved the result!" },
  { name: "Anita Patel", feedback: "They transformed our terrace into a beautiful garden paradise." },
  { name: "Vikram Chauhan", feedback: "Great attention to detail and excellent customer service." },
];


  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-50 via-green-100 to-green-200 relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 text-center mb-12 relative z-10">
        What Our Clients Say
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative z-10"
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform hover:scale-105 relative"
            >
              {/* Decorative quote icon */}
              <FaQuoteLeft className="text-green-300 text-4xl absolute top-4 left-4" />
              <p className="italic text-green-800 mb-6 mt-6 md:mt-8">"{r.feedback}"</p>
              <h3 className="font-semibold text-green-900 text-lg md:text-xl flex items-center justify-center space-x-2">
                <FaLeaf className="text-green-400" />
                <span>- {r.name}</span>
              </h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

