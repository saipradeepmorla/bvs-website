import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 

const FloatingIcon = () => {
  return (
    <a
      href="https://wa.me/+918523899330?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default FloatingIcon;
