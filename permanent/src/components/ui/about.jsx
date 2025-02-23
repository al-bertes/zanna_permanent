"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-10 md:py-16">
      <div className="container mx-auto px-0 md:px-6 max-w-6xl">

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row items-center md:items-baseline gap-3 md:gap-10 text-center md:text-left"
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-black leading-tight">
            About Us
          </h2>
          <p className="font-lora text-sm text-gray-600">Your Beauty, Our Passion</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false }}
          className="flex flex-col-reverse md:flex-row items-center gap-8 mt-6"
        >
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="font-lora text-xl md:text-4xl leading-[1.8] md:leading-[1.5] max-w-lg mx-auto md:mx-0">
              At Glamour, we believe that beauty should be effortless. Our team of experts is dedicated to providing you with the best permanent makeup services that enhance your natural beauty and boost your confidence.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-xs sm:max-w-md md:max-w-full h-auto rounded-2xl overflow-hidden">
              <img 
                src="/img/zhanna-permanent.png" 
                alt="Permanent Makeup & Lash Extensions professional" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
