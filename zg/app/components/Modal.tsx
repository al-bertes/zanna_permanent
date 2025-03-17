"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ContactForm from "./ContactForm";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: string;
}

export default function Modal({ isOpen, onClose, serviceType }: ModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = () => {
    setIsSuccess(true);

    // Закрываем модалку через 3 секунды
    setTimeout(() => {
      setIsSuccess(false);
      onClose(); // Закрываем модалку после исчезновения попапа
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Фон модалки */}
          <motion.div
            className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50 h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose} // Закрытие при клике на фон
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()} // Предотвращает закрытие при клике внутри окна
              className="relative p-6 rounded-2xl shadow-lg max-w-lg w-full"
            >
              {/* Кнопка закрытия */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-all transform hover:scale-110"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-600 hover:text-gray-900" />
              </button>

              {/* Форма */}
              <ContactForm serviceType={serviceType} onSuccess={handleSuccess} />
            </motion.div>
          </motion.div>

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
        </>
      )}
    </AnimatePresence>
  );
}
