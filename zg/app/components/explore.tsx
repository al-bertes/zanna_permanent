"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageSlider from "./ImageSlider";
import TabButton from "./TabButton";

const images = {
  Lips: [
    "/img/lips-1.jpg",
    "/img/lips-2.jpg",
    "/img/lips-3.jpg",
  ],
  Lashes: [
    "/img/lashes-2weeks.jpg",
    "/img/lashes-3weeks-foreign.jpg",
    "/img/lashes-3weeks.jpg",
    "/img/lashes-classic.jpg",
    "/img/lashes-hybrid.jpg",
    "/img/lashes-kylie.jpg",
    "/img/lashes-mascara.jpg",
    "/img/lashes-removal.jpg",
    "/img/lashes-volume.jpg",
  ],
  Brows: [
    "/img/brows-1.jpg",
    "/img/brows-2.jpg",
    "/img/brows-3.jpg",
  ],
  Eyeliner: [
    "/img/eyeliner.jpg",
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

  // Циклический переход между категориями
  const switchToNextCategory = useCallback(() => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length; // Циклический переход
    setActiveTab(tabs[nextIndex]);
  }, [activeTab]);

  // Автопереход между категориями каждые 10 секунд
  useEffect(() => {
    const interval = setInterval(switchToNextCategory, 10000); // 10 секунд
    return () => clearInterval(interval);
  }, [switchToNextCategory]);

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
            {tabs.map((tab) => (
              <TabButton
                key={tab}
                label={tab}
                isActive={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.h3
            key={activeTab} // Для анимации при смене вкладки
            className="font-lora text-2xl text-black mt-6 mb-4 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {activeTab}
          </motion.h3>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // Для плавного появления ImageSlider
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ImageSlider 
              images={images[activeTab]} 
              onLastSlide={switchToNextCategory} 
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
