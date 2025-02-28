"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <motion.section 
      className="py-10 md:py-16"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }} 
    >
      <div className="container mx-auto px-0 md:px-6 max-w-6xl">
        
        <motion.h2 
          className="font-playfair text-4xl md:text-5xl text-center md:text-left text-black mt-2 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="flex flex-col mt-10 md:flex-row gap-6 items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false }}
            className="bg-[#7A0000] text-white p-6 pb-20 rounded-3xl h-full w-full flex flex-1 flex-col md:min-h-[280px]"
          >
            <h3 className="font-lora text-lg sm:text-xl md:text-4xl mb-6 leading-none">
              Expert Artists
            </h3>
            <p className="font-lora text-base sm:text-lg md:text-2xl leading-[1.8] md:leading-[1.5]">
              Our talented artists are trained to perfection, ensuring you get the 
              best results every time. Say goodbye to bad makeup!
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: false }}
            className="bg-[#7A0000] text-white p-6 pb-20 rounded-3xl h-full w-full flex flex-1 flex-col md:mt-11 md:min-h-[0px]"
          >
            <h3 className="font-lora text-lg sm:text-xl md:text-4xl mb-6 leading-none">
              Long-Lasting Results
            </h3>
            <p className="font-lora text-base sm:text-lg md:text-2xl leading-[1.8] md:leading-[1.5]">
              Whether it's permanent makeup or lash extensions, enjoy effortless beauty that lasts.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            viewport={{ once: false }}
            className="bg-[#7A0000] text-white p-6 pb-20 rounded-3xl h-full w-full flex flex-1 flex-col md:mt-20 md:min-h-[280px]"
          >
            <h3 className="font-lora text-lg sm:text-xl md:text-4xl mb-6 leading-none">
              Customized Approach
            </h3>
            <p className="font-lora text-base sm:text-lg md:text-2xl leading-[1.8] md:leading-[1.5]">
              Every client is unique, and we tailor our services to match your 
              individual style and beauty goals.
            </p>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}
