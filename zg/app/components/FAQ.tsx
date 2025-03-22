"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

// Подключение шрифта
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const faqData = [
  {
    question: "Who is not eligible for permanent makeup procedures?",
    answer: `
      If you have any of the following conditions, you are not eligible for permanent makeup procedures:
      - Pregnant or nursing
      - Under 18 years old
      - History of keloids or hypertrophic scarring
      - Diabetic (requires doctor’s clearance)
      - Undergoing chemotherapy (consult your doctor)
      - Taking blood thinners
      - Viral infections or diseases
      - Epilepsy
      - Pacemaker or major heart problems
      - Organ transplant
      - Rosacea
      - Hemophilia
      - Allergies to Lidocaine/Benzocaine
      - Skin irritations or psoriasis near the treated area (rashes, sunburn, acne, etc.)
      - Currently ill (cold, flu, etc.)
      - Accutane use within the past year
      - Heart conditions, uncontrolled high blood pressure, or poor general health
      - Any treatment, medication, or illness that compromises the immune system
    `,
  },
  {
    question: "What are the pre-procedure guidelines for permanent makeup?",
    answer: `
      - No antibiotics 2 months prior.
      - No retinol products 1 month prior in the eye area.
      - No Botox injections 1 month prior.
      - No blood thinners 1 day prior.
      - No working out on the day of the procedure.
      - No alcohol, caffeine, or stimulants 24 hours prior (including decaf coffee).
      - Avoid sun and tanning one week prior.
      - Do not take Aspirin, Niacin, Vitamin E, or Advil/Ibuprofen 24 hours before.
      - Avoid Fish Oil, Primrose Oil, and Prenatal Vitamins for 48 hours.
      - You may not be pregnant or breastfeeding.
    `,
  },
  {
    question: "What is a Lash-Line Enhancement?",
    answer: `
      Our lash-line enhancement procedure is designed to subtly define and accentuate your eyes by adding precise pigment along the lash line.
      - Creates the illusion of thicker, fuller lashes.
      - Ideal for those seeking a natural enhancement without daily eyeliner application.
      - Lasts 2-3 years with proper care.
      - Procedure duration: Approximately 1 hour 40 minutes.
    `,
  },
  {
    question: "What are the contraindications for Lash-Line Enhancement?",
    answer: `
      You are not eligible for this procedure if you have:
      - History of keloids or hypertrophic scarring
      - Diabetes (without doctor’s clearance)
      - Viral infections or diseases
      - Epilepsy
      - Pacemaker or major heart problems
      - Rosacea or severe skin conditions near the eyes
      - Accutane use within the past year
      - Any illness compromising the immune system
    `,
  },
  {
    question: "How to prepare for a Lash-Line Enhancement procedure?",
    answer: `
      - Avoid tanning for one week prior.
      - Avoid alcohol 24 hours before the procedure.
      - No lash extensions at the time of the procedure and for 14 days after.
      - Avoid blood thinners 24 hours before.
      - No retinol products in the eye area for 1 month prior.
      - No Botox injections in the eye area for 1 month prior.
      - Avoid antibiotics for 2 months before the procedure.
      - Remove contact lenses before the procedure.
    `,
  },
  {
    question: "What are Powder Brows?",
    answer: `
      Powder Brows is a permanent makeup technique that gives a soft, filled-in look with a gradient effect.
      - Best suited for oily skin types.
      - Provides a natural and long-lasting result.
      - Procedure duration: Approximately 3 hours.
    `,
  },
  {
    question: "What are the contraindications for Powder Brows?",
    answer: `
      You cannot get this procedure if you:
      - Are pregnant or nursing
      - Have uncontrolled diabetes
      - Have viral infections or are currently sick
      - Have a pacemaker or major heart condition
      - Have severe skin conditions near the brow area
      - Used Accutane in the past year
    `,
  },
];

export default function FAQ() {
  return (
    <motion.div 
      id="faq"
      className="container mx-auto px-4 md:px-8 max-w-4xl mt-30 mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 
        className={`${playfair.className} font-playfair text-4xl md:text-5xl text-center text-black mb-10`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-300">
            <AccordionTrigger className="cursor-pointer text-[#8E4945] text-lg font-semibold text-left py-3">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-sm leading-relaxed px-4 pb-3">
              {item.answer.split("\n").map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}
