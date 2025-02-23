"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Permanent Makeup",
    options: [
      { category: "Lips", description: "Enhance your lips with semi-permanent makeup.", price: "$250" },
      { category: "Brows", description: "Perfectly shaped eyebrows with long-lasting results.", price: "$300" },
      { category: "Eyeliner", description: "Get a natural or bold eyeliner look.", price: "$200" },
    ],
    color: "bg-[#7A0000]",
  },
  {
    title: "Lash Extensions",
    options: [
      { category: "Classic", description: "A natural-looking lash extension.", price: "$100" },
      { category: "Hybrid", description: "A mix of classic and volume lashes.", price: "$150" },
      { category: "Volume", description: "Extra thick and dramatic volume.", price: "$200" },
    ],
    color: "bg-[#A43F00]",
  },
  {
    title: "Correction",
    options: [
      { category: "Scalp", description: "A non-surgical hair loss solution.", price: "$500" },
      { category: "Beard", description: "Enhance or restore your beard.", price: "$400" },
      { category: "Hairline", description: "Create a perfect hairline.", price: "$450" },
    ],
    color: "bg-[#F4E352]",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleCategoryClick = (index, category) => {
    if (openIndex !== index) {
      setOpenIndex(index);
    }
    setSelectedOptions((prev) => ({
      ...prev,
      [index]: category,
    }));
  };

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    if (!selectedOptions[index]) {
      setSelectedOptions((prev) => ({
        ...prev,
        [index]: services[index].options[0].category,
      }));
    }
  };

  return (
    <motion.section 
      id="services" 
      className="py-10 md:py-16"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto px-0 md:px-6 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className="font-playfair text-4xl md:text-5xl text-black mt-2 leading-tight mb-8 text-center md:text-left"
        >
          Our Services
        </motion.h2>

        <div className="relative flex flex-col items-center">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const selectedOption = selectedOptions[index] || service.options[0].category;
            const selectedData = service.options.find((opt) => opt.category === selectedOption);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: false }}
                className={`relative w-full rounded-3xl p-6 transition-all duration-500 ${
                  service.color
                } ${index !== 0 ? "mt-4 md:-mt-6" : ""} ${service.title === "Correction" ? "text-black" : "text-white"} ${isOpen ? "h-auto" : "h-40 md:h-48"}`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center flex-wrap md:flex-nowrap gap-4">
                  <h3 className="font-playfair text-2xl sm:text-3xl break-words">{service.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {service.options.map((option, i) => (
                      <button
                        key={i}
                        className={`font-lora border rounded-full px-4 py-1 text-sm transition ${
                          selectedOption === option.category ? "bg-white text-black" : "border-white"
                        }`}
                        onClick={() => handleCategoryClick(index, option.category)}
                      >
                        {option.category}
                      </button>
                    ))}
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-8 h-8 sm:w-6 sm:h-6 transition-transform duration-300 ${
                      isOpen ? "rotate-[-90deg]" : "rotate-0"
                    }`}
                    onClick={() => toggleCard(index)}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                  </svg>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-lora mt-2 text-lg break-words">{selectedData.description}</p>
                  <p className="font-lora mt-2 mb-3 text-xl font-bold">Price: {selectedData.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
