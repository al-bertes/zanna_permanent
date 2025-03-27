"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Playfair_Display, Lora } from "next/font/google";

// Подключение шрифта Playfair Display
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const images = {
  Lips: [
    "/img/lips-1.jpg",
    "/img/lips-2.jpg",
    "/img/lips-3.jpg",
  ],
  Lashes: [
    "/img/eyeliner.jpg",
    "/img/lashes-3weeks-foreign.jpg",
    "/img/lashes-3weeks.jpg",
    "/img/lashes-classic.jpg",
    "/img/lashes-hybrid.jpg",
    "/img/lashes-kylie.jpg",
    "/img/lashes-mascara.jpg",
    "/img/lashes-2weeks.jpg",
    "/img/lashes-removal.jpg",
    "/img/lashes-volume.jpg",
  ],
  Brows: [
    "/img/brows-1.jpg",
    "/img/brows-2.jpg",
    "/img/brows-3.jpg",
  ],
  Eyeliner: [
    "/img/eyeliner-1.jpg",
    "/img/eyeliner-2.jpg",
    "/img/eyeliner-3.jpg",
    "/img/eyeliner-4.jpg",
    "/img/eyeliner-5.jpg",
  ],
};

const tabs = Object.keys(images) as (keyof typeof images)[];

export default function ExploreSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof images>("Lips");

  const handleTabChange = (tab: keyof typeof images) => {
    setActiveTab(tab);
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
  className="flex flex-col md:flex-row justify-start items-center gap-6 md:gap-20"
>
  <h2 className={`${playfair.className} text-4xl md:text-5xl text-black leading-tight`}>
    Explore
  </h2>

  <div className={`${lora.className} flex flex-wrap justify-center gap-2 md:gap-4`}>
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => handleTabChange(tab)}
        className={`cursor-pointer px-3 py-1 md:px-5 md:py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-200 
          ${activeTab === tab ? "bg-[#A85C65] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
      >
        {tab}
      </button>
    ))}
  </div>
</motion.div>

        {/* <AnimatePresence mode="wait">
          <motion.h3
            key={activeTab}
            className="font-lora text-center text-3xl text-black mt-10 mb-10 leading-tight cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {activeTab}
          </motion.h3>
        </AnimatePresence> */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full mt-10 md:mt-20"
            >
              {images[activeTab].map((imgSrc, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={imgSrc}
                    alt={`${activeTab} ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-80 md:h-64 object-cover rounded-2xl shadow-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
