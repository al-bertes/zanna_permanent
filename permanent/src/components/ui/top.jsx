"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Top() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <h2 className="font-playfair text-4xl md:text-7xl text-black mt-2 leading-tight">
            Permanent Makeup & <br /> Lash Extensions
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row items-center gap-8 mt-10"
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-full md:h-auto rounded-2xl overflow-hidden">
              <img 
                src="/img/main.png" 
                alt="Permanent Makeup & Lash Extensions" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="font-lora text-lg md:text-4xl max-w-lg leading-[1.8] md:leading-[1.5] mx-auto md:mx-0">
              Transform your look with our stunning permanent makeup and lash 
              extension services. Say goodbye to daily makeup routines and 
              hello to effortless beauty that lasts!
            </p>

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
      {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    
    {/* Анимированное модальное окно */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-[#F1E6E6] p-6 rounded-2xl w-[90%] max-w-md shadow-lg relative"
    >
      
      {/* Кнопка закрытия */}
      <button 
        onClick={() => setIsModalOpen(false)} 
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
      >
        &times;
      </button>

      {/* Заголовок */}
      <h2 className="text-4xl text-center text-black mb-10">Get In Touch</h2>

      {/* Форма */}
      <form className="space-y-4 py-0">
        <div>
          <label className="block text-[20px] font-medium">Name</label>
          <input
            type="text"
            className="bg-transparent mt-1 block w-full border-b border-black outline-none focus:border-b-2 focus:border-b-gray-800 transition duration-300"
          />
        </div>

        <div>
          <label className="block text-[20px] font-medium">Email</label>
          <input
            type="email"
            className="bg-transparent mt-1 block w-full border-b border-black outline-none focus:border-b-2 focus:border-b-gray-800 transition duration-300"
          />
        </div>

        <div>
          <label className="block text-[20px] font-medium">Phone</label>
          <input
            type="tel"
            className="bg-transparent mt-1 mb-10 block w-full border-b border-black outline-none focus:border-b-2 focus:border-b-gray-800 transition duration-300"
          />
        </div>

        <button
          type="submit"
          className="text-[20px] mt-10 w-full bg-[#a43f00] text-white font-medium py-2 rounded-full shadow-md hover:bg-[#812f00] transition duration-300"
        >
          Submit
        </button>
      </form>

    </motion.div>
  </div>
)}


    </motion.section>
  );
}
