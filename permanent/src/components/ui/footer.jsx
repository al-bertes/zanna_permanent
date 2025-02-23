"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="py-10 md:py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto px-0 md:px-6 max-w-6xl">
       
        <motion.hr 
          className="border-black mb-20"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
        />

        <motion.div 
          className="flex flex-col px-0 md:px-6 md:flex-row items-start justify-between gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false }}
        >
          <h2 className="font-playfair text-2xl text-black">Contact Us</h2>

          <div className="w-full md:w-1/2 space-y-4">
            <p className="font-lora border-b border-black pb-1">+1-800-555-0199</p>
            <p className="font-lora border-b border-black pb-1">info@beautyglam.com</p>
            <p className="font-lora border-b border-black pb-1">Minneapolis, United States</p>
          </div>
        </motion.div>

        <motion.p
          className="font-lora text-center text-sm text-black mt-20"
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
