"use client";

import { useState } from "react";

interface ContactFormProps {
  serviceType?: string;
  onSuccess: () => void;
}

export default function ContactForm({ serviceType = "", onSuccess }: ContactFormProps) {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    service: serviceType,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/tomail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Error submitting form:", result.error);
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      console.log("Success:", result.message);
      onSuccess(); 
      
      setFormData(initialFormData); // Очистка полей после успешной отправки
      setIsSubmitting(false);

    } catch (error) {
      console.error("Error sending request:", error);
      alert("Failed to send message. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6 p-6 bg-[#F3DDDA] rounded-2xl shadow-lg max-w-lg mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold text-center text-gray-900">Get in Touch</h2>
      <p className="text-gray-500 text-center text-sm">
        Fill in your details and we’ll get back to you shortly.
      </p>

      {["name", "email", "phone", "service"].map((field) => (
        <div key={field} className="relative">
          <input
            type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
            name={field}
            value={formData[field as keyof typeof formData]}
            onChange={handleChange}
            required
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black transition"
          />
        </div>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 text-black bg-[#F4E352] rounded-full shadow-md text-lg font-semibold transition-transform transform ${
          isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
        } focus:ring-2 focus:ring-black focus:ring-opacity-50`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
