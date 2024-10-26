import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaPhone } from "react-icons/fa";
import ConsultationPopupForm from "./ConsulationPopupForm";

const carouselContent = [
  {
    image: "./images/hero1.png", // Replace with actual image URLs
    heading: "BUSINESS VICTORY SOLUTIONS",
    content:
      "Is one way stop for all your business needs. We are here to help your business grow. ",
  },
  {
    image: "./images/hero2.png",
    heading: "Build your dream App with us",
    content:
      "Transform your ideas into reality by building the app of your dreams",
  },
  {
    image: "./images/hero3.png",
    heading: "Learn Full Stack With 100% placement ",
    content:
      "Learn full stack development and gain the power to build anything from the ground up",
  },
  // Add more slides as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const handleForm = () => {
    setIsOpen(!isOpen);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselContent.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative w-full">
        {/* Carousel Wrapper */}
        <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          {carouselContent.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

              {/* Text content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 md:px-12 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {item.heading}
                </h2>
                <p className="mb-8 text-lg md:text-xl max-w-2xl drop-shadow-md text-center">
                  {item.content}
                </p>
                {/* Updated Buttons */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <a
                    href="tel:+917993558948 "
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-3xl hover:bg-blue-700 transition duration-300 flex items-center justify-center shadow-md"
                  >
                    Contact Us <FaPhone className="ml-2" />
                  </a>
                  <button onClick={handleForm} className="px-6 py-3 bg-green-600 text-white font-semibold rounded-3xl hover:bg-green-700 transition duration-300 flex items-center justify-center shadow-md">
                    Book a free consulting call <FaPhone className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-1/2 left-4 z-30 p-2 md:p-3 text-white bg-black bg-opacity-50 opacity-50 hover:opacity-100 rounded-full hover:bg-opacity-75 focus:outline-none transform -translate-y-1/2 transition duration-300"
          onClick={handlePrev}
        >
          <FaArrowLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-4 z-30 p-2 md:p-3 text-white bg-black bg-opacity-50 opacity-50 hover:opacity-100 rounded-full hover:bg-opacity-75 focus:outline-none transform -translate-y-1/2 transition duration-300"
          onClick={handleNext}
        >
          <FaArrowRight className="w-5 h-5" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselContent.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </section>
      {isOpen && <ConsultationPopupForm isOpen={isOpen} onClose={handleForm} />}
    </>
  );
};

export default Carousel;
