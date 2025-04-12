"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Playfair_Display, Lora } from "next/font/google";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
          <h2 className={`${playfair.className} font-playfair text-4xl md:text-5xl text-black leading-tight`}>
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
              className={`${lora.className} text-base md:text-2xl md:leading-[1.4] max-w-lg mx-auto md:mx-0`}
            >
              With over 7 years of experience in the beauty industry, Zhanna Gabisova is a licensed and certified professional, an internationally recognized judge, award-winning artist, and dedicated educator.<br/><br/> Specializing in advanced lash extensions and permanent makeup for brows, lips, and eyelids, she combines exceptional artistry with precision. Clients benefit not only from her expert hands-on techniques but also from her deep industry knowledge as a passionate instructor. <br/><br/>Whether enhancing natural beauty or creating transformative looks, Zhanna Gabisova consistently delivers stunning, long-lasting results with the highest standards of safety and professionalism.
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
              <Image
                src="/img/photo.jpg"
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
