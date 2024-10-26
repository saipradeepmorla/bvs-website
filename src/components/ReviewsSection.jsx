import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReviewCard from "./ReviewCard";

const ReviewsSection = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Emily Johnson",
      title: "Small Business Owner",
      stars: 5,
      comment:
        "BVS transformed our online presence! Our sales have increased by 30% since implementing their digital marketing strategies.",
      image: "",
    },
    {
      name: "Michael Chen",
      title: "E-commerce Entrepreneur",
      stars: 4,
      comment:
        "Great SEO work! We're now ranking on the first page for our main keywords. Very pleased with the results.",
      image: "",
    },
    {
      name: "Sarah Thompson",
      title: "Marketing Manager",
      stars: 5,
      comment:
        "The social media campaign BVS created for us was a game-changer. Our engagement rates have never been higher!",
      image: "",
    },
    {
      name: "David Rodriguez",
      title: "Tech Startup Founder",
      stars: 4,
      comment:
        "Solid PPC management. They optimized our ad spend and increased our conversion rates significantly.",
      image: "",
    },
    {
      name: "Lisa Patel",
      title: "Retail Store Manager",
      stars: 5,
      comment:
        "BVS helped us seamlessly integrate our online and offline marketing efforts. Our customer base has grown tremendously.",
      image: "",
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section className="py-8 sm:py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-green-800">{title}</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <ReviewCard review={reviews[currentIndex]} />
          </div>
          
          <div className="flex justify-center mt-4 sm:mt-6">
            <button
              onClick={prevReview}
              className="mx-2 bg-white rounded-full shadow-md p-2 text-green-600 hover:bg-green-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Previous review"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="mx-2 bg-white rounded-full shadow-md p-2 text-green-600 hover:bg-green-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Next review"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
