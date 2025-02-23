'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="py-4 fixed top-0 left-0 w-full z-50 bg-[#F1E6E6] drop-shadow-md">
      <div className="container mx-auto px-10 md:px-6 flex justify-between items-center max-w-6xl">
        <div>
          <img 
            src="/img/logo.svg" 
            alt="Glamour Logo" 
            className="h-12 md:h-15 w-auto cursor-pointer"
            onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
          />    
        </div>

        <nav className="hidden md:flex gap-4">
          <Button  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          variant="outline" className="font-lora bg-transparent rounded-full border-black text-black hover:bg-[#710000] hover:text-white">
            About
          </Button>
          <Button  onClick={() => document.getElementById('explore').scrollIntoView({ behavior: 'smooth' })}
          variant="outline" className="font-lora bg-transparent rounded-full border-black text-black hover:bg-[#710000] hover:text-white">
            Explore
          </Button>
          <Button  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
           variant="outline" className="font-lora bg-transparent rounded-full border-black text-black hover:bg-[#710000] hover:text-white">
            Services
          </Button>
          <Button  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          variant="outline" className="font-lora bg-transparent rounded-full border-black text-black hover:bg-[#710000] hover:text-white">
            Contact
          </Button>
        </nav>

        {/* Бургер*/}
        <div className="md:hidden bg-[#E1FF04] rounded-full w-[45px] h-[45px] flex items-center justify-center">
          <button onClick={() => setIsOpen(!isOpen)}>
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

      <div
  className={`md:hidden absolute top-full left-0 w-full bg-[#E7E7E7] transition-[max-height] duration-700 ease-in-out overflow-hidden ${
    isOpen ? "max-h-[500px] py-6 opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <nav className="flex flex-col items-left gap-4 pl-6">
    <Button 
      onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      variant="outline" 
      className="font-lora !w-auto !max-w-max px-6 bg-transparent rounded-full border-black text-black hover:bg-[#710000] hover:text-white"
    >
      About
    </Button>
    <Button
      onClick={() => document.getElementById('explore').scrollIntoView({ behavior: 'smooth' })}
      variant="outline" 
      className="font-lora !w-auto !max-w-max px-6 bg-transparent rounded-full border-black text-black hover:bg-[#710000] hover:text-white"
    >
      Explore
    </Button>
    <Button 
      onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
      variant="outline" 
      className="font-lora !w-auto !max-w-max px-6 bg-transparent rounded-full border-black text-black hover:bg-[#710000] hover:text-white"
    >
      Services
    </Button>
    <Button
      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
      variant="outline" 
      className="font-lora !w-auto !max-w-max px-6 bg-transparent rounded-full border-black text-black hover:bg-[#710000] hover:text-white"
    >
      Contact
    </Button>
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
</div>



{/* Модальное окно */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 h-screen">
    
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
      >
        &times;
      </button>

      <h2 className="text-4xl text-center text-black mb-10">Get In Touch</h2>

      {/* Форма */}
      <form className="space-y-4 py-0">
        <div>
          <label className="font-lora block text-[20px] font-medium">Name</label>
          <input
            type="text"
            className="font-lora bg-transparent mt-1 block w-full border-b border-black outline-none 
             focus:border-b-2 focus:border-b-gray-800 transition duration-300"
          />
        </div>

        <div>
          <label className="font-lora block text-[20px] font-medium">Email</label>
          <input
            type="email"
            className="font-lora bg-transparent mt-1 block w-full border-b border-black outline-none 
            focus:border-b-2 focus:border-b-gray-800 transition duration-300"
          />
        </div>

        <div>
          <label className="font-lora block text-[20px] font-medium">Phone</label>
          <input
            type="tel"
            className="font-lora bg-transparent mt-1 mb-10 block w-full border-b border-black outline-none 
            focus:border-b-2 focus:border-b-gray-800 transition duration-300"
          />
        </div>

        <button
          type="submit"
          className="font-lora text-[20px] mt-10 w-full bg-[#a43f00] text-white font-medium py-2 
          rounded-full shadow-md hover:bg-[#812f00] transition duration-300"
        >
          Submit
        </button>
      </form>

    </motion.div>
  </div>
)}




    </header>
  );
}
