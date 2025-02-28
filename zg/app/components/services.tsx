"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceOption {
  category: string;
  description: string;
  price: string;
  duration: string;
}

interface Service {
  title: string;
  options: ServiceOption[];
  color: string;
}

const services: Service[] = [
  {
    title: "Eyelash Extension Services",
    options: [
      {
        category: "Classic Volume",
        description:
          "The most natural volume. The fullness depends solely on the number of your natural lashes. You can choose any style based on your preferences. An uneven lash line effect can also be done for the most natural look.",
        price: "$140.00",
        duration: "1 hour 30 minutes",
      },
      {
        category: "Hybrid, Light Volume (2-3D Set)",
        description:
          "The most popular volume. It can be done in different styles, and you can also add spikes, color, or mix curls. If this is your first lash extension, I recommend starting with this one.",
        price: "$150.00",
        duration: "2 hours",
      },
      {
        category: "Volume",
        description:
          "Volume lash extensions are just what you need if you usually use more than just mascara. They will give your look a bold, deep, and alluring appearance. You can always add spikes or colored lashes to your extensions at no extra cost.",
        price: "$180.00",
        duration: "2 hours 15 minutes",
      },
      {
        category: "Mascara Effect",
        description:
          "The effect of the mascara speaks for itself. Do you like to use several layers of mascara? Then this is what you need. The density depends on the number of natural eyelashes.",
        price: "$170.00",
        duration: "2 hours",
      },
      {
        category: "Eyeliner Effect",
        description:
          "Provides a defined eyeliner look along the lash line. Enhances the eyes with a bold, seamless finish.",
        price: "$170.00",
        duration: "45 minutes",
      },
      {
        category: "Fill-In (2 Weeks)",
        description:
          "Any lash extensions done by me, except Mega volume. For lashes that were done no more than 14 days ago. Please, arrive with clean lashes, no make up. If that's not possible, I will provide a cleanser for you to wash them before the procedure.",
        price: "$90.00",
        duration: "2 hours",
      },
      {
        category: "Fill-In (3 Weeks)",
        description:
          "For lashes that were done no more than 21 days ago. Please, arrive with clean lashes, no make up. If that's not possible, I will provide a cleanser for you to wash them before the procedure.",
        price: "$110.00",
        duration: "1 hour 20 minutes",
      },
      {
        category: "Fill-In (4 Weeks)",
        description:
          "For lashes that were done no more than 28 days ago. Please, arrive with clean lashes, no make up. If that's not possible, I will provide a cleanser for you to wash them before the procedure.",
        price: "$120.00",
        duration: "1 hour 30 minutes",
      },
      {
        category: "Extension Removal",
        description:
          "Safe and gentle removal of eyelash extensions. Ideal if you want to take a break from extensions or prepare for a new set.",
        price: "$30.00",
        duration: "15 minutes",
      },
    ],
    color: "bg-[#7A0000]",
  },
  {
    title: "Permanent Makeup Services",
    options: [
      {
        category: "Ombre Powder Brows",
        description:
          "Powder Brows is one of the best techniques for creating soft, powdery makeup-like brows. Perfect for all skin types, it features a beautiful gradient from light and natural at the front to darker and defined at the tail. This service is fully customized to achieve your desired look, whether subtle and natural or bold and striking. Touch-up not included.",
        price: "$400.00",
        duration: "3 hours",
      },
      {
        category: "5-6 Weeks Eyebrows Touch-Up",
        description:
          "For existing clients who need a touch-up to maintain the fresh look of their Ombre Powder Brows. Ideal for corrections within 5-6 weeks of the initial procedure.",
        price: "$100.00",
        duration: "1 hour",
      },
      {
        category: "2-6 Months Eyebrows Touch-Up",
        description:
          "Touch-up for existing clients to refresh and maintain the appearance of Ombre Powder Brows. Suitable for those who had their brows done 2-6 months ago.",
        price: "$200.00",
        duration: "2 hours",
      },
      {
        category: "Lip Blush",
        description:
          "This procedure adds color to dull lips, gives a clear shape according to your desire, and corrects defects in shape from scars.",
        price: "$450.00",
        duration: "3 hours 20 minutes",
      },
      {
        category: "6-8 Weeks Lip Blush Touch-Up",
        description:
          "Touch-up service to maintain the vibrancy and shape of your Lip Blush. Recommended for clients who had their initial procedure 6-8 weeks prior.",
        price: "$200.00",
        duration: "2 hours 30 minutes",
      },
      {
        category: "Lash-Line Enhancement",
        description:
          "Subtly define and accentuate your eyes by adding precise pigment along the lash line. This technique creates the illusion of thicker, fuller lashes. Ideal for those seeking a subtle enhancement without the need for daily eyeliner application. Long-lasting and smudge-proof, achieving a refreshed and youthful appearance.",
        price: "$300.00",
        duration: "1 hour 40 minutes",
      },
    ],
    color: "bg-[#A43F00]",
  },
];


export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});

  const handleCategoryClick = (index: number, category: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [index]: category,
    }));
    setOpenIndex(index); // Открыть блок при выборе категории
  };

  const toggleCard = (index: number) => {
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
                className={`relative w-full rounded-3xl p-6 transition-all duration-500 ${service.color} ${index !== 0 ? "mt-4 md:-mt-6" : ""
                  } ${service.title === "Correction" ? "text-black" : "text-white"} ${isOpen ? "h-auto" : "h-24 md:h-28"
                  }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  {/* Заголовок слева, категории справа */}
                  <h3 className="font-playfair text-2xl sm:text-3xl break-words">{service.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {service.options.map((option, i) => (
                      <button
                        key={i}
                        className={`font-lora border rounded-full px-4 py-1 text-sm transition ${selectedOption === option.category ? "bg-white text-black" : "border-white"
                          } hover:bg-white hover:text-black`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategoryClick(index, option.category);
                        }}
                      >
                        {option.category}
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && selectedData && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="overflow-hidden mt-4"
                    >
                      <p className="font-lora text-lg break-words">{selectedData.description}</p>
                      <p>{selectedData.duration}</p>
                      <p className="font-lora mt-2 mb-3 text-xl font-bold">Price: {selectedData.price}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
