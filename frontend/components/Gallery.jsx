"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery() {
  // Random placeholder images from picsum.photos
  const images = [
    "https://picsum.photos/id/1011/800/600",
    "https://picsum.photos/id/1015/800/600",
    "https://picsum.photos/id/1020/800/600",
    "https://picsum.photos/id/1025/800/600",
    "https://picsum.photos/id/1031/800/600",
    "https://picsum.photos/id/1035/800/600",
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const openModal = (img) => {
    setCurrentImage(img);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-green-50 via-green-100 to-green-200 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-12 text-center relative z-10">
        Our Work Gallery
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="relative z-10"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer relative group"
              onClick={() => openModal(img)}
            >
              <Image
                src={img}
                alt={`Gallery ${i + 1}`}
                width={400}
                height={300}
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       25vw"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 rounded-3xl"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-25 transition-opacity rounded-3xl"></div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl w-full outline-none rounded-3xl overflow-hidden"
        overlayClassName="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-green-400 transition"
        >
          &times;
        </button>
        <Image
          src={currentImage}
          alt="Enlarged gallery image"
          width={900}
          height={700}
          className="rounded-3xl object-cover w-full h-full"
        />
      </Modal>
    </section>
  );
}

