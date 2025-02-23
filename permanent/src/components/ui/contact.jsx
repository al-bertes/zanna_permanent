"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="py-10 md:py-16"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto px-0 md:px-6 max-w-6xl flex flex-col md:flex-row items-center gap-8">
        
        {/* Карта */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className="w-full md:w-1/2"
        >
          <iframe
            className="w-full h-[300px] md:h-[400px] rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93233.91709424307!2d-93.3294912!3d44.977753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333e9e3081601%3A0xe9b42d5b01725c02!2sMinneapolis%2C%20MN!5e0!3m2!1sen!2sus!4v1675805084537!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Форма */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false }}
          className="w-full md:w-1/2 p-0 md:p-8 rounded-2xl"
        >
          <h2 className="font-playfair py-10 md:py-0 text-4xl text-center md:text-left text-black mb-10">
          Get In Touch
          </h2>

          <form className="space-y-4 py-0">
            <div>
              <label className="font-lora block text-[20px] font-medium">Name</label>
              <input
                type="text"
                className="bg-transparent mt-1 block w-full border-b border-black outline-none focus:border-b-2 focus:border-b-gray-800 transition duration-300"
              />
            </div>

            <div>
              <label className="font-lora block text-[20px] font-medium">Email</label>
              <input
                type="email"
                className="bg-transparent mt-1 block w-full border-b border-black outline-none focus:border-b-2 focus:border-b-gray-800 transition duration-300"
              />
            </div>

            <div>
              <label className="font-lora block font-medium text-[20px]">Phone</label>
              <input
                type="tel"
                className="bg-transparent mt-1 mb-10 block w-full border-b border-black outline-none focus:border-b-2 focus:border-b-gray-800 transition duration-300"
              />
            </div>

            <button
              type="submit"
              className="font-lora text-[20px] mt-10 w-full bg-[#a43f00] text-white font-medium py-2 rounded-full shadow-md hover:bg-[#812f00] transition duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>

      </div>
    </motion.section>
  );
}
