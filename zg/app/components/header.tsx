"use client";

import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Закрыть бургер-меню на мобильных устройствах
    }
  };

  return (
    <header className="py-4 fixed top-0 left-0 w-full z-50 bg-[#F1E6E6] drop-shadow-md">
      <div className="container mx-auto px-10 md:px-6 flex justify-between items-center max-w-6xl">
        <div>
          <img
            src="/img/logo.svg"
            alt="Logo"
            className="h-12 md:h-15 w-auto cursor-pointer"
            onClick={() => scrollToSection("home")}
          />
        </div>

        {/* Навигация на десктопе */}
        <nav className="hidden md:flex gap-4">
          {["About", "Explore", "Services", "Contact"].map((section) => (
            <Button
              key={section}
              onClick={() => scrollToSection(section.toLowerCase())}
              variant="outline"
              className="font-lora bg-transparent rounded-full border-black text-black hover:bg-[#710000] hover:text-white"
            >
              {section}
            </Button>
          ))}
        </nav>

        {/* Бургер-меню на мобильных устройствах */}
        <div className="md:hidden bg-[#E1FF04] rounded-full w-[45px] h-[45px] flex items-center justify-center">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <Button
          onClick={() => setIsModalOpen(true)}
          className="font-lora hidden md:block bg-[#F4E352] text-black rounded-full w-[140px] h-[40px] text-[15px] px-6 py-2 hover:bg-[rgba(244,227,82,0.5)] transition"
        >
          Get Started
        </Button>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: 500, opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-[#E7E7E7] overflow-hidden"
          >
            <nav className="flex flex-col items-left gap-4 pl-6 py-6">
              {["About", "Explore", "Services", "Contact"].map((section) => (
                <Button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase())}
                  variant="outline"
                  className="font-lora !w-auto !max-w-max px-6 bg-transparent rounded-full border-black text-black hover:bg-[#710000] hover:text-white"
                >
                  {section}
                </Button>
              ))}
              <Button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                className="font-lora !w-auto !max-w-max px-6 bg-[#F4E352] text-black rounded-full h-[40px] text-[15px] py-2 hover:bg-[rgba(244,227,82,0.5)] transition"
              >
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Модальное окно */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-[#F1E6E6] p-6 rounded-2xl w-[90%] max-w-md shadow-lg relative flex flex-col min-h-[300px]"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
                aria-label="Close Modal"
              >
                &times;
              </button>

              <h2 className="text-4xl text-center text-black mb-10">
                Get In Touch
              </h2>

              {/* Форма */}
              <form className="space-y-4 py-0" onSubmit={(e) => e.preventDefault()}>
                {["Name", "Email", "Phone"].map((field) => (
                  <div key={field}>
                    <label className="font-lora block text-[20px] font-medium">
                      {field}
                    </label>
                    <input
                      type={field.toLowerCase()}
                      className="font-lora bg-transparent mt-1 block w-full border-b border-black outline-none 
                      focus:border-b-2 focus:border-b-gray-800 transition duration-300"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="font-lora text-[20px] mt-10 w-full bg-[#a43f00] text-white font-medium py-2 
                  rounded-full shadow-md hover:bg-[#812f00] transition duration-300"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
