"use client";

import { motion } from "framer-motion";
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

export default function WhyChooseUs() {
  return (
    <motion.section 
      className="py-10 md:py-16"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }} 
    >
      <div className={`${lora.className} container mx-auto px-0 md:px-6 max-w-6xl`}>
        
        <motion.h2 
          className={`${playfair.className} font-playfair text-4xl md:text-5xl text-center md:text-left text-black mt-2 leading-tight`}
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
            className="bg-[#E9C1BE] shadow-xs text-black p-6 pb-20 rounded-3xl h-full w-full flex flex-1 flex-col md:min-h-[280px]"
          >
            <h3 className="text-2xl sm:text-xl md:text-4xl mb-6 leading-none">
              Expert Artists
            </h3>
            <p className={`${lora.className} text-base sm:text-lg md:text-2xl leading-[1.8] md:leading-[1.5]`}>
            Our skilled artists are carefully trained and bring their expertise to every client, delivering flawless makeup and lashes you will love.
            
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: false }}
            className="bg-[#E9C1BE] text-black p-6 pb-20 rounded-3xl h-full w-full flex flex-1 flex-col md:mt-11 md:min-h-[0px]"
          >
            <h3 className="text-2xl sm:text-xl md:text-4xl mb-6 leading-none">
            Long-Lasting Results
            </h3>
            <p className={`${lora.className} text-base sm:text-lg md:text-2xl leading-[1.8] md:leading-[1.5]`}>
            From permanent makeup to lash extensions, our treatments provide lasting beauty, saving you time and effort every day.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            viewport={{ once: false }}
            className="bg-[#E9C1BE] text-black p-6 pb-20 rounded-3xl h-full w-full flex flex-1 flex-col md:mt-20 md:min-h-[280px]"
          >
            <h3 className="text-2xl sm:text-xl md:text-4xl mb-6 leading-none">
            Personalized Approach
            </h3>
            <p className={`${lora.className} text-base sm:text-lg md:text-2xl leading-[1.8] md:leading-[1.5]`}>
            We understand that each client is unique. Our personalized 
            approach ensures your beauty goals are achieved, reflecting your individual style.
            </p>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}
