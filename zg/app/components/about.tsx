"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText((prev) => !prev);
  };

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
            <p
              className={`font-lora text-base md:text-2xl leading-[1.6] md:leading-[1.4] max-w-lg mx-auto md:mx-0 ${
                showFullText ? "max-h-full" : "max-h-[24rem] overflow-hidden"
              } transition-all duration-300`}
            >
              With over 7 years of experience in the beauty industry, Zanna Gabisova is a licensed and certified professional, an internationally recognized judge, award-winning artist, and dedicated educator. Specializing in advanced lash extensions and permanent makeup for brows, lips, and eyelids, she combines exceptional artistry with precision. Clients benefit not only from her expert hands-on techniques but also from her deep industry knowledge as a passionate instructor. Whether enhancing natural beauty or creating transformative looks, Zanna Gabisova consistently delivers stunning, long-lasting results with the highest standards of safety and professionalism.
            </p>
            <button
              onClick={toggleText}
              className="mt-4 px-6 py-2 bg-black text-white rounded-2xl transition-transform hover:scale-105"
            >
              {showFullText ? "Show Less" : "Read More"}
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="w-full max-w-xs sm:max-w-md md:max-w-full h-auto rounded-2xl overflow-hidden">
              <Image
                src="/img/zhanna-permanent.png"
                alt="Permanent Makeup & Lash Extensions professional"
                width={600}
                height={800}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
