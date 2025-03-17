"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./button";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";
import { Playfair_Display } from "next/font/google";

// Подключение шрифта Playfair Display
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const permanentBrows = [
  {
    title: "Ombre Powder Brows",
    description: "Achieve soft, natural-looking brows with a subtle gradient effect. Ideal for oily skin.",
    duration: "3 hours",
    price: "$400",
    image: "/img/brows-1.jpg"
  },
  {
    title: "5-6 Week Brow Touch-Up",
    description: "Maintain your eyebrow shape and color with this recommended follow-up session.",
    duration: "1 hour",
    price: "$100",
    image: "/img/brows-2.jpg"
  },
  {
    title: "2-6 Week Brow Touch-Up",
    description: "Perfect for an initial touch-up to ensure optimal shape and lasting color.",
    duration: "2 hours",
    price: "$400",
    image: "/img/brows-2.jpg"
  },
  {
    title: "Permanent Eyeliner",
    description: "Define and enhance your eyes with subtle, long-lasting eyeliner. Perfect for those seeking effortless daily beauty.",
    duration: "2 hours",
    price: "$170",
    image: "/img/eyeliner.jpg"
  }
];

const permanentLips = [
  {
    title: "Lip Blush",
    description: "Enhance your lips with natural-looking color, shape definition, and correction of minor imperfections.",
    duration: "3 hours 20 minutes",
    price: "$450",
    image: "/img/lips-1.jpg"
  },
  {
    title: "6-8 Week Lip Touch-Up",
    description: "Maintain your lip color vibrancy and shape with a professional touch-up.",
    duration: "2 hours 30 minutes",
    price: "$200",
    image: "/img/lips-3.jpg"
  }
];

// Lash Services
const lashesData = [
  {
    title: "Classic Lash Extensions",
    description: "Enhance your natural beauty with subtle, elegant lash extensions.",
    duration: "1 hour 30 minutes",
    price: "$145",
    image: "/img/lashes-classic.jpg",
  },
  {
    title: "Hybrid Lash Extensions",
    description: "The perfect balance between natural and volume lashes, creating a fuller yet soft look.",
    duration: "1 hour 30 minutes",
    price: "$170",
    image: "/img/lashes-hybrid.jpg"
  },
  {
    title: "Mega Volume Lash Extensions",
    description: "Achieve dramatic fullness with ultra-light, luxurious lashes for maximum impact.",
    duration: "2 hours",
    price: "$200",
    image: "/img/lashes-volume.jpg"
  },
  {
    title: "Mascara Effect Lash Extensions",
    description: "Bold lashes that replicate the look of perfect mascara, every day.",
    duration: "2 hours",
    price: "$200",
    image: "/img/lashes-mascara.jpg"
  },
  {
    title: "Kylie / Rays Effect Lashes",
    description: "Stunning, trendy lashes styled to create a wispy, celebrity-inspired look.",
    duration: "2 hours",
    price: "$200",
    image: "/img/lashes-kylie.jpg"
  },
  {
    title: "Lash Fill (within 4 weeks)",
    description: "Keep your lashes looking perfect with a refill within 4 weeks of your initial appointment.",
    duration: "1 hour 20 minutes",
    price: "$120",
    image: "/img/lashes-4weeks.jpg"
  },
  {
    title: "Lash Extension Removal",
    description: "Gentle removal of lash extensions applied by our studio within the last 14 days (Mega Volume excluded).",
    duration: "15 minutes",
    price: "$30",
    image: "/img/lashes-removal.jpg"
  },
  {
    title: "Lash Fill - Foreign Set (within 3 weeks)",
    description: "Professional fill-in of lash extensions from other artists, provided at least 50% of lashes remain intact (Mega Volume excluded). For optimal results, we recommend a new full set.",
    duration: "1 hour 20 minutes",
    price: "$130",
    image: "/img/lashes-3weeks-foreign.jpg"
  },
];


