"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion"; 

export default function ExploreSection() {
  const [activeTab, setActiveTab] = useState("Lips");

  const images = {
    Lips: [
      "/img/lips-1.png",
      "/img/lips-2.png",
      "/img/lips-3.png",
      "/img/lips-4.jpg",
      "/img/lips-5.jpg",
    ],
    Lashes: [
      "/img/lashes-1.png",
      "/img/lashes-2.png",
      "/img/lashes-3.png",
      "/img/lashes-3.png",
      "/img/lashes-2.png",
    ],
    Brows: [
      "/img/brows-1.jpg",
      "/img/brows-2.jpg",
      "/img/brows-3.jpg",
      "/img/brows-1.jpg",
      "/img/brows-1.jpg",
      "/img/brows-2.jpg",
    ],
  };

  return (
    <motion.section 
      id="explore" 
      className="py-10 md:py-16"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto px-0 md:px-6 max-w-6xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row items-center md:items-baseline gap-6 md:gap-20"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-black mt-2 mb-4 leading-tight">
            Explore
          </h2>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-lg text-gray-400">
            {Object.keys(images).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab ? "font-lora text-black font-semibold" : ""
                } pb-2 transition`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Название активной вкладки */}
        <motion.h3 
          className="font-lora text-2xl text-black mt-6 mb-4 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          {activeTab}
        </motion.h3>

        {/* Слайдер */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {images[activeTab].map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imgSrc}
                  alt={`${activeTab} ${index + 1}`}
                  className="w-full h-80 md:h-64 object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </motion.section>
  );
}
