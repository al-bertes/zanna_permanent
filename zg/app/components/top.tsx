"use client";

import { useState } from "react";
import { Button } from "./button";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
// Подключение шрифта Playfair Display
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Top() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  return (
    <motion.section
      id="home"
      className="py-10 md:py-16 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="container px-0 md:px-6 mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className="text-center md:text-left"
        >
          <p className="font-lora text-sm text-gray-600">Unleash Your Inner Diva</p>
          <h1 className={`${playfair.className} font-playfair text-4xl md:text-7xl text-black mt-2 leading-tight`}>
            Wake Up Beautiful: Permanent Makeup & <br /> Lash Extensions

          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row items-center gap-8 mt-10"
        >
<div className="w-full md:w-1/2 flex justify-center">
  <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg aspect-[3/4] rounded-2xl overflow-hidden">
    <Image
      src="/img/main.png"
      alt="Permanent Makeup & Lash Extensions"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>


          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="font-lora text-lg md:text-4xl max-w-lg leading-[1.8] md:leading-[1.5] mx-auto md:mx-0">
            Experience a stunning transformation with our expert permanent makeup and lash extension services. Say goodbye to daily makeup routines and enjoy long-lasting, natural beauty. Wake up refreshed and ready to take on the world—because beauty should be effortless!</p>

            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#F4E352] text-black rounded-full w-full sm:w-[187px] h-[60px] text-[20px] px-6 py-2 mt-6 md:mt-12 hover:bg-[rgba(244,227,82,0.5)] transition"
            >
              Get Started
            </Button>
          </div>
        </motion.div>

      </div>

      {/* Модальное окно */}
      {isModalOpen && (<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceType={ ""}/>)}
        

    </motion.section>
  );
}