export default function CustomTabs() {
  // Данные для Permanent Brows
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const openModal = (service: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
  return (
    <motion.div id="services" className=" container mx-auto px-0 md:px-6 max-w-6xl">
      <motion.h2
        className={`${playfair.className} font-playfair text-4xl md:text-5xl text-center md:text-left text-black mt-2 leading-tight`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
      >
        Our Services
      </motion.h2>
      <div className="flex justify-center items-center min-h-screen p-0 mt-10">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full  max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Вкладки (Tabs) */}
          <Tabs defaultValue="permanent">
            <div className="relative  bg-red-100 rounded-t-2xl flex p-0">
              {/* Добавлен sticky для фиксирования вкладок при скролле */}
              <TabsList className="relative w-full flex bg-white p-1 top-0 shadow-md rounded-t-2xl">
  <motion.div
    layout
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="absolute top-0 left-0 w-full h-full bg-[#FBEDED] rounded-t-2xl"
  />
  
  <TabsTrigger
    value="permanent"
    className="text-xl md:text-2xl relative z-10 flex-1 rounded-t-xl py-4 font-semibold  transition-all duration-300
      data-[state=active]:bg-[#F3DDDA] data-[state=active]:shadow-lg 
      data-[state=active]:translate-y-[-4px] data-[state=active]:text-black
      data-[state=inactive]:bg-[#FBEDED] data-[state=inactive]:text-gray-600"
  >
    Permanent
  </TabsTrigger>
  
  <TabsTrigger
    value="lashes"
    className="text-xl md:text-2xl relative z-10 flex-1 rounded-t-xl py-4 font-semibold transition-all duration-300
      data-[state=active]:bg-white data-[state=active]:shadow-lg 
      data-[state=active]:translate-y-[-4px] data-[state=active]:text-black
      data-[state=inactive]:bg-[#FBEDED] data-[state=inactive]:text-gray-600"
  >
    Lashes
  </TabsTrigger>
</TabsList>

            </div>

            {/* Permanent Content */}
            <TabsContent value="permanent">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="p-6 space-y-6  bg-[#F3DDDA]"
              >
                <h2 className="text-3xl font-bold text-center">Brows</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {permanentBrows.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                    >
                      <Card className="bg-red-50 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden flex flex-col">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-60 object-cover rounded-t-2xl"
                        />
                        <CardHeader>
                          <CardTitle className="text-red-500 text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-base leading-relaxed">{item.description}</p>
                          <p className="font-semibold text-lg mt-2">{item.duration} • {item.price}</p>
                          <Button
                            onClick={() => openModal(item.title)}
                            className="
    bg-[#F4E352] text-black rounded-full w-full h-10 text-lg font-semibold mt-4
    transition-transform transition-colors duration-300 ease-in-out
    hover:bg-[#e5d849] hover:scale-105 active:scale-95
  "
                          >
                            Order Service
                          </Button>

                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-center">Lips</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {permanentLips.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                    >
                      <Card className="bg-red-50 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden flex flex-col">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-60 object-cover rounded-t-2xl"
                        />
                        <CardHeader>
                          <CardTitle className="text-red-500 text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-base leading-relaxed">{item.description}</p>
                          <p className="font-semibold text-lg mt-2">{item.duration} • {item.price}</p>
                          <Button
                            onClick={() => openModal(item.title)}
                            className="
    bg-[#F4E352] text-black rounded-full w-full h-10 text-lg font-semibold mt-4
    transition-transform transition-colors duration-300 ease-in-out
    hover:bg-[#e5d849] hover:scale-105 active:scale-95
  "
                          >
                            Order Service
                          </Button>

                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Lashes Content */}
            <TabsContent value="lashes">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="p-6 space-y-6"
              >
                <h2 className="text-3xl font-bold text-center">Lash Extensions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {lashesData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                    >
                      <Card className="bg-red-50 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden flex flex-col">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-60 object-cover rounded-t-2xl"
                        />
                        <CardHeader>
                          <CardTitle className="text-red-500 text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-base leading-relaxed">{item.description}</p>
                          <p className="font-semibold text-lg mt-2">{item.duration} • {item.price}</p>
                          <Button
                            onClick={() => openModal(item.title)}
                            className="
    bg-[#F4E352] text-black rounded-full w-full h-10 text-lg font-semibold mt-4
    transition-transform transition-colors duration-300 ease-in-out
    hover:bg-[#e5d849] hover:scale-105 active:scale-95
  "
                          >
                            Order Service
                          </Button>

                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceType={selectedService || ""} />}
    </motion.div>
  );
}

