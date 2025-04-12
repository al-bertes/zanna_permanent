"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "./ContactForm";
import { Playfair_Display, Lora } from "next/font/google";

// Подключение шрифта Playfair Display
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lora = Lora ({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = () => {
    setIsSuccess(true);

    // Убираем попап через 3 секунды
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <motion.section
      id="contact"
      className="py-10 md:py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className={`${lora.className} container mx-auto px-0 md:px-6 max-w-6xl`}>
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="mb-12 text-center md:text-center"
        >
          <h2 className={`${playfair.className} text-4xl md:text-5xl text-black leading-tight`}>
            Contact Us
          </h2>
          <p className="text-gray-600 mt-2 text-lg md:text-xl">
            We&apos;re here to help! Reach out to us anytime.
          </p>
        </motion.div>

        {/* Контейнер с контактами и формой */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Блок с картой и контактами */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
            className="w-full md:w-1/2 space-y-6"
          >
            {/* Карта */}
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <iframe
                className="w-full h-[300px] md:h-[400px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.9015449493377!2d-93.44793552392369!3d44.965993871070225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b34ac1c3f7698b%3A0x4a62988b9e431403!2s12993%20Ridgedale%20Dr%20Suite%20123%2C%20Minnetonka%2C%20MN%2055305!5e0!3m2!1sen!2sus!4v1742851171391!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Контактная информация */}
            <div className="bg-[#F3DDDA] p-4 md:p-6 rounded-2xl shadow-md">
              <h3 className={`${lora.className} text-2xl font-semibold text-black mb-4`}>Contact Information</h3>
              
              <div className="space-y-4">
                {/* Адрес */}
                <div className="flex items-center gap-3">
                  <MapPin className="text-black-600 w-6 h-6" />
                  <p className="text-gray-700">
                    <strong>Address:</strong> 12993 Ridgedale Dr #123 Minnetonka MN 
                  </p>
                </div>

                {/* Телефон */}
                <div className="flex items-center gap-3">
                  <Phone className="text-black-600 w-6 h-6" />
                  <p className="text-gray-700">
                    <strong>Phone:</strong> 
                    <a href="tel:+12242943516" className="text-blue-600 hover:underline ml-1">+1 (224) 294 35 16</a>
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="text-black-600 w-6 h-6" />
                  <p className="text-gray-700">
                    <strong>Email:</strong> 
                    <a href="beautyzonebyzhanna@gmail.com" className="text-blue-600 hover:underline ml-1">beautyzonebyzhanna@gmail.com</a>
                  </p>
                </div>

                {/* Часы работы */}
                <div>
                  <p className="text-gray-700"><strong>Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM</p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Форма обратной связи */}
          <ContactForm onSuccess={handleSuccess} />
        </div>
      </div>

      {/* Попап успешной отправки */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg text-lg font-semibold">
              ✅ Your message has been sent!
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.section>
  );
}
