import React, { useState } from "react";
import PopupForm from "./PopupForm";
import { FaWhatsapp, FaInstagram, FaYoutube, FaGlobe, FaFacebook} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const icons = [
  {
    icon: FaWhatsapp,
    size: 24,
    color: "#25D366",
    name: "Whatsapp",
   imageUrl: "/images/digital-marketing-2.png"
  },
  {
    icon: FaInstagram,
    size: 24,
    color: "#FF69B4",
    name: "Instagram",
  imageUrl: "/images/digital-marketing-2.png"
  },
  {
    icon: FaYoutube,
    size: 24,
    color: "#FF0000",
    name: "YouTube",
   imageUrl: "/images/digital-marketing-3.png"
  },
  {
    icon: FaFacebook,
    size: 24,
    color: "#4267B2",
    name: "Facebook",
  imageUrl: "/images/digital-marketing-2.png"
  },
  {
    icon: FcGoogle,
    size: 24,
    color: "",
    name: "Google",
  imageUrl: "/images/digital-marketing-3.png"
  },
  {
    icon: FaGlobe,
    size: 24,
    color: "#3498db",
    name: "Website",
   imageUrl: "/images/digital-marketing-1.png"
  },
];

const DigitalMarketingHero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(null);
  
    const handleClick = (icon) => {
      setSelectedIcon(icon);
      setIsOpen(true);
    };
  
    const handleFormClose = () => {
      setIsOpen(false);
      setSelectedIcon(null);
    };
  
    return (
      <section className="w-4/5 h-auto mx-auto py-10 relative">
        <div className="w-full h-auto flex justify-center items-center">
          <div className="w-full h-auto space-y-6 md:space-y-8">
            <h1 className="text-2xl md:text-4xl text-center font-bold text-gray-800">
              Digital Marketing
            </h1>
            <p>
                Our digital marketing services are designed to help you grow your business and reach your target audience.
            </p>
  
            <div>
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3"
                >
                  <div className="flex items-center space-x-3">
                    <icon.icon color={icon.color} className="w-10 h-10" />
                    <p className="text-lg">{icon.name}</p>
                  </div>
                  <button
                    onClick={() => handleClick(icon)}
                    className="hover:bg-black rounded-xl px-3 py-2 hover:text-white transition ease-in duration-150 outline"
                  >
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isOpen && selectedIcon && (
          <PopupForm
            isOpen={isOpen}
            onClose={handleFormClose}
            selectedIcon={selectedIcon}
          />
        )}
      </section>
    );
  };
  
  export default DigitalMarketingHero;