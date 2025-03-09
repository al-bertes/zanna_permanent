"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./button";
import { motion } from "framer-motion";

export default function CustomTabs() {
  // Данные для Permanent Brows
const permanentBrows = [
  {
    title: "Ombre Powder Brows",
    description: "Soft, filled-in look with a gradient effect. Best for oily skin types.",
    duration: "3 hours",
    price: "400",
    image: "/img/brows-1.jpg"
  },
  {
    title: "5-6 Weeks Touch-Up",
    description: "Touch-up for maintaining eyebrow shape and color.",
    duration: "1 hour",
    price: "100",
    image: "/img/brows-2.jpg"
  },
  {
    title: "2-6 Weeks Touch-Up",
    description: "Touch-up for maintaining eyebrow shape and color.",
    duration: "2 hour",
    price: "400",
    image: "/img/brows-2.jpg"
  },
];

const permanentLips = [
  {
    title: "Lip blush",
    description: "This procedure adds color to dull lips, gives a clear shape according to your desire, corrects defects in shape from scarsr @ 200$",
    duration: "3 hours 20 minutes",
    price: "450",
    image: "/img/lips-1.jpg"
  },
  {
    title: "6-8 Weeks lips touch-up",
    description: "Touch-up for maintaining eyebrow shape and color.",
    duration: "2 hours 30 minutes",
    price: "200",
    image: "/img/lips-3.jpg"
  }
];

// Данные для Lashes
const lashesData = [
  {
    title: "Classic Volume",
    description: "Enhance your natural lashes with a classic, soft look.",
    duration: "1 hour 30 minutes",
    price: "145",
    image: "/img/lashes-classic.jpg",
  },
  {
    title: "Hybrid Volume",
    description: "A mix of classic and volume for a fuller lash line.",
    duration: "1 hour 30 minutes",
    price: "170",
    image: "/img/lashes-hybrid.jpg"
  },
  {
    title: "Mega Volume",
    description: "Dramatic, full lash effect for maximum impact.",
    duration: "2 hours",
    price: "200",
    image: "/img/lashes-volume.jpg"
  },
  {
    title: "Mascara",
    description: "Dramatic, full lash effect for maximum impact.",
    duration: "2 hours",
    price: "200",
    image: "/img/lashes-mascara.jpg"
  },
  {
    title: "Kylie / Rays",
    description: "Dramatic, full lash effect for maximum impact.",
    duration: "2 hours",
    price: "200",
    image: "/img/lashes-kylie.jpg"
  },
  {
    title: "Fill in 4 weeks",
    description: "For lashes that were done no more than 28 days ago.",
    duration: "1 hour 20 minutes",
    price: "120",
    image: "/img/lashes-4weeks.jpg"
  },
  {
    title: "Removal extension",
    description: "Any lash extensions done by me, except Mega volume.For lashes that were done no more than 14 days ago.",
    duration: "15 minutes",
    price: "30",
    image: "/img/lashes-removal.jpg"
  },
  {
    title: "Fill in 3 weeks Foreign lashes",
    description: "Notice for foreign lashes :Correction of another artist's lash extensions is possible if you have more than 50% of your lashes left. Additionally, this does not apply to mega volume sets. Please note that there is no guarantee for corrections. I will do my best, but for the best and long-lasting result, I recommend a full new set.",
    duration: "1 hour 20 minutes",
    price: "130",
    image: "/img/lashes-3weeks-foreign.jpg"
  },
];

  return (
    <motion.div className=" container mx-auto px-0 md:px-6 max-w-6xl">
    <motion.h2 
          className="font-playfair text-4xl md:text-5xl text-center md:text-left text-black mt-2 leading-tight"
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
        className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* Вкладки (Tabs) */}
        <Tabs defaultValue="permanent">
          <div className="relative bg-red-100 rounded-t-2xl flex p-0">
            <TabsList className="relative w-full flex bg-transparent p-0">
              <motion.div
                layout
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute top-0 left-0 w-full h-full bg-[#FBEDED] rounded-t-2xl"
              />
              <TabsTrigger
                value="permanent"
                className="text-lg relative z-10 w-1/2 bg-white rounded-t-xl p-3 
               data-[state=active]:bg-white data-[state=active]:shadow-none 
               data-[state=active]:translate-y-[-2px]
               data-[state=inactive]:bg-[#FBEDED] data-[state=inactive]:shadow-inner"
              >
                Permanent
              </TabsTrigger>
              <TabsTrigger
                value="lashes"
                className="text-lg relative z-10 w-1/2 rounded-t-xl p-3 
               data-[state=active]:bg-white data-[state=active]:shadow-none 
               data-[state=active]:translate-y-[-2px]
               data-[state=inactive]:bg-[#FBEDED] data-[state=inactive]:shadow-inner"
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
              className="p-6 space-y-6"
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
                    <Card className="bg-red-50 shadow-lg rounded-2xl overflow-hidden flex flex-col">
                      <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
                      <CardHeader>
                        <CardTitle className="text-red-500">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{item.description}</p>
                        <p className="font-bold mt-2">{item.duration} - ${item.price}</p>
                        <Button className="bg-[#F4E352] text-black rounded-full w-full h-10 text-[18px] mt-4">
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
                    <Card className="bg-red-50 shadow-lg rounded-2xl overflow-hidden flex flex-col">
                      <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
                      <CardHeader>
                        <CardTitle className="text-red-500">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{item.description}</p>
                        <p className="font-bold mt-2">{item.duration} - ${item.price}</p>
                        <Button className="bg-[#F4E352] text-black rounded-full w-full h-10 text-[18px] mt-4">
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
                    <Card className="shadow-lg rounded-2xl overflow-hidden flex flex-col">
                      <img src={item.image} alt={item.title} className="w-full h-60 object-cover" />
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{item.description}</p>
                        <p className="font-bold mt-2">{item.duration} - ${item.price}</p>
                        <Button className="bg-[#F4E352] text-black rounded-full w-full h-10 text-[18px] mt-4">
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
    </motion.div>
  );
}

