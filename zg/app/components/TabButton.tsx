import React from "react";

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`pb-2 transition ${
      isActive ? "font-lora text-black font-semibold" : "text-gray-400"
    }`}
  >
    {label}
  </button>
);

export default TabButton;
