"use client";

import { motion } from "framer-motion";
import {  Instagram } from "lucide-react";
import Image from "next/image";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const navigationLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Explore", id: "explore" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
  { name: "FAQ", id: "faq" },
];

export default function Footer() {
  return (
    <motion.footer
      className="md:py-5 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <motion.hr
        className="border-black my-6"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
      />
      <div className={`${lora.className} container mx-auto px-0 md:px-6 max-w-6xl`}>
        {/* Верхняя часть футера */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false }}
        >
          {/* Логотип и слоган */}
          <div className="flex flex-col items-center md:items-start">
  <Image
    src="/img/logo.svg"
    alt="Logo"
    width={160}
    height={60}
    className="h-15 w-auto mb-2"
    priority
  />
  <p className="text-gray-600 text-sm">
    Enhancing Your Beauty, One Stroke at a Time.
  </p>
</div>

          {/* Быстрые ссылки */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-700">
            {navigationLinks.map(({ name, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-black transition transform hover:scale-105 duration-300"
              >
                {name}
              </a>
            ))}
          </nav>

          {/* Социальные сети */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/beauty_zone_zg/"
              target="_blank"
              className="text-gray-700 hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </motion.div>

        {/* Линия-разделитель */}

        {/* Копирайт */}
        <motion.p
          className="text-center text-sm text-gray-600 pt-9"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: false }}
        >
          © 2025 Beauty Glam. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
