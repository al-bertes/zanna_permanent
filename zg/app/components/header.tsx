"use client";

import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import Image from "next/image";

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
  <Image
    src="/img/logo.svg"
    alt="Logo"
    width={150}
    height={60}
    className="h-12 md:h-16 w-auto cursor-pointer"
    onClick={() => scrollToSection("home")}
    priority
  />
</div>

        {/* Навигация на десктопе */}
        <nav className="hidden md:flex gap-4">
          {["About", "Explore", "Services", "Contact", "FAQ"].map((section) => (
            <Button
              key={section}
              onClick={() => scrollToSection(section.toLowerCase())}
              variant="outline"
              className="font-lora bg-transparent rounded-full border-black text-black hover:bg-[#710000] hover:text-white cursor-pointer"
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
          className="cursor-pointer font-lora hidden md:block bg-[#F4E352] text-black rounded-full w-[140px] h-[40px] text-[15px] px-6 py-2 hover:bg-[rgba(244,227,82,0.5)] transition"
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
              {["About", "Explore", "Services", "Contact", "FAQ"].map((section) => (
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
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}
